import { useState } from "react";

// Interface pour définir la structure du produit
interface Produit {
  id: number;
  nom: string;
  categorie: "fruit" | "légume";
  emoji: string;
}

function Panier() {
  const produits: Produit[] = [
    { id: 1, nom: "Pomme", categorie: "fruit", emoji: "🍏" },
    { id: 2, nom: "Carotte", categorie: "légume", emoji: "🥕" },
    { id: 3, nom: "Banane", categorie: "fruit", emoji: "🍌" },
    { id: 4, nom: "Brocoli", categorie: "légume", emoji: "🥦" },
  ];

  const [panier, setPanier] = useState<Produit[]>([]);

  const ajouterAuPanier = (produit: Produit) => {
    const dejaDansPanier = panier.some((item) => item.id === produit.id);
    if (!dejaDansPanier) {
      setPanier([...panier, produit]);
    }
  };

  const retirerDuPanier = (produit: Produit) => {
    const nouveauPanier = panier.filter((item) => item.id !== produit.id);
    setPanier(nouveauPanier);
  };

  return (
    <div className="p-6 text-center space-y-6">
      <h1 className="text-3xl font-bold mt-4">🛒 Panier Fruits & Légumes</h1>
      <ul>
        {produits.map((produit) => (
          <li key={produit.id}>
            {produit.emoji} {produit.nom} ({produit.categorie}){" "}
            <button
              onClick={() => ajouterAuPanier(produit)}
              className="bg-blue-500 mt-4 text-white px-4 py-2 rounded"
            >
              Ajouter au panier
            </button>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mt-4">Votre Panier</h2>
      <p className="text-lg font-semibold">
        🧮 Total : {panier.length} {panier.length <= 1 ? "article" : "articles"}
      </p>
      {panier.length === 0 ? (
        <p>Le panier est vide</p>
      ) : (
        <ul>
          {panier.map((item) => (
            <li key={item.id}>
              {item.emoji} {item.nom} ({item.categorie}){" "}
              <button
                onClick={() => retirerDuPanier(item)}
                className="bg-red-500 mt-4 text-white px-4 py-2 rounded ml-2"
              >
                Retirer du panier
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Panier;
