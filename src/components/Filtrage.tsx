interface FiltrageProps {
  setSelectedCategory: (category: string) => void;
}

const Filtrage = ({ setSelectedCategory }: FiltrageProps) => {
  return (
    <div className="mb-6">
      <button onClick={() => setSelectedCategory("all")}>Tous</button>
      <button onClick={() => setSelectedCategory("hero")}>Héros</button>
      <button onClick={() => setSelectedCategory("vilain")}>Vilains</button>
    </div>
  );
};

export default Filtrage;
