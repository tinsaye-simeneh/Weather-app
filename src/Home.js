import axios from "axios";
import React, { useEffect } from "react";
import "./style.css";
import logo from "./assets/img/loading.gif";

const cityName = [
  "London",
  "New York",
  "Tokyo",
  "Paris",
  "Berlin",
  "Moscow",
  "Addis Ababa",
  "Cairo",
  "Beijing",
  "Rome",
  "Madrid",
  "Buenos Aires",
  "Lagos",
  "Bangkok",
  "Lima",
  "Mexico City",
  "Bogota",
  "Istanbul",
  "Kinshasa",
  "Tehran",
  "Shanghai",
  "Lahore",
  "Karachi",
  "Delhi",
  "Dhaka",
  "Cape Town",
  "Sao Paulo",
  "Jakarta",
  "Seoul",
  "Mumbai",
  "Osaka",
  "Kolkata",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Philadelphia",
  "Phoenix",
  "San Antonio",
  "San Diego",
  "Dallas",
  "San Jose",
  "Austin",
  "Jacksonville",
  "San Francisco",
  "Indianapolis",
  "Columbus",
  "Fort Worth",
  "Charlotte",
  "Detroit",
  "El Paso",
  "Memphis",
  "Seattle",
  "Denver",
  "Washington",
  "Boston",
  "Nashville",
  "Baltimore",
  "Oklahoma City",
  "Louisville",
  "Portland",
  "Las Vegas",
  "Milwaukee",
  "Albuquerque",
  "Tucson",
  "Fresno",
  "Sacramento",
  "Long Beach",
  "Kansas City",
  "Mesa",
  "Atlanta",
  "Virginia Beach",
  "Omaha",
  "Colorado Springs",
  "Raleigh",
  "Miami",
  "Oakland",
  "Minneapolis",
  "Tulsa",
  "Arlington",
  "New Orleans",
  "Wichita",
  "Cleveland",
  "Tampa",
  "Bakersfield",
  "Aurora",
  "Anaheim",
  "Honolulu",
  "Santa Ana",
  "Riverside",
  "Corpus Christi",
  "Lexington",
  "Stockton",
  "St. Louis",
  "Saint Paul",
  "Henderson",
  "Cincinnati",
  "Pittsburgh",
  "Greensboro",
  "Anchorage",
  "Plano",
  "Lincoln",
  "Orlando",
  "Irvine",
  "Newark",
  "Toledo",
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
        .catch((error) => {
          console.log(error);
        })
    );
  }
  await Promise.all(promises).then((data = cities));
  return data;
};
export default function Home() {
  const city = cityName[0];
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    async function apiCalled() {
      const tempData = await apiCall();
      setData(tempData);
      setLoading(false);
    }
    setInterval(() => apiCalled(), 5000);
  }, [city]);

  return (
    <>
      {loading && (
        <div className="loader mx-auto">
          <img src={logo} alt="loader" />
        </div>
      )}
      {data &&
       <div className="container-fluid bg-dark">
        <div className="row mt-5">
      
          {data?.map((item) => (
            <div className="col-md-3 col-12 mx-auto m-2 pt-3">
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
}
    </>
  );
}
