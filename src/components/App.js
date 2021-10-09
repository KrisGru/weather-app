import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import DisplayWeather from './DisplayWeather';

// const API = 'https://api.openweathermap.org/data/2.5/weather?q=kielce&units=metric&appid=33fa8710f37acb9454123324f908ee11'
const apiKey = '33fa8710f37acb9454123324f908ee11'

function App() {
  const [ cityInput, setCityInput] = useState('');
  const [ dataWeather, setDataWeather ] = useState('');
  const fetchWeather = (cityInput) => (
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+cityInput+"&units=metric&appid="+apiKey)
  )
    .then((response) => response.json())
    .then((data) => setDataWeather(data) )


  return (
    <div className="App">
      <div className="search">
        <input type="text" className="search-bar" placeholder="search"
          value={cityInput}
          onChange={(e)=>setCityInput(e.target.value)}
        />
        <button onClick={()=> { fetchWeather(cityInput); setCityInput('')}}>
          <FaSearch />
        </button>
      </div>
      <DisplayWeather data={dataWeather}/>
    </div>
  );
}

export default App;
