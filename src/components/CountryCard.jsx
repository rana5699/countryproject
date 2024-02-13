import {useEffect} from "react";
import {useState} from "react";
import CardComponent from "./CardComponent";
import Loader from "./Loader";
import Searching from "./Searching";

const CountryCard = () => {
  const [countries, setCountries] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSortByName = () => {
    if (countries && countries.length > 0) {
      const sortedCountries = [...countries].sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );

      setCountries(sortedCountries);
    }
  };

  const handleDelte = (tldToDelete) => {
    setCountries((preCountries) =>
      preCountries.filter((country) => country.tld !== tldToDelete)
    );
  };
  useEffect(() => {
    const fetcData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const result = await response.json();
        setCountries(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetcData();
  }, []);

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();

    // Check if countries is not null before filtering
    if (countries !== null) {
      const newCountry = countries.filter((country) => {
        const countryName = country.name.common.toLowerCase();
        return countryName.startsWith(value);
      });

      setCountries(newCountry);
    }
  };
  return (
    <div>
      <Searching onSearch={handleSearch} />
      <div className="mb-3">
        <button
          type="button"
          onClick={handleSortByName}
          className="btn btn-secondary rounded-md  text-white font-bold hover:bg-green-800">
          Sort by name
        </button>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-2 gap-5">
          {countries.map((country, index) => (
            <CardComponent
              key={index}
              country={country}
              onDelete={handleDelte}></CardComponent>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryCard;
