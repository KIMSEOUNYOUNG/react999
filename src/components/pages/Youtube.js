import React from "react";
import { useEffect, useState } from "react";
import YoutubeList from '../info/YoutubeList';
import YoutubeSearch from '../info/YoutubeSearch';
import Contents from "../layouts/Contents";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import WrapTitle from "../layouts/WrapTitle";
import ContInfo from "../layouts/ContInfo";

function Youtube(){
    const [videos, setVideos] = useState([]);

    const start = () => {
        setTimeout(()=>{
            alert("ddd");
        }, 2000);
    }

    const search = (query) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=AIzaSyBgxJkkTLxZdkGgn13bbuN_YzDxDyLCHj4&maxResults=30&type=video`, requestOptions)
            .then(response => response.json())
            .then(result => setVideos(result.items))
            .catch(error => console.log('error', error));
    }

    useEffect( () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=haha ha&key=AIzaSyBgxJkkTLxZdkGgn13bbuN_YzDxDyLCHj4&maxResults=30&type=video", requestOptions)
            .then(response => response.json())
            // .then(result => console.log(result.items))
            .then(result => {
                setVideos(result.items);
                start();
            })
            .catch(error => console.log('error', error));
    }, []);

    return (
        <div>
            <Header />
            <Contents>
                <section id="youtubeCont">
                    <div className="container">
                        <WrapTitle text={["youtube", "reference"]} />
                        <div className="youtube__cont">
                            <YoutubeSearch onSearch={search} />
                            <div className="youtube">
                                <YoutubeList videos={videos} />
                            </div>
                        </div>
                    </div>
                </section>
                <ContInfo />
            </Contents>
            <Footer />
        </div>
    )
 }

export default Youtube;