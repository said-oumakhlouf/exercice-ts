export interface Personnage {
  id: number;
  name: string;
  description: string;
  image: string;
  puissance: number;
  categorie?: string;
  audio: string; // Catégorie optionnelle
}
