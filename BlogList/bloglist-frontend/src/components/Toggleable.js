import React, { useState, useImperativeHandle, forwardRef } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

const Toggleable = forwardRef(({ children, ...props }, ref) => {
  const [visible, setVisible] = useState(false)
  const show = { display: visible ? '' : 'none' }
  const hide = { display: visible ? 'none' : '' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })
  return (
    <div>
      <div style={show} className='togglableContent'>
        {children}
        <Button onClick={toggleVisibility}>Hide {props.buttonLabel}</Button>
      </div>
      <div>
        <Button style={hide} onClick={toggleVisibility}>Show {props.buttonLabel}</Button>
      </div>
    </div>
  )
})

Toggleable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

Toggleable.displayName = 'Toggleable'

export default Toggleable