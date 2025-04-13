import { useState } from "react";
import { motion } from "framer-motion";

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <button
        onClick={toggle}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {isVisible ? "Cacher le message" : "Afficher le message"}
      </button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {isVisible && (
          <p className="text-lg text-gray-800 font-medium">
            Hello ! Tu as cliqué sur le bouton 👋
          </p>
        )}
      </motion.div>
    </div>
  );
}

export default ToggleMessage;
