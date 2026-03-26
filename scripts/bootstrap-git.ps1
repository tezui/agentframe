if (-not (Test-Path .git)) {
  git init
  Write-Host "Initialized git repository"
} else {
  Write-Host "Git repository already exists"
}

Write-Host "Next: add remote + branch protections in GitHub"
