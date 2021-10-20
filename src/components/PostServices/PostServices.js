import React from 'react';
import './PostServices.css';

// all services details child components  goes here
const PostServices = (props) => {
    const { title, price, detail, duration, image } = props.service;
    return (
        <div className="col-md-6">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt="..." width="300" height="400" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{detail}</p>
                </div>
                <div className="card-footer">
                    <p className="text-muted">BDT. {price}</p>
                    <p className="text-muted">{duration}</p>
                </div>
            </div>
        </div>
    );
};

export default PostServices;