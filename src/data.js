export const viaggi = [
  {
    id: 1,
    status: "Attivo", // Già completato
    destinazione: "Tokyo, Giappone",
    durata: "10 giorni",
    prezzo: 1500,
    tipo: "Cultura e Tecnologia",
    immagine: "/images/Giappone.jpeg"
  },
  {
    id: 2,
    status: "Attivo",
    destinazione: "Roma, Italia",
    durata: "5 giorni",
    prezzo: 800,
    tipo: "Storia e Arte",
    immagine: "/images/Roma.jpg"
  },
  {
    id: 3,
    status: "Attivo", // Già completato
    destinazione: "New York, USA",
    durata: "7 giorni",
    prezzo: 2000,
    tipo: "Metropoli e Shopping",
    immagine: "/images/Usa.jpg"
  },
  {
    id: 4,
    status: "Pianificato",
    destinazione: "Bali, Indonesia",
    durata: "12 giorni",
    prezzo: 1800,
    tipo: "Mare e Relax",
    immagine: "/images/Bali.jpg"
  },
  {
    id: 5,
    status: "Attivo",
    destinazione: "Parigi, Francia",
    durata: "6 giorni",
    prezzo: 1200,
    tipo: "Romantico e Cultura",
    immagine: "/images/Francia.jpg"
  },
  {
    id: 6,
    status: "Pianificato",
    destinazione: "Sydney, Australia",
    durata: "9 giorni",
    prezzo: 2200,
    tipo: "Avventura e Natura",
    immagine: "/images/Sydney.jpg"
  },
  {
    id: 7,
    status: "Pianificato",
    destinazione: "Reykjavik, Islanda",
    durata: "8 giorni",
    prezzo: 1700,
    tipo: "Paesaggi e Avventura",
    immagine: "/images/Islanda.jpg"
  },
  {
    id: 8,
    status: "Pianificato",
    destinazione: "Bangkok, Thailandia",
    durata: "7 giorni",
    prezzo: 1300,
    tipo: "Esotico e Gastronomia",
    immagine: "/images/Bangkok.jpg"
  },
  {
    id: 9,
    status: "Attivo",
    destinazione: "Londra, Regno Unito",
    durata: "5 giorni",
    prezzo: 1000,
    tipo: "Cultura e Shopping",
    immagine: "/images/Londra.jpg"
  },
  {
    id: 10,
    status: "Pianificato",
    destinazione: "Barcellona, Spagna",
    durata: "4 giorni",
    prezzo: 850,
    tipo: "Arte e Spiaggia",
    immagine: "/images/Barcellona.jpg"
  },
  {
    id: 11,
    status: "Avvenuto",
    destinazione: "Machu Picchu, Perù",
    durata: "8 giorni",
    prezzo: 2500,
    tipo: "Avventura e Cultura",
    immagine: "/images/MachuPicchu.jpg"
  },
  {
    id: 12,
    status: "Avvenuto",
    destinazione: "Cape Town, Sudafrica",
    durata: "10 giorni",
    prezzo: 2700,
    tipo: "Safari e Natura",
    immagine: "/images/CapeTown.jpg"
  },
  {
    id: 13,
    status: "Attivo",
    destinazione: "Atene, Grecia",
    durata: "6 giorni",
    prezzo: 1100,
    tipo: "Storia e Spiaggia",
    immagine: "/images/Atene.jpg"
  },
  {
    id: 14,
    status: "Pianificato",
    destinazione: "Dubai, Emirati Arabi Uniti",
    durata: "7 giorni",
    prezzo: 2300,
    tipo: "Lusso e Shopping",
    immagine: "/images/Dubai.jpg"
  },
  {
    id: 15,
    status: "Avvenuto",
    destinazione: "Città del Capo, Sudafrica",
    durata: "9 giorni",
    prezzo: 2500,
    tipo: "Safari e Natura",
    immagine: "/images/CittadelCapo.jpg"
  },
  {
    id: 16,
    status: "Attivo",
    destinazione: "Reykjavik, Islanda",
    durata: "10 giorni",
    prezzo: 2000,
    tipo: "Avventura e Paesaggi Naturali",
    immagine: "/images/Reykjavik.jpg"
  },
  {
    id: 17,
    status: "Pianificato",
    destinazione: "Las Vegas, USA",
    durata: "5 giorni",
    prezzo: 1600,
    tipo: "Divertimento e Casinò",
    immagine: "/images/LasVegas.jpg"
  }
];
  
