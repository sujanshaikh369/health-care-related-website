import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';
const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])
    useEffect(() => {
        fetch('./testimonialbd.json')
            .then(res => res.json())
            .then(data => setTestimonials(data));
    }, []);
    return (
        <div>
            <NavBar />
            <div className="container my-4">
                <div className="row">
                    {
                        testimonials.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Testimonials;