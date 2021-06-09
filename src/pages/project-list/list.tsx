import React, { memo } from 'react'
import { User } from './search-panel'

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
  return <table>
    <thead>
      <tr>
        <th>名称</th>
        <th>负责人</th>
      </tr>
    </thead>
    <tbody>
    {
      list.map(item => {
        return <tr key={item.id}>
          <td>{item.name}</td>
          <td>{ users.find(user => user.id == item.personId)?.name || '未知' }</td>
        </tr>
      })
    }
    </tbody>
  </table>
})
