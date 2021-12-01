import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Covids from '../components/Covids';
import Footer from '../components/Footer';
// untuk menampilkan halman utama
const Home = () => {
  return(
    <>
      <Navigation />
      <Header />
      <Covids />
      <Footer />
    </>
  );
}

export default Home;
