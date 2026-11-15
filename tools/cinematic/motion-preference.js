const key = 'pugliai-motion-paused';

export function readMotionPause() {
  try { return sessionStorage.getItem(key) === 'true'; } catch { return false; }
}

export function writeMotionPause(paused) {
  try { sessionStorage.setItem(key, String(paused)); } catch { /* Motion works without storage. */ }
}
