@echo off
setlocal

:: Change only these three lines per lecture
set "source=syllabus-cis4930-cis5930.pdf"
set "outname=syllabus-cis4930-cis5930.pdf"
set "primary_dir=C:\Users\xl24j\Documents\GitHub\FSU-CIS4930-CIS5930-Future-Edge-Networks"

:: Fallback directory (auto-created if missing)
set "alt_dir=C:\Users\xl24j\Documents\GitHub\FSU-CIS4930-CIS5930-Future-Edge-Networks"

:: Build full targets
set "primary=%primary_dir%\%outname%"
set "fallback=%alt_dir%\%outname%"

if exist "%primary_dir%" (
  copy /y "%source%" "%primary%" >nul
  if errorlevel 1 (echo Copy to primary failed) else (echo Copied to: %primary%)
) else (
  if not exist "%alt_dir%" (
    mkdir "%alt_dir%" || (echo Failed to create fallback dir & exit /b 1)
  )
  copy /y "%source%" "%fallback%" >nul
  if errorlevel 1 (echo Copy to fallback failed) else (echo Copied to: %fallback%)
)

endlocal
