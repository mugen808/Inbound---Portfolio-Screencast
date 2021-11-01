import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import userServices from '../services/users'
import { Table } from 'react-bootstrap'


const Users = ({ user }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const userList = await userServices.getAll()
      setUsers(userList.slice(1))
    }
    getUsers()
  }, [])
  console.log(users)
  if (!user.loggedIn) {
    return null
  }

  return (
    <div>
      <h1>Users</h1>
      <Table striped>
        <thead>
          <tr>
            <th>User</th>
            <th>Blogs created</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <tr key={user.id}>
                <td><Link to={{
                  pathname: `/users/${user.id}`,
                  state: { ...user }
                }}>{user.username}</Link></td>
                <td>{user.blogs.length}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default Users