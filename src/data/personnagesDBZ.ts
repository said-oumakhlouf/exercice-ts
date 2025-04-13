import { Personnage } from "../interfaces/Personnage";

export const personnagesDBZ: Personnage[] = [
  {
    id: 1,
    name: "Goku",
    description: "Un Saiyan de cœur pur, toujours prêt à sauver la Terre",
    image: "src/assets/images/goku.jpg",
    puissance: 9000,
    categorie: "hero",
  },
  {
    id: 2,
    name: "Vegeta",
    description: "Le prince des Saiyans, fier et puissant",
    image: "src/assets/images/vegeta.jpg",
    puissance: 9000,
    categorie: "hero",
  },
  {
    id: 3,
    name: "Gohan",
    description: "Le fils de Goku, un combattant talentueux",
    image: "src/assets/images/gohan-ssj2.jpg",
    puissance: 10000,
    categorie: "hero",
  },
  {
    id: 4,
    name: "Piccolo",
    description: "Un Namek, sage et puissant allié de Goku",
    image: "src/assets/images/piccolo.jpg",
    puissance: 5000,
    categorie: "hero",
  },
  {
    id: 5,
    name: "Freezer",
    description: "Un tyran galactique, l'un des ennemis les plus redoutables",
    image: "src/assets/images/freezer.jpg",
    puissance: 7000,
    categorie: "vilain",
  },
  {
    id: 6,
    name: "Cell",
    description: "Un bio-androïde, cherchant à atteindre la perfection",
    image: "src/assets/images/cell2.jpg",
    puissance: 9000,
    categorie: "vilain",
  },
  {
    id: 7,
    name: "Majin Buu",
    description:
      "Un ancien démon, capable de se transformer en plusieurs formes",
    image: "src/assets/images/majin-buu.jpg",
    puissance: 12000,
    categorie: "vilain",
  },
  {
    id: 8,
    name: "Broly",
    description: "Un Saiyan légendaire, connu pour sa force incroyable",
    image: "src/assets/images/broly4.jpg",
    puissance: 19000,
    categorie: "vilain",
  },
];
