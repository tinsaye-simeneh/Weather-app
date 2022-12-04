import axios from "axios";
import React from "react";

const cityName = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Patna", "Indore", "Thane", "Bhopal", "Visakhapatnam", "Vadodara", "Firozabad", "Ludhiana", "Rajkot", "Agra", "Siliguri", "Nashik", "Faridabad", "Patiala", "Meerut", "Kalyan-Dombivali", "Vasai-Virar", "Varanasi", "Srinagar", "Dhanbad", "Jodhpur", "Amritsar", "Raipur", "Allahabad", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada", "Madurai", "Guwahati", "Chandigarh", "Hubli-Dharwad", "Amroha", "Moradabad", "Gurgaon", "Aligarh", "Solapur", "Ranchi", "Jalandhar", "Tiruchirappalli", "Bhubaneswar", "Salem", "Warangal", "Mira-Bhayandar", "Thiruvananthapuram", "Bhiwandi"]

const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName[2] + "&appid=c60704567ca7e06c9044295363aae45f";

export default function Main() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div className="container mt-5 border p-4 rounded">
      <div className="row">
        <div className="col-4 bg-warning">
          <h6>{post.name}</h6>
          <span className="d-block">  {post.weather[0].description}</span>
          <span className="d-block"> Minimum Temprature: {post.main.temp_min}</span>
          <span> Maximum Temprature: {post.main.temp_max}</span>
      </div>
      </div>
    </div>
  );
}
   