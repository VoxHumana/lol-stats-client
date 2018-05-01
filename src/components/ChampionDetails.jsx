import React from 'react'
import SummonerSpells from './SummonerSpells'

export default function ChampionDetails ({ champion, spells }) {
  const championImgUri = `http://ddragon.leagueoflegends.com/cdn/8.1.1/img/champion/${champion.image}`
  return (
    <div
      className='champion-details'
    >
      <div
        className='champion-img-container text-center'
      >
        <img className='rounded' src={championImgUri} alt='Champion' />
        <span>{ champion.name }</span>
      </div>
      <SummonerSpells spells={spells} />
    </div>)
}
