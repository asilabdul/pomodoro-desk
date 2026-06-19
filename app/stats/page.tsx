'use client';
import { useEffect, useState } from 'react';
import { readStats } from '../../lib/stats';

export default function StatsPage() {
  const [rows, setRows] = useState<[string, number][]>([]);
  useEffect(() => setRows(Object.entries(readStats()).sort().reverse()), []);
  const total = rows.reduce((sum, [, n]) => sum + n, 0);
  function download() {
    const blob = new Blob([JSON.stringify(Object.fromEntries(rows), null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pomodoro-stats.json';
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <main>
      <h1>Stats</h1>
      <p>{total} focus sessions logged on this device.</p>
      <ul className="stats">{rows.map(([day, n]) => <li key={day}>{day}: {n}</li>)}</ul>
      <button type="button" onClick={download}>Export JSON</button>
    </main>
  );
}
