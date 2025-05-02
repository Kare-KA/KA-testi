var klaroConfig = {
    elementID: 'klaro',
    storageMethod: 'cookie',
    storageName: 'klaro',
    lang: 'fi',
    htmlTexts: true,
    embedded: false,
    noticeOnly: true,   // 🔹 tämä pakottaa bannerimuodon
    mustConsent: false, // 🔹 estetään modal-popup
    acceptAll: true,
    hideLearnMore: true,
    translations: {
        fi: {
            consentNotice: {
                description: 'Käytämme teknologioita, kuten evästeitä, tarjotaksemme paremman käyttökokemuksen.',
            },
            ok: 'Kyllä',
            acceptAll: 'Kyllä',
            decline: 'Ei',
        }
    },
    services: [] // Ei yksittäisiä palveluita näkyvissä
};
