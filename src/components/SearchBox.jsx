import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "./redux/filtersSlice";

let debounceTimeout; // Zmienna do obsługi debounce

const SearchBox = () => {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();
  const [localFilter, setLocalFilter] = useState(filter);

  const handleChange = (e) => {
    const value = e.target.value;
    setLocalFilter(value); // Lokalne przechowywanie tekstu wpisanego przez użytkownika

    clearTimeout(debounceTimeout); // Czyszczenie poprzedniego timeoutu
    debounceTimeout = setTimeout(() => {
      dispatch(setFilter(value)); // Aktualizacja Redux po opóźnieniu
    }, 300); // 300 ms debounce
  };

  const clearFilter = () => {
    setLocalFilter(""); // Czyszczenie lokalnej wartości
    dispatch(setFilter("")); // Czyszczenie filtra w Redux
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
