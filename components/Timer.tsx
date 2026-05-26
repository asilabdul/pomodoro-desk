'use client';
import { useEffect, useState } from 'react';
import { FOCUS_SECONDS, formatClock } from '../lib/time';

export function Timer() {
  const [remaining, setRemaining] = useState(FOCUS_SECONDS);
  const [running, setRunning] = useState(false);
  const done = remaining === 0;
  useEffect(() => {
    if (!running || done) return;
    const id = window.setInterval(() => setRemaining((n) => Math.max(0, n - 1)), 1000);
    return () => window.clearInterval(id);
  }, [running, done]);
  return (
    <section>
      <p className="clock">{formatClock(remaining)}</p>
      {done && <p className="done">Session complete. Take a breath.</p>}
      <div className="actions">
        <button type="button" disabled={done} onClick={() => setRunning((v) => !v)}>{running ? 'Pause' : 'Start'}</button>
        <button type="button" onClick={() => { setRunning(false); setRemaining(FOCUS_SECONDS); }}>Reset</button>
      </div>
    </section>
  );
}
