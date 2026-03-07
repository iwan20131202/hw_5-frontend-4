import RecipeCard from "../RecipeCard/RecipeCard";
import styles from "./RecipeList.module.css";

export default function RecipeList({ recipes }) {
  return (
    <div className={styles.list}>
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}