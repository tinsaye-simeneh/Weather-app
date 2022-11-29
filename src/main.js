import axios from 'axios';

export default function Quotes() {
  fetch('https://open-weather13.p.rapidapi.com/city/landon')
  .then(response => response.data)
  .then(data => console.log(data))

	return (
		<div>
			<span></span>
		</div>
	);
}