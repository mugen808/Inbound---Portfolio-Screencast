const searchButton = document.querySelector('#search-button')
const searchField = document.querySelector('#search-field')

//Placeholder values
let a = 'barcelona'

//Event listener to the search button
searchButton.addEventListener('click', () => {
	const newCity = searchField.value
	//Avoids a search with an empty field
	if (newCity) {
		getWeather(newCity)
		searchField.value = ''
	}
})

//Function to access temperatures from city name
async function getWeather(a) {
	const response = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${a}&appid=364e182d5436c31d789c6f7c5ab6be67&units=metric`,
		{ mode: 'cors' }
	)
	const data = await response.json()
	// If fetch works, process data
	if (data.cod !== '404') {
		const processedData = processData(data)
		displayData(processedData)
		// Otherwise, throw error
	} else {
		alert(`Sorry, ${data.message}`)
	}
}

//Creates an object with the fetched data
function processData(a) {
	let cityInfo = {
		city: a.name,
		temperature: Math.round(a.main.temp),
		weather: a.weather[0].main,
		sensation: Math.round(a.main.feels_like),
		description: a.weather[0].description,
		country: a.sys.country
	}
	return cityInfo
}

//Renders the object information to the DOM
function displayData(a) {
	const city = document.querySelector('#city')
	const temperature = document.querySelector('#temp')
	const weather = document.querySelector('#conditions')
	const sensation = document.querySelector('#feels')
	const description = document.querySelector('#details')
	city.innerHTML = `${a.city}, ${a.country}`
	temperature.innerHTML = `${a.temperature}°`
	weather.innerHTML = a.weather
	sensation.innerHTML = `Feels like ${a.sensation}°`
	description.innerHTML = a.description
}

//Calls the main function with Barcelona as a placeholder
getWeather(a)
