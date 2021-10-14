
const DisplayWeather = ({ data, name, temp, description, icon, humidity, wind }) => {
  const img = `http://openweathermap.org/img/wn/${icon}.png`
  return (
  <div className="weather">
    <h2 className="city">Weather in {name}</h2>
    <div className="temp"> {temp}°C</div>
    <div className="flex">
      <img className="icon" src={img} alt=""/>
      <div className="description">{description}</div>
    </div>
    <div className="humidity">Humidity: {humidity}%</div>
    <div className="wind">Wind speed: {wind}km/h</div>
  </div>
  )
}

DisplayWeather.defaultProps = {
  name: 'Cracow',
  temp: '9.4',
  description: "clearly sky",
  humidity: "73",
  wind: "12",
  icon: "01d"
}

export default DisplayWeather;
