import React from "react";
import Meal from "./Meal";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const MealList = () => {
  const { meals, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }

  if (meals.length < 1) {
    return <h2 className="section-title">Žádná jídla nenalezena</h2>;
  }

  if ((meals.length = 10)) {
    return (
      <section className="section">
        <h2 className="section-title">Meals</h2>
        <div className="meals-center">
          {meals.map((item) => {
            return <Meal key={item.id} {...item} />;
          })}
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">Meals</h2>
      <div className="meals-center">
        {meals.map((item) => {
          return <Meal key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default MealList;
