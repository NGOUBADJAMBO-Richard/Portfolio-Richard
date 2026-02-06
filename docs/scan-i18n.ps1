$root = "C:\Users\hp\Desktop\M.G.N Entreprises\M.G.N CodeWave\Réalisations\Portfolio-Richard"
$attrNames = @('title','aria-label','placeholder','alt','content','value')
$htmlFiles = Get-ChildItem -Path $root -Recurse -Filter *.html
$texts = New-Object System.Collections.Generic.List[string]
foreach ($file in $htmlFiles) {
  $content = Get-Content -Path $file.FullName -Raw
  $content = [regex]::Replace($content, '<script[\s\S]*?</script>', '', 'IgnoreCase')
  $content = [regex]::Replace($content, '<style[\s\S]*?</style>', '', 'IgnoreCase')
  foreach ($m in [regex]::Matches($content, '>([^<>]+)<')) {
    $value = $m.Groups[1].Value
    if ($value -match '[\p{L}]') { $texts.Add($value) }
  }
  foreach ($attr in $attrNames) {
    foreach ($m in [regex]::Matches($content, $attr + '\s*=\s*"([^"]+)"')) {
      $value = $m.Groups[1].Value
      if ($value -match '[\p{L}]') { $texts.Add($value) }
    }
  }
}
$normalize = { param($s) ($s -replace '\s+', ' ' ).Trim() }
$normalized = $texts | ForEach-Object $normalize | Where-Object { $_ -ne '' } | Sort-Object -Unique
$i18nPath = Join-Path $root 'js\i18n.js'
$i18nContent = Get-Content -Path $i18nPath -Raw
$keys = [regex]::Matches($i18nContent, '"([^"]+)"\s*:') | ForEach-Object { $_.Groups[1].Value } | Sort-Object -Unique
$missing = $normalized | Where-Object { $keys -notcontains $_ }
$missing | Set-Content -Path (Join-Path $root 'docs\i18n-missing.txt')
$missing.Count
