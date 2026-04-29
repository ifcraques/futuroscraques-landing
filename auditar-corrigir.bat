@echo off
title Corrigir Vulnerabilidades - Instituto Futuros Craques
color 0E

echo.
echo  ============================================
echo   CORRIGIR VULNERABILIDADES (npm audit fix)
echo  ============================================
echo.
echo  Este script vai:
echo    1. Salvar um checkpoint no git (caso precise reverter).
echo    2. Rodar "npm audit fix" para aplicar correcoes.
echo    3. Rodar a auditoria de novo para confirmar.
echo.
echo  Pressione qualquer tecla para continuar, ou feche
echo  esta janela para cancelar.
echo.
pause >nul

cd /d "%~dp0"

echo.
echo  --- Passo 1/3: checkpoint no git ---
echo.
call npm run checkpoint
echo.

echo.
echo  --- Passo 2/3: npm audit fix ---
echo.
call npm audit fix
if %errorlevel% neq 0 (
    color 0C
    echo.
    echo  ERRO ao aplicar correcoes.
    echo  Para reverter, rode: npm run revert
    echo.
    pause
    exit /b 1
)

echo.
echo  --- Passo 3/3: nova auditoria ---
echo.
call npm run audit

set EXIT=%errorlevel%

echo.
if %EXIT% neq 0 (
    color 0C
    echo  ============================================
    echo   AINDA HA VULNERABILIDADES.
    echo  ============================================
    echo.
    echo  Algumas correcoes precisam de "npm audit fix --force"
    echo  ou atualizacao manual. Veja audit-report.txt.
    echo  Tire um print desta tela e mande para o suporte.
) else (
    color 0A
    echo  ============================================
    echo   CORRECOES APLICADAS COM SUCESSO!
    echo  ============================================
    echo.
    echo  Recomendado agora:
    echo    - buildar.bat   (testar se o site ainda compila)
    echo    - git push      (subir as mudancas)
)

echo.
pause
exit /b %EXIT%
