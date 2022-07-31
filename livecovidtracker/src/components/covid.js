import React, { useEffect,useState } from 'react'
import './covid.css';


   const Covid = () => {
        
    const[data,setData]=useState([]);

        const getCovidData=async() =>{
          try{
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData=await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
              
            }
                  catch(err)
                  {
                    console.log(err);
                  }
                }
                 
                  useEffect(() => {
  
      getCovidData();
  
    },[]);
  
  return (
    <>
    <section>
      <h1>LIVE</h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>

      <ul>
        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p className="card__name"><span> OUR </span> COUNTRY</p>
                    <p className="card__total card__small">INDIA</p>
                </div>
            </div>
        </li>

        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p className="card__name"><span> TOTAL </span> RECOVERED</p>
                    <p className="card__total card__small">{data.recovered}</p>
                </div>
            </div>
        </li>

        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p className="card__name"><span> TOTAL </span> CONFIRMED</p>
                    <p className="card__total card">{data.confirmed}</p>
                </div>
            </div>
        </li>

        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p className="card__name"><span> TOTAL </span> DEATHS</p>
                    <p className="card__total card">{data.deaths}</p>
                </div>
            </div>
        </li>

        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p className="card__name"><span> TOTAL </span> ACTIVE</p>
                    <p className="card__total card">{data.active}</p>
                </div>
            </div>
        </li>

        <li className="card">
            <div className="card__main">
                <div className="card__inner">
                    <p className="card__name"><span> COVID </span>CARE </p>
                    <p className="card__total card">WEAR MASK,BE SAFE</p>
                </div>
            </div>
        </li>
      </ul>
      </section>
    </>
  )
}

export default Covid
