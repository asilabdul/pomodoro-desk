export function remainingFrom(startedAt: number, duration: number): number {
  const elapsed = Math.floor((Date.now() - startedAt) / 1000);
  return Math.max(0, duration - elapsed);
}
