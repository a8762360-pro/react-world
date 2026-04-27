import { use, useState } from "react"
import Country from "../country/Country";
import './countrys.css'

const Countrys = ({ countryPromise }) => {
    const [visitedCountry, setVisitedCountry] = useState([])

    const [visitFlage,setVisitFlage] = useState([])

    const handleVisitedCountry = (country) => {
        const newVisitedCountrys = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountrys)
    }

    const handleVisitFlage = (flage) => {
        const newvisitedFlage = [...visitFlage,flage];
        setVisitFlage(newvisitedFlage)
    }



    const countryesData = use(countryPromise);
    const countrys = countryesData.countries;
    return (
        <div>
            <h1>In the Country : {countrys.length}</h1>
            <h4>You and me visited country : {visitedCountry.length}</h4>
            <h4>Total visited flage : {visitFlage.length}</h4>
            <ol className="list">
                {
                    visitedCountry.map(country => <li
                    key={country.ccn3.ccn3}
                    >{country.name.common}</li>)
                }
            </ol>
            <div className="visit-flag-container">
                {
                    visitFlage.map((flage, index) => <img key={index} className="visit-flage" src={flage}></img>)
                }
            </div>
            <div className="countrys">
                {
                    countrys.map(country => <Country
                        key={country.ccn3.ccn3}
                        country={country}
                        handleVisitFlage={handleVisitFlage}
                        handleVisitedCountry={handleVisitedCountry}
                    ></Country>)
                }
            </div>
        </div>
    )
}

export default Countrys;