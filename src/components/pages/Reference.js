import axios from 'axios';
import React from "react";
import Header from '../layouts/Header';
import Loading from '../layouts/Loading';
import Footer from "../layouts/Footer";
import Contents from "../layouts/Contents";
import WrapTitle from '../layouts/WrapTitle';
import ReferInfo from '../info/ReferInfo';
import JavasInfo from '../info/JavasInfo';
import CssInfo from '../info/CssInfo';
import ContInfo from '../layouts/ContInfo';

class Reference extends React.Component {
    state = {
        isLoading: true,
        menu: 0,
        refers: [],
        refers2: [],
        refers3: []
    }

    getRefer = async () => {
        const {
            data: {
                data : {htmlRefer},
            },
        } = await axios.get("https://KIMSEOUNYOUNG.github.io/react999/src/assets/json/html.json");
        // console.log(htmlRefer);
        this.setState({refers:htmlRefer, isLoading:false});

        const {
            data: {
                data : {cssRefer},
            },
        } = await axios.get("https://KIMSEOUNYOUNG.github.io/react999/src/assets/json/css.json");
        // console.log(htmlRefer);
        this.setState({refers2:cssRefer, isLoading:false});

        const {
            data: {
                data : {javaRefer},
            },
        } = await axios.get("https://KIMSEOUNYOUNG.github.io/react999/src/assets/json/javaRefer.json");
        console.log(htmlRefer);
        this.setState({refers3:javaRefer, isLoading:false});
    }

    changeMenu = (menuIndex) =>{
        this.setState({menu : menuIndex});
    }
    
    componentDidMount(){
        setTimeout(()=>{
            this.getRefer();
        }, 2000);
    }

    render(){
        const {isLoading, refers, refers2, refers3} = this.state;

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
                                    <div className="wrap__title">
                                        <WrapTitle text={['REFERENCE','BOOK']} />
                                    </div>
                                    <div className="refer__cont">
                                        <div className="table">
                                            <h3 className={`${this.state.menu === 0? 'active': ''}`} onClick={() => this.changeMenu(0)}>HTML</h3>
                                            <h3 className={`${this.state.menu === 1? 'active': ''}`} onClick={() => this.changeMenu(1)}>CSS</h3>
                                            <h3 className={`${this.state.menu === 2? 'active': ''}`} onClick={() => this.changeMenu(2)}>JAVASCRIPT</h3>
                                            
                                            <ul className={`${this.state.menu === 0? 'show': ''}`}>
                                                {refers.map((refer)=>(
                                                    <ReferInfo 
                                                        key={refer.id}
                                                        link={refer.link}
                                                        id={refer.id}
                                                        desc1={refer.desc1}
                                                        desc2={refer.desc2}
                                                        title={refer.title}
                                                        element={refer.element}
                                                        definition={refer.definition}
                                                        tag={refer.tag}
                                                        use={refer.use}
                                                        version={refer.version}
                                                        view={refer.view}
                                                    />
                                                ))}
                                            </ul>
                                            <ul className={`${this.state.menu === 1? 'show': ''}`}>
                                                {refers2.map((css)=>(
                                                    <CssInfo 
                                                        key={css.id}
                                                        link={css.link}
                                                        id={css.id}
                                                        desc1={css.desc1}
                                                        desc2={css.desc2}
                                                        title={css.title}
                                                        element={css.default}
                                                        definition={css.definition}
                                                        apply={css.apply}
                                                        use={css.use}
                                                        version={css.version}
                                                    />
                                                ))}
                                            </ul>
                                            <ul className={`${this.state.menu === 2? 'show': ''}`}>
                                                {refers3.map((javas)=>(
                                                    <JavasInfo 
                                                        key={javas.id}
                                                        link={javas.link}
                                                        id={javas.id}
                                                        desc1={javas.desc1}
                                                        desc2={javas.desc2}
                                                        title={javas.title}
                                                        return1={javas.return1}
                                                        definition={javas.definition}
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