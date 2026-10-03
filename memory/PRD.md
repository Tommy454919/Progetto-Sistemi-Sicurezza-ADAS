# PRD — Sito ADAS (Advanced Driver Assistance Systems)

## Problema originale
Progetto scolastico: sito web completo, moderno, interattivo e professionale sugli ADAS,
con estetica automotive/futuristica premium (NON deve sembrare un sito scolastico).
Tutto in italiano (eccetto sigle tecniche). Client-side only, React + React Router +
Tailwind + Lucide. Multipagina con esplorazione, animazioni, simulazioni, card interattive,
diagrammi, quiz e gamification leggera.

## Architettura
- Stack: React 19 (CRA + craco, alias `@`→src), react-router-dom 7, TailwindCSS, framer-motion, lucide-react.
- Nessun backend/DB/auth: 100% lato client. Gamification persistita in localStorage.
- Dati separati dai componenti: `src/data/{systems,sensors,automation,quiz,nav}.js`.
- Componenti riutilizzabili: Layout, Navbar, Footer, PageTransition, PageHero, Section,
  SectionHeader, Reveal, AnimatedCounter, Button, InteractiveCard, SystemCard, SensorCard,
  HeroCar, ProcessDiagram, Timeline, Simulation, SensorFusion, ExploredBadge.
- Palette: nero #05070A, blu scuro #080D16, cyan #00D4FF, blu #4D7CFE, bianco #F5F7FA, grigio #8B98A5.
- Font: Space Grotesk (titoli) + Inter (testo). Supporto prefers-reduced-motion.

## Persona
Studenti e curiosi che vogliono capire gli ADAS tramite esplorazione visiva e interattiva.

## Core requirements (statici)
- Multipagina con navbar sticky (hamburger mobile), hero interattiva, quiz, simulazioni.
- Contenuti corretti, chiari, didattici; nessun placeholder/lorem ipsum.
- Responsive desktop/tablet/mobile, nessuno scroll orizzontale a 320px.

## Implementato (2026-06)
- Pagine: `/`, `/adas`, `/sistemi`, `/sistemi/:id` (aeb, acc, lka, ldw, bsm, tsr, dms, apa),
  `/sensori`, `/automazione`, `/sicurezza`, `/futuro`, `/quiz`, 404.
- Home: hero con auto SVG interattiva (sensori cliccabili + pannello), statistiche animate,
  6 card esplora, percorso di esplorazione (gamification), CTA quiz.
- ADAS: diagramma processo cliccabile (sensore→percezione→elaborazione→decisione→intervento),
  sicurezza attiva vs passiva interattiva, "ADAS ≠ guida autonoma".
- Sistemi: griglia 8 card → pagine dettaglio uniche (howItWorks, sensori, intervento,
  simulazione animata per-tipo, vantaggi, limiti, curiosità, sistemi correlati).
- Sensori: 4 card selezionabili con dettaglio + visual Sensor Fusion animato.
- Automazione: timeline interattiva livelli 0–5.
- Sicurezza: scenari interattivi "quale sistema aiuta", griglia limiti, frase chiave.
- Futuro: tecnologie + timeline verticale (presentate come direzioni, non certezze).
- Quiz: 10 domande, una alla volta, progress bar, feedback+spiegazione, risultato finale.
- Gamification: badge "Argomento esplorato" + percorso, persistiti in localStorage.
- Testing agent: frontend 100% pass, nessun errore console/React.

## Backlog / prossimi passi
- P2: Suono/effetti opzionali nelle simulazioni.
- P2: Modalità confronto tra sistemi.
- P2: Condivisione risultato quiz.
