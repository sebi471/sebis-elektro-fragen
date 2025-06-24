# 📘 Sebi's Elektro Fragen – WebApp (Dark Mode + 500+ Fragen)

Dies ist eine mobiloptimierte WebApp zur Vorbereitung auf die Gesellenprüfung Teil 1 im Bereich Elektrotechnik.

---

## ✅ Funktionen

- 🌙 **Dark Mode** für augenschonendes Lernen
- 🧠 **500+ Multiple-Choice-Fragen** aus allen wichtigen Bereichen
- 📐 **Rechenaufgaben** inklusive
- 📊 **Statistik-Anzeige** (richtig / falsch / offen)
- 📱 Optimiert für Desktop und Mobilgeräte
- 🧰 Vollständig offline oder als GitHub-Seite nutzbar

---

## 🔧 Nutzung auf dem eigenen Gerät

### 📦 1. Herunterladen & Entpacken

Lade die ZIP herunter und entpacke sie in einen Ordner.

### 🖥️ 2. Lokales Testen (empfohlen)

Da viele Browser `script.js` & `questions.js` nicht direkt lokal laden, benutze bitte:

```bash
python -m http.server
```

Dann im Browser öffnen: [http://localhost:8000](http://localhost:8000)

---

## 🌍 Veröffentlichen über GitHub Pages

### 1. Repository anlegen

Erstelle ein öffentliches Repository bei [github.com](https://github.com).

### 2. Dateien hochladen

Ziehe **alle entpackten Dateien** per Drag & Drop in dein Repo.

### 3. GitHub Pages aktivieren

- Gehe zu **Settings → Pages**
- Wähle:
  - **Source**: `main`
  - **Folder**: `/ (root)`
- Deine App ist erreichbar unter:
  ```
  https://<dein-nutzername>.github.io/<repo-name>/
  ```

---

## 📁 Ordnerstruktur

```plaintext
index.html           → Startseite mit Quiz-Logik
style.css            → Dark Mode Styling
script.js            → Quiz-Logik und Navigation
questions.js         → Alle Fragen (Grundlagen, Messtechnik usw.)
img/                 → (optional) Symbolbilder für Themen
README.md            → Diese Anleitung
```

---

## 🛠 Erweiterungsideen

- Weitere Themen und Fragen hinzufügen
- Statistik lokal speichern oder exportieren
- Fortschrittsanzeige pro Thema
- Cloud-Synchronisation (z. B. via Firebase)

---

Viel Erfolg bei deiner Prüfungsvorbereitung! 🚀  
*Erstellt für Sebi von ChatGPT*
