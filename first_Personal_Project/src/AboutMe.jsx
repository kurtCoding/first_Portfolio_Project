import React from "react"
import { Link } from "react-router-dom"


export default function AboutMe() {

    return (
        <div>
            <Link to='/'>Home</Link>
            <h2>Here's a lil info about me</h2>
            <h1>Kurt Julien</h1>
            <div className="profilePic">
                <img src="https://ca.slack-edge.com/TCVA3PF24-U065W4GGX0V-9c006add4888-512" alt="Kurt Julien" />
            </div>

            <p>My name is Kurt Julien 🙋🏽‍♂️, a native of the twin islands of Trinidad and Tobago🇹🇹. Labeling myself as somewhat of a biking 🚴🏾‍♂️ enthusiast, I also find joy in exploring the island's (or any geographic area honestly🪂) scenic routes. Alongside my passion for the outdoors🧗🏽, I sometimes would like to consider myself a proficient web developer💻, specializing in HTML, JavaScript, React, and CSS. When i'm not immersed in code, or procrastinating on some responsibilities I probably should'nt of, you'll likely find me on the basketball court ⛹🏽‍♂️, fueled by my love for the game (cause Ball is Life!🏀). True to my heritage, im also an avid Soca music enthusiast who tries to share my music to world(I play it really loud📻), I try to bring a blend of creativity and skill to everything I pursue.</p>
            
            <a href="https://github.com/kurtcoding">Github</a>
        </div>
    )
}