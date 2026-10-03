import {
  ShieldAlert,
  Gauge,
  Navigation,
  AlertTriangle,
  ScanEye,
  Octagon,
  ScanFace,
  SquareParking,
} from "lucide-react";

// Struttura dati riutilizzabile per i sistemi ADAS.
// Per aggiungere un nuovo sistema basta aggiungere un oggetto a questo array.
export const systems = [
  {
    id: "aeb",
    acronym: "AEB",
    name: "Frenata automatica d'emergenza",
    english: "Autonomous Emergency Braking",
    icon: ShieldAlert,
    simulation: "aeb",
    tagline: "Quando ogni frazione di secondo conta.",
    short:
      "Rileva un rischio di collisione frontale e, se il conducente non reagisce in tempo, interviene sui freni per evitare o attenuare l'urto.",
    sensors: ["Telecamera", "Radar"],
    howItWorks: [
      "La telecamera e il radar anteriori osservano costantemente la strada davanti al veicolo.",
      "Il sistema stima distanza e velocità di avvicinamento verso veicoli, pedoni o ostacoli.",
      "Se calcola un rischio concreto di collisione, invia prima un avviso al conducente.",
      "Se non arriva una reazione sufficiente, prepara l'impianto frenante e applica i freni.",
    ],
    intervention:
      "L'intervento è graduale: prima un allarme acustico e visivo, poi un precarico dell'impianto frenante, infine una frenata automatica più o meno decisa a seconda dell'urgenza stimata.",
    benefits: [
      "Può evitare o ridurre la gravità di un tamponamento.",
      "Reagisce in tempi inferiori a quelli umani in situazioni critiche.",
      "Molti sistemi riconoscono anche pedoni e ciclisti.",
      "Lavora anche quando l'attenzione del conducente cala.",
    ],
    limitations: [
      "Può ridurre le prestazioni con pioggia, nebbia o sensori sporchi.",
      "Non reagisce sempre a ostacoli insoliti o fermi in modo inatteso.",
      "Non sostituisce una distanza di sicurezza adeguata.",
      "È un aiuto, non una garanzia di evitare l'incidente.",
    ],
    curiosity:
      "Molti AEB moderni distinguono tra traffico urbano lento e situazioni autostradali ad alta velocità, adattando soglie di allarme e forza di frenata.",
    related: ["acc", "lka", "tsr"],
  },
  {
    id: "acc",
    acronym: "ACC",
    name: "Cruise Control adattivo",
    english: "Adaptive Cruise Control",
    icon: Gauge,
    simulation: "acc",
    tagline: "Mantiene la velocità, ma soprattutto la distanza.",
    short:
      "Mantiene una velocità impostata e regola automaticamente l'andatura per conservare una distanza di sicurezza dal veicolo che precede.",
    sensors: ["Radar", "Telecamera"],
    howItWorks: [
      "Il conducente imposta una velocità di crociera e una distanza desiderata.",
      "Il radar anteriore misura in continuo la distanza dal veicolo che precede.",
      "Se il veicolo davanti rallenta, il sistema riduce l'andatura o frena leggermente.",
      "Quando la strada si libera, riporta gradualmente il veicolo alla velocità impostata.",
    ],
    intervention:
      "Agisce su acceleratore e freni per mantenere l'intervallo scelto. Alcuni sistemi gestiscono anche le ripartenze nel traffico in coda.",
    benefits: [
      "Riduce l'affaticamento nei lunghi viaggi.",
      "Mantiene una distanza di sicurezza costante.",
      "Rende la guida in autostrada più fluida.",
      "Alcune versioni gestiscono lo stop-and-go nel traffico.",
    ],
    limitations: [
      "Può faticare a leggere inserimenti laterali improvvisi.",
      "Le prestazioni del radar calano con sporco o maltempo intenso.",
      "Non interpreta tutte le situazioni complesse del traffico urbano.",
      "Richiede comunque la supervisione del conducente.",
    ],
    curiosity:
      "L'ACC è spesso la base su cui si innestano funzioni più avanzate di guida assistita, combinandosi con il mantenimento di corsia.",
    related: ["aeb", "lka", "ldw"],
  },
  {
    id: "lka",
    acronym: "LKA",
    name: "Mantenimento della corsia",
    english: "Lane Keeping Assist",
    icon: Navigation,
    simulation: "lka",
    tagline: "Un aiuto gentile per restare al centro.",
    short:
      "Interviene dolcemente sullo sterzo per aiutare il veicolo a rimanere all'interno della propria corsia di marcia.",
    sensors: ["Telecamera"],
    howItWorks: [
      "La telecamera frontale riconosce le linee della segnaletica orizzontale.",
      "Il sistema stima la posizione del veicolo rispetto al centro della corsia.",
      "Se il veicolo tende ad avvicinarsi a una linea senza indicatore di direzione attivo, reagisce.",
      "Applica una leggera correzione allo sterzo per riportarlo verso il centro.",
    ],
    intervention:
      "La correzione di sterzo è morbida e pensata per assistere, non per guidare al posto del conducente, che mantiene sempre il controllo.",
    benefits: [
      "Aiuta a contrastare piccole distrazioni o cali di attenzione.",
      "Rende più confortevole la guida su percorsi lunghi.",
      "Riduce i lievi scostamenti involontari dalla corsia.",
      "Lavora in sinergia con l'avviso di uscita dalla corsia.",
    ],
    limitations: [
      "Dipende dalla visibilità e dalla qualità della segnaletica.",
      "Può disattivarsi in curve molto strette o cantieri.",
      "Non gestisce manovre complesse o incroci.",
      "Richiede le mani del conducente sul volante.",
    ],
    curiosity:
      "Alcuni sistemi di mantenimento corsia riconoscono anche i margini della strada quando la segnaletica è assente, usando il bordo dell'asfalto come riferimento.",
    related: ["ldw", "acc", "aeb"],
  },
  {
    id: "ldw",
    acronym: "LDW",
    name: "Avviso di uscita dalla corsia",
    english: "Lane Departure Warning",
    icon: AlertTriangle,
    simulation: "ldw",
    tagline: "Un segnale prima che sia troppo tardi.",
    short:
      "Avvisa il conducente quando il veicolo sta uscendo dalla corsia senza che sia stato attivato l'indicatore di direzione.",
    sensors: ["Telecamera"],
    howItWorks: [
      "La telecamera individua le linee di corsia davanti al veicolo.",
      "Il sistema monitora l'avvicinamento del veicolo alle linee.",
      "Se il veicolo supera o sta per superare una linea senza freccia, lo rileva.",
      "Genera un avviso per richiamare l'attenzione del conducente.",
    ],
    intervention:
      "A differenza del mantenimento corsia, l'avviso non corregge lo sterzo: segnala soltanto, con un suono, una spia o una vibrazione del volante o del sedile.",
    benefits: [
      "Richiama l'attenzione in caso di distrazione o stanchezza.",
      "Semplice e immediato da comprendere.",
      "Complementare al mantenimento di corsia.",
      "Utile soprattutto nei lunghi tragitti monotoni.",
    ],
    limitations: [
      "Non interviene fisicamente sul veicolo.",
      "Dipende dalla presenza di linee ben visibili.",
      "Può generare avvisi in presenza di segnaletica ambigua.",
      "L'efficacia dipende dalla reazione del conducente.",
    ],
    curiosity:
      "La vibrazione usata come avviso imita volutamente la sensazione delle bande sonore laterali presenti sul bordo di molte strade.",
    related: ["lka", "dms", "bsm"],
  },
  {
    id: "bsm",
    acronym: "BSM",
    name: "Monitoraggio dell'angolo cieco",
    english: "Blind Spot Monitoring",
    icon: ScanEye,
    simulation: "bsm",
    tagline: "Vede ciò che gli specchietti non mostrano.",
    short:
      "Rileva i veicoli presenti nell'angolo cieco laterale e avvisa il conducente, in particolare prima di un cambio di corsia.",
    sensors: ["Radar", "Sensori ultrasonici"],
    howItWorks: [
      "Sensori radar posti nella zona posteriore sorvegliano le aree laterali.",
      "Il sistema individua i veicoli che si trovano nell'angolo cieco.",
      "Accende una spia luminosa, di solito nello specchietto retrovisore laterale.",
      "Se si attiva la freccia verso un veicolo presente, rafforza l'avviso.",
    ],
    intervention:
      "L'intervento è un avviso visivo e, se si tenta comunque il cambio di corsia, spesso anche acustico. Alcune versioni evolute possono correggere la traiettoria.",
    benefits: [
      "Aumenta la sicurezza nei cambi di corsia.",
      "Copre aree non visibili con i soli specchietti.",
      "Particolarmente utile in autostrada e nel traffico veloce.",
      "Riduce il rischio di collisioni laterali.",
    ],
    limitations: [
      "Può avere difficoltà con veicoli molto rapidi in avvicinamento.",
      "Lo sporco sui sensori ne riduce l'efficacia.",
      "Non sostituisce il controllo diretto con gli specchietti.",
      "La copertura dipende dal posizionamento dei sensori.",
    ],
    curiosity:
      "Molti sistemi integrano anche l'avviso di traffico trasversale posteriore, utile quando si esce in retromarcia da un parcheggio.",
    related: ["apa", "ldw", "aeb"],
  },
  {
    id: "tsr",
    acronym: "TSR",
    name: "Riconoscimento della segnaletica",
    english: "Traffic Sign Recognition",
    icon: Octagon,
    simulation: "tsr",
    tagline: "Legge i cartelli così non devi ricordarli tu.",
    short:
      "Riconosce i segnali stradali, come i limiti di velocità, e li mostra al conducente sul cruscotto.",
    sensors: ["Telecamera"],
    howItWorks: [
      "La telecamera frontale inquadra i cartelli ai bordi della strada.",
      "Il software di visione li classifica confrontandoli con modelli noti.",
      "Il segnale riconosciuto viene mostrato nel quadro strumenti.",
      "Alcuni sistemi lo combinano con i dati di navigazione per maggiore affidabilità.",
    ],
    intervention:
      "Normalmente informa soltanto, ma può emettere un avviso se la velocità supera il limite riconosciuto; alcuni veicoli suggeriscono di adeguarla.",
    benefits: [
      "Aiuta a rispettare i limiti di velocità.",
      "Riduce il rischio di non notare un cartello.",
      "Fornisce informazioni aggiornate in tempo reale.",
      "Si integra con altri sistemi di assistenza.",
    ],
    limitations: [
      "Cartelli coperti, sporchi o danneggiati possono non essere letti.",
      "Può confondersi con segnali temporanei o pubblicitari.",
      "Dipende da buone condizioni di visibilità.",
      "Non interpreta ogni contesto come farebbe una persona.",
    ],
    curiosity:
      "Alcuni sistemi riconoscono anche segnali di divieto di sorpasso o di fine limite, non solo i limiti di velocità.",
    related: ["acc", "aeb", "lka"],
  },
  {
    id: "dms",
    acronym: "DMS",
    name: "Monitoraggio del conducente",
    english: "Driver Monitoring System",
    icon: ScanFace,
    simulation: "dms",
    tagline: "Sorveglia l'attenzione, la risorsa più preziosa.",
    short:
      "Osserva lo stato del conducente per individuare segnali di stanchezza o distrazione e invitarlo a riprendere la piena attenzione.",
    sensors: ["Telecamera"],
    howItWorks: [
      "Una telecamera interna, spesso a infrarossi, osserva il volto del conducente.",
      "Il sistema analizza direzione dello sguardo, posizione della testa e battito palpebrale.",
      "Individua segnali di distrazione prolungata o sonnolenza.",
      "Invia un avviso quando l'attenzione sembra calare.",
    ],
    intervention:
      "L'intervento è tipicamente un avviso sonoro o visivo che invita a fermarsi o a riportare lo sguardo sulla strada. È fondamentale nei sistemi di guida assistita.",
    benefits: [
      "Contrasta i rischi legati a stanchezza e distrazione.",
      "Può suggerire una pausa durante i lunghi viaggi.",
      "Supporta il corretto uso degli altri sistemi ADAS.",
      "Funziona anche al buio grazie agli infrarossi.",
    ],
    limitations: [
      "Occhiali scuri o particolari condizioni possono disturbarlo.",
      "Non conosce lo stato di salute reale del conducente.",
      "Può risultare invadente se tarato in modo troppo sensibile.",
      "Richiede comunque la responsabilità della persona alla guida.",
    ],
    curiosity:
      "Il monitoraggio del conducente diventa sempre più importante man mano che i veicoli offrono funzioni avanzate: serve a garantire che la persona resti pronta a riprendere il controllo.",
    related: ["ldw", "lka", "acc"],
  },
  {
    id: "apa",
    acronym: "APA",
    name: "Parcheggio assistito",
    english: "Advanced Parking Assist",
    icon: SquareParking,
    simulation: "apa",
    tagline: "La manovra difficile, resa semplice.",
    short:
      "Aiuta il conducente a parcheggiare individuando lo spazio e gestendo in tutto o in parte la manovra.",
    sensors: ["Sensori ultrasonici", "Telecamera"],
    howItWorks: [
      "I sensori ultrasonici misurano gli spazi disponibili lungo la strada.",
      "Il sistema individua un posto sufficientemente ampio.",
      "Calcola la traiettoria ottimale per entrare nel parcheggio.",
      "Gestisce lo sterzo e guida il conducente su acceleratore e freni, o controlla tutto.",
    ],
    intervention:
      "A seconda del livello, il sistema può solo guidare lo sterzo mentre il conducente dosa i pedali, oppure gestire l'intera manovra con la supervisione della persona.",
    benefits: [
      "Semplifica parcheggi stretti in parallelo o a pettine.",
      "Riduce il rischio di piccoli urti durante la manovra.",
      "Utile in spazi urbani congestionati.",
      "Si avvale di telecamere per una visuale completa.",
    ],
    limitations: [
      "Richiede segnaletica o riferimenti adeguati per gli spazi.",
      "Può non riconoscere ostacoli bassi o sospesi.",
      "Lo sporco sui sensori riduce la precisione.",
      "La supervisione del conducente resta necessaria.",
    ],
    curiosity:
      "Alcuni sistemi memorizzano manovre ripetute, come l'ingresso in un garage di casa, per poi rieseguirle automaticamente.",
    related: ["bsm", "aeb", "dms"],
  },
];

export const getSystem = (id) => systems.find((s) => s.id === id);
