import React from 'react'
import { useDispatch } from 'react-redux'
import { userLogout } from '../reducers/userReducer'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { Button, Navbar, Nav } from 'react-bootstrap'

const Navigator = ({ user }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  const style = {
    padding: '5px'
  }

  const handleLogOut = () => {
    dispatch(userLogout())
    history.push('/')
  }

  if (!user.loggedIn) {
    return null
  }

  return (
    <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='mr-auto'>
          <Nav.Link href="#" as="span">
            <Link style={style} to='/'>blogs</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link style={style} to='/users'>users</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <em style={style}>{user.user.name} logged in</em>
          </Nav.Link>
          <Button variant='light' onClick={handleLogOut}>Logout</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigator