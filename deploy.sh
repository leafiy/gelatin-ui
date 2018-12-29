#! /bin/bash
set -e
npm run docs:build
cd docs/.vuepress/dist
echo 'gelatin-ui.leafiy.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:leafiy/gelatin-ui.git master:gh-pages
cd -