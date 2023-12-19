import React from "react";
import "../styles.css";
function Card({ name, email, id }) {
  return (
    <div className='container'>
      <div className='card'>
        <img src={`https://robohash.org/${id}`} alt='robohash..' />
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  );
}
export default Card;
