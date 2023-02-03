import { getAllFruits } from "@/services/fruits";
import styles from "./page.module.css";

export const Fruits = async () => {
  const data = await getAllFruits();

  return (
    <div className={styles.fruits}>
      <h2>Fruits</h2>
      <ul>
        {data.filter((_, idx) => idx < 10).map((f) => (
          <li key={f.name}>{f.name}</li>
        ))}
      </ul>
    </div>
  );
};
