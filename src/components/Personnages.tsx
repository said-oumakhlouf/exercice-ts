import { useState } from "react";
import { personnagesDBZ } from "../data/personnagesDBZ";
import { Personnage } from "../interfaces/Personnage";
import Filtrage from "./Filtrage";
import CardPersonnage from "./CardPersonnage";
import Modale from "./Modale";

function Personnages() {
  const [selectedPersonnage, setSelectedPersonnage] =
    useState<Personnage | null>(null);

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredPersonnages =
    selectedCategory === "all"
      ? personnagesDBZ
      : personnagesDBZ.filter(
          (personnage) => personnage.categorie === selectedCategory
        );

  const afficherPersonnage = (personnage: Personnage) => {
    setSelectedPersonnage(personnage);
  };

  const masquerPersonnage = () => {
    setSelectedPersonnage(null);
  };

  return (
    <div className="p-6 text-center space-x-6">
      <h1 className="text-3xl font-bold mt-4">Les guerriers DBZ</h1>
      <Filtrage setSelectedCategory={setSelectedCategory} />
      <div className="grid grid-cols-4 gap-4">
        {filteredPersonnages.map((personnage) => (
          <CardPersonnage
            key={personnage.id}
            personnage={personnage} // Durée de l'animation
            onClick={() => afficherPersonnage(personnage)} // Affiche les détails au clic
          />
        ))}
      </div>

      {/* Modale affichée quand un personnage est sélectionné */}
      {selectedPersonnage && (
        <Modale personnage={selectedPersonnage} onClose={masquerPersonnage} />
      )}
    </div>
  );
}

export default Personnages;
