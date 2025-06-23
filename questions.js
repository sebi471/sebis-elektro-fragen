const QUESTIONS = {
  "Grundlagen": [
    {
      "q": "Wie lautet das Ohmsche Gesetz?",
      "options": [
        "U = R × I",
        "P = U × I",
        "R = U × I",
        "I = P / U"
      ],
      "correct": 0,
      "explanation": "Das Ohmsche Gesetz beschreibt den linearen Zusammenhang zwischen Spannung, Strom und Widerstand: U = R·I."
    },
    {
      "q": "Welche Einheit hat die elektrische Leistung?",
      "options": [
        "Watt (W)",
        "Volt (V)",
        "Ampere (A)",
        "Ohm (Ω)"
      ],
      "correct": 0,
      "explanation": "Leistung wird in Watt (W) angegeben."
    },
    {
      "q": "Was versteht man unter Blindleistung?",
      "options": [
        "Leistung, die zwischen Quelle und Last pendelt",
        "Leistung, die in Wärme umgesetzt wird",
        "Leistung, die in Licht umgewandelt wird",
        "Leistung, die gespeichert wird"
      ],
      "correct": 0,
      "explanation": "Blindleistung pendelt zwischen elektrischer Quelle und Feldspeichern (Spulen/Kondensatoren) und verrichtet keine Nutzarbeit."
    },
    {
      "q": "Wie groß ist der Gesamtwiderstand zweier paralleler 10 Ω Widerstände?",
      "options": [
        "5 Ω",
        "10 Ω",
        "20 Ω",
        "2 Ω"
      ],
      "correct": 0,
      "explanation": "Bei Parallelschaltung: R_ges = (R1·R2)/(R1+R2) = 100/20 = 5 Ω."
    },
    {
      "q": "Wie lautet die Formel für den Spannungsabfall an einem Spannungsteiler (R1 in Serie mit R2)?",
      "options": [
        "U_R1 = U_Ges × R1 / (R1 + R2)",
        "U_R1 = U_Ges × R2 / (R1 + R2)",
        "U_R1 = R1 × R2",
        "U_R1 = U_Ges / (R1 + R2)"
      ],
      "correct": 0,
      "explanation": "Der Anteil einer Teilspannung entspricht dem Verhältnis des Teilwiderstands zur Gesamtsumme."
    },
    {
      "q": "Welche Größe ändert sich bei einem Leiter, wenn die Temperatur steigt?",
      "options": [
        "Der Widerstand steigt",
        "Die Spannung steigt",
        "Der Strom sinkt linear",
        "Die Frequenz verdoppelt sich"
      ],
      "correct": 0,
      "explanation": "Metallische Leiter weisen einen positiven Temperaturkoeffizienten: Der Widerstand nimmt mit Temperatur zu."
    },
    {
      "q": "Kirchhoffsche Knotenregel besagt…",
      "options": [
        "Summe aller zufließenden Ströme = Summe aller abfließenden Ströme",
        "Summe aller Spannungen in einem Knoten = 0",
        "Summe aller Widerstände = 0",
        "Summe aller Leistungen = 0"
      ],
      "correct": 0,
      "explanation": "Die Knotenregel (1. Kirchhoff) basiert auf Ladungserhaltung."
    },
    {
      "q": "Welche Stromdichte (A/mm²) wird bei Dauerbelastung für Kupferleitungen in Installationen häufig angenommen?",
      "options": [
        "5 A/mm²",
        "50 A/mm²",
        "0,5 A/mm²",
        "15 A/mm²"
      ],
      "correct": 0,
      "explanation": "Ein Daumenwert für Installationen ist ca. 5 A pro mm² Leiterquerschnitt."
    }
  ],
  "Schutzmaßnahmen": [
    {
      "q": "Was bewirkt ein RCD (Fehlerstromschutzschalter)?",
      "options": [
        "Er vergleicht hin- und rückfließende Ströme und schaltet bei Differenz ab",
        "Er begrenzt den Strom auf 16 A",
        "Er reduziert die Spannung auf 12 V",
        "Er schützt vor Überspannung"
      ],
      "correct": 0,
      "explanation": "Der RCD löst aus, wenn Differenzstrom ≥ Auslösestrom (z.B. 30 mA) fließt und schützt vor elektrischem Schlag."
    },
    {
      "q": "Welche maximale Abschaltzeit gilt laut DIN VDE 0100‑410 für Endstromkreise ≤ 32 A in TN‑Systemen?",
      "options": [
        "0,4 s",
        "5 s",
        "0,2 s",
        "1 s"
      ],
      "correct": 0,
      "explanation": "Für Endstromkreise ≤ 32 A in TN-Systemen sind 0,4 s vorgeschrieben."
    },
    {
      "q": "Welche Eigenschaft kennzeichnet SELV?",
      "options": [
        "Kleinspannung getrennt von Erde",
        "Schutzleiter erforderlich",
        "Spannung bis 400 V",
        "Direkte Verbindung zum Niederspannungsnetz"
      ],
      "correct": 0,
      "explanation": "SELV (Safety Extra Low Voltage) ist eine Schutzkleinspannung, galvanisch getrennt vom Netz."
    },
    {
      "q": "In welchem Schutzbereich eines Badezimmers dürfen nur Betriebsmittel mit Schutzkleinspannung verwendet werden?",
      "options": [
        "Bereich 0",
        "Bereich 2",
        "Bereich 3",
        "Außerhalb"
      ],
      "correct": 0,
      "explanation": "Bereich 0 (im Inneren der Wanne) erlaubt nur SELV ≤ 12 V AC."
    },
    {
      "q": "Welche Schutzart beschreibt IP44?",
      "options": [
        "Spritzwassergeschützt & Schutz gegen feste Fremdkörper > 1 mm",
        "Staubdicht & druckwasserdicht",
        "Nur tropfwassergeschützt",
        "Komplett wasserdicht bis 1 m"
      ],
      "correct": 0,
      "explanation": "IP44: Erste 4 = Schutz gegen Fremdkörper > 1 mm, zweite 4 = Schutz gegen allseitiges Spritzwasser."
    },
    {
      "q": "Welcher Querschnitt ist als Mindestgröße für den Hauptpotentialausgleichsleiter in Wohngebäuden (Cu) gefordert?",
      "options": [
        "6 mm²",
        "2,5 mm²",
        "10 mm²",
        "1,5 mm²"
      ],
      "correct": 0,
      "explanation": "Mindestens 6 mm² Cu (bzw. 16 mm² Al) gemäß DIN VDE 0100‑540."
    },
    {
      "q": "Welche Aussage ist bei TT-Systemen korrekt?",
      "options": [
        "Der Schutzleiter ist unabhängig vom Netzbetreiber geerdet",
        "Neutral- und Schutzleiter sind kombiniert",
        "Es gibt keinen Erdungswiderstand",
        "FI ist nicht zulässig"
      ],
      "correct": 0,
      "explanation": "Im TT-System besitzt der Verbraucher eine eigene Erdungsanlage; Neutralleiter ist getrennt geführt."
    },
    {
      "q": "Schutzklasse II bedeutet…",
      "options": [
        "Schutz durch doppelte oder verstärkte Isolierung",
        "Gerät erfordert Schutzleiter",
        "Schutz durch automatische Abschaltung",
        "Schutz über Schutztrennung"
      ],
      "correct": 0,
      "explanation": "Geräte der Schutzklasse II benötigen keinen Schutzleiter, da sie doppelt/verstärkt isoliert sind."
    }
  ],
  "Messtechnik & Prüfungen": [
    {
      "q": "Mit welcher Prüfspannung wird der Isolationswiderstand gewöhnlicher 230/400 V Installationen gemessen?",
      "options": [
        "500 V DC",
        "50 V AC",
        "230 V AC",
        "1000 V DC"
      ],
      "correct": 0,
      "explanation": "DIN VDE 0100‑600 fordert 500 V DC für Anlagen ≤ 500 V."
    },
    {
      "q": "Welcher Grenzwert muss beim Isolationswiderstand mindestens erreicht werden?",
      "options": [
        "1 MΩ",
        "0,1 MΩ",
        "10 kΩ",
        "10 MΩ"
      ],
      "correct": 0,
      "explanation": "Mindestens 1 MΩ sind einzuhalten."
    },
    {
      "q": "Bei der Messung des Schleifenwiderstands darf der RCD nicht auslösen. Was ist zu beachten?",
      "options": [
        "‚No‑Trip‘-Funktion verwenden",
        "RCD vor Messung überbrücken",
        "Leitung spannungsfrei schalten",
        "Messung mit 1000 V DC durchführen"
      ],
      "correct": 0,
      "explanation": "Messgeräte bieten spezielle Prüfströme, die den RCD nicht auslösen."
    },
    {
      "q": "Welche Messkategorie (CAT) ist für Messungen an Hausverteilungen mindestens erforderlich?",
      "options": [
        "CAT III",
        "CAT II",
        "CAT I",
        "CAT IV"
      ],
      "correct": 0,
      "explanation": "Für Verteiler und Festinstallationen mind. CAT III, ideal CAT IV bei Netzeinspeisung."
    },
    {
      "q": "Wie wird die Niederohmmessung (Durchgängigkeit Schutzleiter) durchgeführt?",
      "options": [
        "Mit ≤ 24 V und ≥ 200 mA",
        "Mit 500 V DC",
        "Mit 1000 V AC",
        "Mit einem Multimeter ohne Strombelastung"
      ],
      "correct": 0,
      "explanation": "Zum Nachweis niedriger Übergangswiderstände wird ein Prüfstrom ≥ 200 mA verwendet."
    },
    {
      "q": "Wozu dient ein Drehfeldmesser?",
      "options": [
        "Prüfung der Phasenfolge bei Drehstrom",
        "Messung des Isolationswiderstands",
        "Bestimmung der Erdungswiderstände",
        "Messung der Netzfrequenz"
      ],
      "correct": 0,
      "explanation": "Er zeigt die Drehrichtung des resultierenden Drehfelds an, z. B. für Motoranschlüsse."
    },
    {
      "q": "Die fünf Sicherheitsregeln beginnen mit…",
      "options": [
        "Freischalten",
        "Spannungsfreiheit feststellen",
        "Sichern gegen Wiedereinschalten",
        "Benachbarte Teile abdecken"
      ],
      "correct": 0,
      "explanation": "Regel 1 ist Freischalten."
    },
    {
      "q": "Wann ist eine Wiederholungsprüfung elektrischer Betriebsmittel nach DIN VDE 0702 fällig?",
      "options": [
        "Je nach Gefährdungsbeurteilung, typisch alle 12 Monate",
        "Nie",
        "Alle 5 Jahre",
        "Täglich"
      ],
      "correct": 0,
      "explanation": "Fristen richten sich nach Betriebssicherheitsverordnung; 1‑jährig ist gängig für handgeführte Geräte."
    }
  ],
  "Installationssysteme & Leitungen": [
    {
      "q": "Welche Farbe hat der Neutralleiter in neuen Installationen?",
      "options": [
        "Blau",
        "Braun",
        "Schwarz",
        "Grau"
      ],
      "correct": 0,
      "explanation": "Nach DIN VDE 0293‑308 ist Blau für N reserviert."
    },
    {
      "q": "Wie lautet die übliche Leitungsbezeichnung für eine 5‑adrige Mantelleitung in Unterputzinstallationen?",
      "options": [
        "NYM‑J 5×1,5 mm²",
        "NYIF",
        "H05VV‑F",
        "NHXH"
      ],
      "correct": 0,
      "explanation": "NYM‑J steht für Kupfer‑Mantelleitung, grün‑gelb enthalten, 5 Adern."
    },
    {
      "q": "Ein Stromkreis mit 1,5 mm² Cu darf nach VDE maximal…",
      "options": [
        "16 A mit LS‑B16",
        "10 A mit LS‑B10",
        "32 A",
        "6 A"
      ],
      "correct": 0,
      "explanation": "Standard ist B16 A bei 1,5 mm², sofern Verlegeart und Temperatur passen."
    },
    {
      "q": "Wie groß darf der Spannungsfall in Endstromkreisen für Beleuchtungseinrichtungen maximal sein?",
      "options": [
        "3 %",
        "5 %",
        "10 %",
        "1 %"
      ],
      "correct": 0,
      "explanation": "DIN VDE 0100‑520 empfiehlt ≤ 3 % für Beleuchtung."
    },
    {
      "q": "Was bedeutet die Bezeichnung H07RN‑F?",
      "options": [
        "Gummischlauchleitung schwer, 450/750 V",
        "PVC‑Mantelleitung leicht, 300/500 V",
        "Stegleitung",
        "Halogenfreie Installationsleitung"
      ],
      "correct": 0,
      "explanation": "H07RN‑F ist eine ölbeständige Gummi‑Schlauchleitung für schwere mechanische Beanspruchung."
    },
    {
      "q": "Welche Charakteristik löst am schnellsten bei Kurzschluss aus?",
      "options": [
        "LS‑Schalter Typ B",
        "Typ C",
        "Typ D",
        "Typ K"
      ],
      "correct": 0,
      "explanation": "Typ B hat den niedrigsten Auslösefaktor (3‑5× In)."
    },
    {
      "q": "Wie erfolgt die Aderfarbenzuordnung in Drehstrom‑Steckdosen (L1, L2, L3)?",
      "options": [
        "Braun, Schwarz, Grau",
        "Schwarz, Braun, Grau",
        "Grau, Schwarz, Braun",
        "Braun, Grau, Schwarz"
      ],
      "correct": 0,
      "explanation": "Seit 2006: L1 = Braun, L2 = Schwarz, L3 = Grau."
    },
    {
      "q": "Welche Verlegeart nach DIN VDE 0298‑4 liefert die geringste Strombelastbarkeit?",
      "options": [
        "B2 (Unterputz Wärmedämmung)",
        "C (Freie Verlegung auf Wand)",
        "E (Im Rohr in Wärmedämmung)",
        "A1 (Einzelleiter in Luft)"
      ],
      "correct": 2,
      "explanation": "Verlegeart E (im Rohr in wärmegedämmter Wand) hat hohe Wärmedämmung → geringe Strombelastbarkeit."
    }
  ],
  "Schaltungen": [
    {
      "q": "Wozu dient eine Kreuzschaltung?",
      "options": [
        "Schalten einer Leuchte von drei und mehr Stellen",
        "Schalten zweier Leuchten",
        "Schalten einer Steckdose",
        "Dimmung einer Leuchte"
      ],
      "correct": 0,
      "explanation": "Zwischen zwei Wechselschaltern können beliebig viele Kreuzschalter geschaltet werden."
    },
    {
      "q": "Ein Stromstoßrelais wird betätigt durch…",
      "options": [
        "kurzen Tasterimpuls",
        "Dauerstrom",
        "Wechselspannung 400 V",
        "Schutzkleinspannung SELV"
      ],
      "correct": 0,
      "explanation": "Ein kurzer Impuls schaltet zwischen EIN und AUS um."
    },
    {
      "q": "Welche Schaltung reduziert den Anlaufstrom eines Drehstrommotors?",
      "options": [
        "Stern‑Dreieck‑Anlauf",
        "Dahlander‑Schaltung",
        "Wechselschaltung",
        "Brückengleichrichter"
      ],
      "correct": 0,
      "explanation": "Beim Stern‑Anlauf liegt eine niedrigere Spannung an den Motorwicklungen."
    },
    {
      "q": "In welcher Anschlussklemme einer Schuko‑Steckdose befindet sich der Schutzleiter?",
      "options": [
        "Oben mittig (Federklammern)",
        "Rechts",
        "Links",
        "Unten"
      ],
      "correct": 0,
      "explanation": "Die Erdungslaschen liegen oben und unten bzw. seitlich – PE ist zuerst einzustecken."
    },
    {
      "q": "Eine Tasterschaltung mit Stromstoßrelais benötigt mindestens…",
      "options": [
        "Einen Taster und einen Relaiskontakt",
        "Zwei Wechselschalter",
        "Einen Ausschalter",
        "Einen Dimmer"
      ],
      "correct": 0,
      "explanation": "Der Taster steuert das Relais, das den Lampenkreis schaltet."
    },
    {
      "q": "Wie kann ein Bewegungsmelder überbrückt werden, um Dauerlicht zu ermöglichen?",
      "options": [
        "Parallelschalter (Bypass) einbauen",
        "Neutralleiter trennen",
        "Lux-Schwelle ändern",
        "Frequenz erhöhen"
      ],
      "correct": 0,
      "explanation": "Ein Schalter parallel zum Ausgang schaltet Dauerphase."
    },
    {
      "q": "Wie viele Drähte benötigt eine klassische Wechselschaltung zwischen den Schaltern (ohne Neutralleiter)?",
      "options": [
        "Drei (2 Korrespondierende + 1 Phase)",
        "Zwei",
        "Vier",
        "Einen"
      ],
      "correct": 0,
      "explanation": "Phase, Korrespondierdraht 1 und 2."
    },
    {
      "q": "Ein Serienschalter kann…",
      "options": [
        "Zwei Leuchtenkreise getrennt schalten",
        "Strom messen",
        "Spannung reduzieren",
        "Kurzschluss abschalten"
      ],
      "correct": 0,
      "explanation": "Er besitzt zwei Wippen‑bzw. Schalter in einem Gerät."
    }
  ],
  "Normen & Vorschriften": [
    {
      "q": "Welche Norm regelt Erst- und Wiederholungsprüfungen von Niederspannungsanlagen?",
      "options": [
        "DIN VDE 0100‑600",
        "DIN EN 60204‑1",
        "DIN VDE 0105‑100",
        "DIN VDE 0701‑0702"
      ],
      "correct": 0,
      "explanation": "Teil 600 beschreibt Prüfungen vor Inbetriebnahme."
    },
    {
      "q": "Die fünf Sicherheitsregeln gehören zur Norm…",
      "options": [
        "DIN VDE 0105‑100",
        "DIN VDE 0100‑410",
        "DGUV 3",
        "DIN EN 61439"
      ],
      "correct": 0,
      "explanation": "DIN VDE 0105‑100 regelt Betrieb von elektrischen Anlagen."
    },
    {
      "q": "Welche Angabe ist kein Pflichtbestandteil eines Prüfprotokolls nach DIN VDE 0100‑600?",
      "options": [
        "Kaffeeverbrauch des Prüfers",
        "Messwerte",
        "Anlagendaten",
        "Datum und Unterschrift"
      ],
      "correct": 0,
      "explanation": "Offensichtlich gehört Kaffeeverbrauch nicht dazu."
    },
    {
      "q": "Was bedeutet CE‑Kennzeichnung auf einem elektrischen Gerät?",
      "options": [
        "Hersteller erklärt Konformität mit EU-Richtlinien",
        "Geprüft durch TÜV",
        "Made in China",
        "Garantiert schadstofffrei"
      ],
      "correct": 0,
      "explanation": "CE ist eine Selbstdeklaration des Herstellers."
    },
    {
      "q": "DGUV V3 Prüfplaketten geben typischerweise…",
      "options": [
        "Nächsten Prüftermin an",
        "Schaltleistung",
        "Isolationsklasse",
        "Herstellungsjahr"
      ],
      "correct": 0,
      "explanation": "Auf der Plakette ist der Monat/Jahr der nächsten Prüfung markiert."
    },
    {
      "q": "Schutzleiterkennzeichnung (PE) muss laut Norm sein…",
      "options": [
        "Grün‑gelb",
        "Rot",
        "Blau",
        "Schwarz"
      ],
      "correct": 0,
      "explanation": "Nur grün‑gelb ist zulässig, keine andere Farbe für PE."
    },
    {
      "q": "Welche Schutzart ist für Installationsgeräte in Feuchträumen mindestens empfohlen?",
      "options": [
        "IP44",
        "IP20",
        "IP21",
        "IP54"
      ],
      "correct": 0,
      "explanation": "Spritzwasserschutz IP44 ist üblich im Bad."
    },
    {
      "q": "In welchem Abschnitt der VDE 0100 befinden sich Anforderungen an Fehlerlichtbogen-Schutzeinrichtungen (AFDD)?",
      "options": [
        "Teil 420",
        "Teil 483",
        "Teil 701",
        "Teil 200"
      ],
      "correct": 0,
      "explanation": "Teil 420 befasst sich mit Schutz gegen thermische Auswirkungen."
    }
  ],
  "Praxis & Fehlersuche": [
    {
      "q": "Ein RCD löst sofort aus, wenn eine Gartensteckdose genutzt wird. Erste Maßnahme?",
      "options": [
        "Feuchtigkeit prüfen und Steckdose trocknen",
        "RCD überbrücken",
        "Leitung verlängern",
        "Leitungsschutzschalter austauschen"
      ],
      "correct": 0,
      "explanation": "Feuchte oder defekte Verbraucher verursachen Ableitströme."
    },
    {
      "q": "Braune Schmauchspuren an einer Klemme deuten auf…",
      "options": [
        "Übergangswiderstand / lose Verbindung",
        "Korrekten Anschluss",
        "Kurzschluss im Betrieb",
        "Richtige Klemmung"
      ],
      "correct": 0,
      "explanation": "Hohe Temperaturen durch schlechten Kontakt verursachen Schmauchspuren."
    },
    {
      "q": "Spannungseinbruch unter Last kann verursacht werden durch…",
      "options": [
        "Zu geringen Leiterquerschnitt",
        "Guten Erdungswiderstand",
        "Hohe Netzfrequenz",
        "Niedrige Umgebungstemperatur"
      ],
      "correct": 0,
      "explanation": "Ein zu kleiner Querschnitt erhöht Spannungsfall."
    },
    {
      "q": "Welche Methode eignet sich zur Ortung von Leitungsbrüchen in der Wand?",
      "options": [
        "Kabelfehlersuchgerät / Leitungssucher",
        "Voltmeter",
        "Zangenamperemeter",
        "Oszilloskop"
      ],
      "correct": 0,
      "explanation": "Leitungssucher oder Kabeltoner können Verlauf und Bruchstelle lokalisieren."
    },
    {
      "q": "Thermografie an Verteilungen hilft dabei…",
      "options": [
        "Überhitzte Kontakte frühzeitig zu erkennen",
        "Spannungen zu messen",
        "Schaltpläne zu zeichnen",
        "Isolationswiderstand zu messen"
      ],
      "correct": 0,
      "explanation": "Heißläufer werden sichtbar, bevor Fehler auftreten."
    },
    {
      "q": "Strom kann trotz ausgeschalteter Sicherung auf einer Leitung anliegen, wenn…",
      "options": [
        "Durch Induktion paralleler Leitungen",
        "Schalter defekt",
        "FI defekt",
        "Leitung zu kurz ist"
      ],
      "correct": 0,
      "explanation": "Induzierte Spannungen können Messgeräte anzeigen; prüfen mit Lastzuschaltung."
    },
    {
      "q": "Wird eine Sicherung ständig warm, sollte man…",
      "options": [
        "Strombelastung prüfen",
        "Bemessungsspannung erhöhen",
        "FI tauschen",
        "Nichts unternehmen"
      ],
      "correct": 0,
      "explanation": "Erhöhte Temperatur weist auf Grenzbetrieb oder Kontaktproblem hin."
    },
    {
      "q": "Beim Anbohren einer Wand trifft der Bohrer auf Spannung. Sofort…",
      "options": [
        "Bohrer zurückziehen, Anlage freischalten, Leitung prüfen",
        "Weiterbohren",
        "Wasser draufschütten",
        "FI überbrücken"
      ],
      "correct": 0,
      "explanation": "Gefahr eines Stromschlags – unverzüglich Sicherung ausschalten."
    }
  ]
};