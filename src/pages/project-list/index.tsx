import React, { useState, useEffect } from 'react'
import { SearchPanel } from './search-panel'
import { List } from './list'
import { cleanObject } from "../../utils/index";
import { useAuth } from "../../context/auth-context";
import { useHttp } from "../../utils/http";
import { Button } from 'antd'

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {

  const http = useHttp()
  const { logout } = useAuth()

  console.log('ProjectListScreen render')
  const [users, setUsers] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [list, setList] = useState([])

  // 当param变化的时候，同步请求列表
  useEffect(() => {
    http('projects', { data: cleanObject(param)}).then(data => {
      setList(data)
    })
  }, [param])

  useEffect(() => {
    http('users', { data: cleanObject(param)}).then(data => {
      setUsers(data)
    })
  }, [])

  return (
    <div>
      <Button onClick={logout}>退出登录</Button>
      <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
      <List users={users} list={list}></List>
    </div>
  )
}
