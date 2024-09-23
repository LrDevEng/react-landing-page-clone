import styles from './App.module.css';
import Eyecatcher from './components/Eyecatcher';
import NavigationBar from './components/NavigationBar';

export default function App() {
  return (
    <>
      <main>
        <section className={styles.sectionGradientBackground}>
          <NavigationBar />
          <Eyecatcher />
        </section>
      </main>
      <footer>Footer</footer>
    </>
  );
}
