// ============================================================================
// 1. BASE DE DONNÉES DES CARTES
// ============================================================================
const CARDS_DATABASE = {
  // Fam1
  "f1_1": {
    id: "f1_1",
    family: 1,
    familyName: "La forme",
    name: "La chenille",
    image: "images/Lachenille.jpg",
    meaning: "La chenille invite, comme un roman ou un essai, à la lenteur fertile et à la longueur du temps."
  },
  "f1_2": {
    id: "f1_2",
    family: 1,
    familyName: "La forme",
    name: "Le Papillon",
    image: "images/Lepapillon.jpg",
    meaning: "Le papillon, coloré et rempli de motifs, convie à l'illustration sous toutes ses formes: BD, manga ou album."
  },
  "f1_3": {
    id: "f1_3",
    family: 1,
    familyName: "La forme",
    name: "L'Abeille",
    image: "images/Labeille.jpg",
    meaning: "L'abeille incite à l'organisation, tel les catalogue, magazine ou les beaux livres."
  },
  "f1_4": {
    id: "f1_4",
    family: 1,
    familyName: "La forme",
    name: "La Luciole",
    image: "images/Laluciole.jpg",
    meaning: "La luciole, particulière, rappelle toute forme de livre plus exotique: flipbooks, lettres et recueils."
  },

  // Fam 2
  "f2_1": {
    id: "f2_1",
    family: 2,
    familyName: "Le ton",
    name: "Le Soleil",
    image: "images/Lesoleil.jpg",
    meaning: "Le soleil désigne le côté solaire, humoristique et satirique."
  },
  "f2_2": {
    id: "f2_2",
    family: 2,
    familyName: "Le ton",
    name: "L'Ombre",
    image: "images/Lombre.jpg",
    meaning: "L'ombre met en avant la part de mystère, de dramaturgie et de tension."
  },
  "f2_3": {
    id: "f2_3",
    family: 2,
    familyName: "Le ton",
    name: "La Lune",
    image: "images/Lalune.jpg",
    meaning: "La lune met en lumière le côté poétique, contemplatif et doux."
  },
  "f2_4": {
    id: "f2_4",
    family: 2,
    familyName: "Le ton",
    name: "La Flamme",
    image: "images/Laflamme.jpg",
    meaning: "La flamme dévoile un univers pédagogique, analytique et inspirant."
  },

  // Fam 3
  "f3_1": {
    id: "f3_1",
    family: 3,
    familyName: "Le genre",
    name: "Loculi",
    image: "images/Loculi.jpg",
    meaning: "L'oculi met en image la fiction et la narration (romans, contes, récits imaginaires)."
  },
  "f3_2": {
    id: "f3_2",
    family: 3,
    familyName: "Le genre",
    name: "La balance",
    image: "images/Labalance.jpg",
    meaning: "La balance soupèse le côté théorique et essaiste (graphisme, politique, analyse)."
  },
  "f3_3": {
    id: "f3_3",
    family: 3,
    familyName: "Le genre",
    name: "Le Miroir",
    image: "images/Lemiroir.jpg",
    meaning: "Le miroir reflète l'intime et ce qui en est lié (biographie, témoignage, autofiction, mémoire)."
  },
  "f3_4": {
    id: "f3_4",
    family: 3,
    familyName: "Le genre",
    name: "La Clé",
    image: "images/Laclé.jpg",
    meaning: "La clé renferme le guide, faisant office de répertoire sous différentes formes (techniques, règles, catalogues)."
  }
};

