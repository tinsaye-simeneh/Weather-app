import axios from "axios";
import React from "react";

const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=nairobi,kenya&appid=c60704567ca7e06c9044295363aae45f";

export default function Main() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      <p>{post.name}</p>
    </div>
  );
}