import styles from './App.module.css';
import NavigationBar from './components/NavigationBar';

export default function App() {
  return (
    <>
      <section className={styles.sectionGradientBackground}>
        <header>
          <NavigationBar />
        </header>
        <main>Main</main>
      </section>
      <footer>Footer</footer>
    </>
  );
}
