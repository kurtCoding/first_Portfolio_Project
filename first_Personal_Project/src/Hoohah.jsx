import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const API_KEY = import.meta.env.VITE_API_KEY

console.log(API_KEY, "line 6")

export default function Hoohah() {

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        fetch(`${API_KEY}/episode`).then((res) => res.json())
        .then((data) => {
            console.log(data)
            const allEpisodes = data.results
            setEpisodes(allEpisodes);
        })
        .catch(error => console.log('Error fetching videos'))
    }, [])

    return (
        <div>
            <Link to='/'>Home</Link>
            <h2>So What's all the Hoohah about anyway??</h2>
            <h3>Aside form the colorful scenes and witty, comical and sometimes questionable jokes, Ricky & Morty touches on its fair share of Conspiracy Theories as well!🤫</h3>

            <p>Whether it's a direct approach or through satire, here are some notable ones.</p> <br/>

            <div>
            <p><span>1</span>.  <strong>Alien Abductions</strong>(<em>is this really even a conspiracy still?</em>):    Various episodes depict alien abductions and experiments, paralleling real-world conspiracy theories about extraterrestrial beings kidnapping humans for unknown purposes.</p>

            <p><span>2</span>.  <strong>Simulation Theory</strong>:     In the episode "M. Night Shaym-Aliens!", Rick and Morty find themselves trapped in a simulation within a simulation, exploring the idea that reality as we know it might be a sophisticated illusion created by advanced beings.</p>

            <p><span>3</span>.  <strong>Mind Control and Brainwashing</strong>:     The show frequently touches on themes of mind control, such as the use of memory-altering devices and brainwashing techniques. These ideas echo real-world fears about the potential for governments or other entities to manipulate thoughts and behaviors.    ie: Project "MKUltra"👀🤫📝</p>

            <p><span>4</span>.  <strong>Time Travel and Alternate Realities</strong>:     The concept of multiple timelines and realities, as seen in episodes like "A Rickle in Time," explores the idea that there are countless versions of our universe, a popular topic in both scientific and conspiracy theory circles.</p>
            
            <p><span>5</span>.  <strong>Extraterrestrial Influence on Humanity</strong> and <strong>New World Order and Mass Hysteria</strong>:     In the episode "Get Schwifty," Earth faces an existential threat when a giant alien head (referred to as a Cromulon) appears in the sky, demanding to be entertained with a catchy musical performance. Rick and Morty are thrust into the task of creating and performing a song to appease the Cromulon, who uses his powers to enforce participation. Meanwhile, the sudden appearance of the alien head causes widespread panic and the rise of a new religion, the Church of the Headism, which worships the alien head as a deity.
            </p>
             <p>    -This episode plays on the conspiracy theory that advanced alien civilizations have a direct influence on human affairs. In this case, the Cromulon demands Earth's submission through entertainment, suggesting that humanity is at the mercy of powerful extraterrestrial beings.
             </p>
             <p>    -The rise of the Church of the Headism represents how a single event can lead to mass hysteria and the establishment of new world orders or religions. This echoes conspiracy theories about how global events or the appearance of powerful entities can lead to drastic societal changes and manipulation of the masses.</p>

            </div>
            <p>Here's a list of some episodes:</p>
            <ul>
                <div className="episodeList">
                    {episodes.map((episode) => (
                        <li key={episode.id}>
                            <Link to={`/VideoShowPage/${episode.id}`}>{episode.name}</Link>
                        </li>
                        ))}
                </div>
            </ul>
        </div>
    )
}