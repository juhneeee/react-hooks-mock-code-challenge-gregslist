import React, { useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, deleteListing, searchTerm, isSorted, onSearchSubmit}) {

  const listingsToDisplay = listings.filter(listing => listing.description.includes(searchTerm))

  if (isSorted){listingsToDisplay.sort((a,b) => a.location.toLowerCase() > b.location.toLowerCase() ? 1: -1 )}

  return (
    <main>
      <button onClick={() => onSearchSubmit('')} >Show All</button>

      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {listingsToDisplay.map(listing => {
          return <ListingCard 
            listing={listing} 
            key={listing.id} 
            deleteListing={deleteListing}/>
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
