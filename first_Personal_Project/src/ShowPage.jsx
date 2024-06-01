import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ShowPage.css"


export default function ShowPage() {

    const { id } = useParams();
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((res) => res.json())
        .then((data) => setCharacter(data))
    }, [id])

    if (!character) {
        return <div>Loading...</div>;
    }

    return(
        <div className="characterPage">
            <h1 className="eyes">👀</h1>
            <Link to='/'>Home</Link> <br/>
            <Link to='/Characters'>Characters</Link> 
            <div className="characterInfo">
                <img className="characterImg" src={character.image} alt={character.name} />
                <h3>{character.name}</h3>
                <p>Species: {character.species}</p>
                <p>Gender: {character.gender}</p>
                <p>Status: {character.status}</p>
                <p>Originated: {character.location.name}</p>
            </div>
        </div>
    )
}