'use client';
import { useEffect, useState } from 'react';
import { readStats } from '../../lib/stats';

export default function StatsPage() {
  const [rows, setRows] = useState<[string, number][]>([]);
  useEffect(() => setRows(Object.entries(readStats()).sort().reverse()), []);
  const total = rows.reduce((sum, [, n]) => sum + n, 0);
  return (
    <main>
      <h1>Stats</h1>
      <p>{total} focus sessions logged on this device.</p>
      <ul className="stats">
        {rows.map(([day, n]) => <li key={day}>{day}: {n}</li>)}
      </ul>
    </main>
  );
}
