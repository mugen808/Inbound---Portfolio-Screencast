import React from 'react'
import { Alert } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const ErrorMessage = () => {
  const { message, kind } = useSelector(store => store.notifications)

  if (kind === 'create') {
    return (
      <div className='container'>
        <Alert variant='success'>{message}</Alert>
      </div>)
  }

  return null
}

export default ErrorMessage