import React from 'react'

export default function Trinket ({ trinket }) {
  return (<img
    src={`http://ddragon.leagueoflegends.com/cdn/8.1.1/img/item/${trinket.image}`}
    className='trinket rounded'
    alt={trinket.name}
  />)
}
