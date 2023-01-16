import React, {Component} from 'react';
import Header from '../Common/Header';
import img from '../assets/img/header-bgbg.jpg';

//Re-usable components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import About from '../Common/About';
import Footer from '../Common/Footer';

class Home extends Component {
    render(){
        return(
            <div>
                <Header 
                    title="Bubmaq-G Investment Limited"
                    subtitle="The Home of Solutions!"
                    buttonText="Tell me more "
                    link="/services"
                    showButton={true}
                    img= {img}
                /> 
                <Services />
                <Portfolio />
                <About />
                <Footer /> 
                
            </div>
        )
    }
}

export default Home;