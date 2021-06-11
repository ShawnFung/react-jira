import React, { useState, useEffect, memo } from 'react'
import { Form, Input, Select } from "antd";

export interface User{
  id: number
  name: string
  token: string
}
interface SearchPanelProps {
  param: {
    name: string,
    personId: string
  };
  setParam: (param: {
    name: string,
    personId: string
  }) => void;
  users: User[]
}
export const SearchPanel = memo((props: SearchPanelProps) => {

  console.log('SearchPanel render')
  const { param, setParam, users } = props;

  return <Form layout={'inline'}>
    <Form.Item>
      <Input type="text" value={param.name} onChange={evt => setParam({ ...param, name: evt.target.value})} />
    </Form.Item>
    <Form.Item>
      <Select value={param.personId} onChange={value => setParam({ ...param, personId: value})}>
        <Select.Option value="">负责人</Select.Option>
        {
          users.map(item => {
            return <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
          })
        }
      </Select>
    </Form.Item>
  </Form>
})
