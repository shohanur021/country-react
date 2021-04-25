import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router';

const CountryDetails = () => {
    const {countryName} = useParams();
    const [countryInfo,setCountryInfo] = useState([{}]);
  
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res=> res.json())
        .then(data => setCountryInfo(data))
      },[])
      console.log(countryInfo);

    const countryDetailsStyle={
        textAlign:'center'
    }
    const flagstyle ={
        height:'320px',
        width:'320px'
    }

    return (
        <div style={countryDetailsStyle}>
             <img src={countryInfo[0].flag} alt="" style={flagstyle}></img>
             <h2>This is {countryInfo[0].name}</h2>
             <p>Capital  Of {countryInfo[0].name} is {countryInfo[0].capital}</p>
             <p>Total population is {countryInfo[0].population}</p>
             <p>It is in {countryInfo[0].region} region</p>
             <p><small>Nativename is {countryInfo[0].nativeName}</small></p>
        </div>
    );
};

export default CountryDetails;