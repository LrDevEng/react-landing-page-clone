import styles from './App.module.css';
import Availability from './components/Availability';
import Eyecatcher from './components/Eyecatcher';
import Goals from './components/Goals';
import NavigationBar from './components/NavigationBar';

export default function App() {
  return (
    <>
      <main>
        <section className={styles.sectionGradientBackground}>
          <NavigationBar />
          <Eyecatcher />
          <Availability />
        </section>
        <Goals />
      </main>
      <footer>Footer</footer>
    </>
  );
}
