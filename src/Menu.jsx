import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './App.css';

function Menu() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/dish`)
      .then(response => response.json())
      .then(data => {
        setDishes(data);
      })
      .catch(error => console.error("Erreur lors du chargement du JSON:", error));
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      {dishes.length > 0 ? (
        dishes.map((dish) => (
          <div key={dish.dish_id}>
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p>{dish.price} €</p>
            <img src={dish.picture} />
            <br/>
            <Link to={`/dish/${dish.dish_id}`}>
              <button>Commander</button>
            </Link>
          </div>
        ))
      ) : (
        <p>Chargement des plats...</p>
      )}
    </div>
  );
}

export default Menu;