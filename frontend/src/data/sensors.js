import { Camera, RadioTower, Radar, Waves } from "lucide-react";

export const sensors = [
  {
    id: "telecamere",
    name: "Telecamere",
    icon: Camera,
    color: "#00D4FF",
    tagline: "L'occhio che riconosce forme e colori.",
    description:
      "Le telecamere catturano immagini dell'ambiente e permettono al sistema di riconoscere oggetti grazie all'analisi visiva.",
    detects: [
      "Linee della corsia",
      "Segnali stradali e semafori",
      "Veicoli, pedoni e ciclisti",
      "Colori e testo",
    ],
    advantages: [
      "Ottime per riconoscere forme, colori e segnaletica.",
      "Ricche di informazioni dettagliate sulla scena.",
      "Relativamente economiche e diffuse.",
    ],
    limitations: [
      "Sensibili a buio, abbagliamento e maltempo.",
      "Faticano a stimare con precisione la distanza da sole.",
      "Richiedono lenti pulite per funzionare bene.",
    ],
    applications: ["TSR", "LKA", "LDW", "DMS"],
    range: "Breve e medio raggio, ampio angolo visivo",
  },
  {
    id: "radar",
    name: "Radar",
    icon: RadioTower,
    color: "#4D7CFE",
    tagline: "Misura distanza e velocità, anche nel maltempo.",
    description:
      "Il radar emette onde radio e misura il loro ritorno per stimare distanza e velocità degli oggetti, con buone prestazioni anche con scarsa visibilità.",
    detects: [
      "Distanza dai veicoli",
      "Velocità relativa degli oggetti",
      "Ostacoli a media e lunga distanza",
    ],
    advantages: [
      "Funziona bene anche con pioggia, nebbia e buio.",
      "Misura con precisione distanza e velocità.",
      "Adatto al medio e lungo raggio.",
    ],
    limitations: [
      "Risoluzione inferiore rispetto a telecamere e LiDAR.",
      "Difficoltà a distinguere la forma esatta degli oggetti.",
      "Può generare riflessi ambigui in ambienti complessi.",
    ],
    applications: ["ACC", "AEB", "BSM"],
    range: "Medio e lungo raggio",
  },
  {
    id: "lidar",
    name: "LiDAR",
    icon: Radar,
    color: "#7CF9C7",
    tagline: "Disegna l'ambiente in tre dimensioni.",
    description:
      "Il LiDAR emette impulsi di luce laser e misura il tempo di ritorno per costruire una mappa tridimensionale molto precisa dell'ambiente.",
    detects: [
      "Forma e distanza degli oggetti",
      "Mappa 3D dell'ambiente",
      "Ostacoli con elevata precisione",
    ],
    advantages: [
      "Altissima precisione nella ricostruzione 3D.",
      "Ottima stima di forma e distanza.",
      "Indipendente dalla luce ambientale.",
    ],
    limitations: [
      "Tendenzialmente più costoso delle altre tecnologie.",
      "Le prestazioni possono calare con nebbia fitta o neve.",
      "Richiede notevole capacità di elaborazione dati.",
    ],
    applications: ["Automazione avanzata", "Mappatura 3D"],
    range: "Medio e lungo raggio, alta risoluzione",
  },
  {
    id: "ultrasonici",
    name: "Sensori ultrasonici",
    icon: Waves,
    color: "#F6C85A",
    tagline: "Perfetti per le distanze ravvicinate.",
    description:
      "I sensori ultrasonici emettono ultrasuoni e misurano l'eco di ritorno per rilevare ostacoli vicini, ideali nelle manovre a bassa velocità.",
    detects: [
      "Ostacoli molto vicini",
      "Muri, pilastri e cordoli",
      "Spazi di parcheggio",
    ],
    advantages: [
      "Molto efficaci nelle brevi distanze.",
      "Economici e compatti.",
      "Ideali per le manovre a bassa velocità.",
    ],
    limitations: [
      "Portata limitata a pochi metri.",
      "Poco utili ad alta velocità.",
      "Sensibili a sporco e condizioni particolari.",
    ],
    applications: ["APA", "Sensori di parcheggio", "BSM"],
    range: "Brevissimo raggio (pochi metri)",
  },
];
