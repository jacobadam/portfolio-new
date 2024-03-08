#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# Initialize a new Git repository inside the "dist" directory
git init

echo "jacobnevitt.com" > CNAME

# Add all files to the repository
git add -A

# Commit the changes
git commit -m 'deploy'

# Push to the "gh-pages" branch of the repository
git push -f git@github.com:jacobadam/portfolio-new.git master:gh-pages

# Navigate back to the original directory
cd -
