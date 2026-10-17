(function () {
  const wordmarkMarkup = '<g class="tbdeployed-wordmark" transform="translate(0,260.1562) scale(0.146484375,-0.146484375)" fill="currentColor" fill-rule="evenodd"><path id="tbd-letter-0-T" d="M229 0V1422H20V1760H790V1422H581V0Z"/><path id="tbd-letter-1-B" d="M78 0V1760H555Q747 1760 834.5 1666.5Q922 1573 922 1358V1281Q922 1157 877.5 1080.0Q833 1003 742 979Q861 949 901.5 838.5Q942 728 942 569Q942 398 910.0 270.0Q878 142 794.0 71.0Q710 0 555 0ZM422 1097H494Q543 1097 557.0 1135.0Q571 1173 571 1226V1403Q571 1488 496 1488H422ZM457 310Q594 310 594 440V660Q594 735 571.5 778.5Q549 822 487 822H422V312Q444 310 457 310Z" transform="translate(769.04,0)"/><path id="tbd-letter-2-D" d="M78 0V1760H562Q752 1760 848.0 1654.5Q944 1549 944 1346V522Q944 272 856.5 136.0Q769 0 550 0ZM432 311H493Q590 311 590 405V1313Q590 1401 566.5 1426.5Q543 1452 471 1452H432Z" transform="translate(1708.08,0)"/><path id="tbd-letter-3-E" d="M78 0V1760H782V1420H436V1077H768V746H436V343H805V0Z" transform="translate(2677.12,0)"/><path id="tbd-letter-4-P" d="M78 0V1760H543Q689 1760 774.5 1695.0Q860 1630 897.0 1510.0Q934 1390 934 1224Q934 1064 903.0 945.5Q872 827 792.5 762.0Q713 697 567 697H424V0ZM424 1013H444Q542 1013 564.0 1068.0Q586 1123 586 1230Q586 1330 564.5 1384.5Q543 1439 463 1439H424Z" transform="translate(3479.16,0)"/><path id="tbd-letter-5-L" d="M78 0V1760H430V300H792V0Z" transform="translate(4405.2,0)"/><path id="tbd-letter-6-O" d="M498 -16Q287 -16 175.5 111.5Q64 239 64 480V1316Q64 1542 174.5 1659.0Q285 1776 498 1776Q711 1776 821.5 1659.0Q932 1542 932 1316V480Q932 239 820.5 111.5Q709 -16 498 -16ZM501 308Q581 308 581 463V1322Q581 1452 503 1452Q415 1452 415 1319V461Q415 379 435.0 343.5Q455 308 501 308Z" transform="translate(5178.24,0)"/><path id="tbd-letter-7-Y" d="M291 0V579L10 1760H359L457 1164L555 1760H903L623 579V0Z" transform="translate(6133.28,0)"/><path id="tbd-letter-8-E" d="M78 0V1760H782V1420H436V1077H768V746H436V343H805V0Z" transform="translate(7006.32,0)"/><path id="tbd-letter-9-D" d="M78 0V1760H562Q752 1760 848.0 1654.5Q944 1549 944 1346V522Q944 272 856.5 136.0Q769 0 550 0ZM432 311H493Q590 311 590 405V1313Q590 1401 566.5 1426.5Q543 1452 471 1452H432Z" transform="translate(7808.36,0)"/></g><circle class="tbdeployed-dot" cx="237.86" cy="31.5" r="14.14" fill="#2E5BFF"/>';

  function buildLogo(svg) {
    svg.setAttribute('viewBox', '0 0 1285.75 262.5');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', 'TBDEPLOYED');
    svg.innerHTML = wordmarkMarkup;
    svg.querySelectorAll('.tbdeployed-dot').forEach(function (dot) { dot.remove(); });
  }

  function addStyles() {
    if (document.getElementById('tbdeployed-footer-style')) return;
    const style = document.createElement('style');
    style.id = 'tbdeployed-footer-style';
    // Same box as the original NAMMA logo (1472x475); the wordmark is stretched to fill it, and the
    // page's own scroll animation (height 0 -> 100% of .footer_logo_stretch) reveals/stretches it.
    // The site's own CSS only makes .contact_component scrollable below 767px; above that it has no
    // overflow rule while its parent (.section_contact) is overflow:hidden, so on desktop the contact
    // popup silently clips instead of scrolling when its content is taller than the viewport.
    style.textContent = 'svg.footer_logo { display: block; width: 100%; height: auto; aspect-ratio: 1472 / 475; } .footer_logo_stretch .logo-instance svg { display: block; } .section_contact .contact_component { overflow-y: auto; -webkit-overflow-scrolling: touch; }';
    document.head.appendChild(style);
  }

  function init() {
    const footer = document.querySelector('.footer');
    if (!footer) return;
    addStyles();
    footer.querySelectorAll('svg.footer_logo, svg.footer_logo_stretch').forEach(buildLogo);
  }

  function initPreloader() {
    const preloader = document.querySelector('.preloader');
    const video = document.querySelector('#preloader-video');
    if (!preloader || !video || preloader.querySelector('.tbdeployed-preloader-logo')) return;
    // The original intro video keeps running (it drives the page start), but is hidden and replaced by the TBD wordmark.
    video.style.visibility = 'hidden';
    const dark = localStorage.getItem('darkMode') === 'enabled';
    preloader.style.backgroundColor = dark ? 'var(--dark)' : 'var(--_theme---background)';
    preloader.style.color = dark ? 'var(--_theme---background)' : 'var(--dark)';
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'tbdeployed-preloader-logo');
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', 'TBD');
    svg.style.cssText = 'position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);height:16rem;width:auto;overflow:visible';
    svg.innerHTML = wordmarkMarkup;
    preloader.appendChild(svg);
    svg.querySelectorAll('.tbdeployed-dot, [id^="tbd-letter-"]').forEach(function (el) {
      const n = el.id ? parseInt(el.id.split('-')[2], 10) : 99;
      if (n > 2) (el.parentNode.tagName === 'g' && el.parentNode.parentNode.tagName === 'g' ? el.parentNode : el).remove();
    });
    const box = svg.getBBox();
    svg.setAttribute('viewBox', box.x + ' ' + box.y + ' ' + box.width + ' ' + box.height);
    svg.style.aspectRatio = box.width + ' / ' + box.height;
  }

  function initContactForm() {
    document.querySelectorAll('form#wf-form-Contact-Form').forEach(function (form) {
      if (form.dataset.tbdBound) return;
      form.dataset.tbdBound = 'true';

      const wrapper = form.closest('.w-form') || form.parentElement;
      const doneEl = wrapper ? wrapper.querySelector('.w-form-done') : null;
      const failEl = wrapper ? wrapper.querySelector('.w-form-fail') : null;

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (failEl) failEl.style.display = 'none';

        const submitBtn = form.querySelector('input[type="submit"]');
        const originalValue = submitBtn ? submitBtn.value : null;
        if (submitBtn) {
          submitBtn.value = submitBtn.getAttribute('data-wait') || 'Please wait...';
          submitBtn.disabled = true;
        }

        const nameField = form.querySelector('[name="name"]');
        const emailField = form.querySelector('[name="Email"]');
        const phoneField = form.querySelector('[name="Phone"]');
        const messageField = form.querySelector('[name="Message"]');
        const interestField = form.querySelector('input[name="Interest"]:checked');

        const payload = {
          name: nameField ? nameField.value : '',
          Email: emailField ? emailField.value : '',
          Phone: phoneField ? phoneField.value : '',
          Interest: interestField ? interestField.value : '',
          Message: messageField ? messageField.value : ''
        };

        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })
          .then(function (res) {
            return res.json().catch(function () { return {}; }).then(function (body) {
              return { ok: res.ok, body: body };
            });
          })
          .then(function (result) {
            if (result.ok && result.body && result.body.ok) {
              form.style.display = 'none';
              if (doneEl) doneEl.style.display = 'block';
            } else if (failEl) {
              failEl.style.display = 'block';
            }
          })
          .catch(function () {
            if (failEl) failEl.style.display = 'block';
          })
          .finally(function () {
            if (submitBtn) {
              submitBtn.disabled = false;
              if (originalValue) submitBtn.value = originalValue;
            }
          });
      });
    });
  }

  function start() {
    initPreloader();
    init();
    initContactForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
