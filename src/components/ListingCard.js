import React,{useState} from "react";

function ListingCard({listing, deleteListing}) {
  const [isFav, setIsFav] = useState(false)

  function handleClickFav(){
    setIsFav(!isFav)
  }

  function handleDeleteClick(){
    //fetch request
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    //frontend set state
    deleteListing(listing.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFav ? (
          <button className="emoji-button favorite active" onClick={handleClickFav}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClickFav}>☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
