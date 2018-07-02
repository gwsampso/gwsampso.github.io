@echo off
Setlocal enabledelayedexpansion

Set "Pattern=master"
Set "Replace=price"

For %%# in ("W:\omega\src\app\pages\prices\bond\*") Do (
    Set "File=%%~nx#"
    Ren "%%#" "!File:%Pattern%=%Replace%!"
)

@echo off
Setlocal enabledelayedexpansion

Set "Pattern=master"
Set "Replace=price"

For %%# in ("W:\omega\src\app\pages\prices\future\*") Do (
    Set "File=%%~nx#"
    Ren "%%#" "!File:%Pattern%=%Replace%!"
)

@echo off
Setlocal enabledelayedexpansion

Set "Pattern=master"
Set "Replace=price"

For %%# in ("W:\omega\src\app\pages\prices\equity\*") Do (
    Set "File=%%~nx#"
    Ren "%%#" "!File:%Pattern%=%Replace%!"
)


@echo off
Setlocal enabledelayedexpansion

Set "Pattern=master"
Set "Replace=price"

For %%# in ("W:\omega\src\app\pages\prices\money\*") Do (
    Set "File=%%~nx#"
    Ren "%%#" "!File:%Pattern%=%Replace%!"
)

@echo off
Setlocal enabledelayedexpansion

Set "Pattern=master"
Set "Replace=price"

For %%# in ("W:\omega\src\app\pages\prices\opion\*") Do (
    Set "File=%%~nx#"
    Ren "%%#" "!File:%Pattern%=%Replace%!"
)

@echo off
Setlocal enabledelayedexpansion

Set "Pattern=master"
Set "Replace=price"

For %%# in ("W:\omega\src\app\pages\prices\refrate\*") Do (
    Set "File=%%~nx#"
    Ren "%%#" "!File:%Pattern%=%Replace%!"
)

@echo off
Setlocal enabledelayedexpansion

Set "Pattern=master"
Set "Replace=price"

For %%# in ("W:\omega\src\app\pages\prices\index\*") Do (
    Set "File=%%~nx#"
    Ren "%%#" "!File:%Pattern%=%Replace%!"
)