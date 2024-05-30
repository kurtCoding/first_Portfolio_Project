import React, { useState, useEffect } from "react";


export default function Home() {

    useEffect(() => {
        const urls = ["https://rickandmortyapi.com/api/character", "https://rickandmortyapi.com/api/episode"];

        const fetchPromises = urls.map(url => fetch(url));

        Promise.all(fetchPromises).then(responses => 
            Promise.all(responses.map(response => response.json())))
            .then(data => {
                console.log(data)
            })
            .catch(error => {
            });
    }, [])

    return (
        <div>
            <p>Iv'e been expecting you</p>
        </div>
    )
}