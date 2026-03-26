#!/usr/bin/env bash
set -e

if [ ! -d ".git" ]; then
  git init
  echo "Initialized git repository"
else
  echo "Git repository already exists"
fi

echo "Next: add remote + branch protections in GitHub"
