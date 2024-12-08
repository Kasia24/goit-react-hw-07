import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNameFilter } from "./redux/filtersSlice";

const SearchBox = () => {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();
  const [localFilter, setLocalFilter] = useState(filter);
  const debounceTimeout = useRef(null); // Użycie useRef dla debounce timeout

  const handleChange = (e) => {
    const value = e.target.value;
    setLocalFilter(value); // Lokalne przechowywanie tekstu wpisanego przez użytkownika

    clearTimeout(debounceTimeout.current); // Czyszczenie poprzedniego timeoutu
    debounceTimeout.current = setTimeout(() => {
      dispatch(setNameFilter(value)); // Aktualizacja Redux po opóźnieniu
    }, 300); // 300 ms debounce
  };

  const clearFilter = () => {
    setLocalFilter(""); // Czyszczenie lokalnej wartości
    dispatch(setNameFilter("")); // Czyszczenie filtra w Redux
  };

  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          value={localFilter}
          onChange={handleChange}
          maxLength="50" // Ograniczenie długości wprowadzanego tekstu
          placeholder="Type a name..." // Placeholder dla pola tekstowego
        />
        {localFilter && (
          <button onClick={clearFilter} style={{ marginLeft: "10px" }}>
            Clear
          </button>
        )}
      </label>
    </div>
  );
};

export default SearchBox;
