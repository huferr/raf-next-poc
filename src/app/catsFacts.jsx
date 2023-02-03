import { getCatFacts } from "@/services/catsFacts";
import styles from "./page.module.css";

export const CatsFacts = async () => {
  const { data } = await getCatFacts();

  return (
    <div className={styles.cats}>
      <h2>Cat Facts</h2>
      <ul>
        {data?.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};
