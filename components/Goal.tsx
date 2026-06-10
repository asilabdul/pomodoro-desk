'use client';
import { useEffect, useState } from 'react';
import { DAILY_GOAL, todayCount } from '../lib/stats';

export function Goal() {
  const [count, setCount] = useState(0);
  useEffect(() => setCount(todayCount()), []);
  return <p className="goal">Today {count} / {DAILY_GOAL}</p>;
}
