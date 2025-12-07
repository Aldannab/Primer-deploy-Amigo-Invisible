#!/bin/bash

cd public

echo "🚀 Servidor local: http://localhost:8000"
echo "   Presiona Ctrl+C para detener"
echo ""

if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer 8000
elif command -v php &> /dev/null; then
    php -S localhost:8000
else
    echo "❌ Necesitas Python o PHP instalado"
    exit 1
fi

