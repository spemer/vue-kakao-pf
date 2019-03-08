#!/bin/bash

cd docs

# build
npm run build

cd -

# commit
git add .
git commit -m 'deploy'
git push
