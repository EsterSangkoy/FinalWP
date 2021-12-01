import React from 'react';
import { Link } from 'react-router-dom';

const CovidItem = (props) => {    

    return(
    <div className="col mb-5">
        <div className="card h-100">
            <img className="card-img-top" src="https://www.who.int/images/default-source/health-topics/coronavirus/corona-virus-getty.tmb-1200v.jpg?Culture=en&sfvrsn=217a6a68_36" alt={props.covid.country} />
            <div className="card-body p-4">
                <div className="text-center">
                    <h5 className="fw-bolder">{props.covid.country}</h5>
                    Cases: {props.covid.cases}
                </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                    <Link className="btn btn-outline-dark mt-auto" to={`/details/${props.covid.country}`}>View Details</Link>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CovidItem;
