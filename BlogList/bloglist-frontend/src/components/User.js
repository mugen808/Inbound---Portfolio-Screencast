import React from 'react'
import { useLocation, useHistory } from 'react-router'
import { ListGroup } from 'react-bootstrap'

const User = () => {
  const location = useLocation()
  const history = useHistory()
  const user = location.state
  console.log(user)
  // const loggedUser = window.localStorage.getItem('loggedBloglistUser')
  // console.log(loggedUser)
  if (!user) {
    history.push('/users')
    return null
  }

  return (
    <div className='container'>
      <h2 style={{ marginTop: '5vh', textAlign: 'center' }}>{user.name}</h2>
      <h3 style={{ fontSize: '1.5rem', marginTop: '4vh' }}>Added blogs</h3>
      <ListGroup variant='flush'>
        {user.blogs.map(blog => {
          console.log(blog)
          return <ListGroup.Item key={blog.id}>{blog.title} by {blog.author} ({blog.likes} likes)</ListGroup.Item>
        })}
      </ListGroup>
    </div>
  )
}

export default User