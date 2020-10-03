#!/usr/bin/env bash
twee2 build YoungMaria8.0.0_Offline.tw2 YoungMaria8.0.0_Offline.tw2.html --format=./twinejs/story-formats/sugarcube-2.31.1
node ./scripts/postBuild.js

# git clone https://github.com/klembot/twinejs.git