// ============================================================================
// 2. BDD DES LIVRES
// ============================================================================
const BOOKS_DATABASE = {
  "f1_1-f2_2-f3_3": {
    title: "La prochaine fois que tu mordras la poussière",
    author: "Panayotis PASCOT",
    description: "Panayotis Pascot s’attaque d’une plume tranchante et moderne à trois thématiques qu’il tisse pour composer un récit autofictionnel aussi acide qu’ultralucide. La relation au père, l’acceptation de son homosexualité et la dépression s’enchevêtrent ici dans un violent passage à l’âge adulte. Mais la lumière en sort toujours, d’un regard, d’une façon d’observer le quotidien avec autant de tendresse et d’humour que de clairvoyance."
  },
  "f1_4-f2_2-f3_1": {
    title: "La maison des feuilles",
    author: "Mark Z. DANIELEWSKI",
    description: "Un homme découvre que sa maison est plus grande à l’intérieur qu’à l’extérieur. Ce qui commence comme une anomalie devient une exploration vertigineuse. Publié en 2000, La Maison des feuilles est devenu l’un des romans les plus cultes d’Internet."
  },
  "f1_2-f2_4-f3_1": {
    title: "Max doit faire des efforts",
    author: "Dominique DE SAINT MARS & Serge BLOCH",
    description: "Max se surpasse pour faire de la planche à voile. Il décide d'appliquer la même méthode à l'école... Avec ses copains, il crée un club d'entraide. Mais il en fait trop, il se prive de tout ! Va-t-il tenir le coup ? Ou craquer ?"
  },
  "f1_4-f2_2-f3_3": {
    title: "Lettre au père",
    author: "Franz KAFKA",
    description: "Réel et fiction ne font qu'un dans la lettre désespérée que Kafka adresse à son père. Il tente, en vain, de comprendre leur relation qui mêle admiration et répulsion, peur et amour, respect et mépris. Réquisitoire jamais remis à son destinataire, tentative obstinée pour comprendre, la Lettre au père est au centre de l'oeuvre de Kafka."
  },
  "f1_2-f2_3-f3_3": {
    title: "Tio Tomás, a contabilidade dos dias",
    author: "Regina PESSOA",
    description: "À partir de mes souvenirs d’enfance, ce film rend hommage à mon oncle Thomas, un homme humble, mais un peu excentrique, qui a eu une vie simple et anonyme mais qui a beaucoup compté pour moi. Ceci est mon témoignage du fait qu'il n'est pas nécessaire que la vie de quelqu'un soit extraordinaire pour devenir quelqu'un d'exceptionnel dans notre vie. - Regina"
  },
  "f1_3-f2_4-f3_4": {
    title: "Le dessin de nus facile",
    author: "Burne HOGART",
    description: "Ceci n'est ni un cours-éclair pour apprendre à dessiner, ni une collection de 'trucs' à apprendre par cœur pour pouvoir dessiner des figures humaines. Des séries de dessins bien élaborées, des analyses et des légendes vous aideront à comprendre le corps humain en mouvement et à le transposer sur le papier. Le livre de Burne Hogarth offre pour la première fois un système complet permettant de dessiner plus facilement les nus."
  },
  "f1_4-f2_1-f3_1": {
    title: "Le bestiaire universel du professeur Revillod",
    author: "Miguel MURUGARREN & Javier SÀEZ CASTÀN",
    description: "Le célèbre professeur Revillod, scientifique de renommée mondiale, vous propose son incroyable bestiaire. Vous serez non seulement stupéfaits par les merveilleuses gravures reproduites dans cet ouvrage, mais vous pourrez encore reconstituer pas moins de 4096 espèces différentes d'animaux incroyables accompagnées du descriptif de leur mode de vie. Véritable joyau de la zoologie moderne, ce fabuleux almanach de la faune mondiale enchantera petits et grands."
  },
  "f1_3-f2_2-f3_2": {
    title: "Et soudain le monde fut immobilisé",
    author: "Ruedi BAUR",
    description: "Il y a plus d'une centaine de jours à présent, en mars 2020, nous avons subitement compris que notre sort ne dépendait que très relativement de nos décisions. Il se trouvait non seulement lié à un dangereux virus circulant librement autour de la Terre, mais également à des lois d'urgence et des décisions d'exception qui pouvaient du jour au lendemain affecter nos intentions pourtant tout à fait responsables. Depuis nous nous trouvons à la merci des deux ne pouvant plus véritablement planifier notre avenir, à peine nos congés. Comme un tour de France en salle."
  },
  "f1_3-f2_4-f3_1": {
    title: "Le Grand livre des sorcières",
    author: "Benoît DEBECKER",
    description: "La sorcière a-t-elle forcément un nez crochu ? Comment fabrique-t-elle son balai ? Comment s’habille-t-elle ? Quels pouvoirs magiques possède-t-elle ? Comment concocte-t-elle ses potions ? Existe-t-il des gentilles sorcières ? Autant de questions auxquelles ce documentaire farfelu, mais instructif répondra. Un livre indispensable, drôle et riche d’informations pour mieux connaître, identifier les sorcières, mais surtout s’en protéger. Car on ne sait jamais, un beau jour, vous pourriez en croiser une au détour d’une balade en forêt."
  },
  "f1_1-f2_4-f3_4": {
    title: "Lexique des règles typographiques",
    author: "En usage à l'Imprimerie nationale",
    description: "Pour ne pas perdre le nord (minuscule en général, majuscule quand il s'agit de la région d'un pays) ; pour ne pas donner du mister (Mr) à monsieur (M.) ni de trait d'union à saint Jacques, sauf quand c'est le nom d'une église ( Saint-Jacques-de-Compostelle); pour distinguer le Premier ministre du président de la République, même si l'un rêve toujours d'être l'autre; pour laisser leur minuscule au roi et à l'empereur sauf en cas de mégalomanie (Napoléon); pour ne pas écrire 1ère mais 1re; pour conserver l'accent sur les capitales, donc la lisibilité d'un texte en dépit de toutes les paresses et de toutes les pressions numériques..."
  },
  "f1_3-f2_3-f3_2": {
    title: "Futur souhaitable",
    author: "Centre national des arts plastiques",
    description: "Ce 31e numéro de Graphisme en France est consacré à la responsabilité environnementale du design graphique. De nombreuses initiatives émergent et les professionnels, les étudiants et les commanditaires s’engagent dans des démarches vertueuses. Plusieurs personnalités partagent ici leurs réflexions, projets et recherches pour nourrir les pratiques et penser collectivement ces enjeux. Ce numéro invite ainsi, avec détermination, à prendre conscience et à agir"
  },
  "f1_4-f2_4-f3_1": {
    title: "La Bible",
    author: "",
    description: "La Bible, ce sont 39 livres de l’Ancien Testament reconnus comme sacrés par les juifs et par les chrétiens et 27 livres du Nouveau Testament reconnus comme sacrés par les chrétiens. Il y a parmi eux diversité d’auteurs, diversité d’époques, diversité de thèmes et diversité de genres littéraires."
  },
  "f1_2-f2_2-f3_3": {
    title: "Paul",
    author: "Hervé BOURHIS",
    description: "L'auteur se concentre dans cette BD sur les difficiles années que connut 'Macca' après la rupture des Fab Four, et montre comment il remonta la pente en repartant de zéro."
  },
  "f1_2-f2_1-f3_3": {
    title: "Retour au collège",
    author: "Riad SATTOUF",
    description: "A 27 ans, le héros de Retour au Collège est encore traumatisé par ses années collège. La preuve : il lui arrive assez souvent de se réveiller en pleine nuit, après avoir rêvé d’une énième interro surprise impossible à maîtriser. Sur les conseils d’un ami, il décide alors de prendre le taureau par les cornes et d’affronter sa phobie. Crayon en main, il débarque dans un collège huppé pour y croquer ce monde dont il n’est pas sorti totalement indemne. Est-ce que, comme on le lui a suggéré, c’est beaucoup mieux dans un collège 'de riches' ? Les choses auront-elles changé ? Aura-t-il toujours aussi peur du grand méchant loup ?"
  },
  "f1_3-f2_3-f3_4": {
    title: "New-York street art",
    author: "Phillippe CHAUVEAU",
    description: "Livre de photographies sur le street art de la ville de New York."
  },

  // Entrées multiples (Tableaux)
  "f1_1-f2_2-f3_2": [
    {
      title: "Design sous artifice",
      author: "Anthony MASURE",
      description: "« Design sous artifice : la création au risque du machine learning » (publié en mars 2023 par HEAD – Publishing) est un essai critique rédigé par Anthony Masure (professeur et responsable de la recherche à la HEAD – Genève), issu d'un projet de recherche collectif mené avec Alexia Mathieu, Douglas Edric Stanley, Élise Gay et Kévin Donnot."
    },
    {
      title: "La chambre claire",
      author: "Roland BARTHEs",
      description: "La Chambre claire : Note sur la photographie est un essai intime et philosophique dans lequel l'auteur cherche à définir l'essence de la photographie à travers sa propre subjectivité, marqué par le deuil de sa mère."
    }
  ],
  "f1_2-f2_1-f3_1": [
    {
      title: "Astérix & Obélix : la grande traversée",
      author: "René GOSCINNY et Albert UDERZO",
      description: "Le poissonnier Ordralfabétix est en rupture de stock car les livreurs de Lutèce font grève. Or, le druide Panoramix a impérativement besoin de poisson frais pour sa potion magique. Astérix et Obélix partent alors pêcher en mer eux-mêmes."
    },
    {
      title: "Délices du purgatoire",
      author: "Kulbut Magazine",
      description: "Délices du Purgatoire est le quatrième numéro de Kulbut Magazine, un fanzine et magazine collectif indépendant consacré à la bande dessinée, à l'illustration et à la micro-édition."
    }
  ],
  "f1_1-f2_1-f3_1": [
    {
      title: "Je suis ton soleil",
      author: "Marie PAVLENKO",
      description: "Chez Deborah, une mère qui découpe frénétiquement des magazines, un père aux abonnés absents et un labrador obèse qui a dévoré sa dernière paire de chaussures. Dans sa classe de terminale, pas d'Éloïse, sa meilleure amie, pas un seul gars potable, en revanche, un type aux incisives XXL qui élève des mygales... Pas de doute, le théorème de la scoumoune a encore frappé."
    },
    {
      title: "CHERUB Mission 01",
      author: "Robert MUCHAMORE",
      description: "James, placé dans un orphelinat sordide à la mort de sa mère, ne tarde pas à tomber dans la délinquance. Il est alors recruté par CHERUB et va suivre un éprouvant programme d'entraînement avant de se voir confier sa première mission d'agent secret. Sera-t-il capable de résister 100 jours ? 100 jours en enfer...."
    }
  ],
  "f1_4-f2_3-f3_1": [
    {
      title: "Inside the cell",
      author: "Qu Tianran",
      description: "Inside the Cell (titre original : 《格里格外》, In And Out Of Panels) est un recueil d'illustrations et de bandes dessinées courtes de l'autrice et illustratrice chinoise Tianran Qu."
    },
    {
      title: "Contes & légendes inachevés",
      author: "J. R. R. TOLKIEN",
      description: "Contes et légendes inachevés est un recueil de textes sur l'univers du Seigneur des Anneaux, écrit par J. R. R. Tolkien, il raconte des détails sur des objets ou des faits quelques fois obscurs dans les autres livres."
    }
  ],
  "f1_1-f2_2-f3_1": [
    {
      title: "Entre deux mondes",
      author: "Olivier NOREK",
      description: "Fuyant un régime sanguinaire et un pays en guerre, Adam a envoyé sa femme Nora et sa fille Maya à six mille kilomètres de là, dans un endroit où elles devraient l'attendre en sécurité. Il les rejoindra bientôt, et ils organiseront leur avenir. Mais arrivé là-bas, il ne les trouve pas. Ce qu'il découvre, en revanche, c'est un monde entre deux mondes pour damnés de la Terre entre deux vies."
    },
    {
      title: "Dracula",
      author: "Stoker BRAM",
      description: "Un jeune notaire anglais, Jonathan Harker, est envoyé en Transylvanie pour rencontrer un client, le comte Dracula, nouveau propriétaire d'un domaine à Londres. L'homme qu'il découvre est une créature démoniaque, un mort vivant qui boit le sang de ses victimes... Jonathan échappera-t-il au vampire ? Et quel sort attend Mina, sa douce fiancée ?"
    },
    {
      title: "Le bruit et la fureur",
      author: "William FAULKNER",
      description: "Au printemps 1928, dans un comté imaginaire du sud des États-Unis, la vieille famille aristocratique des Compson se déchire sous le regard dépité de ses domestiques. Au sein d'une grande demeure décatie, quatre voix se répondent par ricochet : Benjy, le petit dernier, resté enfermé dans l'enfance, qui ne cesse de hurler ; Jason, le cadet, cynique à l'âme vengeresse ; Quentin, l'aîné, âme torturée de la fratrie, follement épris de sa soeur Caddy ; et Dilsey, leur vieille servante, qui observe le tout avec une grande sagesse."
    }
  ],
  "f1_2-f2_3-f3_1": [
    {
      title: "La cantine de minuit",
      author: "Yarô ABE",
      description: "Dans ce petit restaurant situé au fond d’une ruelle du quartier de Shinjuku, le patron vous accueille de minuit à sept heures du matin. La carte ne propose que du tonjiru, soupe de miso au porc, ainsi que du saké, mais selon vos envies, on vous préparera à la demande tout ce qu’on est en mesure de vous servir."
    },
    {
      title: "Un océan d'amour",
      author: "Grégory PANACCIONE et Wilfrid LUPANO",
      description: "Chaque matin, Monsieur part pêcher au large des côtes bretonnes. Mais ce jour-là, c'est lui qui est pêché par un effrayant bateau-usine. Pendant ce temps, Madame attend. Sourde aux complaintes des bigoudènes, convaincue que son homme est en vie, elle part à sa recherche. C'est le début d'un périlleux chassé-croisé, sur un océan dans tous ses états. Une histoire muette avec moult mouettes."
    }
  ],
  "f1_1-f2_4-f3_2": [
    {
      title: "Nous sommes tous des féministes",
      author: "Chimamanda Ngozi ADICHIE",
      description: "'Partout dans le monde, la question du genre est cruciale. Alors j'aimerais aujourd'hui que nous nous mettions à rêver à un monde différent et à le préparer. Un monde plus équitable. Un monde où les hommes et les femmes seront plus heureux et plus honnêtes envers eux-mêmes. Et voici le point de départ : nous devons élever nos filles autrement. Nous devons élever nos fils autrement.' Dans ces deux discours, Chimamanda Ngozi Adichie porte une voix, rare et puissante, d'émancipation."
    },
    {
      title: "Design, introduction à l'histoire d'une discipline",
      author: "Alexandra MIDAL",
      description: "C'est avec la rationalisation de l'organisation de la cuisine, pensée en 1841 aux Etats-Unis, que le design trouve son origine : l'agencement de la maison et des tâches à y accomplir doit être modifié rationnellement pour non seulement soulager le travail des femmes mais aussi démontrer le bien-fondé de l'abolition de l'esclavage."
    }
  ],
  "f1_1-f2_3-f3_1": [
    {
      title: "Alice in wonderland",
      author: "Lewis CARROLL",
      description: "L'histoire commence lorsqu'Alice, une jeune fille curieuse, aperçoit un lapin blanc pressé qui consulte sa montre. Intriguée, elle le suit et tombe dans un terrier qui la mène dans un monde étrange et merveilleux."
    },
    {
      title: "Le petit prince",
      author: "Antoine DE SAINT-EXUPÉRY",
      description: "Un aviateur s'écrase dans le désert du Sahara et fait la rencontre d'un mystérieux petit garçon aux cheveux d'or venu d'une petite planète, l'astéroïde B-612."
    }
  ],
  "f1_3-f2_1-f3_2": [
    {
      title: "LES FEMINISTES T’ENCOURAGENT A QUITTER TON MARI, TUER TES ENFANTS...",
      author: "Alex TAMÉCYLIA",
      description: "Inspiré d’une citation du télé-évangéliste américain Pat Robertson, cet essai féministe chiffré et documenté, considère que la famille est une secte..."
    },
    {
      title: "Popeye, magazine for city boy",
      author: "POPEYE",
      description: "Popeye (fondé en 1976 par Magazine House) est un magazine mensuel japonais de référence portant la devise historique « Magazine for City Boys »."
    }
  ]
};

