import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newNotification } from '../reducers/notificationsReducer'
import { userLogIn } from '../reducers/userReducer'
import { useHistory } from 'react-router'
import { useEffect } from 'react'
import Notification from './Notification'
import { Form, Button } from 'react-bootstrap'

const Login = (props) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (props.user.loggedIn) {
      history.push('/')
    }
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await dispatch(userLogIn({ username, password }))
      setUsername('')
      setPassword('')
      history.push('/')
    } catch(e) {
      dispatch(newNotification('Invalid username or password'))
    }
  }

  return (
    <>
      <Notification />
      <h1>Login</h1>
      <Form onSubmit={handleLogin}>
        <div>
          <Form.Label>username:</Form.Label>
          <br />
          <Form.Control type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <Form.Label>password:</Form.Label>
          <br />
          <Form.Control type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <Button variant="primary" type="submit" style={{ marginTop: '2vh' }}>Login</Button>
      </Form>
    </>
  )
}

export default Login
