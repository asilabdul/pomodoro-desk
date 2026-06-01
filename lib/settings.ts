export type Durations = { focus: number; short: number; long: number };

const KEY = 'pomodoro-desk:durations';
const DEFAULTS: Durations = { focus: 25, short: 5, long: 15 };

export function readDurations(): Durations {
  if (typeof window === 'undefined') return DEFAULTS;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return DEFAULTS;
    return { ...DEFAULTS, ...JSON.parse(raw) };
  } catch {
    return DEFAULTS;
  }
}

export function writeDurations(next: Durations): void {
  window.localStorage.setItem(KEY, JSON.stringify(next));
}
