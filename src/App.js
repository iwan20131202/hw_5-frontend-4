import RecipeList from "./components/RecipeList/RecipeList";
import { recipes } from "./data/recipes";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
