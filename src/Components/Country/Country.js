import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name,capital,region} = props.country;
    const countryStyle = {
        border:'1px solid red',
        margin:'7px',
        padding:'5px',
        paddingLeft:'12px',
        borderRadius:'5px',
        width:'22%'
    }
    return (
        <div style={countryStyle}>
            <h3>Country Name : {name}</h3>
            <p>Capital : {capital}</p>
            <p>Region : {region}</p>
            <Link to={`/about/${name}`}><button>Click me</button></Link>
        </div>
    );
};

export default Country;