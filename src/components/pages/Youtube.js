import React from "react";
import { useEffect, useState } from "react";
import YoutubeList from '../info/YoutubeList';
import YoutubeSearch from '../info/YoutubeSearch';
import Contents from "../layouts/Contents";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import WrapTitle from "../layouts/WrapTitle";
import ContInfo from "../layouts/ContInfo";
import Loading from "../layouts/Loading";
import { gsap } from "gsap";

function Youtube(){
    const [videos, setVideos] = useState([]);

    const start = () => {
        setTimeout(()=>{
            //loading-active 제거
            document.getElementById("loading").classList.remove("loading-active");
            gsap.set(".wrap__title h2 strong", {opacity: 0, y: 100});
            gsap.set(".wrap__title h2 em", {opacity: 0, y: 100});
            gsap.set("#header", {top: "-100%"});
            gsap.set("#footer", {bottom: "-100%"});
            gsap.set(".youtube__cont", {opacity: 0});

            gsap.to(".wrap__title h2 strong", {duration:0.4, opacity:1, delay: 1, y: 0, ease: "power2.out"});
            gsap.to(".wrap__title h2 em", {duration:0.4, opacity:1, delay: 1.4, y: 0, ease: "power2.out"});
            gsap.to("#header", {duration:0.4, top:0, delay: 1.8, ease: "power1.out"});
            gsap.to("#footer", {duration:0.4, bottom:0, delay: 2, ease: "power1.out"});
            gsap.to(".youtube__cont", {duration:0.4, delay: 2.8, opacity: 1});
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
            <Loading />
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