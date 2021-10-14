import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import DisplayWeather from './DisplayWeather';

const apiKey = '33fa8710f37acb9454123324f908ee11'

function App() {
  const [ cityInput, setCityInput] = useState('');
  const [ dataWeather, setDataWeather ] = useState('');

  //fetch weather
  const fetchWeather = (cityInput) => {(
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityInput+"&units=metric&appid="+apiKey)
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === '400') {
        return (setDataWeather(null))
      } else{
        setDataWeather(data)
      }
    }
  )}

  //
  const cityBackground = (cityInput) => ( document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+cityInput+ "')")

  return (
    <div className="App">
      <div className="search">
        <input type="text" className="search-bar"
          placeholder="search"
          value={cityInput}
          onChange={(e)=>setCityInput(e.target.value)}
          onKeyPress={(event)=> {if(event.key=== 'Enter'){fetchWeather(cityInput); setCityInput(''); cityBackground(cityInput)}}} />
        <button onClick={()=> {fetchWeather(cityInput); setCityInput(''); cityBackground(cityInput) }}><FaSearch /></button>
      </div>
      {dataWeather ?
        <DisplayWeather
          name={dataWeather.name}
          icon = {dataWeather.weather[0].icon}
          description = {dataWeather.weather[0].description}
          temp = {dataWeather.main.temp}
          humidity = {dataWeather.main.humidity}
          speed = {dataWeather.wind.speed}
        />
        : <DisplayWeather />}
    </div>
  );
}

export default App;
