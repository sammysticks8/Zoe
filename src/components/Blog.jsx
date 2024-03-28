import React from 'react'
import Flower from '../img/single1.jpg'
import Flower1 from '../img/single2.jpg'
import Flower2 from '../img/single3.jpg'

export default function Blog () {
    return (
        <>
        
        <section>

            <div className='what'>
                <h1>LATEST BLOG</h1>
                <p>MY Articles and Advice</p>

            </div>

            <main className='lacus'>
                
        <div className='first_box'>
        <h4>OCTOBER 31, 2022</h4>
        <h1>The Main Thing For The Designer</h1>
        <p className='craft shaft'>Vivamus interdum suscipit lacus. Nunc 
        ultrices accumsan mattis. Aliquam vel sem vel velit efficitur malesuada. 
        Donec arcu lacus, ornare eget…
        </p>

        <div className='dice'>
       <p>Read more</p>

        <img className='flower' src={Flower} alt="flower pot" />
        </div>
        </div>


        <div className='first_box'>
        <h4>OCTOBER 31, 2022</h4>
        <h1>Follow Your Own Design Process</h1>
        <p className='craft shaft'>Vivamus interdum suscipit lacus. Nunc 
        ultrices accumsan mattis. Aliquam vel sem vel velit efficitur malesuada. 
        Donec arcu lacus, ornare eget…
        </p>

        <div className='dice'>
       <p>Read more</p>

        <img className='flower' src={Flower1} alt="house" />
        </div>
        </div>


        <div className='first_box'>
        <h4>NOVEMBER 28, 2021</h4>
        <h1>Usability Secrets to Create Better Interfaces</h1>
        <p className='craft shaft'>Vivamus interdum suscipit lacus. Nunc 
        ultrices accumsan mattis. Aliquam vel sem vel velit efficitur malesuada. 
        Donec arcu lacus, ornare eget…
        </p>

        <div className='dice'>
       <p>Read more</p>

        <img className='flower' src={Flower2} alt="can" />
        </div>
        </div>
            </main>
            <div className='vue'>
        <button className='down'>VIEW BLOG</button>
        <p className='null'>Hello There</p>
        </div>
        </section>

        </>
    )
}