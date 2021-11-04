import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Contents from "../layouts/Contents";

function Contact(){
    return (
        <div>
            <Header />
            <Contents>
                <section id="mainCont">
                    <h2 className="sr-only">연락처 컨텐츠 영역입니다.</h2>
                    <div className="main__cont">
                        <div className="l1">You are</div>
                        <div className="l2">already </div>
                        <div className="l3">doing well.</div>
                    </div>
                </section>
            </Contents>

            <Footer />
        </div>
    )
}

export default Contact;