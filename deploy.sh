rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M master &&
git remote add gitee git@gitee.com:layouwen/easyw-ui-vue-website.git &&
git remote add github git@github.com:Layouwen/easyw-ui-vue-website.git &&
git push -f -u gitee master &&
git push -f -u github master &&
cd -s
echo "http://layouwen.gitee.io/easyw-ui-vue-website/#/"
