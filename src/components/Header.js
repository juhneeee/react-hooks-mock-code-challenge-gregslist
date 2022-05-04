import React, { useState } from "react";
import Search from "./Search";
import Form from './Form';

function Header({onSearchSubmit, isSorted, setIsSorted, addListing={addListing}}) {
  const [showForm, setShowForm] = useState(false)

  function toggleShowForm(){
    setShowForm(!showForm)
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchSubmit={onSearchSubmit}/>

      <div>
        <label>sort by location:</label>
        <input type="checkbox" onChange={() => setIsSorted(!isSorted)} checked={isSorted}></input>
      </div>

      {showForm && <Form toggleShowForm={toggleShowForm} addListing={addListing}/>}

      <button onClick={toggleShowForm}>{showForm? 'Cancel': 'Add New Listing'}</button>
    </header>
  );
}

export default Header;
