import React from 'react';
import Contents from '../layouts/Contents';
import Footer from '../layouts/Footer';
import Header from '../layouts/Header';
import ContInfo from "../layouts/ContInfo";
import {Link} from 'react-router-dom';

class JavasDetail extends React.Component {

    componentDidMount(){
        const { location, history } = this.props;
        console.log(location)
        if( location.state === undefined ){
            history.push('/reference');
        }
    }

    render(){
        const {location} = this.props;
        if(location.state){
            console.log(location.state)
            return (
                <div>
                    <Header />
                        <Contents>
                            <section id="referCont">
                                <div className="container">
                                    <div className="refer__detail pt200">
                                        <h3>{location.state.title}</h3>
                                        <p>{location.state.desc2}</p>
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>특징</th>
                                                    <th>설명</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>반환값</th>
                                                    <td>{location.state.return1}</td>
                                                </tr>
                                                <tr>
                                                    <th>파라미터</th>
                                                    <td>{location.state.parameters}</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <h4>정의(Definition)</h4>
                                        <ul>
                                            {location.state.definition.map((defer)=>(
                                                <li key={defer.toString()}>{defer}</li>
                                            ))}
                                        </ul>
                                        <Link className="list-btn" to="/reference">목록보기</Link>
                                    </div>
                                </div>
                            </section>
                            <ContInfo />
                        </Contents>
                    <Footer />
                </div>
            
            )
        } else {
            return null;
        }
        
    }
}

export default JavasDetail;