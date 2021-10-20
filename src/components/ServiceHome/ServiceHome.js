import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './ServiceHome.css';

// home page services details parents components  goes here
const ServiceHome = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./services-db.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className="container">
            <div className="row g-4 py-4">

                {
                    services.slice(0, 4).map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default ServiceHome;