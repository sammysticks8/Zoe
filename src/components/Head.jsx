import React, { useState } from 'react';
import Zoe from '../img/main_image.png'
import Bird from '../img/twitter.svg'
import Ball from '../img/basketball-solid.svg'
import Be from '../img/behance.svg'
import Pat from '../img/pat-2.png'

export default function Head() {

  return (
    <section className='section-one'>
      <div className='first_wrapper'>
        
        <div className='howard'>
        <p className='hello'>HELLO, <span className='name'> MY NAME IS</span></p>
        <h1 className='miller'><span className='curly'>ZOÉ</span> <span className='hut'> MILLER</span></h1>
        <p>I AM <span className='dev'> Web Developer</span></p>
        </div>

        <p className='wordpress'>From France, Paris. I have rich experience in web design, 
            also I am good at wordpress. I love to talk with you about
             our unique.</p>
        
        <div className='behance'>
        <div>
        <img src={Bird} alt="twitter" /></div>
        <div>
        <img src={Ball} alt="basketball" /></div>
        <div>
        <img src={Be} alt="behancer" /></div>
        </div>
        
        <div className='load'>
        <div><button className='down'>Download Cv</button>
        </div>
        <div className='kills'>
        <p>my skills</p></div>
        </div>

      </div>

      <div className='books'>
        <img className='Zoe' src={Zoe} alt="main Girl" />
        <img className='pat' src={Pat} alt="pat" />
        <img className='patsec' src={Pat} alt="pat" />
        <img className='patthird' src={Pat} alt="pat" />
        <div className='thirty'> <p className='numerical'>12 +</p>  <span className='exper'><div>Years of</div> <div>Experience</div></span>
        </div>
        <div className='forty'> <p className='numerical'>330</p> <span className='proj'><div>completed</div> <div>projects</div></span>
        </div>
      </div>
      
      </section>
  )
}
