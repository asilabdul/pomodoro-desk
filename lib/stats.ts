const KEY = 'pomodoro-desk:sessions';
export const DAILY_GOAL = 8;

export function recordFocusComplete(): void {
  const today = new Date().toISOString().slice(0, 10);
  const raw = window.localStorage.getItem(KEY);
  const data = raw ? JSON.parse(raw) as Record<string, number> : {};
  data[today] = (data[today] ?? 0) + 1;
  window.localStorage.setItem(KEY, JSON.stringify(data));
}

export function readStats(): Record<string, number> {
  if (typeof window === 'undefined') return {};
  const raw = window.localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : {};
}

export function todayCount(): number {
  const today = new Date().toISOString().slice(0, 10);
  return readStats()[today] ?? 0;
}
