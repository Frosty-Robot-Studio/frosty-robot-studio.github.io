// Celestile — Deutsch. Übersetzung von content-en.js; maßgeblich ist die englische Fassung.
window.CELESTILE_LEGAL = window.CELESTILE_LEGAL || {};
window.CELESTILE_LEGAL.de = {
  name: 'Deutsch',
  updatedLabel: 'Zuletzt aktualisiert',
  updated: '2. August 2026',
  otherDoc: { privacy: 'Datenschutzerklärung', terms: 'Nutzungsbedingungen' },
  footer: 'Celestile ist ein Produkt von Frosty Robot Studio LLC.',

  privacy: {
    title: 'Datenschutzerklärung',
    intro: [
      'Diese Datenschutzerklärung beschreibt, wie Frosty Robot Studio LLC („wir“) mit Informationen umgeht, wenn Sie <strong>Celestile</strong> (das „Spiel“) unter iOS oder Android spielen.',
      'Celestile hat kein Konto und keine Anmeldung. Wir fragen weder Ihren Namen noch E-Mail-Adresse, Telefonnummer oder Geburtsdatum ab. Wir betreiben keinen Server, der Ihren Spielstand speichert, und erheben keine Analysedaten zu Ihrem Spielverhalten.',
    ],
    sections: [
      {
        h: 'Was auf Ihrem Gerät bleibt',
        body: [
          'Alles, was sich das Spiel merkt, wird auf Ihrem Gerät gespeichert und niemals an uns übermittelt:',
          ['Ihre Einstellungen: Sprache, Textgröße, Ton und ob KI-Züge übersprungen werden.',
           'Ihr Spielstand, damit Sie die App mitten in einer Partie schließen und später zurückkehren können.',
           'Ihre Bilanz je Fraktion: gespielte Partien, Siege, beste Punktzahl und beste Wertung.',
           'Welche Erfolge Sie erreicht haben.',
           'Welche Fraktionen Sie besitzen und wie viele Partien Sie heute begonnen haben.'],
          'Wenn Sie das Spiel löschen, wird all das mitgelöscht. Es gibt keine Kopie an anderer Stelle, und wir können nichts wiederherstellen.',
        ],
      },
      {
        h: 'Was wir nicht erheben',
        body: [
          'Wir erheben weder Ihren Standort noch Kontakte, Fotos, Kalender, Mikrofon- oder Kameradaten, Gesundheitsdaten, Browserverlauf oder besondere Kategorien personenbezogener Daten. Das Spiel hat keinen Chat, keine Nachrichtenfunktion und keinerlei Funktionen zwischen Nutzenden. Wir erstellen kein Profil von Ihnen und verkaufen nichts über Sie.',
        ],
      },
      {
        h: 'Werbung',
        body: [
          'Celestile zeigt genau eine Art von Werbung: ein bildschirmfüllendes Interstitial unmittelbar vor Beginn einer neuen Partie, und erst nach Ihren ersten beiden Partien des Tages. Es gibt keine Banner, und nichts im Spiel ist hinter dem Ansehen einer Werbung eingeschlossen.',
          'Die Werbung wird von <strong>Google AdMob</strong> ausgeliefert. Zur Auswahl und Messung kann Google die Werbekennung Ihres Geräts, Ihre IP-Adresse, Gerätetyp und Betriebssystem sowie Informationen zu den Anzeigen verwenden, die Ihnen gezeigt wurden oder mit denen Sie interagiert haben. Der Umgang von Google mit diesen Daten richtet sich nach den eigenen Richtlinien von Google:',
          ['<a href="https://policies.google.com/technologies/partner-sites">Wie Google Daten von Websites und Apps verwendet, die Google-Dienste nutzen</a>',
           '<a href="https://support.google.com/admob/answer/6128543">Google-AdMob-Richtlinien</a>'],
          'Ab iOS 14.5 verlangt Apple Ihre Erlaubnis, bevor eine App Sie über Apps und Websites anderer Unternehmen hinweg tracken darf. Celestile fragt diese Erlaubnis vor der ersten Werbung ab, die es Ihnen überhaupt zeigen würde, nicht beim Start. Wenn Sie ablehnen, sehen Sie weiterhin Werbung, sie ist jedoch weniger relevant für Sie, und es findet kein app-übergreifendes Tracking statt. Sie können Ihre Antwort jederzeit unter <em>Einstellungen › Datenschutz &amp; Sicherheit › Tracking</em> ändern. Unter Android können Sie Ihre Werbe-ID in den Google-Einstellungen zurücksetzen oder löschen.',
          'Der Kauf einer beliebigen Fraktion entfernt Werbung dauerhaft.',
        ],
        note: '<strong>Wenn Sie sich im EWR, im Vereinigten Königreich oder in der Schweiz befinden, zeigt Ihnen Celestile überhaupt keine Werbung.</strong> Statt Sie um Einwilligung in personalisierte Werbung zu bitten, schalten wir Werbung in diesen Regionen vollständig ab: Es wird keine Anzeige angefordert und keine Werbekennung ausgelesen oder verwendet. Das gesamte Spiel bleibt spielbar, und Ihnen wird nichts vorenthalten. Wir ermitteln dies anhand von Region und Zeitzone Ihres Geräts und entscheiden im Zweifel gegen Werbung.',
      },
      {
        h: 'Käufe',
        body: [
          'Sechs der acht Fraktionen können einzeln gekauft werden. Jede ist ein einmaliger Kauf, kein Abonnement.',
          'Alle Zahlungen werden von Apple oder Google abgewickelt. <strong>Wir erhalten und speichern niemals Ihre Zahlungskartendaten.</strong> Unser Zahlungsdienstleister RevenueCat erfasst, welche Fraktionen Sie besitzen, verknüpft mit einer von ihm erzeugten anonymen Kennung, damit Ihre Käufe auf einem neuen Gerät wiederhergestellt werden können. Diese Kennung ist weder mit Ihrem Apple-Account noch mit Ihrem Google-Konto, Ihrer E-Mail-Adresse oder anderen persönlichen Angaben verknüpft.',
          'Sie können frühere Käufe jederzeit über <em>Einstellungen › Käufe wiederherstellen</em> im Spiel zurückholen.',
        ],
      },
      {
        h: 'Wer Informationen verarbeitet',
        body: [
          'Wir verkaufen Ihre personenbezogenen Daten nicht und geben sie nicht an Werbetreibende für deren eigene Zwecke weiter. Wir setzen die folgenden Anbieter ein:',
        ],
        table: {
          head: ['Anbieter', 'Wofür zuständig', 'Deren Richtlinie'],
          rows: [
            ['Google AdMob', 'Ausliefern und Messen von Werbung: Werbekennung, IP-Adresse, Gerätedaten. Nicht eingesetzt im EWR, im Vereinigten Königreich und in der Schweiz.', '<a href="https://policies.google.com/privacy">policies.google.com/privacy</a>'],
            ['RevenueCat', 'Erfassen, welche Fraktionen besessen werden, verknüpft mit einer anonymen Kennung', '<a href="https://www.revenuecat.com/privacy">revenuecat.com/privacy</a>'],
            ['Apple / Google Play', 'Abwicklung aller Zahlungen und Erstattungen', '<a href="https://www.apple.com/legal/privacy/">apple.com/legal/privacy</a>'],
          ],
        },
        after: [
          'Wir können Informationen außerdem offenlegen, wenn wir gesetzlich dazu verpflichtet sind, um unsere Nutzungsbedingungen durchzusetzen, um unsere Rechte oder die Sicherheit anderer zu schützen, oder im Zusammenhang mit einer Fusion, Übernahme oder einem Verkauf von Vermögenswerten — in diesem Fall werden wir es in dieser Erklärung vermerken.',
        ],
      },
      {
        h: 'Internationale Übermittlungen',
        body: [
          'Unsere Anbieter arbeiten weltweit, daher können Informationen in den Vereinigten Staaten und in anderen Ländern verarbeitet werden, deren Datenschutzrecht von dem Ihres Wohnsitzes abweicht. Werden personenbezogene Daten aus dem Vereinigten Königreich oder dem EWR übermittelt, stützen sich unsere Anbieter auf Garantien wie die Standardvertragsklauseln der Europäischen Kommission oder einen Angemessenheitsbeschluss.',
        ],
      },
      {
        h: 'Ihre Wahlmöglichkeiten und Rechte',
        body: [
          [
            '<strong>Werbung.</strong> Schalten Sie App-Tracking ab oder setzen Sie Ihre Werbekennung in den Geräteeinstellungen zurück, wie oben beschrieben. Der Kauf einer beliebigen Fraktion entfernt Werbung vollständig.',
            '<strong>Löschen Ihrer Daten.</strong> Da es kein Konto gibt und nichts von Ihnen auf unseren Systemen gespeichert wird, löscht das Entfernen des Spiels von Ihrem Gerät alles, was es enthält. Wenn Sie zusätzlich möchten, dass Ihr Kaufeintrag bei RevenueCat gelöscht wird, schreiben Sie uns an die unten genannte Adresse und nennen Sie uns den Store, über den Sie gekauft haben, sowie ungefähr wann.',
            '<strong>Auskunft, Berichtigung, Datenübertragbarkeit, Einschränkung und Widerspruch.</strong> Wenn Sie sich im Vereinigten Königreich, im EWR, in der Schweiz oder in einer Rechtsordnung mit vergleichbaren Rechten befinden, können Sie eine Kopie der über Sie gespeicherten personenbezogenen Daten verlangen, deren Berichtigung oder Löschung, eine Einschränkung der Verarbeitung oder Widerspruch gegen eine Verarbeitung auf Grundlage berechtigter Interessen. Sie haben zudem das Recht, sich bei Ihrer Datenschutzaufsichtsbehörde zu beschweren.',
            '<strong>Einwohnerinnen und Einwohner Kaliforniens.</strong> Nach dem CCPA/CPRA können Sie Auskunft, Berichtigung oder Löschung Ihrer personenbezogenen Daten verlangen und erfragen, welche Kategorien wir erheben, nutzen und offenlegen — sämtlich in dieser Erklärung beschrieben. <strong>Wir verkaufen keine personenbezogenen Daten und geben sie nicht für kontextübergreifende verhaltensbasierte Werbung weiter, wenn Sie dem Tracking widersprochen haben.</strong> Für die Ausübung dieser Rechte werden Sie nicht benachteiligt.',
          ],
        ],
      },
      {
        h: 'Rechtsgrundlagen',
        sub: 'Für Spielerinnen und Spieler im Vereinigten Königreich, im EWR und in der Schweiz',
        body: [
          [
            '<strong>Vertrag</strong> — das Wiederherstellen getätigter Käufe ist erforderlich, um Ihnen das zu geben, wofür Sie bezahlt haben.',
            '<strong>Berechtigte Interessen</strong> — das Spiel funktionsfähig und sicher zu halten.',
            '<strong>Rechtliche Verpflichtung</strong> — soweit wir Informationen gesetzlich aufbewahren oder offenlegen müssen.',
          ],
          'Für Werbung stützen wir uns nicht auf eine Einwilligung, weil wir Ihnen in diesen Regionen überhaupt keine Werbung zeigen.',
        ],
      },
      {
        h: 'Wie lange Informationen aufbewahrt werden',
        body: [
          'Spieldaten verbleiben auf Ihrem Gerät, solange das Spiel installiert ist. Unsere Anbieter wenden auf Werbe- und Kaufdaten eigene Aufbewahrungsfristen an; siehe deren Richtlinien oben.',
        ],
      },
      {
        h: 'Datenschutz für Kinder',
        body: [
          'Celestile richtet sich nicht an Kinder unter 13 Jahren beziehungsweise unter dem in Ihrem Land geltenden Mindestalter, und wir erheben von ihnen wissentlich keine personenbezogenen Daten. Wenn Sie glauben, dass ein Kind uns personenbezogene Daten übermittelt hat, wenden Sie sich an uns; wir werden sie löschen. Da das Spiel Werbung und optionale Käufe enthält, empfehlen wir Eltern, <em>Bildschirmzeit</em> unter iOS oder die <em>Jugendschutzeinstellungen</em> von Google Play zu nutzen, um Ausgaben in der App zu steuern.',
        ],
      },
      {
        h: 'Änderungen dieser Erklärung',
        body: [
          'Wir können diese Erklärung von Zeit zu Zeit aktualisieren. Wir ändern dann das oben genannte Datum „Zuletzt aktualisiert“ und weisen bei wesentlichen Änderungen im Spiel darauf hin. Wenn Sie nach einer Aktualisierung weiterspielen, akzeptieren Sie die geänderte Erklärung.',
        ],
      },
      { h: 'Kontakt', contact: true },
    ],
  },

  terms: {
    title: 'Nutzungsbedingungen',
    intro: [
      'Diese Nutzungsbedingungen sind eine Vereinbarung zwischen Ihnen und Frosty Robot Studio LLC über <strong>Celestile</strong> (das „Spiel“).',
      '<strong>Mit dem Herunterladen, Installieren oder Spielen des Spiels stimmen Sie diesen Bedingungen zu.</strong> Wenn Sie nicht zustimmen, spielen Sie es bitte nicht.',
    ],
    sections: [
      {
        h: 'Lizenz',
        body: [
          'Wir gewähren Ihnen eine persönliche, nicht ausschließliche, nicht übertragbare und widerrufliche Lizenz, das Spiel auf Geräten zu installieren und zu spielen, die Ihnen gehören oder die Sie kontrollieren, zu Ihrer eigenen nicht gewerblichen Unterhaltung. Alle hier nicht ausdrücklich eingeräumten Rechte behalten wir uns vor.',
        ],
      },
      {
        h: 'Was Sie nicht tun dürfen',
        body: [
          [
            'Das Spiel oder Teile davon kopieren, verkaufen, vermieten, unterlizenzieren oder weiterverbreiten.',
            'Das Spiel zurückentwickeln, dekompilieren oder disassemblieren, außer soweit dieses Recht gesetzlich nicht ausgeschlossen werden kann.',
            'Das Spiel, seine Spielstände oder die Geräteuhr verändern, um Fraktionen, Erfolge oder kostenlose Partien zu erlangen, die Sie weder erspielt noch bezahlt haben.',
            'Das Spiel nutzen, um gegen Gesetze zu verstoßen, oder in einer Weise, die die Nutzung durch andere beeinträchtigt.',
            'Urheberrechts-, Marken- oder sonstige Schutzrechtshinweise entfernen oder unkenntlich machen.',
          ],
        ],
      },
      {
        h: 'Unser geistiges Eigentum',
        body: [
          'Das Spiel — sein Code, die Grafik, die Oberfläche, die Regeln, die Fraktionen, die Einheiten- und Technologieentwürfe, Texte, Klänge und der Name <strong>Celestile</strong> — gehört Frosty Robot Studio LLC oder seinen Lizenzgebern und ist urheber- und markenrechtlich geschützt. Nichts in diesen Bedingungen überträgt Ihnen das Eigentum daran.',
        ],
      },
      {
        h: 'Fraktionen und Käufe',
        body: [
          'Zwei Fraktionen sind kostenlos. Die anderen sechs können einzeln gekauft werden. Jeder Kauf ist ein <strong>einmaliger Kauf, der nicht abläuft</strong> — es gibt kein Abonnement und nichts Wiederkehrendes.',
          'Die Preise werden von Apple und Google je Land festgelegt und Ihnen vor der Bestätigung in Ihrer Landeswährung angezeigt. Maßgeblich ist der im Spiel zum Kaufzeitpunkt angezeigte Preis.',
          'Eine gekaufte Fraktion ist an das Store-Konto gebunden, mit dem Sie sie erworben haben, nicht an ein Gerät. Wenn Sie das Spiel neu installieren oder das Gerät wechseln, holen Sie sie über <em>Einstellungen › Käufe wiederherstellen</em> zurück. Sie kann weder an andere Personen noch an ein anderes Store-Konto übertragen werden und hat keinen Barwert.',
          'Der Kauf einer beliebigen Fraktion entfernt zudem dauerhaft die Werbung aus dem Spiel.',
        ],
      },
      {
        h: 'Erstattungen',
        body: [
          'Alle Zahlungen werden von Apple oder Google abgewickelt, ebenso alle Erstattungen. Wir selbst können keine vornehmen. Beantragen Sie eine Erstattung über Apples Seite <a href="https://reportaproblem.apple.com">Problem melden</a> oder den Bestellverlauf bei Google Play, nach den Richtlinien des jeweiligen Stores. Wenn Sie meinen, dass der Fehler bei uns liegt, wenden Sie sich an uns; wir helfen Ihnen, den Fall darzulegen.',
        ],
      },
      {
        h: 'Werbung',
        body: [
          'Sofern Sie keine Fraktion gekauft haben, zeigt das Spiel vor einer neuen Partie eine bildschirmfüllende Werbung, und erst nach Ihren ersten beiden Partien des Tages. Die Werbung wird von Google AdMob ausgeliefert; wir wählen nicht aus, welche konkreten Anzeigen Sie sehen, und sind weder für deren Inhalt noch für etwas verantwortlich, das Sie bei einem Werbetreibenden kaufen. In der <a href="privacy.html">Datenschutzerklärung</a> steht, wie Werbedaten behandelt werden und in welchen Regionen überhaupt keine Werbung erscheint.',
        ],
      },
      {
        h: 'Ihr Spielstand',
        body: [
          'Ihr Fortschritt, Ihre Bilanzen und Ihre Erfolge werden ausschließlich auf Ihrem Gerät gespeichert. Es gibt keine Cloud-Sicherung.',
        ],
        note: '<strong>Wenn Sie das Spiel löschen, ist Ihr Fortschritt endgültig verloren.</strong> Wir halten keine Kopie vor und können nichts wiederherstellen. Käufe sind die Ausnahme: Sie sind Ihrem Store-Konto zugeordnet und lassen sich wiederherstellen.',
      },
      {
        h: 'Aktualisierungen und Verfügbarkeit',
        body: [
          'Wir können das Spiel oder Teile davon aktualisieren, ändern oder einstellen, einschließlich einer Neuabstimmung von Fraktionen, Einheiten und Technologien. Wir können den Vertrieb und den Support vollständig einstellen. Wir bemühen uns, wesentliche Änderungen anzukündigen, garantieren aber nicht, dass das Spiel immer verfügbar bleibt oder dass eine bestimmte Funktion erhalten bleibt.',
        ],
      },
      {
        h: 'Gewährleistungsausschluss',
        body: [
          'Das Spiel wird <strong>„wie besehen“ und „wie verfügbar“</strong> bereitgestellt, ohne jede ausdrückliche oder stillschweigende Gewährleistung, einschließlich stillschweigender Zusicherungen der Marktgängigkeit, der Eignung für einen bestimmten Zweck oder der Nichtverletzung von Rechten Dritter. Wir sichern nicht zu, dass das Spiel unterbrechungsfrei, fehlerfrei oder frei von schädlichen Bestandteilen ist.',
          'In manchen Rechtsordnungen ist der Ausschluss stillschweigender Gewährleistungen unzulässig, sodass Teile dieses Abschnitts für Sie möglicherweise nicht gelten. Zwingende Verbraucherrechte, auf die Sie nicht verzichten können, bleiben unberührt.',
        ],
      },
      {
        h: 'Haftungsbeschränkung',
        body: [
          'Soweit gesetzlich zulässig, haftet Frosty Robot Studio LLC nicht für mittelbare Schäden, Begleit-, Sonder-, Folge- oder Strafschäden und nicht für den Verlust von Daten, Fortschritt, Gewinn oder Ansehen, die aus Ihrer Nutzung des Spiels entstehen.',
          'Unsere Gesamthaftung Ihnen gegenüber für Ansprüche im Zusammenhang mit dem Spiel ist auf den höheren der folgenden Beträge begrenzt: den Betrag, den Sie uns in den zwölf Monaten vor dem Anspruch dafür gezahlt haben, oder 10 US-Dollar.',
          'Nichts in diesen Bedingungen schließt die Haftung für Tod oder Körperverletzung infolge Fahrlässigkeit, für Arglist oder für sonstige gesetzlich nicht ausschließbare Fälle aus.',
        ],
      },
      {
        h: 'Apple und Google',
        body: [
          'Diese Bedingungen bestehen ausschließlich zwischen Ihnen und Frosty Robot Studio LLC. Apple und Google sind nicht Vertragspartei und tragen keine Verantwortung für das Spiel.',
          [
            'Apple und Google sind nicht verpflichtet, Wartung oder Support für das Spiel zu leisten.',
            'Entspricht das Spiel einer anwendbaren Gewährleistung nicht, können Sie Apple benachrichtigen; Apple kann Ihnen den Kaufpreis erstatten. Darüber hinaus trifft Apple keine weitere Gewährleistungspflicht.',
            'Apple und Google sind nicht dafür verantwortlich, Ansprüche im Zusammenhang mit dem Spiel zu bearbeiten, einschließlich Produkthaftung, Nichteinhaltung gesetzlicher Anforderungen oder Ansprüchen nach Verbraucherschutz- oder Datenschutzrecht.',
            'Apple und Google sind begünstigte Dritte dieser Bedingungen und können sie Ihnen gegenüber durchsetzen.',
          ],
        ],
      },
      {
        h: 'Sperrung und Beendigung',
        body: [
          'Diese Lizenz endet automatisch, wenn Sie gegen diese Bedingungen verstoßen. Sie können sie jederzeit beenden, indem Sie das Spiel löschen. Abschnitte, die ihrer Natur nach fortgelten sollen — geistiges Eigentum, Gewährleistungsausschlüsse, Haftungsbeschränkung und anwendbares Recht — gelten weiter.',
        ],
      },
      {
        h: 'Änderungen dieser Bedingungen',
        body: [
          'Wir können diese Bedingungen aktualisieren. Wir ändern dann das oben genannte Datum „Zuletzt aktualisiert“ und weisen bei wesentlichen Änderungen im Spiel darauf hin. Wenn Sie nach einer Aktualisierung weiterspielen, akzeptieren Sie die geänderten Bedingungen.',
        ],
      },
      {
        h: 'Anwendbares Recht',
        body: [
          'Diese Bedingungen unterliegen dem Recht des Staates Utah, USA, unter Ausschluss seiner Kollisionsnormen; ausschließlich zuständig sind die staatlichen und bundesstaatlichen Gerichte in Salt Lake County, Utah. Sind Sie Verbraucherin oder Verbraucher mit Wohnsitz im Vereinigten Königreich, im EWR oder in einer anderen Rechtsordnung, deren Recht Ihnen das Recht auf Klage am Wohnsitz und den Schutz zwingender Verbrauchervorschriften gewährt, wird Ihnen dies durch diesen Abschnitt nicht genommen.',
        ],
      },
      { h: 'Kontakt', contact: true },
    ],
  },
};
