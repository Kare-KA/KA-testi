(function () {
    // Kieliversiot
    const texts = {
        fi: {
            label: 'Evästeasetukset',
            ariaLabel: 'Avaa evästeasetukset'
        },
        sv: {
            label: 'Cookie-inställningar',
            ariaLabel: 'Öppna cookie-inställningarna'
        }
    };



    function createCookieFab() {
        // Tarkistetaan onko pilleri jo olemassa, jos on niin ei luoda uutta
        if (document.getElementById('cookie-settings-fab')) {
            return;
        }


        // Valitaan kieli html lang -attribuutista (fi/sv)
        const lang = (document.documentElement.lang || 'fi')
            .toLowerCase()
            .substring(0, 2);

        const t = texts[lang] || texts.fi;

        // Luodaan nappi-elementti
        const btn = document.createElement('button');
        btn.id = 'cookie-settings-fab';
        btn.type = 'button';
        btn.setAttribute('aria-label', t.ariaLabel);
        btn.setAttribute('aria-haspopup', 'dialog'); // avaa modaalin (Klaro)
        btn.title = t.label;

        // Keksi-ikoni
        const icon = document.createElement('div');
        icon.className = 'cookie-icon';
		icon.setAttribute('aria-hidden', 'true');   // Ruudunlukija lukee vain aria-label arvo, ei näkyvää tekstiä

		// Keksi-ikoni SVG-tiedostosta
		const iconImg = document.createElement('img');
		iconImg.src = 'klaro/napit.svg';
		iconImg.alt = '';                    // tyhjä alt, koska nappi saa nimen aria-labelista
		iconImg.setAttribute('aria-hidden', 'true');

		icon.appendChild(iconImg);

        // Teksti (näkyy vain hover/focus-tilassa)
        const label = document.createElement('span');
        label.className = 'cookie-label';
        label.textContent = t.label;
        label.setAttribute('aria-hidden', 'true'); // Ruudunlukija lukee vain aria-label arvo, ei näkyvää tekstiä
        btn.appendChild(icon);
        btn.appendChild(label);

        // Avaa Klaron asetukset
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            if (window.klaro && typeof klaro.show === 'function') {
                klaro.show();
            }
        });

        document.body.appendChild(btn);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createCookieFab);
    } else {
        createCookieFab();
    }
})();
