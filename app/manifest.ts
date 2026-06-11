import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Pomodoro Desk',
    short_name: 'Pomodoro',
    start_url: '/',
    display: 'standalone',
    background_color: '#f6f1e8',
    theme_color: '#9a3412',
  };
}
