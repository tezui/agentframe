param(
  [ValidateSet('acquire','release','status')]
  [string]$Mode = 'status',
  [string]$Agent = 'orchestrator',
  [string]$Role = 'orchestrator',
  [string]$TaskId = '',
  [string]$ThreadId = ''
)

$lockPath = "workflow/llmadvice/LOCK.md"

function Get-LockObject {
  if (-not (Test-Path $lockPath)) {
    return [ordered]@{
      state = 'UNLOCKED'
      writer_agent = ''
      role = ''
      task_id = ''
      thread_id = ''
      acquired_at = ''
      released_at = ''
    }
  }

  $raw = Get-Content $lockPath
  $obj = [ordered]@{}
  foreach ($line in $raw) {
    if ($line -match '^-\s+([^:]+):\s*(.*)$') {
      $obj[$matches[1].Trim()] = $matches[2].Trim()
    }
  }
  return $obj
}

function Write-LockObject($obj) {
  @(
    '# WRITER LOCK',
    '',
    '## Status',
    "- state: $($obj.state)",
    "- writer_agent: $($obj.writer_agent)",
    "- role: $($obj.role)",
    "- task_id: $($obj.task_id)",
    "- thread_id: $($obj.thread_id)",
    "- acquired_at: $($obj.acquired_at)",
    "- released_at: $($obj.released_at)",
    '',
    '## Rules',
    '- `state=LOCKED` iken yalnızca `writer_agent` yazabilir.',
    '- Lock sahibi değişecekse önce `released_at` doldurulur, sonra yeni lock alınır.'
  ) | Set-Content $lockPath -Encoding UTF8
}

$lock = Get-LockObject

switch ($Mode) {
  'status' {
    $lock | ConvertTo-Json -Depth 5
  }
  'acquire' {
    if ($lock.state -eq 'LOCKED' -and $lock.writer_agent -ne $Agent) {
      Write-Error "Lock already held by $($lock.writer_agent)"
      exit 1
    }
    $lock.state = 'LOCKED'
    $lock.writer_agent = $Agent
    $lock.role = $Role
    $lock.task_id = $TaskId
    $lock.thread_id = $ThreadId
    $lock.acquired_at = (Get-Date).ToString('o')
    $lock.released_at = ''
    Write-LockObject $lock
    Write-Host "Lock acquired by $Agent"
  }
  'release' {
    if ($lock.writer_agent -and $lock.writer_agent -ne $Agent) {
      Write-Error "Lock belongs to $($lock.writer_agent), not $Agent"
      exit 1
    }
    $lock.state = 'UNLOCKED'
    $lock.released_at = (Get-Date).ToString('o')
    Write-LockObject $lock
    Write-Host "Lock released by $Agent"
  }
}
