'use client';
import { useEffect, useState } from 'react';
import { formatClock, secondsFor, type Mode } from '../lib/time';

export function Timer() {
  const [mode, setMode] = useState<Mode>('focus');
  const [remaining, setRemaining] = useState(secondsFor('focus'));
  const [running, setRunning] = useState(false);
  useEffect(() => { setRemaining(secondsFor(mode)); setRunning(false); }, [mode]);
  useEffect(() => {
    if (!running || remaining === 0) return;
    const id = window.setInterval(() => setRemaining((n) => Math.max(0, n - 1)), 1000);
    return () => window.clearInterval(id);
  }, [running, remaining]);
  return (
    <section>
      <div className="modes">
        {(['focus', 'short', 'long'] as Mode[]).map((item) => (
          <button key={item} type="button" data-active={mode === item} onClick={() => setMode(item)}>{item}</button>
        ))}
      </div>
      <p className="clock">{formatClock(remaining)}</p>
      <div className="actions">
        <button type="button" onClick={() => setRunning((v) => !v)}>{running ? 'Pause' : 'Start'}</button>
        <button type="button" onClick={() => { setRunning(false); setRemaining(secondsFor(mode)); }}>Reset</button>
      </div>
    </section>
  );
}
