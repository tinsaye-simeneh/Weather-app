import axios from "axios";
import React, { useEffect } from "react";
import "./style.css";

const cityName = ["London", "New York", "Tokyo", "Paris", "Berlin", "Moscow"];

const apiCall = async () => {
  let data = [];
  let cities = [];
  let promises = [];

  for (let i = 0; i < cityName.length; i++) {
    promises.push(
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName[i]}&appid=4a671f94fff5d1f7378d46c3fff8e095`
        )
        .then((response) => {
          cities.push(response);
        })
    );
  }
  await Promise.all(promises).then((data = cities));
  return data;
};
export default function Main() {
  const city = cityName[0];
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    async function apiCalled() {
      const tempData = await apiCall();
      setData(tempData);
    }
    setInterval(() => apiCalled(), 5000);
  }, [city]);

  return (
    <>
      <div className="container">
        <div className="row mt-5 bg-white">
          {data?.map((item) => (
            <div className="col-4 mx-auto m-2 pt-3">
              <div className="bg-primary p-3 border-none rounded border-secondary">
                <h3 className="text-white">{item.data.name}, {item.data.sys.country} </h3>
                <span className="text-white">
                  Current Temprature: { Number((item.data.main.temp - 273.15).toFixed(2))}°C
                </span>
                <span>Humidity: {item.data.main.humidity}</span>
                <span>Pressure: {item.data.main.pressure}</span>
                <span>Wind Speed: {item.data.wind.speed}</span>
                <span>Wind Direction: {item.data.wind.deg}</span>
                <span>Time: {item.data.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
