import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="container">
                <h1 className="text-center pt-5 bold about-title">About Us</h1>
                <div className="row our-mission py-5">
                    <div className="col-md-6 left-side">
                        <h4>OUR MISSION</h4>
                        <h2>There are no judgments here – No too much or not enough. No glares of disapproval. Here we keep open minds. We are nurturers. We seek only to encourage, empower and entertain. There is no one type. There is no one reason. There is no one way. What we are is a diverse community; what we have is a culture of fun; what there is, is room for everyone: all kinds of people with all kinds of goals who’ve chosen to come reach them with us. Crunch. No Judgments.</h2>
                    </div>
                    <div className="col-md-6">
                        <img src="https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;