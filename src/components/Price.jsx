import React from 'react'
import Pato from '../img/pat-2.png'

export default function Price () {
    return (
        <>
        
        <section>

            <div className='what'>
                <h1>PRICING</h1>
                <p>MY Price Board</p>
            </div>

            <main className='content_box'>
            <div className='first_box'>
        <h4>HOURLEY BASIS</h4>
        <h1>39 $ Hour</h1>
        <p className='craft shaft'>Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore.
        magna aliqua. Quis ipsum suspendisse ultrices gravida.
        </p>

        <div className='dice'>
        <div>
       <ol>
        <div className='lister'>
        <li className='lister'>Brand Design</li>
        <li className='lister'>Web Development</li>
        <li className='lister vert'>Advertising</li>
        <li className='lister vert'>Photography</li>
        </div>
        </ol></div>
        <button className='down ject'>START PROJECT</button>
        <img className='pato auto' src={Pato} alt="pat" /></div>
        </div>


        <div className='first_box'>
        <h4>FREELANCING</h4>
        <h1>259 $ Week</h1>
        <p className='craft shaft'>Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore.
        magna aliqua. Quis ipsum suspendisse ultrices gravida.
        </p>

        <div className='dice'>
        <div>
       <ol>
        <div className='lister'>
        <li className='lister'>Brand Design</li>
        <li className='lister'>Web Development</li>
        <li className='lister vert'>Advertising</li>
        <li className='lister vert'>Photography</li>
        </div>
        </ol></div>
        <button className='down ject'>START PROJECT</button>
        <img className='pato auto' src={Pato} alt="pat" /></div>
        </div>


        <div className='first_box'>
        <h4>FULL TIME</h4>
        <h1>1.249 $ Month</h1>
        <p className='craft shaft'>Lorem ipsum dolor sit amet, consectetur adipiscing 
        elit, sed do eiusmod tempor incididunt ut labore et dolore.
        magna aliqua. Quis ipsum suspendisse ultrices gravida.
        </p>

        <div className='dice'>
        <div>
       <ol>
        <div className='lister'>
        <li className='lister'>Brand Design</li>
        <li className='lister'>Web Development</li>
        <li className='lister vert'>Advertising</li>
        <li className='lister vert'>Photography</li>
        </div>
        </ol></div>
        <button className='down ject'>START PROJECT</button>
        <img className='pato auto' src={Pato} alt="pat" /></div>
        </div>
            </main>
        </section>

        </>
    )
}