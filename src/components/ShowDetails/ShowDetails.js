import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import './ShowDetails.css';

const ShowDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("/services-db.json")
      .then((res) => res.json())
      .then(
        (result) => {
          const allDetails = result?.find((details) => details.id == id);
          setDetails(allDetails);
        },
        [id]
      );
  });

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-center align-items-center flex-column">
              <img  className="img-fluid details-image" src={details?.image} alt="" />
              <h3 className="pt-3">{details?.title}</h3>
              <p>{details?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
