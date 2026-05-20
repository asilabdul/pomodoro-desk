'use client';
import { useState } from 'react';

export function Timer() {
  const [running, setRunning] = useState(false);
  return (
    <section>
      <p className="clock">25:00</p>
      <button type="button" onClick={() => setRunning((v) => !v)}>
        {running ? 'Pause' : 'Start'}
      </button>
    </section>
  );
}
