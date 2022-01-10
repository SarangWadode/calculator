import React from 'react'

export default function Display( {display,formula}) {
    return (
        <div className='display'>
            <div id="formula">{formula}</div>
            <div id="display">{display}</div>
        </div>
    )
}
