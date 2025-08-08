#!/bin/bash

# Abort if .amplify/tags.json does not exist
if [ ! -f .amplify/tags.json ]; then
  echo "Error: .amplify/tags.json not found. Aborting deploy."
  exit 1
fi
