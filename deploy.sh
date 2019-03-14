#!/bin/bash
prjname="vue-kakao-pf"

echo "=============================="
echo ${prjname}
echo "=============================="

# docs dir && run on local server
cd docs
npm run dev

# build
npm run build

# root dir
cd -

# get commit message
printf "\n"
read -p "Enter commit message: " commitmsg

# commit
git add .
git commit -m $commitmsg
git push

exit