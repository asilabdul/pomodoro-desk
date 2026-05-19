import './globals.css';
import type { ReactNode } from 'react';

export const metadata = { title: 'Pomodoro Desk', description: 'Focus timer in the browser' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        
        {children}
      </body>
    </html>
  );
}
