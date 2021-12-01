import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CovidDetails from '../components/CovidDetails';
// untuk menampilkan halaman details dan passing parameter yang berupa id

const Details = () => {
  const [covid, setCovid] = useState({});
  const { covidId } = useParams();

  useEffect(() => {    
    fetch(`https://disease.sh/v3/covid-19/countries/${covidId}`)
    .then(response => response.json())
    .then(data => setCovid(data));
    }, 
    // eslint-disable-next-line
  []);

  return(
    <>
      <Navigation />
      <CovidDetails covid={covid} />
      <Footer />
    </>
  );
}

export default Details;