export const contatti = [
  {
    id: 1,
    nome: "Luca",
    cognome: "Bianchi",
    citta: "Milano",
    sesso: "Maschio",
    viaggio_id: 1,
    telefono: "+39 331 2345678",
    email: "luca.bianchi@email.com",
    codiceFiscale: "BNCLCU85M15F205H",
    eta: 38,
    documenti: "Passaporto IT456789",
    allergie: "Nessuna",
    gruppoSanguigno: "A+",
    esigenzeAlimentari: "Nessuna",
    contattoEmergenza: {
      nome: "Maria Bianchi",
      relazione: "Sorella",
      numeroDiTelefono: "+39 347 9876543"
    }
  },
  {
    id: 2,
    nome: "Giulia",
    cognome: "Rossi",
    citta: "Roma",
    sesso: "Femmina",
    viaggio_id: 1,
    telefono: "+39 347 9876543",
    email: "giulia.rossi@email.com",
    codiceFiscale: "RSSGLL90D45H501Z",
    eta: 32,
    documenti: "Carta d'Identità RM123456",
    allergie: "Nessuna",
    gruppoSanguigno: "B-",
    esigenzeAlimentari: "Vegetariana",
    contattoEmergenza: {
      nome: "Marco Rossi",
      relazione: "Fratello",
      numeroDiTelefono: "+39 328 1112233"
    }
  },
  {
    id: 3,
    nome: "Marco",
    cognome: "Verdi",
    citta: "Napoli",
    sesso: "Maschio",
    viaggio_id: 1,
    telefono: "+39 328 1112233",
    email: "marco.verdi@email.com",
    codiceFiscale: "VRDMRC75P12F839X",
    eta: 45,
    documenti: "Patente di Guida NA789012",
    allergie: "Nessuna",
    gruppoSanguigno: "O+",
    esigenzeAlimentari: "Nessuna",
    contattoEmergenza: {
      nome: "Anna Marini",
      relazione: "Moglie",
      numeroDiTelefono: "+39 329 9988776"
    }
  },
  {
    id: 4,
    nome: "Elisa",
    cognome: "Ferrari",
    citta: "Torino",
    sesso: "Femmina",
    viaggio_id: 1,
    telefono: "+39 329 9988776",
    email: "elisa.ferrari@email.com",
    codiceFiscale: "FRRLSE88E52G224H",
    eta: 34,
    documenti: "Passaporto TO345678",
    allergie: "Nessuna",
    gruppoSanguigno: "AB+",
    esigenzeAlimentari: "Nessuna",
    contattoEmergenza: {
      nome: "Paolo Rizzoli",
      relazione: "Marito",
      numeroDiTelefono: "+39 339 5544332"
    }
  },
  {
    id: 5,
    nome: "Davide",
    cognome: "Moretti",
    citta: "Firenze",
    sesso: "Maschio",
    viaggio_id: 2,
    telefono: "+39 339 5544332",
    email: "davide.moretti@email.com",
    codiceFiscale: "MRTDVD80A01D612E",
    eta: 40,
    documenti: "Carta d'Identità FI987654",
    allergie: "Nessuna",
    gruppoSanguigno: "A-",
    esigenzeAlimentari: "Nessuna",
    contattoEmergenza: {
      nome: "Laura Moretti",
      relazione: "Sorella",
      numeroDiTelefono: "+39 328 7654321"
    }
  },
  {
    id: 6,
    nome: "Alessia",
    cognome: "Conti",
    citta: "Bologna",
    sesso: "Femmina",
    viaggio_id: 2,
    telefono: "+39 328 7654321",
    email: "alessia.conti@email.com",
    codiceFiscale: "CNTLSS92H55E123F",
    eta: 29,
    documenti: "Passaporto BO234567",
    allergie: "Nessuna",
    gruppoSanguigno: "O-",
    esigenzeAlimentari: "Vegana",
    contattoEmergenza: {
      nome: "Giovanni Conti",
      relazione: "Padre",
      numeroDiTelefono: "+39 345 5566778"
    }
  },
  {
    id: 7,
    nome: "Simone",
    cognome: "Galli",
    citta: "Genova",
    sesso: "Maschio",
    viaggio_id: 3,
    telefono: "+39 345 5566778",
    email: "simone.galli@email.com",
    codiceFiscale: "GLLSMN85R30F205G",
    eta: 36,
    documenti: "Carta d'Identità GE456789",
    allergie: "Nessuna",
    gruppoSanguigno: "B+",
    esigenzeAlimentari: "Nessuna",
    contattoEmergenza: {
      nome: "Elena Ravenna",
      relazione: "Moglie",
      numeroDiTelefono: "+39 347 6655443"
    }
  },
  {
    id: 8,
    nome: "Martina",
    cognome: "Ricci",
    citta: "Venezia",
    sesso: "Femmina",
    viaggio_id: 4,
    telefono: "+39 347 6655443",
    email: "martina.ricci@email.com",
    codiceFiscale: "RCCMTN91M45L736H",
    eta: 31,
    documenti: "Passaporto VE123456",
    allergie: "Nessuna",
    gruppoSanguigno: "A+",
    esigenzeAlimentari: "Nessuna",
    contattoEmergenza: {
      nome: "Andrea Ricci",
      relazione: "Fratello",
      numeroDiTelefono: "+39 331 9988775"
    }
  },
  {
    id: 9,
    nome: "Francesco",
    cognome: "Sarti",
    citta: "Cagliari",
    sesso: "Maschio",
    viaggio_id: 5,
    telefono: "+39 331 9988775",
    email: "francesco.sarti@email.com",
    codiceFiscale: "SRTFRC78P12G224I",
    eta: 43,
    documenti: "Carta d'Identità CA789012",
    allergie: "Nessuna",
    gruppoSanguigno: "O+",
    esigenzeAlimentari: "Nessuna",
    contattoEmergenza: {
      nome: "Chiara Darsena",
      relazione: "Moglie",
      numeroDiTelefono: "+39 329 4455667"
    }
  },
  {
    id: 10,
    nome: "Chiara",
    cognome: "Martini",
    citta: "Palermo",
    sesso: "Femmina",
    viaggio_id: 5,
    telefono: "+39 329 4455667",
    email: "chiara.martini@email.com",
    codiceFiscale: "MRTCHR89D55H501J",
    eta: 33,
    documenti: "Passaporto PA345678",
    allergie: "Nessuna",
    gruppoSanguigno: "AB-",
    esigenzeAlimentari: "Nessuna",
    contattoEmergenza: {
      nome: "Francesco Rondin",
      relazione: "Marito",
      numeroDiTelefono: "+39 338 1122334"
    }
  },
  {
    id: 11,
    nome: "Giorgio",
    cognome: "Esposito",
    citta: "Salerno",
    sesso: "Maschio",
    viaggio_id: 6,
    telefono: "+39 338 1122334",
    email: "giorgio.esposito@email.com",
    codiceFiscale: "ESPGGR75M12F839K",
    eta: 47,
    documenti: "Carta d'Identità SA123456",
    allergie: "Nessuna",
    gruppoSanguigno: "A+",
    esigenzeAlimentari: "Nessuna",
    contattoEmergenza: {
      nome: "Laura Lo Cutolo",
      relazione: "Moglie",
      numeroDiTelefono: "+39 338 9988770"
    }
  },
  {
    id: 12,
    nome: "Laura",
    cognome: "Gallo",
    citta: "Pisa",
    sesso: "Femmina",
    viaggio_id: 6,
    telefono: "+39 338 9988770",
    email: "laura.gallo@email.com",
    codiceFiscale: "GLLLRA90E45H501L",
    eta: 32,
    documenti: "Passaporto PI234567",
    allergie: "Nessuna",
    gruppoSanguigno: "B+",
    esigenzeAlimentari: "Nessuna",
    contattoEmergenza: {
      nome: "Giorgio Del Zio",
      relazione: "Marito",
      numeroDiTelefono: "+39 338 1122334"
    }
  },
  {
    id: 13,
    nome: "Stefano",
    cognome: "Tosi",
    citta: "Verona",
    sesso: "Maschio",
    viaggio_id: 7,
    telefono: "+39 320 4433221",
    email: "stefano.tosi@email.com",
    codiceFiscale: "TSOSTF85P12F839M",
    eta: 37,
    documenti: "Carta d'Identità VR789012",
    allergie: "Nessuna",
    gruppoSanguigno: "O-",
    esigenzeAlimentari: "Nessuna",
    contattoEmergenza: {
      nome: "Giovanna Rossi",
      relazione: "Moglie",
      numeroDiTelefono: "+39 323 7766554"
    }
  },
  {
    id: 14,
    nome: "Giovanna",
    cognome: "Zanetti",
    citta: "Bergamo",
    sesso: "Femmina",
    viaggio_id: 7,
    telefono: "+39 323 7766554",
    email: "giovanna.zanetti@email.com",
    codiceFiscale: "ZNTGNN88D55H501N",
    eta: 34,
    documenti: "Passaporto BG345678",
    allergie: "Nessuna",
    gruppoSanguigno: "A+",
    esigenzeAlimentari: "Nessuna",
    contattoEmergenza: {
      nome: "Stefano Zanetti",
      relazione: "Fratello",
      numeroDiTelefono: "+39 320 4433221"
    }
  },
  {
    id: 15,
    nome: "Luca",
    cognome: "Morelli",
    citta: "Catania",
    sesso: "Maschio",
    viaggio_id: 8,
    telefono: "+39 324 5566778",
    email: "luca.morelli@email.com",
    codiceFiscale: "MRLLCU80A01D612O",
    eta: 41,
    documenti: "Carta d'Identità CT123456",
    allergie: "Nessuna",
    gruppoSanguigno: "B-",
    esigenzeAlimentari: "Nessuna",
    contattoEmergenza: {
      nome: "Sara Arelli",
      relazione: "Moglie",
      numeroDiTelefono: "+39 332 6655443"
    }
  },
  {
    id: 16,
    nome: "Sara",
    cognome: "Basile",
    citta: "Bari",
    sesso: "Femmina",
    viaggio_id: 8,
    telefono: "+39 332 6655443",
    email: "sara.basile@email.com",
    codiceFiscale: "BLSRRA92H55E123P",
    eta: 30,
    documenti: "Passaporto BA234567",
    allergie: "Nessuna",
    gruppoSanguigno: "O+",
    esigenzeAlimentari: "Nessuna",
    contattoEmergenza: {
      nome: "Luca Fano",
      relazione: "Marito",
      numeroDiTelefono: "+39 324 5566778"
    }
  },
  {
    id: 17,
    nome: "Paolo",
    cognome: "Ricci",
    citta: "Lecce",
    sesso: "Maschio",
    viaggio_id: 9,
    telefono: "+39 329 8776655",
    email: "paolo.ricci@email.com",
    codiceFiscale: "RCCPLA75M12F839Q",
    eta: 46,
    documenti: "Carta d'Identità LE789012",
    allergie: "Nessuna",
    gruppoSanguigno: "A+",
    esigenzeAlimentari: "Nessuna",
    contattoEmergenza: {
      nome: "Giulia Neri",
      relazione: "Moglie",
      numeroDiTelefono: "+39 333 9988779"
    }
  },
  {
    id: 18,
    nome: "Giulia",
    cognome: "Fiore",
    citta: "Trieste",
    sesso: "Femmina",
    viaggio_id: 9,
    telefono: "+39 333 9988779",
    email: "giulia.fiore@email.com",
    codiceFiscale: "FRRGLI90D45H501R",
    eta: 32,
    documenti: "Passaporto TS345678",
    allergie: "Nessuna",
    gruppoSanguigno: "B+",
    esigenzeAlimentari: "Nessuna",
    contattoEmergenza: {
      nome: "Paolo Pe",
      relazione: "Marito",
      numeroDiTelefono: "+39 329 8776655"
    }
  },
  {
    id: 19,
    nome: "Matteo",
    cognome: "De Luca",
    citta: "Siena",
    sesso: "Maschio",
    viaggio_id: 10,
    telefono: "+39 336 2233445",
    email: "matteo.deluca@email.com",
    codiceFiscale: "DLCMTT85P12F839S",
    eta: 23,
    documenti: "Carta d'Identità SI123456",
    allergie: "Nessuna",
    gruppoSanguigno: "O+",
    esigenzeAlimentari: "Nessuna",
    contattoEmergenza: {
      nome: "Beatrice Basile",
      relazione: "Madre",
      numeroDiTelefono: "+39 338 6677889"
    }
  },
  {
    id: 20,
    nome: "Beatrice",
    cognome: "Neri",
    citta: "Modena",
    sesso: "Femmina",
    viaggio_id: 10,
    telefono: "+39 338 6677889",
    email: "beatrice.neri@email.com",
    codiceFiscale: "NREBTR88E52G224T",
    eta: 21,
    documenti: "Passaporto MO234567",
    allergie: "Nessuna",
    gruppoSanguigno: "A-",
    esigenzeAlimentari: "Nessuna",
    contattoEmergenza: {
      nome: "Matteo Neri",
      relazione: "Padre",
      numeroDiTelefono: "+39 336 2233445"
    }
  }
];
