'use client';
import { useEffect, useState } from 'react';
import { FOCUS_SECONDS, formatClock } from '../lib/time';

export function Timer() {
  const [remaining, setRemaining] = useState(FOCUS_SECONDS);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => setRemaining((n) => Math.max(0, n - 1)), 1000);
    return () => window.clearInterval(id);
  }, [running]);
  function reset() {
    setRunning(false);
    setRemaining(FOCUS_SECONDS);
  }
  return (
    <section>
      <p className="clock">{formatClock(remaining)}</p>
      <div className="actions">
        <button type="button" onClick={() => setRunning((v) => !v)}>{running ? 'Pause' : 'Start'}</button>
        <button type="button" onClick={reset}>Reset</button>
      </div>
    </section>
  );
}
