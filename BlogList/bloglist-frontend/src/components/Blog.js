import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBlog, likeBlog } from '../reducers/blogsReducer'
import { useLocation, useHistory } from 'react-router'
import blogServices from '../services/blogs'
import { Button, ListGroup } from 'react-bootstrap'

const Blog = () => {
  const [blog, setBlog] = useState(null)
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user) || window.localStorage.getItem('loggedBloglistUser')
  const location = useLocation()
  const history = useHistory()
  const { id } = location.state.blog
  const fetchBlog = async (id) => {
    const response = await blogServices.getBlog(id)
    setBlog(response)
  }
  console.log(blog)
  useEffect(() => {
    fetchBlog(id)
  }, [])

  if (!blog) {
    return null
  }

  const handleDelete = async () => {
    const confirm = window.confirm(`Remove ${blog.title} by ${blog.author}?`)
    if (confirm) {
      try {
        dispatch(deleteBlog(blog.id))
        history.push('/')
      } catch(e) {
        console.log('error deleting: ', e)
      }
    }
  }

  const handleLike = async () => {
    const updatedBlog = { ...blog, likes: blog.likes + 1, user: blog.user.id }
    dispatch(likeBlog(updatedBlog, blog.id))
    await fetchBlog(blog.id)
  }
  const buttonStyle = {
    marginLeft: '1vw',
    padding: '0.2rem 0.4rem 0.2rem 0.4rem',
    fontSize: '0.9rem'
  }
  return (
    <div style={{ marginTop: '5vh' }}>
      <ListGroup variant='flush'>
        <ListGroup.Item><strong>Title: </strong>{blog.title}</ListGroup.Item>
        <ListGroup.Item><strong>Author: </strong>  {blog.author}</ListGroup.Item>
        <ListGroup.Item>
          <strong>Url: </strong> {blog.url}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Likes:</strong> {blog.likes}
          <Button onClick={handleLike} id="blog-like-button" style={buttonStyle}>Like</Button>
        </ListGroup.Item>
        <ListGroup.Item>added by {blog.user.name} {user.username === blog.user.username && (<Button onClick={handleDelete} style={buttonStyle}>Delete</Button>)}</ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default Blog