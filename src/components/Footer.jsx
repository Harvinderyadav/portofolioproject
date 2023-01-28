import React from 'react'
import {AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
 

const Footer = () => {
  return (
    <div>
        <img 
        src="33.png" alt='Rango' />
        <h2>HARVINDER YADAV</h2>
        <p><h3>Good peoples always love hardwork</h3></p>

    <aside>
        <h2>Social Media</h2>
        <article>
            <a href ="https://www.instagram.com/harvinder.preet/?hl=en" target={"blank"}>
                <AiFillInstagram/>
            </a>
            <a href ="https://www.linkedin.com/in/harvinder-yadav" target={"blank"}>
                <AiFillLinkedin/>
            </a>
        </article>
    </aside>
        </div>
  )
}

export default Footer