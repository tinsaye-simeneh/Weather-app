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

export default function Main() {
        const city = cityName[0];
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=32e0ef17bef62761317bf1cbfa079e5b`
      )
      .then((res) => {
        console.log(res.data);
      });
     

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-4 bg-primary border rounded">
         {}
          </div>
        </div>
      </div>
    </>
  );
}
