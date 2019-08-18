@echo off
Title Thanks for Downloading - Discord Tools
@echo off 

for /f "tokens=1,2*" %%s in ('bcdedit') do set STRING=%%s
if (%STRING%)==(Zugriff) goto NOADMIN



echo.
@echo off  & setlocal
color 4
echo msgbox"Program was launched with admin permissions!",vbExclamation , "Discord Tools> msg.vbs
msg.vbs
echo.
goto Ask

:NOADMIN
echo.
@echo off  & setlocal
color 4
echo msgbox"Program was launched without admin permissions! This Program needs admin permissions to complete all tasks.",vbExclamation , "Discord Tools> msg.vbs
msg.vbs
echo.
goto Ask
:Ask
echo I am not responsible for any damage dealt to your computer. With that being said, would you like to continue?
set INPUT=
set /P INPUT=Please type in "Yes" or "No" and press Enter: %=%
If /I "%INPUT%"=="Yes" goto yes 
If /I "%INPUT%"=="yes" goto yes 
If /I "%INPUT%"=="No" goto no
If /I "%INPUT%"=="no" goto no
echo Wrong entry!
echo Restart your program!
timeout /t 10
taskkill /im cmd.exe
:yes
echo Program starts!
@echo off
color 4
Title Nirsoft Tools Cleaner 
echo.
cls
echo Now some Registry entries will be deleted. This is harmless.
echo Press Enter to continue
pause
cls
reg delete "HKEY_CURRENT_USER\Software\Classes\Local Settings\Software\Microsoft\Windows\Shell\MuiCache" /f
reg delete "HKEY_CURRENT_USER\Software\Classes\Local Settings\Software\Microsoft\Windows\Shell\Bags" /f
reg delete "HKEY_CURRENT_USER\Software\Classes\Local Settings\Software\Microsoft\Windows\Shell\BagMRU" /f
reg delete "HKEY_CURRENT_USER\Software\Microsoft\Windows\Shell\Bags" /f
reg delete "HKEY_CURRENT_USER\Software\Microsoft\Windows\Shell\BagMRU" /f
reg delete "HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Compatibility Assistant\Store" /f
reg delete "HKEY_CURRENT_USER\Software\Microsoft\Windows NT\CurrentVersion\AppCompatFlags\Compatibility Assistant\Persisted" /f
reg delete "HKEY_CURRENT_USER\Software\Microsoft\Windows\ShellNoRoam\MUICache" /f
reg delete "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\ComDlg32\OpenSavePidlMRU" /f
reg delete "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\ComDlg32\LastVisitedPidlMRU" /f
reg delete "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\ComDlg32\LastVisitedPidlMRULegacy" /f
reg delete "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\ComDlg32\OpenSaveMRU" /f
reg delete "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\UserAssist" /f
cls
echo Done.
echo Now some Prefetch and Recent Files will be deleted, you don't need this anyways.
echo Press Enter to continue!
pause
cls
@RD /S /Q "C:\Windows\Prefetch\"
@RD /S /Q "C:\Users\Default\AppData\Roaming\Microsoft\Windows\Recent\"
@RD /S /Q "C:\Users\Owner\AppData\Roaming\Microsoft\Windows\Recent\"
cls
echo Done.
echo Now some Eventlog entries will be deleted, you won't need this either. May take up to 5 minutes so hold on.
echo Press Enter to continue!
pause
cls
FOR /F "tokens=1,2*" %%V IN ('bcdedit') DO SET adminTest=%%V
IF (%adminTest%)==(Access) goto noAdmin
for /F "tokens=*" %%G in ('wevtutil.exe el') DO (call :do_clear "%%G")
echo.
echo goto theEnd
:do_clear
echo clearing %1
wevtutil.exe cl %1
goto :eof
echo Everything is cleaned.
pause
exit
:noAdmin
exit