// ============================================================================
// ALTERNATIVES SIMILAIRES SI AUCUNE COMBINAISON EXACTE N'EXISTE
// ============================================================================
const FALLBACK_ALTERNATIVES = {
  "f1_1": [
    {
      title: "Les Villes invisibles",
      author: "Italo CALVINO",
      description: "Un dialogue poétique entre Marco Polo et l'empereur Kubilaï Khan, où chaque cité imaginée reflète les désirs, les mémoires et les mystères de l'âme humaine."
    },
    {
      title: "Mémorial de la nuit",
      author: "Maurice BLANCHOT",
      description: "Une exploration silencieuse de l'attente et du temps long, là où la pensée se dépose dans le murmure de l'écriture."
    }
  ],
  "f1_2": [
    {
      title: "Œuvres choisies",
      author: "Bande dessinée & Récits graphiques",
      description: "Une échappée visuelle et lumineuse, idéale pour les esprits en quête d'exploration graphique et de liberté de ton."
    }
  ],
  "f1_3": [
    {
      title: "Journal du dehors",
      author: "Annie ERNAUX",
      description: "Une observation douce et contemplative du quotidien, des fragments de vies croisées au fil des transports et des rues."
    }
  ],
  "f1_4": [
    {
      title: "Manifeste pour une pédagogie active",
      author: "Collectif",
      description: "Un essai vibrant et analytique qui bouscule les codes de la transmission du savoir pour inspirer de nouvelles pratiques."
    }
  ]
};

