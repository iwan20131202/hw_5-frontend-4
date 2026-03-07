import styles from "./RecipeCard.module.css";
import Difficulty from "../Difficulty/Difficulty";

export default function RecipeCard({ recipe }) {
  return (
    <div className={styles.card}>
      <img
        src={recipe.image}
        alt={recipe.title}
        className={styles.image}
      />

      <h3 className={styles.title}>{recipe.title}</h3>

      <div className={styles.info}>
        <span>⏱ {recipe.time}</span>
        <span>🍽 {recipe.servings}</span>
        <span>📊 {recipe.calories}</span>
      </div>

      <Difficulty difficulty={recipe.difficulty} />
    </div>
  );
}