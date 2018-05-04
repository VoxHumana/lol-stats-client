import React from 'react'
import Header from '../assets/header.png'

export default function HeaderImage () {
  return (
    <div className='header-img text-center'>
      <img
        className='img-fluid'
        src={Header}
        alt='Header'
      />
    </div>)
}
