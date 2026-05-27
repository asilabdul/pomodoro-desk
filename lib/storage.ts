import type { Mode } from './time';

const KEY = 'pomodoro-desk:mode';

export function readMode(): Mode {
  if (typeof window === 'undefined') return 'focus';
  const value = window.localStorage.getItem(KEY);
  return value === 'short' || value === 'long' ? value : 'focus';
}

export function writeMode(mode: Mode): void {
  window.localStorage.setItem(KEY, mode);
}
