import React from "react";
import { Link } from "react-router-dom";

const Meal = ({ image, name, id, category, area }) => {
  return (
    <article className="meal">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="meal-footer">
        <h3>{name}</h3>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
        <span className="fa fa-star"></span>
        <h4>{area}</h4>
        <p>{category}</p>
        <Link to={`/meal/${id}`} className="btn btn-primary ">
          Více <i className="fa fa-arrow-right"></i>
        </Link>
      </div>
    </article>
  );
};

export default Meal;
