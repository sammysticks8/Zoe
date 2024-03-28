import React from 'react'
import Pato from '../img/pat-2.png'
import Work1 from '../img/work1.jpeg'
import Work2 from '../img/work2.jpeg'
import Work3 from '../img/work3.jpg'
import Work4 from '../img/single4.jpg'
import Work5 from '../img/single5.jpg'
import Work6 from '../img/work6.jpeg'

export default function Cases() {
    return (
        <>
        <section>

            <div className='what'>
                <h1>PORTFOLIO</h1>
                <p>MY Cases</p>
                <p>ALL VIDEO PHOTOGRAPHY BRANDING</p>

            </div>

        <main className='brand'>
        <div className='first_box'>
        <img className='zoro' src={Work1} alt="Zorro" />
        <h4 className='devop'>BRANDING</h4>
        <h2 className='logo'>Zorro</h2>
        <p className='craft'>Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

        <div className='price'>
        <p><strong>See Pricing</strong></p>
        <img className='pato' src={Pato} alt="pat" /></div>
        </div>


        <div className='first_box'>
        <img className='zoro' src={Work2} alt="Zorro" />
        <h4 className='devop'>BRANDING</h4>
        <h2 className='logo'>Gooir</h2>
        <p className='craft'>Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

        <div className='price'>
        <p><strong>See Pricing</strong></p>
        <img className='pato' src={Pato} alt="pat" /></div>
        </div>


        <div className='first_box'>
        <img className='zoro' src={Work3} alt="Zorro" />
        <h4 className='devop'>VIDEO</h4>
        <h2 className='logo'>Explore</h2>
        <p className='craft'>Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

        <div className='price'>
        <p><strong>See Pricing</strong></p>
        <img className='pato' src={Pato} alt="pat" /></div>
        </div>
        </main>


        <article className='brand'>
        <div className='first_box'>
        <img className='zoro' src={Work4} alt="Zorro" />
        <h4 className='devop'>VIDEO</h4>
        <h2 className='logo'>Stay Fit</h2>
        <p className='craft'>Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

        <div className='price'>
        <p><strong>See Pricing</strong></p>
        <img className='pato' src={Pato} alt="pat" /></div>
        </div>


        <div className='first_box'>
        <img className='zoro' src={Work5} alt="Zorro" />
        <h4 className='devop'>PHOTOGRAPHY</h4>
        <h2 className='logo'>Kana</h2>
        <p className='craft'>Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

        <div className='price'>
        <p><strong>See Pricing</strong></p>
        <img className='pato' src={Pato} alt="pat" /></div>
        </div>


        <div className='first_box'>
        <img className='zoro' src={Work6} alt="Zorro" />
        <h4 className='devop'>PHOTOGRAPHY</h4>
        <h2 className='logo'>Mozar</h2>
        <p className='craft'>Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

        <div className='price'>
        <p><strong>See Pricing</strong></p>
        <img className='pato' src={Pato} alt="pat" /></div>
        </div>
        </article>
        <div className='vue'>
        <button className='down'>VIEW MORE</button>
        <p className='null'>Hello There</p>
        </div>
        </section>
        </>
    )
} 