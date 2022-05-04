import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isSorted, setIsSorted] = useState(false)

  useEffect( ()=>{
    fetch('http://localhost:6001/listings')
    .then(r=> r.json())
    .then(data => setListings(data))
  }, [])

  function deleteListing(id){
    const arr = listings.filter(listing => listing.id !== id)
    setListings(arr)
  }

  function addListing(obj){
    //post and render obtimistically
    fetch('http://localhost:6001/listings', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(obj)
    })

    const arr = [...listings, obj]
    setListings(arr)
  }

  function onSearchSubmit(str){
    setSearchTerm(str)
  }

  return (
    <div className="app">
      <Header 
        onSearchSubmit={onSearchSubmit} 
        setIsSorted={setIsSorted} 
        addListing={addListing}
        isSorted={isSorted} />

      <ListingsContainer 
        deleteListing={deleteListing} 
        listings={listings} 
        searchTerm={searchTerm} 
        isSorted={isSorted}
        onSearchSubmit={onSearchSubmit} />
    </div>
  );
}

export default App;
