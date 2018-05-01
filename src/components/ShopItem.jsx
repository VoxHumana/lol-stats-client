import React from 'react'

export default function ShopItem ({ item }) {
  return (<img
    src={`http://ddragon.leagueoflegends.com/cdn/8.1.1/img/item/${item.image}`}
    className='shop-item rounded'
    alt={item.name}
  />
  )
}
