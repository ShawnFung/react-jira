import React, { memo } from 'react'
import { User } from './search-panel'
import { Table } from 'antd'

interface Project{
  id: number;
  name: string;
  personId: number;
  organization: string;
  created: number
}

interface ListProps {
  list: Project[];
  users: User[]
}
export const List = memo(({ list, users }: ListProps) => {

  console.log('list render')
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '负责人',
      dataIndex: 'name',
      render: (text:string, row: Project, index: number) => {
        return <span>
          { users.find((user: User) => user.id == row.personId)?.name || '未知' }
        </span>
      }
    }
  ]
  return <Table pagination={false} columns={columns} dataSource={list} />
})
