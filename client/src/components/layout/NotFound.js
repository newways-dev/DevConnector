import React, { Fragment } from 'react'

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle'></i> Page not found
      </h1>
      <p className='large'>Sorry, this page does not exist</p>
      <button className='btn btn-dark'>Go Home</button>
    </Fragment>
  )
}

export default NotFound
