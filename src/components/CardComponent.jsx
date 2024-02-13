const CardComponent = ({country, onDelete}) => {
  console.log("country:", country);
  const handleRemove = () => {
    // console.log("Hello Remove", );
    if (onDelete) {
      onDelete(country.tld);
    }
  };

  return (
    <div className="text-center">
      <div className="card  bg-base-100 shadow-xl h-full">
        <figure>
          <img
            className="h-[200px] w-full mx-auto"
            src={country.flags.png}
            alt={country.alt}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title mx-auto mb-1">
            {country.name.common}
            <div className="badge badge-secondary font-bold h-auto text-center">
              {country.continents}
            </div>
          </h2>
          <div className="badge badge-secondary font-bold p-3 mx-auto">
            Capital: {country.capital}
          </div>
          <p className="text-gray-800 font-bold">
            Start Of Week :{" "}
            <span className="text-gray-500 font-semibold">
              {country.startOfWeek}
            </span>
          </p>
          <p className="text-gray-800 font-bold">
            Area :{" "}
            <span className="text-gray-500 font-semibold">{country.area}</span>
          </p>
          <p className="text-gray-800 font-bold">
            Population :{" "}
            <span className="text-gray-500 font-semibold">
              {country.population}
            </span>
          </p>
          <div className=" ">
            <button
              className="btn btn-outline btn-error"
              onClick={handleRemove}>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;
