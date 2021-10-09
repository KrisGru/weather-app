
const DisplayWeather = ({ data }) => (

  <div className="weather">
  {console.log(data)}
    <h2 className="city">Weather in {data.name}</h2>
    <div className="temp">{data.main.temp}°C</div>
    <img className="icon" src='./' alt=""/>
    <div className="description">{data.weather[0].description}</div>
    <div className="humidity">Humidity: %</div>
    <div className="wind">Wind speed: km/h</div>
  </div>
)

export default DisplayWeather;
