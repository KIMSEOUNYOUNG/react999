import React, { useRef } from "react";

const YoutubeSearch = ({ onSearch }) => {

    const inputRef = useRef();

    const handleSeacrh = () => {
        const value = inputRef.current.value;
        console.log(value);
        onSearch(value);
    }

    const onClick = (e) => {
        e.preventDefault();
        //console.log("onClick");
        handleSeacrh();
    }

    const onkeyPress = (event) => {
        if (event.key === "Enter"){
            handleSeacrh();
        }
    }

    return (
        <div className="search">
            <label htmlFor="youtubeInput" className="sr-only">검색하기</label>
            <input ref={inputRef} id="youtubeInput" type="search" placeholder="검색하기" onKeyPress={onkeyPress} />
            <button type="submit" onClick={onClick}>검색</button>
        </div>
    )
}
export default YoutubeSearch;