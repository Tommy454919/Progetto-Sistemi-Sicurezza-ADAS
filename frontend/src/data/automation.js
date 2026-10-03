export const automationLevels = [
  {
    level: 0,
    title: "Nessuna automazione",
    summary: "Il conducente controlla tutto.",
    system:
      "Il sistema può solo avvisare o fornire supporto momentaneo, senza guidare il veicolo.",
    driver:
      "Il conducente si occupa interamente di sterzo, accelerazione e frenata in ogni istante.",
    example:
      "Un avviso di uscita dalla corsia o la frenata d'emergenza che interviene solo per un istante.",
    responsibility: "Totale responsabilità del conducente.",
  },
  {
    level: 1,
    title: "Assistenza al conducente",
    summary: "Un aiuto alla volta.",
    system:
      "Il sistema gestisce una singola funzione, come la velocità oppure lo sterzo, ma non entrambe insieme.",
    driver:
      "Il conducente controlla costantemente il veicolo e supervisiona l'assistenza attiva.",
    example:
      "Il Cruise Control adattivo che regola la velocità mentre il conducente sterza.",
    responsibility: "Il conducente resta pienamente responsabile della guida.",
  },
  {
    level: 2,
    title: "Automazione parziale",
    summary: "Sterzo e velocità, ma sempre sotto controllo.",
    system:
      "Il sistema può gestire contemporaneamente sterzo e velocità in situazioni definite.",
    driver:
      "Il conducente deve tenere le mani pronte e sorvegliare in modo continuo, pronto a intervenire subito.",
    example:
      "La combinazione di Cruise Control adattivo e mantenimento di corsia in autostrada.",
    responsibility:
      "Il conducente supervisiona sempre ed è responsabile della guida.",
  },
  {
    level: 3,
    title: "Automazione condizionata",
    summary: "Il sistema guida, in condizioni precise.",
    system:
      "In determinate condizioni il sistema può gestire la guida, ma può chiedere al conducente di riprendere il controllo.",
    driver:
      "Il conducente può ridurre l'attenzione diretta, ma deve essere pronto a intervenire quando richiesto.",
    example:
      "Sistemi che gestiscono la guida nel traffico lento, entro limiti ben definiti.",
    responsibility:
      "La responsabilità passa al conducente quando il sistema lo richiede.",
  },
  {
    level: 4,
    title: "Automazione elevata",
    summary: "Nessun intervento richiesto, entro i limiti previsti.",
    system:
      "Il sistema può gestire la guida senza richiedere l'intervento umano all'interno di aree o condizioni specifiche.",
    driver:
      "All'interno di tali condizioni il conducente può non dover intervenire; fuori da esse il veicolo gestisce la situazione in sicurezza.",
    example:
      "Veicoli pensati per operare in zone delimitate e mappate con cura.",
    responsibility:
      "Entro i limiti previsti la guida è gestita dal sistema.",
  },
  {
    level: 5,
    title: "Automazione completa",
    summary: "Guida autonoma in ogni condizione.",
    system:
      "Il sistema è in grado di guidare in qualsiasi condizione in cui potrebbe guidare una persona, senza intervento umano.",
    driver:
      "Non è richiesto alcun intervento di guida; i comandi tradizionali potrebbero persino non essere presenti.",
    example:
      "Un obiettivo di sviluppo che oggi non è disponibile come prodotto diffuso.",
    responsibility: "La guida è interamente gestita dal sistema.",
  },
];
