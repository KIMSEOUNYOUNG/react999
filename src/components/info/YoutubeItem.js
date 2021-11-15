import React from "react";

const YoutubeItem = (props) => {
    console.log(props)
    return (
        <div>
            <a href="/">
                <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title} />
                <p className="title">{props.video.snippet.title}</p>
            </a>
        </div>
    )
}
export default YoutubeItem;