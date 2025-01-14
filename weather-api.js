// Declare const for MEtric
// Declare const for API_KEY

const API_KEY = "56df89d5e2e9db05a1dc5e11cba30dd0";
const UNITS_METRIC = "metric";

const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

class WeatherAPI {
  constructURL(locationName) {
    this.weatherURL = new URL(WEATHER_API_BASE_URL);

    this.weatherURL.searchParams.append("q", locationName);
    this.weatherURL.searchParams.append("appid", API_KEY);
    this.weatherURL.searchParams.append("units", UNITS_METRIC);

    return this.weatherURL.toString();
  }

  // ConstructURL(locationName)

  // url = new URL(base_url)

  // url.searchParams.append("q", "Delhi");

  // return URL-as string
  // url.toString()

  async invokeWeatherURL() {
    const responseObj = await fetch(this.weatherURL.toString());

    const weatherResponseJSON = await responseObj.json();

    return weatherResponseJSON;
  }

  // invokeURL()
  // result -> await  fetch()
  // result.json()
  // print(json)
}

export { WeatherAPI };
