import { motion } from "framer-motion";
import { useState } from "react";
import { personnagesDBZ } from "../data/personnagesDBZ";
import { Personnage } from "../interfaces/Personnage";
import CardPersonnage from "./CardPersonnage";
import Filtrage from "./Filtrage";
import Modale from "./Modale";
import Pagination from "./Pagination";

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

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Nombre d'items par page
  const indexOfLast = currentPage * itemsPerPage; // Index du dernier item
  const indexOfFirst = indexOfLast - itemsPerPage; // Index du premier item
  const currentPersonnages = filteredPersonnages.slice(
    indexOfFirst,
    indexOfLast
  ); // Personnages affichés sur la page actuelle

  const totalPages = Math.ceil(filteredPersonnages.length / itemsPerPage); // Nombre total de pages

  const personnagesToDisplay =
    selectedCategory === "all" ? filteredPersonnages : currentPersonnages;

  const afficherPersonnage = (personnage: Personnage) => {
    setSelectedPersonnage(personnage);
  };

  const masquerPersonnage = () => {
    setSelectedPersonnage(null);
  };

  return (
    <div className="relative p-6 text-center space-x-6">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url("/assets/images/backgrounds/arene.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
      ></div>

      {/* Overlay sombre */}
      <div className="relative z-10 mt-10">
        <h1 className="text-3xl font-bold mt-4">Les guerriers DBZ</h1>
        <Filtrage setSelectedCategory={setSelectedCategory} />
        <div className="grid grid-cols-4 gap-4">
          {personnagesToDisplay.map((personnage) => (
            <CardPersonnage
              key={personnage.id}
              personnage={personnage} // Durée de l'animation
              onClick={() => afficherPersonnage(personnage)} // Affiche les détails au clic
            />
          ))}
        </div>
        {/* Modale affichée quand un personnage est sélectionné */}
        {selectedPersonnage && (
          <>
            <Modale
              personnage={selectedPersonnage}
              onClose={masquerPersonnage}
            />
            <motion.div
              className="fixed right-0 inset-y-0 my-auto z-50 flex items-center overflow-hidden animate-pulse"
              initial={{
                opacity: 0,
                scale: 0.8,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
              }}
              transition={{ duration: 1.2, ease: "easeOut" }} // Durée de l'animation
            >
              <img
                src={selectedPersonnage.image}
                alt={selectedPersonnage.name}
                className="max-w-md max-h-[90vh] object-cover rounded-lg"
              />
            </motion.div>
          </>
        )}

        {/* Pagination */}
        {selectedCategory !== "all" &&
          filteredPersonnages.length > itemsPerPage && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          )}
      </div>
    </div>
  );
}

export default Personnages;
