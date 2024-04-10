import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButton from "./components/TopButton";
import Input from "./components/Input";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
// import getWeatherData from "./services/WeatherServices";
import getFormattedWeatherData from "./services/WeatherServices";
function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData("weather", { q: "london" });
    console.log(data);
  };
  fetchWeather();
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-500">
      <TopButton />
      <Input />
      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast title="hourly forecast" />
      <Forecast title="Daily forecast" />
    </div>
  );
}

export default App;
