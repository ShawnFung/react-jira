# [json-server](https://github.com/typicode/json-server)

## json-server使用
- 全局安装 json-server 命令行工具
```
npm install -g json-server
```
- 准备一个 json 文件
``` 
// db.json
{
  users: [
    { id: 1, name: '张三', age: 20 }
  ]
}
```
- 启动
```
json-server ./db.json
```
- 访问
``` 
http://localhost:3000/users
```

## 修改端口号
``` 
json-server --watch --port 3001 db.json
```

## 添加中间件 
例如：增加一个登录(login)接口
``` 
// middleware.js
module.exports = (req, res, next) => {
  if(req.method === 'POST' && req.path === '/login'){
    if(req.body.username === 'jack' && req.body.password === '123456'){
      return res.status(200).json({
        user: {
          token: 123
        }
      })
    } else {
      return res.status(400).json({
        message: '用户名或密码不正确'
      })
    }
  }
  next()
}
```
启动 json-server 的时候添加 middleware
``` 
json-server db.json --middlewares ./middleware.js
```
