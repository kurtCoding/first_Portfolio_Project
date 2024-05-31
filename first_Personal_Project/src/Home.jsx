import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {

    // useEffect(() => {
    //     const urls = ["https://rickandmortyapi.com/api/character", "https://rickandmortyapi.com/api/episode"];

    //     const fetchPromises = urls.map(url => fetch(url));

    //     Promise.all(fetchPromises).then(responses => 
    //         Promise.all(responses.map(response => response.json())))
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(error => {
    //         });
    // }, [])

    return (
        <div>
            <h1>Welcome to my Rick and Morty Webpage!</h1>
            <h2>Iv'e been expecting you</h2> 
            <br/>
            <div>
                <Link to='/AboutMe'>About Me</Link> <br/>
                <Link to='/Hoohah' >What's all the Hoohah?</Link> <br/>
                <Link to='/AboutRnM'>Rick & Morty</Link> <br/>
                <Link to='/Characters'>Characters</Link>
            </div>
        </div>
    )
}