// Livre par défaut (utilisé en dernier recours si la première famille n'a pas de fallback)
const DEFAULT_BOOK = {
  title: "Votre tirage ne correspond à aucune oeuvre... ou bien si?",
  author: "Rien n'arrive par hasard",
  description: "Un dialogue poétique entre Marco Polo et l'empereur Kubilaï Khan, où chaque cité imaginée reflète les désirs, les mémoires et les mystères de l'âme humaine."
};

// Gestion état
const STORAGE_KEY = "arcanes_tirage_en_cours";
let currentDraw = loadDrawFromStorage();

function loadDrawFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : { 1: null, 2: null, 3: null };
  } catch (e) {
    return { 1: null, 2: null, 3: null };
  }
}

function saveDrawToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentDraw));
}

// Scan NFC et init
document.addEventListener("DOMContentLoaded", () => {
  initSimulator();
  renderBoard();
  checkIncomingNFCScan();
});

function checkIncomingNFCScan() {
  const params = new URLSearchParams(window.location.search);
  const scannedCardId = params.get("card");

  if (scannedCardId && CARDS_DATABASE[scannedCardId]) {
    const cleanUrl = window.location.origin + window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);
    processScannedCard(scannedCardId);
  }
}

function processScannedCard(cardId) {
  const card = CARDS_DATABASE[cardId];
  if (!card) return;

  currentDraw[card.family] = card.id;
  saveDrawToStorage();

  renderBoard();
  openCardReveal(card);
}

