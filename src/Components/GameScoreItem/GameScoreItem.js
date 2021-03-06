import React from 'react';
import './GameScoreItem.css'

export default function GameScoreItem(props) {
  return (
    <li className='scoreItem'>
      <div className='label'>{props.title}</div>
      <div className='datum'>
        {props.number}{(props.total) ? `/${props.total}` : ''}
      </div>
    </li>
  )
}