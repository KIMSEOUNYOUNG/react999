import React from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Contents from "../layouts/Contents";

function Youtube(){
    return (
        <div>
            <Header />
            <Contents>
                <section id="youtubeCont">
                    <div className="container">
                        <div className="wrap__title">
                            <h2><strong>Youtube</strong><em>Reference</em></h2>
                        </div>
                        <div className="youtube__cont">
                            <div className="youtube">
                                
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contactInfo">
                    <div className="contact__info">
                        <div>
                            <p>Let’s create something new</p>
                            <h3>LET`S Get IN<br />TOUCH</h3>
                            <a href="contact.html" className="contact">Contact Me</a>
                        </div>
                    </div>
                </section>
            </Contents>

            <Footer />
        </div>
    )
}

export default Youtube;