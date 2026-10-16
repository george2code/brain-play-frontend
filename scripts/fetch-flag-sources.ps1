$ErrorActionPreference = 'Stop'
$countries = Get-Content 'node_modules/world-countries/countries.json' -Raw | ConvertFrom-Json
$codes = @($countries | Where-Object { $_.unMember -eq $true -or $_.cca2 -eq 'PS' } | ForEach-Object { $_.cca2 })
if ($codes.Count -ne 195) { throw "Expected 195 countries, got $($codes.Count)" }
New-Item -ItemType Directory -Path '.flag-source-data' -Force | Out-Null
$results = $codes | ForEach-Object -Parallel {
  $code = $_
  try {
    Invoke-WebRequest -Uri "https://raw.githubusercontent.com/niemela/flags/master/data/$code.json" -OutFile ".flag-source-data/$code.json" -UseBasicParsing -TimeoutSec 30
    $code
  } catch {
    "FAILED:$code"
  }
} -ThrottleLimit 12
$results | Group-Object { if ($_ -like 'FAILED:*') { 'failed' } else { 'ok' } } | ForEach-Object { "$($_.Name): $($_.Count)" }
$results | Where-Object { $_ -like 'FAILED:*' }
