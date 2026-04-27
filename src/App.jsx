
import { Suspense } from 'react'
import './App.css'
import Countrys from './components/countrys/countrys'

const countryPromise = fetch('https://openapi.programming-hero.com/api/all')
    .then(res => res.json())

function App() {

    return (
    <>
        <Suspense fallback={<h4>Nadir vai Comming...</h4>}>  
            <Countrys countryPromise={countryPromise}></Countrys>
        </Suspense>
    </>
) 
}

export default App