# Emotion

## styled
```jsx harmony
import styled from '@emotion/styled'
import { Card } from 'antd'

// html 元素
const Button = styled.button`
  color: turquoise;
`
// 传入变量
const Container = styled.div(props => ({
  display: 'flex',
  flexDirection: props.column && 'column'
}))
const H1 = styled.h1(
  {
    fontSize: 20
  },
  props => ({ color: props.color })
)
// 组件
const Containter = styled(Card)`
  color: turquoise;
`
// 嵌套
const Example = styled('span')`
  color: lightgreen;
  & > a {
    color: hotpink;
  }
`
// 嵌套组件
const Child = styled.div`
  color: red;
`
const Parent = styled.div`
  ${Child} {
    color: green;
  }
`
// 或者
const Parent = styled.div({
  [Child]: {
    color: 'green'
  }
})
```

## Emotion 与 React
安装
```
npm i @emotion/styled @emotion/react
```
引入图片
``` 
import logo from "assets/logo.svg";
import styled from '@emotion/styled';
const Header = styled.header`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`;
```
