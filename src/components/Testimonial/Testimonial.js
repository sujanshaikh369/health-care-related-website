import React from 'react';

const Testimonial = (props) => {
    const { name, comments, image } = props.testimonial;
    return (
        <div className="col-md-4">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt="..." width="300" height="400" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{comments}</p>
                </div>
                <div className="icon pb-1">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;