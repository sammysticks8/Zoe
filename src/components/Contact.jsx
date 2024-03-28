import React from 'react'
import { LiaFlagUsaSolid } from "react-icons/lia";

export default function Contact() {
    return (
        <>
        <section>

        <div className='what'>
        <h1>CONTACT ME</h1>
        <p>LET’S Talk About Ideas</p>
        </div>


        <main className='ideas'>
            <article className='tower'>
            <div className='avail'>
            <LiaFlagUsaSolid className='flag' />
            <div className='dress'>
            <h2>Address</h2>
            <p>North Tower, Toronto, Canada</p>
            </div>
            </div>

            <div className='avail'>
            <LiaFlagUsaSolid className='flag' />
            <div className='dress'>
            <h2>Freelance</h2>
            <p>Available Right Now</p>
            </div>
            </div>

            <div className='avail'>
            <LiaFlagUsaSolid className='flag' />
            <div className='dress'>
            <h2>Email</h2>
            <p>zoe.miller@mydomain.com</p>
            </div>
            </div>

            <div className='avail'>
            <LiaFlagUsaSolid className='flag' />
            <div className='dress'>
            <h2>Phone</h2>
            <p>+1 900 - 900 - 9000</p>
            </div>
            </div>
            </article>

            <article>
                <div className='full'>
                <div className='spurn'><p>YOUR FULL NAME * </p>
                <input className='sern' type="text" />
                </div>
                <div className='spurn'>
                <p>YOUR EMAIL ADDRESS *</p>
                <input className='sern' type="text" />
                </div>
                </div>

                <div className='sub'><p className='assets'>YOUR SUBJECT * </p>
                <input className='subset' type="text" />
                </div>

                <div className='sub'><p className='assets'>YOUR MESSAGE * </p>
                <textarea className='surf' name="" id="" cols="30" rows="10"></textarea>
                
                <div className='iterate'>
                <p className='depth'>Accept the terms and conditions <input type="checkbox" /></p>
                <button className='down'>SEND MESSAGE</button>
                </div>
                </div>
            </article>
        </main>
        </section>
        </>
    )
}