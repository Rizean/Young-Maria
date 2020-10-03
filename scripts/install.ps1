wget "https://MariaMod.site/download/YM-Offline.zip" -outfile "YMOffline.zip"

Add-Type -AssemblyName System.IO.Compression.FileSystem
function Unzip
{
    param([string]$zipfile, [string]$outpath)

    [System.IO.Compression.ZipFile]::ExtractToDirectory($zipfile, $outpath)
}

Unzip "YMOffline.zip" ".\"


wget "https://MariaMod.site/download/YM-MainPicsFolder.zip" -outfile "YMMainPicsFolder.zip"

Unzip "YMMainPicsFolder.zip" ".\"
Copy-Item -Path .\YM-MainPicsFolder\pics\* -Destination \YM-Offline\pics\

rm .\YM-MainPicsFolder -Force -Confirm -Recurse
