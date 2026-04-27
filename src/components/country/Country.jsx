// import React from 'react';
import { useState } from 'react';
import './country.css'


const Country = ({country, handleVisitedCountry, handleVisitFlage}) => {
    // console.log(handleVisitedCountry)
    const [visited, setVisited] = useState(false);



    const handleButton = () => {
        // step-1
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        // step-2
        // setVisited(visited ? false : true);
        // step-3
        setVisited(!visited);
        handleVisitedCountry(country);
    }
    // console.log(country)
    return (
        <div className={`country ${visited && 'visited'}`}>
            <img className='image' src={country.flags.flags.png} alt="" />
            <h3>Name : {country.name.common} </h3>
            <h3>Population : {country.population.population} </h3>
            <h3>Area : {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"} </h3>
            <button onClick={handleButton} className='button'>{visited ? 'Visited' : 'Not Visited'}</button>
            <button onClick={()=> {handleVisitFlage(country.flags.flags.png)}} className='button'>Add Flage Visite Country</button>
        </div>
    );
};

export default Country;