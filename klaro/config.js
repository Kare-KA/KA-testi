var klaroConfig = {
    elementID: 'klaro',
    storageMethod: 'cookie',
    storageName: 'klaro',
    lang: 'fi',
    htmlTexts: true,
    embedded: false,
    hideDeclineAll: false,
    hideLearnMore: true,
    mustConsent: true,
    translations: {
        fi: {
            consentModal: {
                title: 'Tietosuojaseloste',
                description: 'Käytämme teknologioita, kuten evästeitä, tarjotaksemme paremman käyttökokemuksen. Voit hyväksyä tai hylätä evästeet valintasi mukaan.',
            },
            consentNotice: {
                description: 'Tämä sivusto käyttää evästeitä parantaakseen käyttökokemusta.',
                learnMore: '',
                changeDescription: '',
            },
            purposes: {
                analytics: 'Kävijäseuranta',
            },
            ok: 'Kyllä',
            acceptAll: 'Kyllä',
            decline: 'Ei',
            save: 'Tallenna',
        }
    },
    services: [
        {
            name: 'matomo',
            title: 'Matomo Analytics',
            purposes: ['analytics'],
            default: true,
            required: false,
            optOut: false,
            onlyOnce: true,
            callback: function(consent, service) {
                // Ei estetä skriptejä, mutta voidaan reagoida valintaan tässä jos halutaan
                console.log('Suostumus Matomoon:', consent);
            }
        }
    ]
};
