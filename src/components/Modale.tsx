// src/components/Modale.tsx
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ModaleProps } from "../interfaces/Modale";

const Modale = ({ personnage, onClose }: ModaleProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(personnage.audio);
    audioRef.current.play();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [personnage]);

  return (
    <motion.div
      className="fixed inset-0 flex justify-center items-center m-4 p-4 border bg-gray-500 bg-opacity-50 z-50 rounded-lg"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      onClick={onClose}
    >
      <div
        className="p-6 bg-white rounded-lg shadow-lg max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold">{personnage.name}</h2>
        <img
          src={personnage.image}
          alt={personnage.name}
          className="w-32 h-32 rounded-full justify-center mx-auto"
        />
        <p className="mt-4 text-lg font-semibold">{personnage.description}</p>
        <p className="mt-4 text-xl font-semibold">
          Puissance: {personnage.puissance} zenith
        </p>
      </div>
    </motion.div>
  );
};

export default Modale;
