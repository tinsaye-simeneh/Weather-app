import axios from "axios";
import React, { useEffect } from "react";
import "./style.css";

const cityName = [
  "London",
  "New York",
  "Tokyo",
  "Paris",
  "Berlin",
  "Moscow",
  "Addis Ababa",
];

const apiCall = async () => {
  let data = [];
  let cities = [];
  let promises = [];

  for (let i = 0; i < cityName.length; i++) {
    promises.push(
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName[i]}&appid=da696e8a0c7fcf7b45e39e3efa1862a0`
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
      <div className="container-fluid bg-dark">
        <div className="row mt-5">
          {data?.map((item) => (
            <div className="col-md-4 col-12 mx-auto m-2 pt-3">
              <div className="bg-dark p-3 border rounded border-secondary">
                <div className="text-center bg-primary">
                  <h3 className="text-white">
                    {item.data.name}, {item.data.sys.country}{" "}
                  </h3>
                </div>
                <div className="text-center">
                  <span className="text-white">
                    Current Temprature:{" "}
                    {Number((item.data.main.temp - 273.15).toFixed(2))}°C
                  </span>
                  <span className="text-white">
                    Humidity: {item.data.main.humidity}
                  </span>
                  <span className="text-white">
                    Pressure: {item.data.main.pressure}
                  </span>
                  <span className="text-white">
                    Wind Speed: {item.data.wind.speed}
                  </span>
                  <span className="text-white">
                    Wind Direction: {item.data.wind.deg}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
