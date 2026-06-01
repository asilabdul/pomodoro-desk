'use client';
import { FormEvent, useEffect, useState } from 'react';
import { readDurations, writeDurations, type Durations } from '../../lib/settings';

export default function SettingsPage() {
  const [values, setValues] = useState<Durations>({ focus: 25, short: 5, long: 15 });
  useEffect(() => setValues(readDurations()), []);
  function onSubmit(event: FormEvent) {
    event.preventDefault();
    writeDurations(values);
  }
  return (
    <main>
      <h1>Settings</h1>
      <form onSubmit={onSubmit} className="settings">
        {(['focus', 'short', 'long'] as const).map((key) => (
          <label key={key}>{key} minutes
            <input type="number" min={1} max={90} value={values[key]} onChange={(e) => setValues({ ...values, [key]: Number(e.target.value) })} />
          </label>
        ))}
        <button type="submit">Save</button>
      </form>
    </main>
  );
}
