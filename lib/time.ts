import { readDurations } from './settings';

export type Mode = 'focus' | 'short' | 'long';

export function secondsFor(mode: Mode): number {
  const d = readDurations();
  return (d[mode] ?? 25) * 60;
}

export function formatClock(total: number): string {
  const m = Math.floor(total / 60).toString().padStart(2, '0');
  const s = Math.floor(total % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}
