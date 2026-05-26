export const FOCUS_SECONDS = 25 * 60;
export const SHORT_BREAK_SECONDS = 5 * 60;
export const LONG_BREAK_SECONDS = 15 * 60;

export type Mode = 'focus' | 'short' | 'long';

export function secondsFor(mode: Mode): number {
  if (mode === 'short') return SHORT_BREAK_SECONDS;
  if (mode === 'long') return LONG_BREAK_SECONDS;
  return FOCUS_SECONDS;
}

export function formatClock(total: number): string {
  const m = Math.floor(total / 60).toString().padStart(2, '0');
  const s = Math.floor(total % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}
