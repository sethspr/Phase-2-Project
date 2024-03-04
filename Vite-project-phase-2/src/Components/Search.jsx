import React from "react";

function Search() {
// function Search({ setSearch }) {
//   function handleSearch(e) {
//     setSearch(e.target.value);
//     console.log(e.target.value);
//   }

  return (
    <div>
      <header className="logo">
        <h1>SnowPatrol</h1>
        <input
          placeholder="Search a post or the user"
          type="text"
        //   onChange={handleSearch}
        ></input>
      </header>
    </div>
  );
}

export default Search;