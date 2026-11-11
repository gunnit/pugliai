/** Progressive enhancement for contact enquiries; no process data is sent on other routes. */
(function () {
  'use strict';

  function init() {
    document.querySelectorAll('form[data-process-intake]').forEach(function (form) {
      var inquiry = form.querySelector('[name="inquiry_type"]');
      var fields = form.querySelector('[data-process-fields]');
      var message = form.querySelector('[name="message"]');
      if (!inquiry || !fields || !message) return;
      var messageLabel = form.querySelector('label[for="' + message.id + '"]');
      var submitLabel = form.querySelector('[data-submit-label]');
      if (!messageLabel || !submitLabel) return;

      function update() {
        var process = inquiry.value === 'process';
        fields.hidden = !process;
        fields.disabled = !process;
        fields.style.display = process ? 'flex' : 'none';
        fields.querySelectorAll('input, select, textarea').forEach(function (field) {
          field.disabled = !process;
          field.required = process;
          if (process) field.setAttribute('aria-required', 'true');
          else field.removeAttribute('aria-required');
          if (!process) {
            field.setCustomValidity('');
            field.classList.remove('error');
            field.removeAttribute('aria-invalid');
            var error = form.querySelector('#' + field.id + '-error');
            if (error) { error.textContent = ''; error.style.display = 'none'; }
          }
        });
        fields.querySelectorAll('label').forEach(function (label) {
          label.classList.toggle('form-label--required', process);
        });
        messageLabel.textContent = process ? form.dataset.processMessage : form.dataset.generalMessage;
        message.placeholder = process ? form.dataset.processPlaceholder : form.dataset.generalPlaceholder;
        submitLabel.textContent = process ? form.dataset.processSubmit : form.dataset.generalSubmit;
      }

      function activateProcess() {
        inquiry.value = 'process';
        update();
      }

      // Apply intentional CTA navigation, including another click on the current
      // fragment. A manual enquiry change remains in place until that next visit.
      if (window.location.hash === '#valuta-processo') inquiry.value = 'process';
      window.addEventListener('hashchange', function () {
        if (window.location.hash === '#valuta-processo') activateProcess();
      });
      document.addEventListener('click', function (event) {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        var anchor = event.target.closest('a[href]');
        if (!anchor || anchor.hasAttribute('download') || (anchor.target && anchor.target !== '_self')) return;
        var destination = new URL(anchor.href, window.location.href);
        if (destination.origin === window.location.origin && destination.pathname === window.location.pathname &&
            destination.search === window.location.search && destination.hash === '#valuta-processo') activateProcess();
      });
      inquiry.addEventListener('change', update);
      form.addEventListener('reset', function () { window.setTimeout(update, 0); });
      update();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
