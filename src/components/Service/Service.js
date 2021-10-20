import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

// home services details child components  goes here
const Service = (props) => {
    const { title, description, image, id } = props.service;
    return (
        <div className="col-md-6">
            <div className="card h-100">
                <img src={image} className="card-img-top img-service" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description.slice(0, 100)}</p>
                </div>
                <div className="card-footer">
                    <Link to={`/showdetails/${id}`}><button className='details-btn'>Details</button></Link>
                </div>
            </div>
        </div>
    );
};
export default Service;