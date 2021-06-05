# react-jira 项目

## 代办事项
1. 乐观更新，如何设计一套乐观更新机制？

## eslint、prettier 和 pre-commit hook
使用流程：
1. 安装 [prettier](https://prettier.io/docs/en/install.html)
``` 
npm install --save-dev --save-exact prettier
```
2. 添加一个空的 .prettierrc.json 文件
3. 安装 [pre-commit hook](https://prettier.io/docs/en/precommit.html)，在 git 命令提交之前进行自动格式化
```
npx mrm lint-staged
```
如果这种方法安装失败，也可以手动安装 husky、lint-staged，然后修改 package.json
``` 
npm i lint-staged husky -save-dev
```
在package.json文件中添加
``` 
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
},
"lint-staged": {
    "*.{js,css,md,ts,tsx}": "prettier --write"
}
```
4. 解决 prettier 与 eslint 的冲突。  
安装 eslint-config-prettier
``` 
npm install --save-dev eslint-config-prettier 
```
修改 package.json，添加 eslint 配置
``` 
{
  "extends": [
    "some-other-config-you-use",
    "prettier"
  ]
}
```
## commitlint
