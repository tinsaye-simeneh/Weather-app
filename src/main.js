import axios from "axios";
import React from "react";

const baseURL = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=c60704567ca7e06c9044295363aae45f";

export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <h1>{post.coord.lon}</h1>
    </div>
  );
}