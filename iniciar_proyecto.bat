@echo off
echo =========================================
echo   Iniciando Asamblea de Consejeros...
echo =========================================
cd /d "%~dp0"
echo Levantando el servidor de desarrollo y abriendo el navegador...
call npm run dev -- --open
pause
