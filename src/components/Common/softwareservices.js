import React, {Component} from 'react';
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper/modules'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

class SoftwareServices extends Component {
    render(){
        return(
            <section className="page-section" id="services">
            <div className="container">
                <div className="text-center">
                    <h3 className="section-subheading text-muted" style={{ color:"red" }}><strong>New Annoucement comes up on Monday. Enjoy the Holiday our Dearest Bubmaq-G family!</strong>.</h3>
                    <h2 className="section-heading text-uppercase">Software Services</h2>
                    <h3 className="section-subheading text-muted">We are committed to excellence, convenience and affordability.</h3>
                </div>
                <div className="row text-center">
                 <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween ={50}
                    slidesPerView={3}
                    Navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                 >
                 <SwiperSlide>
                    <a href='https://e-ticket-b9jv.onrender.com/'><img src="assets/img/about/Bus_tic_System.jpg" alt="" style={{width: "100%", height:"50vh"}} /></a>
                 </SwiperSlide>
                 <SwiperSlide>
                    <a href='https://eyegateschool.com.ng/'>
                    <img src="assets/img/about/EGS.png" alt="" style={{width: "100%", height:"50vh"}} />
                    </a>
                 </SwiperSlide>
                 <SwiperSlide>
                    <a href='https://jucko.com.ng/?v=27e8a66341b2'>
                    <img src="assets/img/about/juckostore.png" alt="" style={{width: "100%", height:"50vh"}} />
                    </a>
                 </SwiperSlide>
                 <SwiperSlide>
                    <a href='https://e-ticket-b9jv.onrender.com/'>
                    <img src="assets/img/about/Bus_tic_System.jpg" alt="" style={{width: "100%", height:"50vh"}} />
                    </a>
                 </SwiperSlide>
                 </Swiper>

                </div>
            </div>
        </section>
        )
    }
}

export default SoftwareServices;