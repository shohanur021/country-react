import React from 'react';
import { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css'

const Home = () => {
    const [countries,setCountries] = useState([]);
    useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=> res.json())
    .then(data => setCountries(data))
  },[])
  
    return (
        <div>
            <h1>total country : {countries.length}</h1>
            <div className="country-container">
            {
                countries.map(ct => <Country country={ct} key={ct.alpha3Code}></Country>)
            }
            </div>
        </div>
    );
};

export default Home;