function renderBoard() {
  let filledCount = 0;

  [1, 2, 3].forEach((familyNum) => {
    const slotEl = document.getElementById(`slot-${familyNum}`);
    const cardId = currentDraw[familyNum];

    if (cardId && CARDS_DATABASE[cardId]) {
      const card = CARDS_DATABASE[cardId];
      filledCount++;
      slotEl.classList.add("filled");

      if (card.image) {
        slotEl.innerHTML = `<img src="${card.image}" alt="${card.name}">`;
      } else {
        slotEl.innerHTML = `<span class="slot-mini-title">${card.name}</span>`;
      }

      slotEl.onclick = () => openCardReveal(card);
    } else {
      slotEl.classList.remove("filled");
      slotEl.innerHTML = `
        <span class="slot-placeholder">?</span>
        <span class="slot-family-label">Famille ${familyNum}</span>
      `;
      slotEl.onclick = null;
    }
  });

  const revealBtn = document.getElementById("reveal-oracle-btn");
  const resetBtn = document.getElementById("reset-btn");

  revealBtn.disabled = filledCount < 3;
  resetBtn.classList.toggle("hidden", filledCount === 0);
}

function openCardReveal(card) {
  const revealScreen = document.getElementById("card-reveal-screen");
  const visualContainer = document.getElementById("reveal-card-visual");
  const meaningEl = document.getElementById("reveal-card-meaning");

  if (card.image) {
    visualContainer.innerHTML = `<img src="${card.image}" alt="${card.name}">`;
  } else {
    visualContainer.innerHTML = `
      <div class="card-fallback-art">
        <span>Famille ${card.family} · ${card.familyName}</span>
        <h3>${card.name}</h3>
      </div>
    `;
  }

  meaningEl.textContent = card.meaning;
  revealScreen.classList.add("active");
  revealScreen.setAttribute("aria-hidden", "false");
}

