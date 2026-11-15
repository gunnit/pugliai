/* Analytics starts after consent and the first useful paint; gtag commands stay queued. */
(() => {
  const id = document.currentScript.dataset.analyticsId;
  let requested = false;
  let scheduled = false;
  function granted() {
    try {
      const choice = window.PugliAIConsent?.read() ?? JSON.parse(localStorage.getItem('cookieConsent') || 'null');
      return Boolean(choice?.analytics || choice?.marketing);
    } catch { return false; }
  }
  function load() {
    scheduled = false;
    if (requested || !granted()) return;
    requested = true;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    script.addEventListener('error', () => { requested = false; });
    document.head.append(script);
  }
  function schedule() {
    if (requested || scheduled || !granted()) return;
    scheduled = true;
    const poster = document.querySelector('.hero-image');
    Promise.all([document.fonts.ready, poster?.decode().catch(() => {})]).then(() => {
      requestAnimationFrame(() => requestAnimationFrame(() => {
        if ('requestIdleCallback' in window) requestIdleCallback(load, { timeout: 1500 });
        else setTimeout(load, 0);
      }));
    });
  }
  window.addEventListener('pugliai:consent-change', schedule);
  window.addEventListener('storage', (event) => {
    if (event.key === 'cookieConsent' || event.key === null) schedule();
  });
  schedule();
})();
