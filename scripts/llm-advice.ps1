param(
  [ValidateSet('open','comment','decide','close')]
  [string]$Mode = 'open',
  [string]$ThreadId = '',
  [string]$Agent = 'orchestrator',
  [string]$Comment = ''
)

if (-not $ThreadId) {
  $ThreadId = "thread-" + (Get-Date -Format "yyyyMMddHHmmss")
}

$base = "workflow/llmadvice/threads/$ThreadId"
if (-not (Test-Path $base)) { New-Item -ItemType Directory -Force -Path $base | Out-Null }

$messagePath = Join-Path $base "message.json"
$commentsPath = Join-Path $base "comments.json"
$summaryPath = Join-Path $base "summary.md"

function Write-Json($path, $obj) {
  $obj | ConvertTo-Json -Depth 10 | Set-Content -Path $path -Encoding UTF8
}

switch ($Mode) {
  'open' {
    $msg = @{
      id = $ThreadId
      topic = 'general'
      status = 'OPEN'
      author_agent = $Agent
      severity = 'medium'
      content = $Comment
      created_at = (Get-Date).ToString('o')
      updated_at = (Get-Date).ToString('o')
    }
    Write-Json $messagePath $msg
    if (-not (Test-Path $commentsPath)) { Write-Json $commentsPath @() }
    if (-not (Test-Path $summaryPath)) { "# $ThreadId`n`nstatus: OPEN" | Set-Content $summaryPath }
  }
  'comment' {
    if (-not (Test-Path $commentsPath)) { Write-Json $commentsPath @() }
    $arr = Get-Content $commentsPath -Raw | ConvertFrom-Json
    if ($null -eq $arr) { $arr = @() }
    $arr = @($arr) + @(@{
      comment_id = "c-" + (Get-Date -Format "yyyyMMddHHmmss")
      agent = $Agent
      comment = $Comment
      decision = 'needs_data'
      timestamp = (Get-Date).ToString('o')
    })
    Write-Json $commentsPath $arr
  }
  'decide' {
    if (Test-Path $messagePath) {
      $msg = Get-Content $messagePath -Raw | ConvertFrom-Json
      $msg.status = 'DECIDED'
      $msg.updated_at = (Get-Date).ToString('o')
      Write-Json $messagePath $msg
    }
  }
  'close' {
    if (Test-Path $messagePath) {
      $msg = Get-Content $messagePath -Raw | ConvertFrom-Json
      $msg.status = 'CLOSED'
      $msg.updated_at = (Get-Date).ToString('o')
      Write-Json $messagePath $msg
    }
  }
}

Write-Host "llm-advice mode '$Mode' completed for $ThreadId"
