import React from 'react'
import Test1 from '../img/testi1.jpg'
import Test2 from '../img/testi2.jpg'
import Test3 from '../img/testi3.jpg'
import Pato from '../img/pat-2.png'

export default function Testimonials () {
    return (
        <>
        
        <section>

            <div className="what">
                <h1>TESTIMONIALS</h1>
                <p>WHAT Customers Say</p>
            </div>

            <main className='amet'>
            <div className='first_box'>
        <img className='wil' src={Test1} alt="Barbara WIlson" />
        <p className='craft'>Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

        <div className='pace'>
        <div>
        <h1 className='bara'>Barbara Wilson</h1>
        <p>CEO Company</p></div>
        <img className='pato' src={Pato} alt="pat" /></div>
        </div>


        <div className='first_box'>
        <img className='wil' src={Test2} alt="Barbara WIlson" />
        <p className='craft'>Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

        <div className='pace'>
        <div>
        <h1 className='bara'>Charles Smith</h1>
        <p>Designer</p></div>
        <img className='pato' src={Pato} alt="pat" /></div>
        </div>


        <div className='first_box'>
        <img className='wil' src={Test3} alt="Barbara WIlson" />
        <p className='craft'>Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>

        <div className='pace'>
        <div>
        <h1 className='bara'>Roy Wang</h1>
        <p>Manager GYM</p></div>
        <img className='pato' src={Pato} alt="pat" /></div>
        </div>

            </main>
        </section>
        </>
    )
}