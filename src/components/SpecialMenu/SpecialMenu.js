import React from 'react'
import './specialMenu.css'
export default function SpecialMenu({ title, price, tags }) {
    return (
        <div className='special__menu'>
            <div className='special__menu-heading'>
                <div className='special__menu-heading-title'>
                    <h3>{title}</h3>
                </div>
                <div className='special__menu-dash' />
                <div className='special__menu-heading-price'>
                    <p>{price}</p>
                </div>
            </div>
            <div>
                <p className='p__text'>{tags}</p>
            </div>

        </div>
    )
}
