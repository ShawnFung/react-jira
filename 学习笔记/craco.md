# craco

## craco 使用方案
安装包
``` 
yarn add @craco/craco
```
项目根目录创建 craco.config.js 文件， 当然你看到别人的项目叫.cracorc.js或者.cracorc，都是没问题
``` 
/* craco.config.js */
module.exports = {
  ...
}
```
修改 package.json 的 scripts 命令
``` 
/* package.json */
"scripts": {
  -   "start": "react-scripts start",
  -   "build": "react-scripts build",
  -   "test": "react-scripts test",
  +   "start": "craco start",
  +   "build": "craco build"
  +   "test": "craco test"
}
```

## 参考文档
- 为什么我不执行eject，而选择craco重写配置(微信搜索)

