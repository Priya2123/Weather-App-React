import React, {useState} from 'react';
const api ={
  key: "e501cc7fe0dd9fef44905af228e9e3d9",
}
function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const search = event => {
    if(event.key === "Enter"){
      // fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      // fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=${api.key}`)
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPId=${api.key}`)
       .then(res => res.json())
       .then(result => {setWeather(result);
                        setQuery('');
                        console.log(result);
                      });
    }
  }
  const dateBuilder = (d) => {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];
    let months = ["January", "February","March", "April", "May", "June", "July","August", "September" ,"October", "November" ,"December"];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'} >
     <main>
     <div className="search-box">
       <input type="text" placeholder="Search..." className="search-bar" onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} /> 
     </div>
     {(typeof weather.main != "undefined") ? (
       <div>
            <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country} </div>
            <div className="date">{dateBuilder(new Date())} </div>
          </div>
          <div className="weather-box">
            <div className="temperature">{Math.round(weather.main.temp)}°C </div>
            <div className="weather">{weather.weather[0].main} </div>
          </div>
        </div>
     ) : ('') }
       
     </main>
    </div>
  );
}

export default App;
