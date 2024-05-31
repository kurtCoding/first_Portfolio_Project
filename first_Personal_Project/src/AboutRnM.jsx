import React from "react";
import { Link } from "react-router-dom";


export default function AboutRnM() {


    return(
        <div>
            <Link to='/'>Home</Link>
            <h2>Here's a little run down of Rick & Morty for those who missed out!</h2>

            <div className="RnM_Info">
                <p>So What exactly <em>is</em> Rick & Morty??</p> <br/>

                <p>"Rick and Morty" is an animated science fiction sitcom created by <strong>Justin Roiland</strong> and <strong>Dan Harmon</strong>. It debuted on Adult Swim in 2013 and quickly gained a massive following.</p>

                <p>Now why did Rick & Morty gain such popularity?</p> <br/>

                <p><span>1</span>.   It has <strong>Unique Humor</strong>:   The show combines dark, often nihilistic humor with clever, sometimes crude jokes. This blend appeals to a wide audience, including fans of adult animation and science fiction.</p>

                <p><span>2</span>.   It's <strong>Complex Characters</strong>:   The characters, particularly the eccentric scientist Rick Sanchez and his good-hearted but easily influenced grandson Morty Smith, are multi-dimensional. Rick's intelligence and moral ambiguity, contrasted with Morty's naivety, create compelling dynamics.</p>

                <p><span>3</span>.   The <strong>Sci-Fi Elements</strong>:   The show explores various sci-fi concepts like alternate realities, time travel, and alien species. Its creative and often unpredictable approach to these themes captivates fans of the genre.</p>

                <p><span>4</span>.   It's <strong>Cultural References</strong>:  "Rick and Morty" frequently references popular culture, and philosophical ideas. This makes the show intellectually stimulating and fun for viewers who enjoy catching these nods</p>

                <p><span>5</span>.   The <strong>Emotional Depth</strong>:   Despite its comedic exterior, the show delves into deeper themes like existentialism, the meaning of life, and the consequences of one's actions. This depth adds layers to the storytelling, making it more than just a comedy.</p>

                <p><span>6</span>.   <strong>Fan Engagement</strong>:    The show has a dedicated fanbase that engages deeply with the content, often creating memes, fan theories, and fan art. This community aspect helps maintain the show's popularity.</p>
            </div>
        </div>
    )
}