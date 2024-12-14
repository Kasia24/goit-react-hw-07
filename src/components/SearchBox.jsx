import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "./redux/filtersSlice";

const SearchBox = () => {
  const filter = useSelector((state) => state.filters?.name || "");
  const dispatch = useDispatch();
  const [localFilter, setLocalFilter] = useState(filter);
  const debounceTimeout = useRef(null); // Użycie useRef dla debounce timeout

  const handleChange = (e) => {
    const value = e.target.value;
    setLocalFilter(value); // Lokalne przechowywanie tekstu wpisanego przez użytkownika

    // Czyszczenie poprzedniego timeoutu
    clearTimeout(debounceTimeout.current);

    // Ustawienie nowego timeoutu
    debounceTimeout.current = setTimeout(() => {
      dispatch(setFilter(value)); // Aktualizacja Redux po opóźnieniu
    }, 300); // 300 ms debounce
  };

  const clearFilter = () => {
    setLocalFilter(""); // Czyszczenie lokalnej wartości
    dispatch(setFilter("")); // Czyszczenie filtra w Redux
  };

  // Czyszczenie timeoutu przy odmontowywaniu komponentu
  useEffect(() => {
    return () => {
      clearTimeout(debounceTimeout.current);
    };
  }, []);

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
