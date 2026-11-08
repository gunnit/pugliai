/** Progressive enhancement for contact enquiries; no process data is sent on other routes. */
(function () {
  'use strict';

  function init() {
    document.querySelectorAll('form[data-process-intake]').forEach(function (form) {
      var inquiry = form.querySelector('[name="inquiry_type"]');
      var fields = form.querySelector('[data-process-fields]');
      var message = form.querySelector('[name="message"]');
      var messageLabel = form.querySelector('label[for="' + message.id + '"]');
      var submitLabel = form.querySelector('[data-submit-label]');
      if (!inquiry || !fields || !messageLabel || !submitLabel) return;

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

      // The CTA fragment selects the process route once; visitors can then choose another enquiry.
      if (window.location.hash === '#valuta-processo') inquiry.value = 'process';
      inquiry.addEventListener('change', update);
      form.addEventListener('reset', function () { window.setTimeout(update, 0); });
      update();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
