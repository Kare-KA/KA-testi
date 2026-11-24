// Funktio voi olla true tai false. Jos true, muutetaan sisältö ei-aktiiviseksi 
function setBackgroundInert(isInert) {
// Kerätään ne sivun osat, jotka halutaan ei-aktiivisiksi
  const backgroundElements = [
    document.querySelector('header'),
    document.querySelector('main'),
    document.querySelector('footer'),
    document.querySelector('#cookie-settings-fab')
  ];

  // Käydään läpi jokainen lista elementti
  backgroundElements.forEach((el) => {
  // Jos ei löydy niin ohitetaan
    if (!el) return;

    // Varmistus: älä koskaan tee inertiksi elementtiä, jonka sisällä Klaro on.
    if (el.querySelector('#klaro')) return;

    // Varsinainen muutos
    if (isInert) {
      el.setAttribute('inert', '');
    } else {
      el.removeAttribute('inert');
    }
  });
}

// Tarkistaa onko Klaron modaali näkyvissä juuri nyt
function updateKlaroInertState() {
  // Etsitään Klaron modaalielementti 
  const modal = document.querySelector('#klaro .cookie-modal');

  // Päätellään, onko modaali näkyvissä
  const modalVisible =
    modal &&
    !modal.classList.contains('cookie-notice-hidden') &&
    window.getComputedStyle(modal).display !== 'none' &&
    window.getComputedStyle(modal).visibility !== 'hidden';

  setBackgroundInert(Boolean(modalVisible));
}
// suoritetaan seuraavat vasta kun sivun HTML on ladattu
document.addEventListener('DOMContentLoaded', function () {
  const observer = new MutationObserver(updateKlaroInertState);

  // Tarkkaillaan HTML-sivun muutoksia
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class', 'style']
  });

  updateKlaroInertState();
});