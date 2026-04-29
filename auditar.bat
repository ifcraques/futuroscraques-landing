@echo off
title Auditoria - Instituto Futuros Craques
color 0B

echo.
echo  ============================================
echo   INSTITUTO FUTUROS CRAQUES - Auditoria
echo  ============================================
echo.
echo  Verificando vulnerabilidades nas dependencias...
echo.

cd /d "%~dp0"
call npm run audit

set EXIT=%errorlevel%

echo.
if %EXIT% neq 0 (
    color 0E
    echo.
    echo  ============================================
    echo   ATENCAO: vulnerabilidades encontradas.
    echo  ============================================
    echo.
    echo  Veja o detalhe acima e em audit-report.txt.
    echo.
    echo  Para corrigir automaticamente, rode:
    echo      auditar-corrigir.bat
    echo.
) else (
    color 0A
    echo.
    echo  ============================================
    echo   TUDO LIMPO. Nenhuma vulnerabilidade.
    echo  ============================================
    echo.
)

pause
exit /b %EXIT%
