import React from 'react'
import SummonerSpell from './SummonerSpell'

export default function SummonerSpells ({ spells }) {
  return (
    <div className='summoners'>
      <SummonerSpell summonerSpell={spells[0]} />
      <br />
      <SummonerSpell summonerSpell={spells[1]} />
    </div>)
}
