@echo off
title Build - Instituto Futuros Craques
color 0A

echo.
echo  ============================================
echo   INSTITUTO FUTUROS CRAQUES - Build do Site
echo  ============================================
echo.
echo  Gerando os arquivos para publicacao...
echo.

cd /d "%~dp0"
call npm run build

if %errorlevel% neq 0 (
    color 0C
    echo.
    echo  ERRO no build! Algo deu errado.
    echo  Tire um print desta tela e mande para o suporte.
    echo.
    pause
    exit /b 1
)

echo.
echo  ============================================
echo   BUILD CONCLUIDO COM SUCESSO!
echo  ============================================
echo.
echo  A pasta DIST esta pronta para subir no Netlify.
echo  Abrindo a pasta agora...
echo.

explorer "%~dp0dist"

pause
