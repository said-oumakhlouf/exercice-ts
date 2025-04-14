import { Personnage } from "../interfaces/Personnage";
import brolyAudio from "/assets/audio/broly_kakaroto.mp3";
import cellAudio from "/assets/audio/cell.mp3";
import freezerAudio from "/assets/audio/freezer.mp3";
import gohanAudio from "/assets/audio/gohan.mp3";
import gokuAudio from "/assets/audio/goku.mp3";
import majinBuuAudio from "/assets/audio/majin-buu.mp3";
import piccoloAudio from "/assets/audio/piccolo.mp3";
import trunksAudio from "/assets/audio/trunks.mp3";
import vegetaAudio from "/assets/audio/vegeta.mp3";

export const personnagesDBZ: Personnage[] = [
  {
    id: 1,
    name: "Goku",
    description: "Un Saiyan de cœur pur, toujours prêt à sauver la Terre",
    image: "/assets/images/dbz/goku.jpg",
    puissance: 9000,
    categorie: "hero",
    audio: gokuAudio,
  },
  {
    id: 2,
    name: "Vegeta",
    description: "Le prince des Saiyans, fier et puissant",
    image: "/assets/images/dbz/vegeta.jpg",
    puissance: 9000,
    categorie: "hero",
    audio: vegetaAudio,
  },
  {
    id: 3,
    name: "Gohan",
    description: "Le fils de Goku, un combattant talentueux",
    image: "/assets/images/dbz/gohan-ssj2.jpg",
    puissance: 10000,
    categorie: "hero",
    audio: gohanAudio,
  },
  {
    id: 4,
    name: "Piccolo",
    description: "Un Namek, sage et puissant allié de Goku",
    image: "/assets/images/dbz/piccolo.jpg",
    puissance: 5000,
    categorie: "hero",
    audio: piccoloAudio,
  },
  {
    id: 5,
    name: "Freezer",
    description: "Un tyran galactique, l'un des ennemis les plus redoutables",
    image: "/assets/images/dbz/freezer.jpg",
    puissance: 7000,
    categorie: "vilain",
    audio: freezerAudio,
  },
  {
    id: 6,
    name: "Cell",
    description: "Un bio-androïde, cherchant à atteindre la perfection",
    image: "/assets/images/dbz/cell2.jpg",
    puissance: 9000,
    categorie: "vilain",
    audio: cellAudio,
  },
  {
    id: 7,
    name: "Majin Buu",
    description:
      "Un ancien démon, capable de se transformer en plusieurs formes",
    image: "/assets/images/dbz/majin-buu.jpg",
    puissance: 12000,
    categorie: "vilain",
    audio: majinBuuAudio,
  },
  {
    id: 8,
    name: "Broly",
    description: "Un Saiyan légendaire, connu pour sa force incroyable",
    image: "/assets/images/dbz/broly4.jpg",
    puissance: 19000,
    categorie: "vilain",
    audio: brolyAudio,
  },
  {
    id: 9,
    name: "Trunks",
    description: "Le fils de Vegeta, un combattant talentueux",
    image: "/assets/images/dbz/trunks.jpg",
    puissance: 6000,
    categorie: "hero",
    audio: trunksAudio,
  },
  {
    id: 10,
    name: "Bulma",
    description: "Une scientifique brillante et l'amie de Goku",
    image: "/assets/images/dbz/bulma.jpg",
    puissance: 1000,
    categorie: "hero",
    audio: "",
  },
];
