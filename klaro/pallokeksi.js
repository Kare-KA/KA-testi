(function () {
    // Kieliversiot
    var texts = {
        fi: {
            label: 'Evästeasetukset',
            ariaLabel: 'Avaa evästeasetukset'
        },
        sv: {
            label: 'Cookie-inställningar',
            ariaLabel: 'Öppna cookie-inställningarna'
        }
    };





    // Tyylit – sininen pilleri vasemmassa alakulmassa, jossa kellertävä "keksi"
    var css = `
#cookie-settings-fab {
    position: fixed;
    left: 1.5rem;
    bottom: 1.4rem;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0;

    background-color: #004976; /* sama sininen kuin ennen */
    color: #ffffff;
    border-radius: 999px;
    padding: 0.35rem 0.40rem 0.35rem 0.35rem;
    border: none;

    cursor: pointer;
    z-index: 900;
    box-shadow: 0 2px 6px rgba(0,0,0,0.25);

    font-family: 'Montserrat', Arial, sans-serif;
    font-size: 20px;
    line-height: 1;

    box-sizing: border-box;
    transition: box-shadow 0.2s ease, transform 0.2s ease;
}




#cookie-settings-fab:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 3px;
}




/* Kellertävä "keksi"-ympyrä vasemmassa päässä */
#cookie-settings-fab .cookie-icon {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #FFF7E1; /* sama keltainen kuin bannerin tausta */
    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}




/* Voit korvata tämän esim. omalla SVG:llä tai taustakuvalla */
#cookie-settings-fab .cookie-icon span {
    font-size: 40px;
}




/* Teksti, joka ilmestyy pillin oikeaan osaan */
#cookie-settings-fab .cookie-label {
    white-space: nowrap;
    max-width: 0;
    opacity: 0;
    margin-left: 0;
    overflow: hidden;
	padding: 0;  /* ei tyhjää tilaa lepotilassa */

    transition:
        max-width 0.25s ease-out,
        opacity 0.15s ease-out,
        margin-left 0.2s ease-out,
        padding 0.2s ease-out;
}




/* Hover tai näppäimistöfokus: näytä teksti */
#cookie-settings-fab:hover .cookie-label,
#cookie-settings-fab:focus-visible .cookie-label {
    max-width: 220px;
    opacity: 1;
    margin-left: 0.5rem;
    padding: 0 0.3rem;  /* tyhjä tila ennen ja jälkeen tekstin */
}



/* Kun Klaron banneri on näkyvissä, kieleke passiiviseksi */
body.klaro-visible #cookie-settings-fab {
    pointer-events: none;
    opacity: 0.6;
}




/* Pienemmillä näytöillä vähän kompaktimpi */
@media (max-width: 480px) {
    #cookie-settings-fab {
        left: 1rem;
        bottom: 1rem;
        padding: 0.3rem 0.6rem 0.3rem 0.3rem;
    }




    #cookie-settings-fab .cookie-icon {
        width: 28px;
        height: 28px;
    }




    #cookie-settings-fab .cookie-label {
        max-width: 0; /* perusasetus, yliajetaan hover/focus-tilassa */
    }




    #cookie-settings-fab:hover .cookie-label,
    #cookie-settings-fab:focus-visible .cookie-label {
        max-width: 180px;
    }
}
`;




    function createCookieFab() {
        // Tarkistetaan onko pilleri jo olemassa, jos on niin ei luoda uutta
        if (document.getElementById('cookie-settings-fab')) {
            return;
        }

        // Lisää tyylit <head>-osioon
        var style = document.createElement('style');
        style.type = 'text/css';
        style.textContent = css;
        document.head.appendChild(style);

        // Valitaan kieli html lang -attribuutista (fi/sv)
        var lang = (document.documentElement.lang || 'fi')
            .toLowerCase()
            .substring(0, 2);

        var t = texts[lang] || texts.fi;

        // Luodaan nappi-elementti
        var btn = document.createElement('button');
        btn.id = 'cookie-settings-fab';
        btn.type = 'button';
        btn.setAttribute('aria-label', t.ariaLabel);
        btn.setAttribute('aria-haspopup', 'dialog'); // avaa modaalin (Klaro)
        btn.title = t.label;

        // Keksi-ikoni
        var icon = document.createElement('div');
        icon.className = 'cookie-icon';
		icon.setAttribute('aria-hidden', 'true');   // Ruudunlukija lukee vain aria-label arvo, ei näkyvää tekstiä

        // Keksi-ikoni
        var iconInner = document.createElement('span');
        iconInner.textContent = '🍪'; // korvaa kun piirrät oman keksikuvasi
        icon.appendChild(iconInner);

        // Teksti (näkyy vain hover/focus-tilassa)
        var label = document.createElement('span');
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
