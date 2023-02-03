import styles from "./page.module.css";
import { CatsFacts } from "./catsFacts";
import { Suspense } from "react";
import { Fruits } from "./fruits";

export default function Home() {
  return (
    <main className={styles.main}>
      <Suspense fallback={<h3>Loading Cats...</h3>}>
        <CatsFacts />
      </Suspense>

      <Suspense fallback={<h3>Loading Fruits...</h3>}>
        <Fruits />
      </Suspense>
    </main>
  );
}
