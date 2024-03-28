import React from 'react'
import Bird from '../img/twitter.svg'
import Ball from '../img/basketball-solid.svg'
import Behance from '../img/behance.svg'

export default function Footer() {
    return (
        <>
        <footer>
        <div>
            <img src={Bird} alt="twitter" />
            <img className='signs' src={Ball} alt="twitter" />
            <img className='signs' src={Behance} alt="twitter" />
        </div>
        <div><p>© 2022 LUIQUE. ALL RIGHTS RESERVED</p></div>
        <div><p>DEVELOPED BY BSLTHEMES</p></div>
        </footer>
        </>

    )
}