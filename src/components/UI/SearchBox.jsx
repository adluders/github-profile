import React from "react";

const SearchBox = () => {
  return (
    <div className="SearchBox">
      <h1>Github Finder</h1>
      <form action="">
        <input placeholder="Enter a Username" type="search" name="search" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBox;
