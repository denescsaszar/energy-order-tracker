# Prozessflow: B2B Energieauftrag

## IST-Prozess (vor Digitalisierung)

```mermaid
flowchart TD
    A[Kundenanfrage per E-Mail] --> B[Manuelle Erfassung in Excel]
    B --> C[Angebot erstellt in Word]
    C --> D[Angebot per E-Mail versandt]
    D --> E{Kundenrückmeldung}
    E -->|Annahme| F[Manuelle ERP-Eingabe]
    E -->|Ablehnung| G[Excel-Eintrag archiviert]
    F --> H[Vertrag per E-Mail]
    H --> I[Abschluss]

    style A fill:#ffcccc
    style B fill:#ffcccc
    style C fill:#ffcccc
    style F fill:#ffcccc
```

**Pain Points:**

- Medienbrüche: E-Mail → Excel → Word → ERP
- Kein zentraler Status sichtbar
- Fehleranfällig bei manueller Übertragung

---

## SOLL-Prozess (mit Energy Order Tracker)

```mermaid
flowchart TD
    A[Kundenanfrage] --> B[Auftrag im Dashboard anlegen]
    B --> C[Status: Offen]
    C --> D[Angebot generieren]
    D --> E[Status: In Verhandlung]
    E --> F{Kundenentscheidung}
    F -->|Annahme| G[Status: Abgeschlossen]
    F -->|Ablehnung| H[Status: Verloren]
    G --> I[ERP-Export]

    style G fill:#ccffcc
    style I fill:#ccffcc
```

**Verbesserungen:**

- Ein zentrales System statt vier Tools
- Status jederzeit transparent
- Basis für ERP-Integration geschaffen
