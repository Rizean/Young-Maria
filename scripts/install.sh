#!/usr/bin/env bash
echo Install Dir "$1"
mkdir -p "$1"
[ "$#" -eq 1 ] && [ -d "$1" ] || {
  printf 'Usage:\t%s <directory>\n' "$0"
  exit 1
}


wget "https://MariaMod.site/download/YM-Offline.zip" -O YMOffline.zip
unzip YMOffline.zip
rm YMOffline.zip
mv YM-Offline "$1"

wget "https://MariaMod.site/download/YM-MainPicsFolder.zip" -O YMMainPicsFolder.zip
unzip YMMainPicsFolder.zip
rm YMMainPicsFolder.zip

rsync -avh --progress YM-MainPicsFolder/pics/ "$1/YM-Offline/pics/"
rm -Rf YM-MainPicsFolder

