'use client';
import { useEffect, useRef, useState } from 'react';
import { formatClock, secondsFor, type Mode } from '../lib/time';
import { readMode, writeMode } from '../lib/storage';
import { chime } from '../lib/sound';

export function Timer() {
  const [mode, setMode] = useState<Mode>('focus');
  const [remaining, setRemaining] = useState(secondsFor('focus'));
  const [running, setRunning] = useState(false);
  const armed = useRef(false);
  useEffect(() => { const next = readMode(); setMode(next); setRemaining(secondsFor(next)); }, []);
  useEffect(() => { writeMode(mode); setRemaining(secondsFor(mode)); setRunning(false); armed.current = false; }, [mode]);
  useEffect(() => {
    if (!running || remaining === 0) return;
    armed.current = true;
    const id = window.setInterval(() => setRemaining((n) => Math.max(0, n - 1)), 1000);
    return () => window.clearInterval(id);
  }, [running, remaining]);
  useEffect(() => {
    if (remaining === 0 && armed.current) { armed.current = false; chime(); }
  }, [remaining]);
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.code !== 'Space') return;
      event.preventDefault();
      setRunning((v) => !v);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  return (
    <section>
      <div className="modes">
        {(['focus', 'short', 'long'] as Mode[]).map((item) => (
          <button key={item} type="button" data-active={mode === item} onClick={() => setMode(item)}>{item}</button>
        ))}
      </div>
      <p className="clock">{formatClock(remaining)}</p>
      <p className="hint">Space starts and pauses</p>
      <div className="actions">
        <button type="button" onClick={() => setRunning((v) => !v)}>{running ? 'Pause' : 'Start'}</button>
        <button type="button" onClick={() => { setRunning(false); setRemaining(secondsFor(mode)); }}>Reset</button>
      </div>
    </section>
  );
}
