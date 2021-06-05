import { useState, useEffect } from 'react'
import { SearchPanel } from './search-panel'
import { List } from './list'
import qs from 'qs'
import { cleanObject } from "../../utils";

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {

  console.log('ProjectListScreen render')
  const [users, setUsers] = useState([])
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [list, setList] = useState([])

  // 当param变化的时候，同步请求列表
  useEffect(() => {
    fetch(apiUrl + '/projects?' + qs.stringify(cleanObject(param))).then(async response => {
      if(response.ok){
        setList(await response.json())
      }
    })
  }, [param])

  useEffect(() => {
    fetch(apiUrl + '/users').then(async response => {
      if(response.ok){
        setUsers(await response.json())
      }
    })
  }, [])

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users}></SearchPanel>
      <List users={users} list={list}></List>
    </div>
  )
}
