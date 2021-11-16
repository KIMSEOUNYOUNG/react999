import axios from 'axios';
import React from 'react';
import Contents from '../layouts/Contents';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import Loading from "../layouts/Loading";
import WrapTitle from "../layouts/WrapTitle";
import ContInfo from "../layouts/ContInfo";
import ReferInfo from "../info/ReferInfo";

class Reference extends React.Component {
    state = {
        isLoading : true,
        refers: []
    }

    getRefer = async () => {
        const {
            data: {
                data: {htmlRefer},
            },
        } = await axios.get("https://KIMSEOUNYOUNG.github.io/react999/src/assets/json/html.json");
        this.setState({ htmlRefer, isLoading: false })
        
        console.log(htmlRefer)
    }

    componentDidMount(){
        setTimeout(()=>{
            this.getRefer();
        }, 2000)
    }
    
    render(){
        const {isLoading, htmlRefer} = this.state;

        return (
            <div>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div>
                        <Header />
                        <Contents>
                            <section id="referCont">
                                <div className="container">
                                    <WrapTitle text={['Reference','book']} />
                                    <div className="refer__cont">
                                        <div className="table">
                                            <h3>HTML</h3>
                                            <ul>
                                                {htmlRefer.map((refer) => (
                                                    <ReferInfo
                                                        key={refer.id}
                                                        link={refer.link}
                                                        id={refer.id}
                                                        title={refer.title}
                                                        element={refer.element}
                                                        desc2={refer.desc2}
                                                        version={refer.version}
                                                        view={refer.view}
                                                        use={refer.use}
                                                        tag={refer.tag}
                                                        definition={refer.definition}
                                                        desc1={refer.desc1}
                                                    />
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <ContInfo />
                        </Contents>
                        <Footer />
                    </div>
                )} 
            </div>
        )
    }
}

export default Reference;