import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function VideoShowPage() {

    const { id } = useParams();
    const [episode, setEpisode] = useState(null);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/${id}`).then((response) => response.json())
        .then((data) => {
            setEpisode(data)
        })
    }, [id])

    if (!episode) {
        return <div>Your video is Loading...</div>;
    }

    return(
        <div>
            <h1>🎥</h1>
            <div>
                <h2>{episode.name}</h2>
                <iframe 
                    width="560" 
                    height="315" 
                    src={episode.url} 
                    title={episode.name} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}