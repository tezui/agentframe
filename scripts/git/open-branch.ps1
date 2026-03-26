param(
  [string]$Type = "experiment",
  [string]$Name = "quick-test"
)

$allowed = @("backup","experiment","archive","hotfix","forksync")
if ($allowed -notcontains $Type) {
  Write-Error "Invalid branch type: $Type"
  exit 1
}

$date = Get-Date -Format "yyyyMMdd"
$branch = "$Type/$date-$Name"
git checkout -b $branch
Write-Host "Created branch: $branch"
