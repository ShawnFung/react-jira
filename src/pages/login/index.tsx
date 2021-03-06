import React from "react";
import { useAuth } from '../../context/auth-context'
import { Form, Input, Button, Card, Divider } from 'antd'
import logo from "../../assets/logo.svg";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
import styled from '@emotion/styled'

export const Login = () => {

  const { login } = useAuth()

  const onSubmit = (values: {username: string, password: string}) => {
    login(values)
  }

  return <Container>
    <Header />
    <Background />
    <ShadowCard>
      <Title>{"请登录"}</Title>
      <Form onFinish={onSubmit}>
        <Form.Item name={'username'}>
          <Input type="text" id="username" />
        </Form.Item>
        <Form.Item name={'password'}>
          <Input type="password" id="password" />
        </Form.Item>
        <LongButton htmlType="submit" type={'primary'}>登录</LongButton>
        <Divider />
      </Form>
    </ShadowCard>
  </Container>
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

const Header = styled.div`
  background: url(${logo}) no-repeat center;
  padding: 5rem 0;
  background-size: 8rem;
  width: 100%;
`

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`

const Title = styled.h2`
  margin-bottom: 2.4rem;
  color: rgb(94, 108, 132);
`

const Background =  styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
    calc(((100vw - 40rem) / 2) - 3.2rem), cover;
  background-image: url(${left}), url(${right});
`

const LongButton = styled(Button)`
  width: 100%;
`
