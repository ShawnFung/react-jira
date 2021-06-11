# antd

## antd 与 craco
- 在 bebel 配置中新增 babel-plugin-import，搞定 AntDesign 按需加载
- 新增 craco 提供的 craco-less 插件，搞定自定义主题
``` 
yarn add babel-plugin-import craco-less -D
```
```javascript
const CracoLessPlugin = require('craco-less')
module.exports = {
  babel: {
    plugins: [
      // 配置 babel-plugin-import
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: 'css',
        },
        'antd',
      ],
    ],
  },
// craco 提供的插件
  plugins: [
    // 配置 less
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              // 自定义主题（如果有需要，单独文件定义更好一些）
              '@primary-color': '#1DA57A',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ]
}
```

