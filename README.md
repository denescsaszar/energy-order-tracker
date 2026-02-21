# ⚡ Energy Order Tracker

> B2B Auftragsmanagement für Energiedienstleister — vom Erstkontakt bis zum Vertragsabschluss, ohne Medienbrüche.

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![Node.js](https://img.shields.io/badge/Node.js-v24-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## Inhaltsverzeichnis

- [Vision](#vision)
- [Problem & Lösung](#problem--lösung)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [PO Artefakte](#po-artefakte)
- [Screenshots](#screenshots)

---

## Vision

Transparente, digitale Auftragsverarbeitung für Energiedienstleister —
von der Kundenanfrage bis zum Vertragsabschluss in einem zentralen System.

---

## Problem & Lösung

| ❌ IST (heute) | ✅ SOLL (Energy Order Tracker) |
|---|---|
| Aufträge in E-Mail + Excel | Zentrales Dashboard |
| Kein sichtbarer Status | Statusverfolgung in Echtzeit |
| Manuelle Datenübertragung | Einheitlicher Datensatz |
| Keine Nachvollziehbarkeit | Vollständige Statushistorie |
| Keine ERP-Anbindung | API-Basis für ERP-Integration |

---

## Tech Stack

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

---

## Getting Started

```bash
# Repository klonen
git clone https://github.com/denescsaszar/energy-order-tracker.git
cd energy-order-tracker/src

# Abhängigkeiten installieren
npm install

# Server starten
node backend/server.js
```

App läuft auf → [http://localhost:3000](http://localhost:3000)

---

## API Endpoints

| Method | Endpoint | Beschreibung |
|--------|----------|--------------|
| `GET` | `/api/orders` | Alle Aufträge abrufen |
| `GET` | `/api/orders?status=offen` | Aufträge nach Status filtern |
| `GET` | `/api/orders/:id` | Einzelnen Auftrag abrufen |
| `POST` | `/api/orders` | Neuen Auftrag anlegen |
| `PATCH` | `/api/orders/:id/status` | Auftragsstatus aktualisieren |

---

## PO Artefakte

| Artefakt | Beschreibung |
|----------|--------------|
| [📋 User Stories](docs/user-stories.md) | Epics, Stories & Akzeptanzkriterien |
| [🔄 Prozessflow](docs/process-flow.md) | IST- vs. SOLL-Prozess als Mermaid-Diagramm |
| [📝 Issue Templates](.github/ISSUE_TEMPLATE/) | Templates für User Stories & Bug Reports |

---

## Screenshots

### Dashboard
![Energy Order Tracker](docs/screenshot.png)

### Sprint Board
![Sprint Board](docs/board-screenshot.png)

---

> 🚧 Portfolio-Projekt zur Demonstration von PO-Methodik und technischem Verständnis im Energiesektor.
