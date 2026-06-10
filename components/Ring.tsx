export function Ring({ value, max }: { value: number; max: number }) {
  const r = 54;
  const c = 2 * Math.PI * r;
  const pct = max === 0 ? 0 : value / max;
  return (
    <svg className="ring" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r={r} fill="none" stroke="#e7e0d4" strokeWidth="8" />
      <circle cx="60" cy="60" r={r} fill="none" stroke="#9a3412" strokeWidth="8" strokeDasharray={`${c} ${c}`} strokeDashoffset={c * (1 - pct)} transform="rotate(-90 60 60)" />
    </svg>
  );
}
