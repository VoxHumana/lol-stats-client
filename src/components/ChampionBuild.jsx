import React from 'react'
import Trinket from './Trinket'
import EmptyItem from './EmptyItem'
import ShopItem from './ShopItem'

export default function ChampionBuild ({ items, trinket }) {
  const itemList = items.map(item => (item.name === 'empty' ? <EmptyItem /> : <ShopItem item={item} />))
  const trinketEle = trinket.name === 'empty' ? <EmptyItem /> : <Trinket trinket={trinket} />
  return (
    <div className='champion-build text-center'>
      <div className='shop-item-container'>
        {itemList[0]}
        {itemList[1]}
        {itemList[2]}
        <br />
        {itemList[3]}
        {itemList[4]}
        {itemList[5]}
      </div>
      <div className='trinket-container'>
        { trinketEle }
      </div>
    </div>)
}
