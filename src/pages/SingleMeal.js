import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const SingleMeal = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [meal, setMeal] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getMeal() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.meals) {
          const {
            strMeal: name,
            strMealThumb: image,
            strCategory: category,
            strArea: area,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.meals[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newMeal = {
            name,
            image,
            category,
            area,
            instructions,
            ingredients,
          };
          setMeal(newMeal);
        } else {
          setMeal(null);
        }
      } catch (error) {
        console.log(error);
      }
      setTimeout(() => {
        setLoading(false);
      }, 1700);
    }
    getMeal();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!meal) {
    return <h2 className="section-title">Žádné jídlo k dispozici</h2>;
  }
  const { name, image, category, area, instructions, ingredients } = meal;
  return (
    <section className="section meal-section">
      <Link to="/" className="btn btn-primary">
        <i className="fa fa-arrow-left"></i> Zpět
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="food">
        <img src={image} alt={name} />
        <div className="food-info">
          <p>
            <span className="food-data">Název:</span> {name}
          </p>
          <p>
            <span className="food-data">Kategorie:</span> {category}
          </p>
          <p>
            <span className="food-data">Původ:</span> {area}
          </p>
          <p>
            <span className="food-data">Ingredience:</span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}> {item}</span> : null;
            })}
          </p>
          <p>
            <span className="food-data">Postup:</span> {instructions}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleMeal;
