import React from "react";
import { useAuth } from '../../context/auth-context'
import { Form, Input, Button, Card } from 'antd'

export const Login = () => {

  const { login } = useAuth()

  const onSubmit = (values: {username: string, password: string}) => {
    login(values)
  }

  return <div style={{display: 'flex', justifyContent: 'center'}}>
    <Card>
      <Form onFinish={onSubmit}>
        <Form.Item name={'username'}>
          <Input type="text" id="username" />
        </Form.Item>
        <Form.Item name={'password'}>
          <Input type="password" id="password" />
        </Form.Item>
        <Button htmlType="submit" type={'primary'}>登录</Button>
      </Form>
    </Card>
  </div>
}
