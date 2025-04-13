// src/components/CartePersonnage.tsx
import { motion } from "framer-motion";
import { Personnage } from "../interfaces/Personnage";

interface CardPersonnageProps {
  personnage: Personnage;
  onClick: () => void;
}

const CardPersonnage = ({ personnage, onClick }: CardPersonnageProps) => {
  return (
    <motion.div
      key={personnage.id}
      className="p-4 cursor-pointer bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      <img
        src={personnage.image}
        alt={personnage.name}
        className="w-32 h-32 rounded-full justify-center mx-auto"
      />
      <h3 className="text-2xl text-red-600 bg-amber-400 rounded-2xl p-2 mt-2">
        {personnage.name}
      </h3>
      <p>{`Puissance: ${personnage.puissance} zenith`}</p>
    </motion.div>
  );
};

export default CardPersonnage;
