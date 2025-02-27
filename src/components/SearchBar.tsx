import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/slices/moviesSlice";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setSearchQuery(input));
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center gap-2 p-4">
      <input
        type="text"
        placeholder="Film ara..."
        className="p-2 border rounded-lg w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg">
        Ara
      </button>
    </form>
  );
};

export default SearchBar;
