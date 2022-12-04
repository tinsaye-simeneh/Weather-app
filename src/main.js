import axios from "axios";
import React, { useEffect } from "react";

const cityName = [
  "London",
  "New York",
  "Tokyo",
  "Paris",
  "Berlin",
  "Moscow",
];

const apiCall = async ()=>{
  let data = [];
  let cities = [];
  let promises = [];

  for (let i = 0; i < cityName.length; i++) {
    promises.push(
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName[i]}&appid=32e0ef17bef62761317bf1cbfa079e5b`).then(response => {
        cities.push(response);
      })
    )
  }
  await Promise.all(promises).then(data = cities);
  return data;
  
}
export default function Main() {
  const city = cityName[0];
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  useEffect(() => {
      async function apiCalled(){
        const tempData = await apiCall();
        setData(tempData);
      }
      setInterval(()=>apiCalled(),5000)
    },[city]
  )

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-4 bg-primary border rounded">
           {data?.map(item => <div>{item.data.name}<h2>{item.data.main.temp}</h2></div>)}
          </div>
        </div>
      </div>
    </>
  );
}
