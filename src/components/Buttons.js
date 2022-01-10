import React from 'react'
import './buttons.css'

export default function Buttons({handleClick, id, number}) {
    return (
        <div className={id}>
            <button className='button' onClick={handleClick} id={id}>{number}</button>
        </div>
    )
}

