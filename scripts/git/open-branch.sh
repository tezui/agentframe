#!/usr/bin/env bash
set -e

TYPE=${1:-experiment}
NAME=${2:-quick-test}
DATE=$(date +%Y%m%d)

case "$TYPE" in
  backup|experiment|archive|hotfix|forksync) ;;
  *) echo "Invalid branch type: $TYPE"; exit 1 ;;
esac

BRANCH="$TYPE/$DATE-$NAME"
git checkout -b "$BRANCH"
echo "Created branch: $BRANCH"
