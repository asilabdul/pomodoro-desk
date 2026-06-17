import './globals.css';
import type { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Pomodoro Desk',
  description: 'A calm focus timer that stays in your browser',
  openGraph: { title: 'Pomodoro Desk', description: 'Local-only pomodoro timer' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="topnav">
          <Link href="/">Timer</Link>
          <Link href="/stats">Stats</Link>
          <Link href="/settings">Settings</Link>
          <Link href="/about">About</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
