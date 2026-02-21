# User Stories

## Epic 1: Auftragsübersicht

### US-01 — Auftragsliste anzeigen

**Als** Vertriebsmitarbeiter  
**möchte ich** alle laufenden Aufträge auf einen Blick sehen,  
**damit** ich den Status jedes Kundenauftrags sofort nachvollziehen kann.

**Akzeptanzkriterien:**

- [ ] Alle Aufträge werden in einer Liste angezeigt
- [ ] Jeder Eintrag zeigt: Kundenname, Produkt, Status, letztes Update
- [ ] Liste ist nach Datum sortierbar

---

### US-02 — Auftragsstatus filtern

**Als** Vertriebsmitarbeiter  
**möchte ich** Aufträge nach Status filtern (offen / in Verhandlung / abgeschlossen),  
**damit** ich mich auf relevante Aufträge konzentrieren kann.

**Akzeptanzkriterien:**

- [ ] Filter-Buttons für jeden Status vorhanden
- [ ] Aktiver Filter ist visuell hervorgehoben
- [ ] Anzahl der gefilterten Einträge wird angezeigt

---

## Epic 2: Auftragserfassung

### US-03 — Neuen Auftrag anlegen

**Als** Vertriebsmitarbeiter  
**möchte ich** einen neuen Kundenauftrag erfassen,  
**damit** er zentral nachverfolgt werden kann.

**Akzeptanzkriterien:**

- [ ] Formular mit Feldern: Kundenname, Produkt, Menge, Startdatum
- [ ] Pflichtfelder sind validiert
- [ ] Nach dem Speichern erscheint der Auftrag sofort in der Liste

---

## Epic 3: Prozessqualität

### US-04 — Statushistorie einsehen

**Als** Team Lead  
**möchte ich** die Statushistorie eines Auftrags sehen,  
**damit** ich Engpässe im Prozess identifizieren kann.

**Akzeptanzkriterien:**

- [ ] Jede Statusänderung wird mit Zeitstempel gespeichert
- [ ] Historie ist pro Auftrag einsehbar
- [ ] Älteste Änderung zuerst angezeigt
