import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const CovidDetails = (data) => {
  const [covids, setCovids] = useState([]);
  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/countries/indonesia')
    .then(response => response.json())
    .then(data => setCovids(data));

    // eslint-disable-next-line
  }, []);
  return(
    <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                  <img className="card-img-top mb-5 mb-md-0" src="https://www.who.int/images/default-source/health-topics/coronavirus/corona-virus-getty.tmb-1200v.jpg?Culture=en&sfvrsn=217a6a68_36" alt={data.country} />
                </div>
                <div className="col-md-6">
                {/* <Card.Title>{data.Country}</Card.Title>
          <Card.Text>Cases {data.cases}</Card.Text>
          <Card.Text>Deaths {data.deaths}</Card.Text>
          <Card.Text>Recovered {data.recovered}</Card.Text>
          <Card.Text>Today's Cases {data.todayCases}</Card.Text>
          <Card.Text>Today's deaths {data.todayDeaths}</Card.Text>
          <Card.Text>Active {data.active}</Card.Text>
          <Card.Text>Critical {data.critical}</Card.Text> */}
          {/* { covids.map(covid => covid = {covid} ) }
                <h1 className="display-5 fw-bolder">Country: {covids.covid.country}</h1> */}
                    <div className="small mb-1">Continent: Asia</div>   
                    <div className="small mb-1">Cases: 4256409</div>                
                    <div className="small mb-1">Today Cases: 297</div>                                                        
                    <div className="small mb-1">Deaths: 143830</div>                
                    <div className="small mb-1">Today Deaths: 11</div> 
                    <div className="small mb-1">Recovered: 4104657</div>                                                                       
                    <div className="small mb-1">Today Recovered: 1313</div>
                                                                                      
                    <div className="d-flex">
                        <Link className="btn btn-outline-dark flex-shrink-0" to="/">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default CovidDetails;
