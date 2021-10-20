import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import PostServices from '../PostServices/PostServices';
const NewServices = () => {
    const [moreServices, setMoreServices] = useState([])
    useEffect(() => {
        fetch('./servicesdb.json')
            .then(res => res.json())
            .then(data => setMoreServices(data));
    }, [])
    return (
        <div>
            <NavBar></NavBar>
            <div className="container py-4">
                <div className="row g-4">
                    {
                        moreServices.map(service => <PostServices service={service}></PostServices>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NewServices;