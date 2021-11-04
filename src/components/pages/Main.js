import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Contents from "../layouts/Contents";

function Main(){
    return (
        <div>
            <Header />
            <Contents>
                <section id="mainCont">
                    <h2 className="sr-only">메인 컨텐츠 영역입니다.</h2>
                    <div className="main__cont">
                        <div>WE PROVIDE</div>
                        <div>VISUAL CODING</div>
                        <div>SOLUTIONS</div>
                        <div>FOR YOU WEBS</div>
                    </div>
                </section>
            </Contents>

            <Footer />
        </div>
    )
}

export default Main;