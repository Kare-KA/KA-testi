(function () {
    // Kaikki säädettävä yhdessä paikassa:
    var cookieTabConfig = {
        position: {
            bottom: '40px',   // etäisyys alareunasta
            side: 'right'     // <-- TÄMÄ: 'right' = oikea laita, 'left' = vasen
        },
        texts: {
            fi: {
                label: 'Evästeasetukset',
                ariaLabel: 'Avaa evästeasetukset'
            },
            sv: {
                label: 'Cookie-inställningar',
                ariaLabel: 'Öppna cookie-inställningarna'
            }
        },
        styles: `
#cookie-settings-button {
    display: block;
    position: fixed;
    writing-mode: vertical-lr;        /* Teksti ylhäältä alas */
    background-color: #004976;
    color: white;
    padding: 8px 2px;
    font-size: 14px;
    font-weight: normal;
    font-family: 'Montserrat', Arial, sans-serif;
    letter-spacing: 1px;
    line-height: 2.0;
    border-radius: 10px 0 0 10px;     /* Pyöristykset vasemmalle, koska ollaan oikeassa reunassa */
    z-index: 500;
    text-align: center;
    text-decoration: none;
    box-shadow: 2px 2px 6px rgba(0,0,0,0.2);
}

body.klaro-visible #cookie-settings-button {
    pointer-events: none;
    opacity: 0.6; /* kun banneri auki, kieleke ei ole klikattavissa */
}
        `
    };

    function createCookieTab() {
        // Lisätään tyylit <head>-osioon
        var style = document.createElement('style');
        style.type = 'text/css';
        style.textContent = cookieTabConfig.styles;
        document.head.appendChild(style);

        // Valitaan kieli html lang -attribuutista (fi/sv)
        var lang = (document.documentElement.lang || 'fi')
            .toLowerCase()
            .substring(0, 2);

        var t = cookieTabConfig.texts[lang] || cookieTabConfig.texts.fi;

        // Luodaan kieleke-elementti
        var btn = document.createElement('a');
        btn.id = 'cookie-settings-button';
        btn.href = '#';
        btn.textContent = t.label;
        btn.setAttribute('aria-label', t.ariaLabel);

        // Sijainti (oikea/vasen + alareuna)
        btn.style.bottom = cookieTabConfig.position.bottom;
        if (cookieTabConfig.position.side === 'right') {
            btn.style.right = '0';
            btn.style.left = 'auto';
        } else {
            btn.style.left = '0';
            btn.style.right = 'auto';
        }

        // Klikkaus → avaa Klaron modaalin
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            if (window.klaro && typeof klaro.show === 'function') {
                klaro.show();
            }
        });

        document.body.appendChild(btn);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createCookieTab);
    } else {
        createCookieTab();
    }
})();
