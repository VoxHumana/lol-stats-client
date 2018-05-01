import React from 'react'

export default function Stats ({ level, cs, duration, gold }) {
  return (
    <div className='stats text-center'>
      <div className='level'>
        <div className='sprite' />
        <span>{level}</span>
      </div>
      <div className='creep-score'>
        <div className='sprite' />
        <span>{cs}<br />({(cs / duration).toFixed(2)})</span>
      </div>
      <div className='gold'>
        <div className='sprite' />
        <span>{gold}<br />({(gold / duration).toFixed(2)})</span>
      </div>
    </div>)
}
