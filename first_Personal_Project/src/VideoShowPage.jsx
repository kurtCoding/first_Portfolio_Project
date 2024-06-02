import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


export default function VideoShowPage() {

    const { id } = useParams();
    const [episode, setEpisode] = useState([]);
    // const episodeURL = 'https://ndisk.cizgifilmlerizle.com/getvid?evid=gsZO2-kHMmunOm20Qpa0rkRLmvDjxDGedlTrm1b10zn4JX5W_GGHppJ50HJLyAG0vo2Jb24eNgNubzxpbVg58Zfosd-GzPl6t9S4JuZoQkv12J0qzv-qAvCTjo8lJLOTV7-EcipKgCwT7f6Ws1EE6NK_UHky-jEIfJtfugBNqKGlBPgTKvXoh-L2uoa1W5RJAgXUxx4HGrkbtxBuSCFBIzgBB6npb2uMe4F7LkdiYugQXyfHH_hFK4FzJ9Jxn3V9WoCxWSwJd7DGKdbXM9MJLwqsUzfvizimYWQTBu8yXWrg5j3aiWYuA6f7vyxF1sSWKfyL6FC4GhUmCsIyrzVWIXtnviPgSnZbfe47Pw1psLLctEWdE59mVq5wBZfSTRU-IYvRbS0z6ksXEtlnICIMDDJciray5iSFfHkYMHcM7SDPtg22e4qHlA6k2Ew4SgUB0hhnOGKK9FF2fEZEzyKvsg';

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/${id}`).then((response) => response.json())
        .then((data) => {
            setEpisode(data)
            console.log(data, "line 14")
        }).catch((error) => console.log('Error fetching episode'))
    }, [id])

    if (!episode) {
        return <div>Your video is Loading...</div>;
    }

    return(
        <div>
            <h1>🎥</h1>
            <Link to='/'>Home</Link> <br/>
            <Link to='/Hoohah'>What's all the Hoohah?</Link>
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