import React from 'react'
import './buttons.css'

export default function Buttons({id , number}) {
    return (
        <div className={id}>
            <button id={id}>{number}</button>
        </div>
    )
}

