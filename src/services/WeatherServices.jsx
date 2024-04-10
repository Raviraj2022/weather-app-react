const apiKey = "39768658ea4ebe5e84480d60701a8842";
const apiUrl = "https://api.openweathermap.org/data/2.5";

const getWeatherData = (infoType, serachParams) => {
  const url = new URL(apiUrl + "/" + infoType);
  url.search = new URLSearchParams({ ...serachParams, appid: apiKey });
  return fetch(url).then((response) => response.json());
};
const formatCurrentWeather =  (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,

    speed,
    details,
    icon,
  };
};

const getFormattedWeatherData = async (serachParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    serachParams
  ).then(formatCurrentWeather);
  return formattedCurrentWeather;
};
export default getFormattedWeatherData;
