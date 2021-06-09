import React, { useState, useEffect, memo } from 'react'

export interface User{
  id: number;
  name: string
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

  return <form>
    <div>
      <input type="text" value={param.name} onChange={evt => setParam({ ...param, name: evt.target.value})} />
      <select value={param.personId} onChange={evt => setParam({ ...param, personId: evt.target.value})}>
        <option value="">负责人</option>
        {
          users.map(item => {
            return <option key={item.id} value={item.id}>{item.name}</option>
          })
        }
      </select>
    </div>
  </form>
})
