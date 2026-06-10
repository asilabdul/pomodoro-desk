import { Timer } from '../components/Timer';
import { Goal } from '../components/Goal';

export default function HomePage() {
  return (
    <main>
      <h1>Pomodoro Desk</h1>
      <Goal />
      <Timer />
    </main>
  );
}
