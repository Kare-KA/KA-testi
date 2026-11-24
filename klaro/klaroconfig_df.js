// By default, Klaro will load the config from  a global "klaroConfig" variable.
// You can change this by specifying the "data-config" attribute on your
// script take, e.g. like this:
// <script src="klaro.js" data-config="myConfigVariableName" />
var klaroConfig = {
    // With the 0.7.0 release we introduce a 'version' paramter that will make
    // it easier for us to keep configuration files backwards-compatible in the future.
    version: 1,

    // You can customize the ID of the DIV element that Klaro will create
    // when starting up. If undefined, Klaro will use 'klaro'.
    elementID: 'klaro',

    // You can override CSS style variables here. For IE11, Klaro will
    // dynamically inject the variables into the CSS. If you still consider
    // supporting IE9-10 (which you probably shouldn't) you need to use Klaro
    // with an external stylesheet as the dynamic replacement won't work there.
    styling: {
        theme: ['light', 'top', 'wide'],
    },

    // You can show a description in contextual consent overlays for store 
    // being empty. In that case the accept always button is omitted. 
    // The description contains a link for opening the consent manager. 
    showDescriptionEmptyStore: true,

    // Setting this to true will keep Klaro from automatically loading itself
    // when the page is being loaded.
    noAutoLoad: false,

    // Setting this to true will render the descriptions of the consent
    // modal and consent notice are HTML. Use with care.
    htmlTexts: true,

    // Setting 'embedded' to true will render the Klaro modal and notice without
    // the modal background, allowing you to e.g. embed them into a specific element
    // of your website, such as your privacy notice.
    embedded: false,

    // You can group services by their purpose in the modal. This is advisable
    // if you have a large number of services. Users can then enable or disable
    // entire groups of services instead of having to enable or disable every service.

    groupByPurpose: false, //postetaan pääryhmät käytöstä

    // You can make the consent notice autofocused by enabling the following option
    autoFocus: true,

    // You can show a title in the consent notice by enabling the following option
    showNoticeTitle: false,

    // How Klaro should store the user's preferences. It can be either 'cookie'
    // (the default) or 'localStorage'.
    storageMethod: 'cookie',

    // You can customize the name of the cookie that Klaro uses for storing
    // user consent decisions. If undefined, Klaro will use 'klaro'.
    cookieName: 'klaro',

    // You can also set a custom expiration time for the Klaro cookie.
    // By default, it will expire after 120 days.
    cookieExpiresAfterDays: 365,

    // You can change to cookie domain for the consent manager itself.
    // Use this if you want to get consent once for multiple matching domains.
    // If undefined, Klaro will use the current domain.
    //cookieDomain: '.github.com',

    // You can change to cookie path for the consent manager itself.
    // Use this to restrict the cookie visibility to a specific path.
    // If undefined, Klaro will use '/' as cookie path.
    //cookiePath: '/',

    // Defines the default state for services (true=enabled by default).
    default: false,

    // If "mustConsent" is set to true, Klaro will directly display the consent
    // manager modal and not allow the user to close it before having actively
    // consented or declines the use of third-party services.
    mustConsent: false,

    // Show "accept all" to accept all services instead of "ok" that only accepts
    // required and "default: true" services
    acceptAll: true,

    // replace "decline" with cookie manager modal
    hideDeclineAll: false,

    // hide "learnMore" link
    hideLearnMore: false,

    // show cookie notice as modal
    noticeAsModal: false,

    // You can also remove the 'Realized with Klaro!' text in the consent modal.
    // Please don't do this! We provide Klaro as a free open source tool.
    // Placing a link to our website helps us spread the word about it,
    // which ultimately enables us to make Klaro! better for everyone.
    // So please be fair and keep the link enabled. Thanks :)
    //disablePoweredBy: true,

    // you can specify an additional class (or classes) that will be added to the Klaro `div`
    //additionalClass: 'my-klaro',

    // You can define the UI language directly here. If undefined, Klaro will
    // use the value given in the global "lang" variable. If that does
    // not exist, it will use the value given in the "lang" attribute of your
    // HTML tag. If that also doesn't exist, it will use 'en'.
    //lang: 'en',

    // You can overwrite existing translations and add translations for your
    // service descriptions and purposes. See `src/translations/` for a full
    // list of translations that can be overwritten:
    // https://github.com/KIProtect/klaro/tree/master/src/translations

    // Example config that shows how to overwrite translations:
    // https://github.com/KIProtect/klaro/blob/master/src/configs/i18n.js


	// lang: 'sv', // Pakotetaan kieli

    translations: {
        // translationsed defined under the 'zz' language code act as default
        // translations.
        zz: {

        },
		

		fi: {

			consentNotice: {
				description: 'Tämä sivusto käyttää evästeitä.<br><br>Valitsemalla ”<b>Hyväksyn vain välttämättömät</b>” estät Matomon analytiikkaevästeet. Palvelun käytöstä voidaan edelleen kerätä rajattua evästeetöntä tilastotietoa verkkopalveluiden analysointia ja kehittämistä varten. Valitsemalla ”<b>Hyväksyn kaikki</b>” annat luvan myös analytiikkaevästeisiin, jotka parantavat käyttötilastojen tarkkuutta. Valitsemalla ”<b>Evästeasetukset</b>” voit valita yksityiskohtaisemmin, mitä evästeitä otat käyttöön. Lisätietoja on <a href="https://kansallisarkisto.fi/tietosuoja" class="homepagelink" target="_blank" rel="noopener">Tietosuojaselosteessa</a>',
				learnMore: 'Evästeasetukset',
				},

			consentModal: {
				title: 'Valitse haluamasi evästeet',
				description: '<a href="https://kansallisarkisto.fi/tietosuoja" class="homepagelink" target="_blank" rel="noopener">Tietosuojaseloste</a>',
				},

            acceptAll: 'Hyväksyn kaikki',
            ok: 'Hyväksyn kaikki',
			acceptSelected: 'Hyväksyn valitut',
			decline: 'Hyväksyn vain välttämättömät',



			purposes: {
				necessary: 'Tekninen toiminta ja tietoturva',
				optional: 'Ei-välttämättömät',
				},



			contextualConsent: {
				description: 'Nähdäksesi tämän sisällön sinun on hyväksyttävä kolmannen osapuolen evästeet.',
				acceptOnce: 'Hyväksy vain tällä kertaa',
				acceptAlways: 'Hyväksy aina',
				descriptionEmptyStore: 'Nähdäksesi tämän sisällön sinun on hyväksyttävä kolmannen osapuolen evästeet.',
				},


			valttamaton: {
				title: 'Välttämättömät',
				description: 'Tarvitaan palvelun perustoimintoihin (esim. sivun latautuminen, tietoturva ja lomakkeiden lähetys). Näitä evästeitä tarvitaan aina, eikä niitä voi poistaa käytöstä.',
				},

            matomo: {
                title: 'Matomo (palvelun käytön tilastointi)',
                description: `
                    <p>Kerää käyttötilastoja palvelun kehittämistä varten. Jos et hyväksy analytiikkaevästeitä, palvelussa voidaan silti kerätä evästeetöntä käyttötilastotietoa. Tietoja ei käytetä yksittäisten henkilöiden tunnistamiseen, profilointiin tai markkinointiin. Tietojen käsittely perustuu yleistä etua koskevaan tehtävään. Tietoja käytetään palvelujen kehittämiseen sekä toiminnan tuottavuuden ja vaikuttavuuden mittaamiseen. Lisätietoja tietosuojaselosteessa.</p>

                    <table class="cookie-table">
                        <thead>
                            <tr>
                                <th class="col-cookie">Eväste</th>
                                <th>Tarkoitus</th>
                                <th class="col-ttl">Voimassaolo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="col-cookie">_pk_id</td>
                                <td>Erottaa uudet ja palaavat käynnit ja laskee käyntikertoja.</td>
                                <td class="col-ttl">13 kuukautta</td>
                            </tr>
                            <tr>
                                <td>_pk_ref</td>
                                <td>Tallentaa tiedon palvelusta, josta käyttäjä saapui sivustolle.</td>
                                <td>6 kuukautta</td>
                            </tr>
                            <tr>
                                <td>_pk_ses</td>
                                <td>Yhdistää saman käynnin sivulataukset.</td>
                                <td>30 minuuttia</td>
                            </tr>
                        </tbody>
                    </table>

                 `,
                 },

			},


		sv: {
			consentNotice: {
				description: 'Denna webbplats använder cookies.<br><br>Genom att välja ”<b>Godkänn endast nödvändiga</b>” förhindrar du Matomos analyscookies. Begränsad cookiefri statistik om användningen av tjänsten kan fortfarande samlas in för analys och utveckling av webbtjänsterna. Genom att välja ”<b>Godkänn alla</b>” ger du även samtycke till analyscookies, som förbättrar användningsstatistikens noggrannhet. Genom att välja ”<b>Cookie-inställningar</b>” kan du mer detaljerat välja vilka cookies du vill tillåta. Mer information finns i <a href="https://kansallisarkisto.fi/sv/dataskydd" class="homepagelink" target="_blank" rel="noopener">Dataskyddsbeskrivning</a>',
				learnMore: 'Cookie-inställningar',
			},

			consentModal: {
				title: 'Välj vilka cookies du vill tillåta',
				description: '<a href="https://kansallisarkisto.fi/sv/dataskydd" class="homepagelink" target="_blank" rel="noopener">Dataskyddsbeskrivning</a>',
			},
			
            acceptAll: 'Godkänn alla',
            ok: 'Godkänn alla',
            acceptSelected: 'Godkänn valda',
            decline: 'Godkänn endast nödvändiga',

			contextualConsent: {
				description: 'För att se detta innehåll måste du godkänna tredjepartscookies.',
				acceptOnce: 'Godkänn endast denna gång',
				acceptAlways: 'Godkänn alltid',
				descriptionEmptyStore: 'För att se detta innehåll måste du godkänna tredjepartscookies.',
			},
						
			purposes: {
				necessary: 'Teknisk funktion och säkerhet',
				optional: 'Ej nödvändiga',
			},
			
			matomo: {
				title: 'Matomo (statistik över användningen av tjänsten)',
				description: `<p>Samlar in användningsstatistik för att utveckla tjänsten. Om du inte godkänner analyscookies kan cookiefri användningsstatistik fortfarande samlas in i tjänsten. Uppgifterna används inte för att identifiera enskilda personer, profilering eller marknadsföring. Behandlingen av uppgifterna grundar sig på en uppgift av allmänt intresse. Uppgifterna används för att utveckla tjänsterna samt för att mäta verksamhetens produktivitet och genomslag. Mer information finns i dataskyddsbeskrivningen.<p>

                <table class="cookie-table">
                    <thead>
                        <tr>
                            <th class="col-cookie">Cookie</th>
                            <th>Syfte</th>
                            <th class="col-ttl">Giltighetstid</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="col-cookie">_pk_id</td>
                            <td>Skiljer mellan nya och återkommande besök och räknar antalet besök.</td>
                            <td class="col-ttl">13 månader</td>
                        </tr>
                        <tr>
                            <td>_pk_ref</td>
                            <td>Sparar information om varifrån besökaren kom till webbplatsen.</td>
                            <td>6 månader</td>
                        </tr>
                        <tr>
                             <td>_pk_ses</td>
                             <td>Kopplar samman sidvisningar under samma besök (session).</td>
                             <td>30 minuter</td>
                        </tr>
                    </tbody>
                </table>
                    
                 `,

			},
						
			valttamaton: {
				title: 'Nödvändiga',
				description: 'Behövs för webbplatsens grundläggande funktioner (t.ex. sidladdning, informationssäkerhet och formulärinlämning). Dessa cookies behövs alltid och kan inte stängas av.',
			},			


			},

en: {

    consentNotice: {
        description: 'This website uses cookies.<br><br>By selecting “<b>Accept only necessary</b>”, you prevent Matomo analytics cookies from being used. Limited cookieless statistics about the use of the service may still be collected for analysing and improving our online services. By selecting “<b>Accept all</b>”, you also consent to analytics cookies, which improve the accuracy of usage statistics. By selecting “<b>Cookie settings</b>”, you can choose in more detail which cookies you allow. More information is available in the <a href="https://kansallisarkisto.fi/en/data-protection" class="homepagelink" target="_blank" rel="noopener">Privacy notice</a>',
        learnMore: 'Cookie settings',
    },

    consentModal: {
        title: 'Select the cookies you want to allow',
        description: '<a href="https://kansallisarkisto.fi/en/data-protection" class="homepagelink" target="_blank" rel="noopener">Privacy notice</a>',
    },

    acceptAll: 'Accept all',
    ok: 'Accept all',
    acceptSelected: 'Accept selected',
    decline: 'Accept only necessary',

    purposes: {
        necessary: 'Technical operation and security',
        optional: 'Optional',
    },

    contextualConsent: {
        description: 'To view this content, you must accept third-party cookies.',
        acceptOnce: 'Accept this time only',
        acceptAlways: 'Always accept',
        descriptionEmptyStore: 'To view this content, you must accept third-party cookies.',
    },

    valttamaton: {
        title: 'Necessary',
        description: 'Necessary for the basic functioning of the service (e.g. page loading, security, and form submissions). These cookies are always required and cannot be disabled.',
    },

    matomo: {
        title: 'Matomo (service usage statistics)',
        description: `<p>Collects usage statistics to help improve the service. If you do not accept analytics cookies, cookieless usage statistics may still be collected in the service. The information is not used to identify individual persons, for profiling or for marketing. The processing of the data is based on a task carried out in the public interest. The data is used to develop services and to measure the productivity and impact of our activities. More information is available in the privacy notice.<p>

                <table class="cookie-table">
                    <thead>
                        <tr>
                            <th class="col-cookie">Cookie</th>
                            <th>Purpose</th>
                            <th class="col-ttl">Retention</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="col-cookie">_pk_id</td>
                            <td>Distinguishes between new and returning visits and counts visits.</td>
                            <td class="col-ttl">13 months</td>
                        </tr>
                        <tr>
                            <td>_pk_ref</td>
                            <td>Stores information on where the visitor came from (referrer).</td>
                            <td>6 months</td>
                        </tr>
                        <tr>
                             <td>_pk_ses</td>
                             <td>Links page views within the same visit (session).</td>
                             <td>30 minutes</td>
                        </tr>
                    </tbody>
                </table>
                    
                 `,
    },

},

},

    // This is a list of third-party services that Klaro will manage for you.
    services: [


		{
			name: 'valttamaton',
			purposes: ['necessary'],
			default: true,
			required: true,
/*			cookies: ['Välttämätön'] // evästeen nimi, jonka skripti asettaa */
		},

        // {
           // name: 'youtube',
            // purposes: ['optional'],
            // default: false,
            // required: false,
            // optOut: false,
        // },

        {
            // Each service should have a unique (and short) name.
            name: 'matomo',

            // If "default" is set to true, the service will be enabled by default
            // Overwrites global "default" setting.
            // We recommend leaving this to "false" for services that collect
            // personal information.
            default: false,

            // The title of your service as listed in the consent modal.
            // title: 'Matomo (kävijäseuranta)',

            // The purpose(s) of this service. Will be listed on the consent notice.
            // Do not forget to add translations for all purposes you list here.

			purposes: ['optional'],


            // A list of regex expressions or strings giving the names of
            // cookies set by this service. If the user withdraws consent for a
            // given service, Klaro will then automatically delete all matching
            // cookies.
            cookies: [
                // you can also explicitly provide a path and a domain for
                // a given cookie. This is necessary if you have services that
                // set cookies for a path that is not "/" or a domain that
                // is not the current domain. If you do not set these values
                // properly, the cookie can't be deleted by Klaro
                // (there is no way to access the path or domain of a cookie in JS)
                // Notice that it is not possible to delete cookies that were set
                // on a third-party domain! See the note at mdn:
                // https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie#new-cookie_domain
                [/^_pk_.*$/, '/', 'df.narc.fi'], //for the production version
                [/^_pk_.*$/, '/', 'localhost'], //for the local version
                'piwik_ignore',
            ],

            // An optional callback function that will be called each time
            // the consent state for the service changes (true=consented). Passes
            // the `service` config as the second parameter as well.

            //Tätä callbackia kutsutaan, kun Matomo-palvelun suostumustila muuttuu Klarossa.
            // Matomo-seuranta itsessään jatkuu aina. Suostumus vaikuttaa evästeisiin ja
            // browser feature detectioniin.
            callback: function(consent, service) {

                // Testausta varten: näyttää suostumustilan selaimen konsolissa.
                console.log(
                    'User consent for service ' +
                    service.name +
                    ': consent=' +
                    consent
                );

                // Jos suostumus perutaan ja Matomo on käynnissä, pysäytetään
                // seuranta. Seurantakoodin requireConsent-käsky mahdollistaa tämän.
                // Komentojonoa ei luoda, jos sitä ei ole, jotta jonoon ei jää
                // käskyjä, jotka suoritettaisiin myöhemmän suostumuksen jälkeen.
                if (!consent && window._paq) {
                    window._paq.push(['forgetConsentGiven']);
                }
            },

            // If "required" is set to true, Klaro will not allow this service to
            // be disabled by the user.
            required: false,

            // If "optOut" is set to true, Klaro will load this service even before
            // the user gave explicit consent.
            // We recommend always leaving this "false".
            optOut: false,

            // If "onlyOnce" is set to true, the service will only be executed
            // once regardless how often the user toggles it on and off.
            onlyOnce: false,
        },
		

        // The services will appear in the modal in the same order as defined here.
/*
        {
            name: 'inlineTracker',
            title: 'Inline Tracker',
            purposes: ['analytics'],
            cookies: ['inline-tracker'],
            optOut: false,
        },

        {
            name: 'externalTracker',
            title: 'External Tracker',
            purposes: ['analytics', 'security'],
            cookies: ['external-tracker'],
        },

        {
            name: 'livechat',
            title: 'Livechat',
            default: true,
            purposes: ['livechat'],
        },
*/

/*        {
            name: 'googleFonts',
            title: 'Google Fonts',
            purposes: ['styling'],
        },
*/


    ],
};
