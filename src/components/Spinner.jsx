import React from 'react'

export default function Spinner ({ visible }) {
  return visible ? (
    <img className='spinner rounded-circle' src='http://i0.kym-cdn.com/photos/images/original/000/621/554/b08.gif' alt='Loading' />
  ) : null
}
