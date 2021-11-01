import React from 'react'
import { Switch, Route, Link, Redirect } from 'react-router-dom' // eslint-disable-line
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { userLogged } from './reducers/userReducer'
import LoggedIn from './components/LoggedIn'
import Login from './components/Login'
import Users from './components/Users'
import Navigator from './components/Nav'
import User from './components/User'
import Blog from './components/Blog'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loggedBloglistUser')
    if (loggedUser) {
      dispatch(userLogged(loggedUser))
    }
  }, [])

  return (
    <div className='container'>
      <Navigator user={user} />
      <Switch>
        <Route exact path='/' >
          { user.loggedIn ? <LoggedIn /> : <Redirect to='/login' /> }
        </Route>
        <Route exact path='/login'>
          <Login user={user} />
        </Route>
        <Route exact path='/users'>
          <Users user={user} />
        </Route>
        <Route path='/users/:id'>
          <User />
        </Route>
        <Route path='/blogs/:id'>
          <Blog />
        </Route>
      </Switch>
    </div>
  )

}

export default App