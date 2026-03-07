import styles from "./Difficulty.module.css";

export default function Difficulty({ difficulty }) {
  const levels = ["Easy", "Medium", "Hard"];

  return (
    <div className={styles.box}>
      <p>Difficulty</p>

      <div className={styles.levels}>
        {levels.map((level, index) => {
          const active = difficulty === index + 1;

          return (
            <span
              key={level}
              className={`
              ${styles.level}
              ${active ? styles.active : ""}
             
              `}
            >
              {level}
            </span>
          );
        })}
      </div>
    </div>
  );
}