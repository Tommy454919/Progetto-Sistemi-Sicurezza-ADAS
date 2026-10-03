export const quizQuestions = [
  {
    question: "Cosa significa la sigla ADAS?",
    options: [
      "Advanced Driver Assistance Systems",
      "Automatic Driving Alert System",
      "Active Dynamic Auto Steering",
      "Adaptive Distance Avoidance Sensor",
    ],
    correct: 0,
    explanation:
      "ADAS sta per Advanced Driver Assistance Systems, cioè sistemi avanzati di assistenza alla guida.",
  },
  {
    question: "A cosa serve principalmente l'AEB?",
    options: [
      "A mantenere la corsia",
      "A frenare automaticamente per evitare o attenuare una collisione",
      "A riconoscere i segnali stradali",
      "A parcheggiare da solo",
    ],
    correct: 1,
    explanation:
      "L'AEB (frenata automatica d'emergenza) interviene sui freni quando rileva un rischio di collisione frontale.",
  },
  {
    question: "Quale sistema regola la velocità mantenendo la distanza dal veicolo davanti?",
    options: ["LKA", "BSM", "ACC", "TSR"],
    correct: 2,
    explanation:
      "L'ACC (Cruise Control adattivo) mantiene la velocità impostata adeguandola per conservare la distanza di sicurezza.",
  },
  {
    question: "Qual è la differenza principale tra LKA e LDW?",
    options: [
      "Non c'è differenza",
      "Il LKA corregge lo sterzo, il LDW avvisa soltanto",
      "Il LDW frena, il LKA accelera",
      "Il LKA funziona solo di notte",
    ],
    correct: 1,
    explanation:
      "Il mantenimento di corsia (LKA) interviene sullo sterzo, mentre l'avviso di uscita dalla corsia (LDW) si limita ad avvisare.",
  },
  {
    question: "Quale sensore funziona meglio con nebbia e pioggia per misurare distanza e velocità?",
    options: ["Telecamera", "Radar", "Sensore ultrasonico", "Nessuno"],
    correct: 1,
    explanation:
      "Il radar usa onde radio e mantiene buone prestazioni anche con scarsa visibilità, misurando bene distanza e velocità.",
  },
  {
    question: "A cosa serve il BSM?",
    options: [
      "A monitorare l'angolo cieco laterale",
      "A leggere i cartelli",
      "A controllare la stanchezza del conducente",
      "A gestire il parcheggio",
    ],
    correct: 0,
    explanation:
      "Il BSM (monitoraggio dell'angolo cieco) avvisa della presenza di veicoli nelle zone non visibili con i soli specchietti.",
  },
  {
    question: "Quale sensore costruisce una mappa 3D molto precisa dell'ambiente?",
    options: ["Radar", "Sensore ultrasonico", "LiDAR", "Microfono"],
    correct: 2,
    explanation:
      "Il LiDAR emette impulsi laser e misura il tempo di ritorno per generare una mappa tridimensionale dettagliata.",
  },
  {
    question: "Che cos'è la sensor fusion?",
    options: [
      "L'uso di un solo sensore molto potente",
      "La combinazione dei dati di più sensori per una percezione più completa",
      "La fusione fisica dei sensori in un unico pezzo",
      "Un tipo di motore elettrico",
    ],
    correct: 1,
    explanation:
      "La sensor fusion combina le informazioni di telecamere, radar, LiDAR e ultrasuoni per ottenere una percezione più affidabile.",
  },
  {
    question: "Il livello di automazione 2 cosa comporta per il conducente?",
    options: [
      "Non deve fare nulla",
      "Deve supervisionare sempre ed essere pronto a intervenire",
      "Può dormire alla guida",
      "Non esiste il livello 2",
    ],
    correct: 1,
    explanation:
      "Al livello 2 il sistema gestisce sterzo e velocità insieme, ma il conducente deve sorvegliare in continuo ed è responsabile della guida.",
  },
  {
    question: "Gli ADAS equivalgono alla guida autonoma?",
    options: [
      "Sì, sono la stessa cosa",
      "No, assistono il conducente ma non lo sostituiscono",
      "Sì, ma solo in autostrada",
      "No, servono solo a parcheggiare",
    ],
    correct: 1,
    explanation:
      "Gli ADAS assistono il conducente: non sostituiscono attenzione, responsabilità e controllo del veicolo.",
  },
];

export const quizFeedback = (percent) => {
  if (percent >= 90)
    return {
      title: "Eccellente!",
      message:
        "Padroneggi davvero il mondo degli ADAS. Conosci sistemi, sensori e automazione con sicurezza.",
    };
  if (percent >= 70)
    return {
      title: "Ottimo risultato!",
      message:
        "Hai una solida comprensione degli ADAS. Ancora un piccolo passo e sarà perfetta.",
    };
  if (percent >= 40)
    return {
      title: "Buon inizio!",
      message:
        "Hai afferrato le basi. Rivedi qualche sezione del sito e riprova: migliorerai in fretta.",
    };
  return {
    title: "C'è spazio per esplorare!",
    message:
      "Nessun problema: esplora i sistemi, i sensori e l'automazione, poi torna a rimetterti alla prova.",
  };
};
