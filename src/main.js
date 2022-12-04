import axios from "axios";
import React from "react";

const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=nairobi&appid=c60704567ca7e06c9044295363aae45f";

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
          <span> Maximum Temprature:{post.main.temp_max}</span>
      </div>
      </div>
    </div>
  );
}
   