export interface VilleData {
  nom: string;
  slug: string;
  dept: string;
  deptNom: string;
  region: string;
  population: number;
  voisines: string[];
  codePostal: string;
  intro: string;
}

export const villesData: VilleData[] = [
  {
    nom: "Paris",
    slug: "paris",
    dept: "75",
    deptNom: "Paris",
    region: "Île-de-France",
    population: 2161000,
    voisines: ["versailles", "boulogne-billancourt", "saint-denis"],
    codePostal: "75000",
    intro: "Au cœur de l'Île-de-France, Paris concentre une densité exceptionnelle de particuliers et de TPE dépendants de leur outil informatique. Que vous soyez dans le 75, 92, 93 ou 94, notre service de dépannage à distance intervient en 15 minutes pour tous vos problèmes PC."
  },
  {
    nom: "Lyon",
    slug: "lyon",
    dept: "69",
    deptNom: "Rhône",
    region: "Auvergne-Rhône-Alpes",
    population: 522000,
    voisines: ["villeurbanne", "grenoble", "saint-etienne"],
    codePostal: "69000",
    intro: "Capitale de la région Auvergne-Rhône-Alpes, Lyon et son agglomération regroupent des milliers de professionnels et de familles. Notre technicien à distance dessert tout le département du Rhône pour un dépannage rapide et efficace."
  },
  {
    nom: "Marseille",
    slug: "marseille",
    dept: "13",
    deptNom: "Bouches-du-Rhône",
    region: "Provence-Alpes-Côte d'Azur",
    population: 861000,
    voisines: ["aix-en-provence", "toulon", "nimes"],
    codePostal: "13000",
    intro: "De la Canebière aux quartiers nord, Marseille est une métropole dynamique où l'informatique est essentielle. Notre service de dépannage PC à distance couvre tout le 13 et la région PACA avec une réactivité optimale."
  },
  {
    nom: "Toulouse",
    slug: "toulouse",
    dept: "31",
    deptNom: "Haute-Garonne",
    region: "Occitanie",
    population: 471000,
    voisines: ["montpellier", "bordeaux", "perpignan"],
    codePostal: "31000",
    intro: "Ville rose et capitale de l'aéronautique, Toulouse compte de nombreuses TPE et startups tech. Notre support informatique à distance intervient sur tout le département de la Haute-Garonne en moins de 15 minutes."
  },
  {
    nom: "Bordeaux",
    slug: "bordeaux",
    dept: "33",
    deptNom: "Gironde",
    region: "Nouvelle-Aquitaine",
    population: 254000,
    voisines: ["toulouse", "nantes", "limoges"],
    codePostal: "33000",
    intro: "Au cœur du vignoble bordelais et capitale de la Nouvelle-Aquitaine, Bordeaux est un pôle économique majeur. Notre technicien à distance dessert tout le 33 pour vos urgences informatiques."
  },
  {
    nom: "Nantes",
    slug: "nantes",
    dept: "44",
    deptNom: "Loire-Atlantique",
    region: "Pays de la Loire",
    population: 309000,
    voisines: ["rennes", "bordeaux", "le-mans"],
    codePostal: "44000",
    intro: "Capitale de la Loire-Atlantique et des Pays de la Loire, Nantes est une ville innovante où le digital est roi. Notre service de dépannage informatique couvre tout le 44 depuis nos bureaux virtuels."
  },
  {
    nom: "Strasbourg",
    slug: "strasbourg",
    dept: "67",
    deptNom: "Bas-Rhin",
    region: "Grand Est",
    population: 284000,
    voisines: ["metz", "reims", "besancon"],
    codePostal: "67000",
    intro: "Capitale européenne et de l'Alsace, Strasbourg est un carrefour technologique du Grand Est. Notre support informatique à distance intervient sur tout le Bas-Rhin (67) pour particuliers et entreprises."
  },
  {
    nom: "Montpellier",
    slug: "montpellier",
    dept: "34",
    deptNom: "Hérault",
    region: "Occitanie",
    population: 285000,
    voisines: ["nimes", "toulouse", "perpignan"],
    codePostal: "34000",
    intro: "Ville étudiante et technopole dynamique, Montpellier est au cœur de l'Hérault. Notre technicien à distance dessert tout le 34 avec la même réactivité, du centre-ville aux communes environnantes."
  },
  {
    nom: "Lille",
    slug: "lille",
    dept: "59",
    deptNom: "Nord",
    region: "Hauts-de-France",
    population: 232000,
    voisines: ["amiens", "reims", "le-havre"],
    codePostal: "59000",
    intro: "Capitale des Flandres et du Nord, Lille est un pôle économique majeur des Hauts-de-France. Notre service de dépannage PC couvre tout le 59 avec intervention garantie en 15 minutes."
  },
  {
    nom: "Rennes",
    slug: "rennes",
    dept: "35",
    deptNom: "Ille-et-Vilaine",
    region: "Bretagne",
    population: 216000,
    voisines: ["nantes", "brest", "le-mans"],
    codePostal: "35000",
    intro: "Capitale de la Bretagne et de l'Ille-et-Vilaine, Rennes est une ville jeune et connectée. Notre support informatique à distance intervient sur tout le 35 pour tous vos problèmes PC."
  },
  {
    nom: "Reims",
    slug: "reims",
    dept: "51",
    deptNom: "Marne",
    region: "Grand Est",
    population: 183000,
    voisines: ["strasbourg", "metz", "amiens"],
    codePostal: "51100",
    intro: "Cité des sacres et capitale de la Champagne, Reims est un centre économique du Grand Est. Notre technicien à distance dessert tout le département de la Marne (51) pour vos urgences informatiques."
  },
  {
    nom: "Le Havre",
    slug: "le-havre",
    dept: "76",
    deptNom: "Seine-Maritime",
    region: "Normandie",
    population: 172000,
    voisines: ["amiens", "reims", "caen"],
    codePostal: "76600",
    intro: "Premier port français et ville de la Seine-Maritime, Le Havre est un pôle logistique majeur de Normandie. Notre service de dépannage informatique couvre tout le 76 à distance."
  },
  {
    nom: "Saint-Étienne",
    slug: "saint-etienne",
    dept: "42",
    deptNom: "Loire",
    region: "Auvergne-Rhône-Alpes",
    population: 172000,
    voisines: ["lyon", "clermont-ferrand", "grenoble"],
    codePostal: "42000",
    intro: "Capitale du design et de la Loire, Saint-Étienne est une ville en pleine transformation digitale. Notre support informatique à distance intervient sur tout le 42 en moins de 15 minutes."
  },
  {
    nom: "Toulon",
    slug: "toulon",
    dept: "83",
    deptNom: "Var",
    region: "Provence-Alpes-Côte d'Azur",
    population: 176000,
    voisines: ["marseille", "aix-en-provence", "nimes"],
    codePostal: "83000",
    intro: "Port militaire et ville du Var, Toulon est un centre économique important de PACA. Notre technicien à distance dessert tout le 83 pour vos problèmes de PC et de logiciels."
  },
  {
    nom: "Grenoble",
    slug: "grenoble",
    dept: "38",
    deptNom: "Isère",
    region: "Auvergne-Rhône-Alpes",
    population: 158000,
    voisines: ["lyon", "saint-etienne", "besancon"],
    codePostal: "38000",
    intro: "Capitale des Alpes et de l'Isère, Grenoble est un pôle scientifique et technologique majeur. Notre service de dépannage informatique couvre tout le 38 avec expertise technique pointue."
  },
  {
    nom: "Dijon",
    slug: "dijon",
    dept: "21",
    deptNom: "Côte-d'Or",
    region: "Bourgogne-Franche-Comté",
    population: 156000,
    voisines: ["besancon", "metz", "clermont-ferrand"],
    codePostal: "21000",
    intro: "Capitale de la Bourgogne et de la Côte-d'Or, Dijon est une ville historique tournée vers le digital. Notre support à distance intervient sur tout le 21 pour particuliers et TPE."
  },
  {
    nom: "Angers",
    slug: "angers",
    dept: "49",
    deptNom: "Maine-et-Loire",
    region: "Pays de la Loire",
    population: 154000,
    voisines: ["nantes", "le-mans", "tours"],
    codePostal: "49000",
    intro: "Capitale de l'Anjou et du Maine-et-Loire, Angers est une ville dynamique des Pays de la Loire. Notre technicien à distance dessert tout le 49 pour un dépannage rapide et efficace."
  },
  {
    nom: "Nîmes",
    slug: "nimes",
    dept: "30",
    deptNom: "Gard",
    region: "Occitanie",
    population: 151000,
    voisines: ["montpellier", "marseille", "toulon"],
    codePostal: "30000",
    intro: "Ville romaine et capitale du Gard, Nîmes est un centre économique majeur d'Occitanie. Notre service de dépannage informatique couvre tout le 30 avec la même réactivité."
  },
  {
    nom: "Villeurbanne",
    slug: "villeurbanne",
    dept: "69",
    deptNom: "Rhône",
    region: "Auvergne-Rhône-Alpes",
    population: 147000,
    voisines: ["lyon", "grenoble", "saint-etienne"],
    codePostal: "69100",
    intro: "Ville voisine de Lyon dans le Rhône, Villeurbanne est une commune densément peuplée d'Auvergne-Rhône-Alpes. Notre support informatique à distance intervient sur tout le 69 métropole."
  },
  {
    nom: "Le Mans",
    slug: "le-mans",
    dept: "72",
    deptNom: "Sarthe",
    region: "Pays de la Loire",
    population: 143000,
    voisines: ["nantes", "rennes", "angers"],
    codePostal: "72000",
    intro: "Capitale de la Sarthe et célèbre pour ses 24 Heures, Le Mans est un pôle économique des Pays de la Loire. Notre technicien à distance dessert tout le 72 pour vos urgences PC."
  },
  {
    nom: "Aix-en-Provence",
    slug: "aix-en-provence",
    dept: "13",
    deptNom: "Bouches-du-Rhône",
    region: "Provence-Alpes-Côte d'Azur",
    population: 142000,
    voisines: ["marseille", "toulon", "nimes"],
    codePostal: "13100",
    intro: "Ville d'eau et ville d'art dans les Bouches-du-Rhône, Aix-en-Provence est un centre universitaire et culturel de PACA. Notre service de dépannage couvre tout le 13 à distance."
  },
  {
    nom: "Clermont-Ferrand",
    slug: "clermont-ferrand",
    dept: "63",
    deptNom: "Puy-de-Dôme",
    region: "Auvergne-Rhône-Alpes",
    population: 141000,
    voisines: ["saint-etienne", "lyon", "limoges"],
    codePostal: "63000",
    intro: "Capitale de l'Auvergne et du Puy-de-Dôme, Clermont-Ferrand est un pôle technologique majeur. Notre support informatique à distance intervient sur tout le 63 en 15 minutes."
  },
  {
    nom: "Brest",
    slug: "brest",
    dept: "29",
    deptNom: "Finistère",
    region: "Bretagne",
    population: 140000,
    voisines: ["rennes", "nantes", "le-mans"],
    codePostal: "29200",
    intro: "Port maritime et capitale du Finistère, Brest est une ville technologique de Bretagne. Notre technicien à distance dessert tout le 29 pour tous vos problèmes informatiques."
  },
  {
    nom: "Tours",
    slug: "tours",
    dept: "37",
    deptNom: "Indre-et-Loire",
    region: "Centre-Val de Loire",
    population: 136000,
    voisines: ["orleans", "angers", "le-mans"],
    codePostal: "37000",
    intro: "Capitale de la Touraine et de l'Indre-et-Loire, Tours est au cœur du Centre-Val de Loire. Notre service de dépannage informatique couvre tout le 37 avec expertise."
  },
  {
    nom: "Amiens",
    slug: "amiens",
    dept: "80",
    deptNom: "Somme",
    region: "Hauts-de-France",
    population: 133000,
    voisines: ["lille", "reims", "le-havre"],
    codePostal: "80000",
    intro: "Capitale de la Somme et de la Picardie, Amiens est un centre historique des Hauts-de-France. Notre support à distance intervient sur tout le 80 pour particuliers et TPE."
  },
  {
    nom: "Limoges",
    slug: "limoges",
    dept: "87",
    deptNom: "Haute-Vienne",
    region: "Nouvelle-Aquitaine",
    population: 132000,
    voisines: ["bordeaux", "clermont-ferrand", "tours"],
    codePostal: "87000",
    intro: "Capitale de la Haute-Vienne et de la porcelaine, Limoges est un pôle économique de Nouvelle-Aquitaine. Notre technicien à distance dessert tout le 87 rapidement."
  },
  {
    nom: "Metz",
    slug: "metz",
    dept: "57",
    deptNom: "Moselle",
    region: "Grand Est",
    population: 117000,
    voisines: ["strasbourg", "reims", "dijon"],
    codePostal: "57000",
    intro: "Capitale de la Moselle et du pays messin, Metz est une ville d'art et d'histoire du Grand Est. Notre service de dépannage informatique couvre tout le 57 à distance."
  },
  {
    nom: "Perpignan",
    slug: "perpignan",
    dept: "66",
    deptNom: "Pyrénées-Orientales",
    region: "Occitanie",
    population: 121000,
    voisines: ["montpellier", "toulouse", "nimes"],
    codePostal: "66000",
    intro: "Capitale du Roussillon et des Pyrénées-Orientales, Perpignan est la porte de l'Espagne en Occitanie. Notre support informatique à distance intervient sur tout le 66."
  },
  {
    nom: "Besançon",
    slug: "besancon",
    dept: "25",
    deptNom: "Doubs",
    region: "Bourgogne-Franche-Comté",
    population: 116000,
    voisines: ["dijon", "strasbourg", "grenoble"],
    codePostal: "25000",
    intro: "Capitale de la Franche-Comté et du Doubs, Besançon est une ville historique et technologique. Notre technicien à distance dessert tout le 25 pour vos urgences PC."
  },
  {
    nom: "Orléans",
    slug: "orleans",
    dept: "45",
    deptNom: "Loiret",
    region: "Centre-Val de Loire",
    population: 114000,
    voisines: ["tours", "amiens", "le-mans"],
    codePostal: "45000",
    intro: "Capitale du Loiret et ville historique du Centre-Val de Loire, Orléans est un pôle économique dynamique. Notre service de dépannage informatique couvre tout le 45."
  }
];

export function getVilleBySlug(slug: string): VilleData | undefined {
  return villesData.find(v => v.slug === slug);
}

export function getAllVilleSlugs(): string[] {
  return villesData.map(v => v.slug);
}

export function getVoisinesBySlug(slug: string): VilleData[] {
  const ville = getVilleBySlug(slug);
  if (!ville) return [];
  return villesData.filter(v => ville.voisines.includes(v.slug));
}
