<?php
  /**
   * Secure Contact Form Handler
   * Implements CSRF protection, input validation, and sanitization
   */

  // Set response headers
  header('Content-Type: application/json');
  http_response_code(400);

  // Security: Prevent direct access
  if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['response' => 'error', 'message' => 'Invalid request method']);
    exit;
  }

  // Session security
  if (session_status() === PHP_SESSION_NONE) {
    session_start();
  }

  // CSRF Token Validation
  if (!isset($_POST['csrf_token']) || !hash_equals($_SESSION['csrf_token'] ?? '', $_POST['csrf_token'])) {
    http_response_code(403);
    echo json_encode(['response' => 'error', 'message' => 'CSRF token validation failed']);
    exit;
  }

  // Configuration
  $receiving_email_address = 'mboundagnangat8@gmail.com';
  $max_message_length = 5000;
  $max_name_length = 100;
  $max_subject_length = 200;

  // Input validation and sanitization
  $name = isset($_POST['name']) ? trim($_POST['name']) : '';
  $email = isset($_POST['email']) ? trim($_POST['email']) : '';
  $subject = isset($_POST['subject']) ? trim($_POST['subject']) : '';
  $message = isset($_POST['message']) ? trim($_POST['message']) : '';

  // Validation rules
  $errors = [];

  if (empty($name) || strlen($name) > $max_name_length) {
    $errors[] = 'Name is required and must be less than ' . $max_name_length . ' characters';
  }

  if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Valid email address is required';
  }

  if (empty($subject) || strlen($subject) > $max_subject_length) {
    $errors[] = 'Subject is required and must be less than ' . $max_subject_length . ' characters';
  }

  if (empty($message) || strlen($message) < 10 || strlen($message) > $max_message_length) {
    $errors[] = 'Message is required and must be between 10 and ' . $max_message_length . ' characters';
  }

  // Check for spam patterns
  if (preg_match('/http[s]?:\/\/|www\.|<script|<iframe/i', $message)) {
    $errors[] = 'Message contains invalid content';
  }

  if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['response' => 'error', 'message' => implode('; ', $errors)]);
    exit;
  }

  // Load PHP Email Form library
  if (file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php')) {
    include($php_email_form);
  } else {
    http_response_code(500);
    echo json_encode(['response' => 'error', 'message' => 'Server configuration error']);
    exit;
  }

  try {
    $contact = new PHP_Email_Form();
    $contact->ajax = true;

    $contact->to = $receiving_email_address;
    $contact->from_name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    $contact->from_email = filter_var($email, FILTER_SANITIZE_EMAIL);
    $contact->subject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');

    // SMTP configuration (uncomment if needed)
    /*
    $contact->smtp = array(
      'host' => 'example.com',
      'username' => 'example',
      'password' => 'pass',
      'port' => '587'
    );
    */

    $contact->add_message(htmlspecialchars($name, ENT_QUOTES, 'UTF-8'), 'From');
    $contact->add_message(filter_var($email, FILTER_SANITIZE_EMAIL), 'Email');
    $contact->add_message(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'), 'Message', 10);

    // Send email and return response
    $response = $contact->send();
    if ($response === true) {
      http_response_code(200);
      echo json_encode(['response' => 'ok', 'message' => 'Message sent successfully']);
    } else {
      http_response_code(500);
      echo json_encode(['response' => 'error', 'message' => 'Failed to send message']);
    }
  } catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['response' => 'error', 'message' => 'An error occurred']);
  }
?>
