import { ReactComponent as IconFire } from '../svg/icons/iconFire.svg';
import { ReactComponent as IconGreenCircle } from '../svg/icons/iconGreenCircle.svg';
import { ReactComponent as IconProgress } from '../svg/icons/iconProgress.svg';
import { ReactComponent as IconRedCross } from '../svg/icons/iconRedCross.svg';
// import { ReactComponent as ImageNotToDo } from '../svg/notToDo.svg';
// import { ReactComponent as ImageProgress } from '../svg/progress.svg';
// import { ReactComponent as ImageStreak } from '../svg/streak.svg';
// import { ReactComponent as ImageToDo } from '../svg/toDo.svg';
import styles from './Goals.module.css';
import GoalsCard from './GoalsCard';

function Goals() {
  return (
    <section className={styles.goals}>
      <h1>Set goals, simply</h1>
      <GoalsCard
        icon={<IconGreenCircle className={styles.icon} />}
        heading="To-Do"
        paragraph="Trying to learn Spanish? Want to read for 30 minutes a day? Manage daily habits and achieve your goals."
        imgSrc="./images/toDo.svg"
      />
      <GoalsCard
        icon={<IconRedCross className={styles.icon} />}
        heading="Not-To-Do"
        paragraph="Spending hours on Instagram? Track what’s stopping you from achieving goals and build better daily habits."
        imgSrc="./images/notToDo.svg"
      />
      <GoalsCard
        icon={<IconFire className={styles.icon} />}
        heading="Streaks"
        paragraph="Don’t break the chain! Each small win provides motivation and fuel to continue building your habit."
        imgSrc="./images/streak.svg"
      />
      <GoalsCard
        icon={<IconProgress className={styles.icon} />}
        heading="Progress"
        paragraph="Measure your success with daily, weekly, monthly, yearly and all time progress for habits."
        imgSrc="./images/progress.svg"
      />
    </section>
  );
}

export default Goals;
