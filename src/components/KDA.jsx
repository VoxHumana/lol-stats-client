import React from 'react'

export default function KDA ({ kills, deaths, assists }) {
  return (
    <div
      className='kda text-center'
    >
      <div>
        <span>K / D / A</span>
      </div>
      <div>
        <span className='kills'> { kills } </span>
        <span>/</span>
        <span className='deaths'> { deaths } </span>
        <span>/</span>
        <span className='assists'> { assists } </span>
      </div>
    </div>)
}