document.getElementById("continue-btn").addEventListener("click", () => {
  const revealScreen = document.getElementById("card-reveal-screen");
  revealScreen.classList.remove("active");
  revealScreen.setAttribute("aria-hidden", "true");
});

// Découvrir l'ouvrage (Avec correspondance exacte ou alternatives similaires de secours)
document.getElementById("reveal-oracle-btn").addEventListener("click", () => {
  if (!currentDraw[1] || !currentDraw[2] || !currentDraw[3]) return;

  const comboKey = `${currentDraw[1]}-${currentDraw[2]}-${currentDraw[3]}`;
  let booksList;
  let isExactMatch = true;

  // 1. Vérifie si la combinaison exacte existe dans la BDD
  if (BOOKS_DATABASE[comboKey]) {
    let rawResult = BOOKS_DATABASE[comboKey];
    booksList = Array.isArray(rawResult) ? rawResult : [rawResult];
  } else {
    // 2. Sinon, on bascule sur les alternatives basées sur la première carte (Famille 1)
    isExactMatch = false;
    const firstCardId = currentDraw[1]; 
    booksList = FALLBACK_ALTERNATIVES[firstCardId] || [DEFAULT_BOOK];
  }

  const bookScreen = document.getElementById("book-result-screen");
  const container = bookScreen.querySelector(".book-card-container");

  let booksHTML = "";
  if (isExactMatch) {
    booksHTML += `<span class="oracle-tag">Vos ouvrages destinés</span>`;
  } else {
    booksHTML += `
      <span class="oracle-tag">Portail d'imaginaires</span>
      <p class="book-description" style="font-style: italic; margin-top: 0.5rem; opacity: 0.85;">
        Il n'y a pas d'ouvrage exact pour ce tirage précis, mais l'esprit de votre tirage résonne ici...
      </p>
      <div class="book-divider"></div>
    `;
  }

  booksList.forEach((book, index) => {
    if (isExactMatch && booksList.length > 1) {
      booksHTML += `<p class="book-index" style="font-size: 0.85rem; opacity: 0.7; margin-top: 1rem;">Ouvrage ${index + 1} sur ${booksList.length}</p>`;
    }
    booksHTML += `
      <h2 class="book-title" style="margin-top: ${index > 0 ? '2rem' : '0.5rem'};">${book.title}</h2>
      <p class="book-author">${book.author}</p>
      <div class="book-divider"></div>
      <p class="book-description">${book.description}</p>
    `;
  });

  const summaryPills = [1, 2, 3]
    .map((f) => `<span class="summary-pill">${CARDS_DATABASE[currentDraw[f]].name}</span>`)
    .join("");

  booksHTML += `
    <div class="drawn-summary" style="margin-top: 1.5rem;">${summaryPills}</div>
    <button id="close-book-btn" class="primary-btn">Recommencer un tirage</button>
  `;

  container.innerHTML = booksHTML;

  document.getElementById("close-book-btn").addEventListener("click", resetDraw);

  bookScreen.classList.add("active");
  bookScreen.setAttribute("aria-hidden", "false");
});

