import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { initBlogs } from '../reducers/blogsReducer'
import BlogForm from './BlogForm'
import Notification from './Notification'
import { Table } from 'react-bootstrap'


const LoggedIn = () => {
  const dispatch = useDispatch()
  const bloglist = useSelector(store => store.blogs.sort((a, b) => b.likes - a.likes))
  useEffect(() => {
    async function getBlogs() {
      dispatch(initBlogs())
    }
    getBlogs()
  }, [])

  return (
    <div className='container' style={{ marginTop: '2vh', padding: '0' }}>
      <Notification />
      <h2 style={{ marginBottom: '2vh' }}>Create a new blog</h2>
      <BlogForm />
      <h3 style={{ marginTop: '4vh', marginBottom: '3vh' }}>Blogs</h3>
      <Table striped>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {bloglist.map(blog =>
            <tr key={blog.id}><td><Link
              to={{
                pathname: `/blogs/${blog.id}`,
                state: { blog }
              }}
            >
              {blog.title}
            </Link></td>
            <td>{blog.author}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default LoggedIn