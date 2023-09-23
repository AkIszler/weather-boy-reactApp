/* eslint-disable no-unused-vars */
import React, {useState, useRef} from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState({});
  const[location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=18d6efc578e3bf3e789bcf9e95da92e5`
  
  const searchLocation1 = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)// get data in console to verify weather;
      });
      setLocation("");
    }
  };

    return (
    <div className="app">
      <div className="search">
        <input type="text"
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation1}
          placeholder="Location"
        />
      </div>
      <div className="container">
        <div className="top" >
          <div className="location">
            <p>{  data.name }</p>
        </div>
          <div className="temp">
            {data.main ? <h2>{data.main.temp.toFixed() } °F</h2> : null}
        </div>
        <div className="description">
            {data.weather ? <p>{data.weather[0].description} </p> : null}
            
          </div>
          </div>
        <div className="bottom">
          <div className="feels">
            { data.main ? <p>{ data.main.feels_like.toFixed() } °F </p>: null }
            <p>Feels like</p>
          </div>
          <div className="humitdy">
            { data.main ? <p>{ data.main.humidity }% </p>: null }
            <p>Humidity</p>
          </div>
          <div className="windspeed">
            { data.wind ? <p>{ data.wind.speed.toFixed() } mph </p>: null }
            <p>Windspeed</p>
          </div>
      </div>
      </div>
    </div>
  );
}

export default App;