function resetDraw() {
  currentDraw = { 1: null, 2: null, 3: null };
  saveDrawToStorage();
  renderBoard();

  const bookScreen = document.getElementById("book-result-screen");
  bookScreen.classList.remove("active");
  bookScreen.setAttribute("aria-hidden", "true");
}

document.getElementById("reset-btn").addEventListener("click", resetDraw);

// Simulateur NFC
function initSimulator() {
  const toggleBtn = document.getElementById("toggle-sim-btn");
  const panel = document.getElementById("sim-panel");
  const grid = document.getElementById("sim-buttons-grid");

  toggleBtn.addEventListener("click", () => {
    panel.classList.toggle("hidden");
  });

  Object.values(CARDS_DATABASE).forEach((card) => {
    const btn = document.createElement("button");
    btn.className = "sim-card-btn";
    btn.textContent = `F${card.family} · ${card.name}`;
    btn.addEventListener("click", () => {
      panel.classList.add("hidden");
      processScannedCard(card.id);
    });
    grid.appendChild(btn);
  });
}

// Tutoriel
const tutoBtn = document.getElementById("tuto");
const tutoScreen = document.getElementById("tuto-screen");
const closeTutoBtn = document.getElementById("close-tuto-btn");

if (tutoBtn && tutoScreen && closeTutoBtn) {
  tutoBtn.addEventListener("click", () => {
    tutoScreen.classList.add("active");
    tutoScreen.setAttribute("aria-hidden", "false");
  });

  closeTutoBtn.addEventListener("click", () => {
    tutoScreen.classList.remove("active");
    tutoScreen.setAttribute("aria-hidden", "true");
  });

  tutoScreen.addEventListener("click", (e) => {
    if (e.target === tutoScreen) {
      tutoScreen.classList.remove("active");
      tutoScreen.setAttribute("aria-hidden", "true");
    }
  });
}