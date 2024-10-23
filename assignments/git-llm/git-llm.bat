@echo off
setlocal enabledelayedexpansion

set XML_PATH=prompts.xml

for /f "tokens=2 delims=<>" %%a in ('findstr /i "<message>" %XML_PATH%') do (
    set /a rand=!random! %% 3 + 1
    set message=%%a
)

git commit -m "!test message!"