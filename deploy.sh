#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy'

# push to the custom domain
git push -f git@github.com:jacobadam/portfolio-new.git $(git symbolic-ref --short HEAD):gh-pages

cd -
