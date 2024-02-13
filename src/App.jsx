import "./App.css";
import CountryCard from "./components/CountryCard";

function App() {
  return (
    <div className="text-center   bg-gray-100">
      <div className="container w-[90%] mx-auto py-5 bg-gray-100 ">
        <h1 className=" text-3xl font-semibold">World Tour Project</h1>
        <CountryCard className=""></CountryCard>
      </div>
    </div>
  );
}

export default App;
