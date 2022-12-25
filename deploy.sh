rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git checkout -b page &&
git add . &&
git commit -m 'update' &&
git remote add github git@github.com:Layouwen/easyw-ui-vue.git &&
git push -f -u github page &&
cd -s
echo "https://layouwen.github.io/easyw-ui-vue/#/"
