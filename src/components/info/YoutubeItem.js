import React from "react";

const YoutubeItem = (props) => {
    console.log(props.video.id.videoId)
    return (
        <div>
            <a href={`https://www.youtube.com/watch?v=${props.video.id.videoId}`}>
                <img src={props.video.snippet.thumbnails.medium.url} alt={props.video.snippet.title} />
                <p className="title">{props.video.snippet.title}</p>
            </a>
        </div>
    )
}
export default YoutubeItem;