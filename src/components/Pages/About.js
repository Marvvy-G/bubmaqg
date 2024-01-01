import React, {Component} from 'react';
import About from '../Common/About';
import Footer from '../Common/Footer';
import Header from '../Common/Header';
import img from '../assets/img/aboutus.jpg';




class Abouts extends Component {
    render(){
        return(
           
            <div>
                   <Header 
                    title="About Us"
                    subtitle="It's really a great story" 
                    showButton={false }
                    img= {img}
                /> 
                         
                <About />
                <Footer />   
            </div>
        )
    }
}

export default Abouts;
