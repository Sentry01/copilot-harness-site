#!/usr/bin/env bash
set -euo pipefail

# Copilot Harness Site - init script
# Prereqs: Node.js >=18, npm, gh CLI

echo "[1/3] Checking prerequisites..."
command -v node >/dev/null || { echo "Node.js not found. Please install Node.js >=18"; exit 1; }
command -v npm >/dev/null || { echo "npm not found. Please install npm"; exit 1; }
command -v gh >/dev/null || { echo "GitHub CLI (gh) not found. Please install gh"; exit 1; }

echo "[2/3] Installing dependencies (Vite + React)..."
if [ ! -d frontend ]; then
  mkdir -p frontend
fi
if [ ! -f frontend/package.json ]; then
  (cd frontend && npm create vite@latest . -- --template react && npm install)
else
  (cd frontend && npm install)
fi

# Tailwind via CDN (no build step needed)
INDEX_HTML="frontend/index.html"
if [ -f "$INDEX_HTML" ]; then
  if ! grep -q "tailwindcss@" "$INDEX_HTML"; then
    sed -i.bak '1s;^;<script src="https://cdn.tailwindcss.com"></script>\n;' "$INDEX_HTML"
    rm -f "$INDEX_HTML.bak"
  fi
fi

echo "[3/3] Starting dev server..."
(cd frontend && npm run dev)

echo "Dev server started. Access URL printed above (usually http://localhost:5173)."
