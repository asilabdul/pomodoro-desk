import type { Mode } from './time';

export function nextMode(mode: Mode, focusCount: number): Mode {
  if (mode !== 'focus') return 'focus';
  return focusCount > 0 && focusCount % 4 === 0 ? 'long' : 'short';
}
