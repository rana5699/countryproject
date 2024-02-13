import {useEffect, useState} from "react";

const Searching = (props) => {
  const [searchItem, setSearchItem] = useState("");
  const handleChange = (e) => {
    setSearchItem(e.target.value);
  };
  useEffect(() => {
    props.onSearch(searchItem);
  }, [searchItem]);
  return (
    <div className="my-3 w-full">
      <div className="join mb-3">
        <input
          type="text"
          value={searchItem}
          onChange={handleChange}
          className="input input-bordered join-item"
          placeholder="Searching..."
        />
        <button
          type="button"
          className="btn  rounded-r-full bg-green-400 text-white font-bold hover:bg-green-800">
          Search
        </button>
      </div>
      <div></div>
    </div>
  );
};
export default Searching;
