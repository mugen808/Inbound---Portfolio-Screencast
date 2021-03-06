import React, { useState, useRef } from 'react'
import Toggleable from './Toggleable'
import { useDispatch } from 'react-redux'
import { newNotification } from '../reducers/notificationsReducer'
import { addBlog } from '../reducers/blogsReducer'
import { Form, Button } from 'react-bootstrap'

const BlogForm = () => {
  const dispatch = useDispatch()
  const toggableRef = useRef()

  const emptyFormFields = {
    title: '',
    author: '',
    url: ''
  }
  const [newBlog, setNewBlog] = useState(emptyFormFields)

  const handleNewBlog = async (e) => {
    try {
      e.preventDefault()
      dispatch(addBlog(newBlog))
      setNewBlog(emptyFormFields)
      toggableRef.current.toggleVisibility()
      dispatch(newNotification(`${newBlog.title} by ${newBlog.author} was added to the Bloglist`))
    } catch(e) {
      console.log(e)
      dispatch(newNotification(e.message))
    }
  }

  const handleChange = (e, prop) => {
    setNewBlog({ ...newBlog, [prop]: e.target.value })
  }

  return (
    <div className='container' style={{ padding:'0' }}>
      <Toggleable buttonLabel={'Fields'} ref={toggableRef}>
        <Form onSubmit={handleNewBlog} id='blogForm'>
          <Form.Control id='title' type="text" placeholder='Title' value={newBlog.title} onChange={(e) => handleChange(e, 'title')} /><br />
          <Form.Control id='author' type="text" placeholder='Author' value={newBlog.author} onChange={(e) => handleChange(e, 'author')} /><br />
          <Form.Control id='url' type="text" placeholder='Url' value={newBlog.url} onChange={(e) => handleChange(e, 'url')} /><br />
          {/* <input type="number" placeholder='Likes' value={newBlog.likes} onChange={(e) => handleChange(e, 'likes')} /><br /> */}
          <Button type="submit" style={{ marginBottom: '2vh' }}>Create a new blog</Button>
        </Form>
      </Toggleable>
    </div>
  )
}

export default BlogForm