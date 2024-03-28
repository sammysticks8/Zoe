import React from 'react'
import Pato from './img/pat-2.png'

export default function What() {
    return (
        <>
            <div className='what'>
            <h1>WHAT I DO</h1>
            <p>MY Services</p>
            </div>

        <section className='first_section'>
        <div className='first_box'>
        <h4 className='devop'>WEB DEVELOPMENT</h4>
        <h2 className='logo'>Web Design & Logo</h2>
        <p className='craft'>Web designers craft the overall vision & plan 
        for a website layout. Professional logo development: 
        Business, Company, or Personal.</p>

        <div className='price'>
        <p><strong>See Pricing</strong></p>
        <img className='pato' src={Pato} alt="pat" /></div>
        </div>

        <div className='first_box'>
        <h4 className='devop'>APPS DEVELOPMENT</h4>
        <h2 className='logo'>iOS & Android</h2>
        <p className='craft'>Design Software applications to run on mobile
         devices. Modern and mobile-ready application that will help you 
         reach all of your marketing.</p>

        <div className='price'>
        <p><strong>See Pricing</strong></p>
        <img className='pato' src={Pato} alt="pat" /></div>
        </div>

        <div className='first_box'>
        <h4 className='devop'>GAME DEVELOPMENT</h4>
        <h2 className='logo'>Unity & Unreal Engine</h2>
        <p className='craft'>Creating games & describes the design, development 
        and release of a game. Developing unique mobile android and ios games.</p>

        <div className='price'>
        <p><strong>See Pricing</strong></p>
        <img className='pato' src={Pato} alt="pat" /></div>
        </div>
        </section>
        </>
    )
}