const FECH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc93bc52cdmshd1e9277cee8f04ep15dc41jsn0ca915a5b15a',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export async function getWeatherFrom(ciudad = 'Cordoba') {
	const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${ciudad}`, FECH_OPTIONS)
	
	const data = await response.json()
	console.log(data)
	const { location, current } = data;
	const { country, localtime, name } = location;
	const { condition, humidity, feelslike_c, temp_c, is_day, wind_kph, wind_dir } = current;
	const { code, icon, text } = condition;

	return {
		conditionCode: code,
		conditionIcon: icon,
		conditionText: text,
		country,
		localtime, 
		name,
		humidity,
		isDay: is_day,
		feelsLike: feelslike_c,
		temperature: temp_c,
		windSpeed: wind_kph,
		windDir: wind_dir
	};
}
