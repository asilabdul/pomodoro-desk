export async function notifyDone(mode: string): Promise<void> {
  if (!('Notification' in window)) return;
  if (Notification.permission === 'default') await Notification.requestPermission();
  if (Notification.permission !== 'granted') return;
  new Notification('Pomodoro Desk', { body: `${mode} session finished` });
}
