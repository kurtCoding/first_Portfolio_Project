import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Characters() {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const urls = ["https://rickandmortyapi.com/api/character", "https://rickandmortyapi.com/api/episode"];

        const fetchPromises = urls.map(url => fetch(url));

        Promise.all(fetchPromises).then(responses => 
            Promise.all(responses.map(response => response.json())))
            .then(data => {
                console.log(data)
                const allCharacters = data[0].results.map((char) => {
                    return char.name  
                })
                setCharacters(allCharacters);
            })
            .catch(error => {
            });
    }, [])

    return(
        <div>
            <Link to='/'>Home</Link>
            <h2>Here's a list of Characters for the show</h2>
            <ul>
                <div className="charList">
                    {characters.map((character) => (
                        <li key={char.id}>
                            <Link to={`/ShowPage/${character.id}`}>{character.name}</Link>
                        </li>
                        ))}
                </div>
            </ul>
        </div>
    )
}