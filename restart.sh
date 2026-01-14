#!/bin/bash

# Interrompi lo script se un comando fallisce
set -e

echo "🚀 Inizio procedura di restart..."

# 1. Build del progetto
echo "📦 Eseguo la build..."
npm run build > /dev/null 2>&1

# 2. Gestione PM2
echo "🔄 Riavvio PM2..."
# Prova a riavviare, se il processo non esiste lo avvia
(pm2 restart fiscalflow || pm2 start ecosystem.config.js) > /dev/null 2>&1
pm2 save > /dev/null 2>&1

# 3. Riavvio Nginx
echo "🌐 Riavvio Nginx..."
sudo systemctl restart nginx > /dev/null 2>&1

echo "✅ Restart completato con successo!"
