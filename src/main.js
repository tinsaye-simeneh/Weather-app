import axios from "axios";
import React from "react";

const cityName = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Kolkata",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Surat",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Patna",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Vadodara",
  "Firozabad",
  "Ludhiana",
  "Rajkot",
  "Agra",
  "Siliguri",
  "Nashik",
  "Faridabad",
  "Patiala",
  "Meerut",
  "Kalyan-Dombivali",
  "Vasai-Virar",
  "Varanasi",
  "Srinagar",
  "Dhanbad",
  "Jodhpur",
  "Amritsar",
  "Raipur",
  "Allahabad",
  "Coimbatore",
  "Jabalpur",
  "Gwalior",
  "Vijayawada",
  "Madurai",
  "Guwahati",
  "Chandigarh",
  "Hubli-Dharwad",
  "Amroha",
  "Moradabad",
  "Gurgaon",
  "Aligarh",
  "Solapur",
  "Ranchi",
  "Jalandhar",
  "Tiruchirappalli",
  "Bhubaneswar",
  "Salem",
  "Warangal",
  "Mira-Bhayandar",
  "Thiruvananthapuram",
  "Bhiwandi",
];

const baseURL =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  cityName[2] +
  "&appid=c60704567ca7e06c9044295363aae45f";

export default function Main() {
  const [res, setRes] = React.useState(null);
  const [city, setCity] = React.useState("Mumbai");
  const [temp, setTemp] = React.useState("");
  const [minTemp, setMinTemp] = React.useState("");
  const [maxTemp, setMaxTemp] = React.useState("");
  const [humidity, setHumidity] = React.useState("");
  const [pressure, setPressure] = React.useState("");
  const [windSpeed, setWindSpeed] = React.useState("");
  const [windDeg, setWindDeg] = React.useState("");
  const [weather, setWeather] = React.useState("");
  const [weatherIcon, setWeatherIcon] = React.useState("");
  const [weatherDescription, setWeatherDescription] = React.useState("");
  const [weatherMain, setWeatherMain] = React.useState("");
  const [weatherId, setWeatherId] = React.useState("");
  const [sunrise, setSunrise] = React.useState("");
  const [sunset, setSunset] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [cityName, setCityName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState("");

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setRes(response.data);
      setTemp(res.data.main.temp);
      setMinTemp(res.data.main.temp_min);
      setMaxTemp(res.data.main.temp_max);
      setHumidity(res.data.main.humidity);
      setPressure(res.data.main.pressure);
      setWindSpeed(res.data.wind.speed);
      setWindDeg(res.data.wind.deg);
      setWeather(res.data.weather);
      setWeatherIcon(res.data.weather[0].icon);
      setWeatherDescription(res.data.weather[0].description);
      setWeatherMain(res.data.weather[0].main);
      setWeatherId(res.data.weather[0].id);
      setSunrise(res.data.sys.sunrise);
      setSunset(res.data.sys.sunset);
      setCountry(res.data.sys.country);
      setCityName(res.data.name);
      setDate(new Date().toLocaleDateString());
      setTime(new Date().toLocaleTimeString());
    });
  }, []);

  if (!res) return null;

  return (
    <div className="container mt-5 border p-4 rounded">
      <div className="row">
        <div className="col-4 bg-warning">
          <h6>{res.name}</h6>
          <span className="d-block"> {res.weather[0].description}</span>
          <span className="d-block">
            {" "}
            Minimum Temprature: {res.main.temp_min}
          </span>
          <span> Maximum Temprature: {res.main.temp_max}</span>
        </div>
      </div>
    </div>
  );
}
