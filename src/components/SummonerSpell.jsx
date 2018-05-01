import React from 'react'

export default function SummonerSpell ({summonerSpell}) {
  return (
    <img
      src={`http://ddragon.leagueoflegends.com/cdn/8.1.1/img/spell/${summonerSpell.image}`}
      className='summoner-spells rounded'
      alt={summonerSpell.name}
    />)
}
