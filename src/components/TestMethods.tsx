function TestMethods() {
  //   const couleurs: string[] = ["rouge", "vert", "bleu", "jaune", "noir"];

  // Test des différentes méthodes de tableau
  // Méthodes join(), map(), filter(), includes(), slice(), splice(), sort()

  // const couleursAvecE = couleurs.filter((couleur) => couleur.includes("e"));
  // Créer un tableau de noms et afficher chaque nom en majuscules grâce à map().

  const fruits = ["pommes", "banane", "kiwi"];
  fruits.includes("banane"); // true
  fruits.includes("orange"); // false

  const personnes = [
    { prenom: "Jean", nom: "Dupont" },
    { prenom: "Marie", nom: "Durant" },
    { prenom: "Sophie", nom: "Martin" },
  ];

  const prenoms = personnes.map((p) => p.prenom);
  const nomRecherche = "Jean";
  const existe = prenoms.includes(nomRecherche); // true

  const personne = personnes.find((p) => p.prenom === "Sophie");
  console.log(personne); // { prenom: "Sophie", nom: "Martin" }

  const personneTrouvee = personnes.find((p) => p.prenom === "Marie");
  return (
    <div className="mt-4 text-3xl font-bold text-center">
      <h1 className="text-3xl font-bold text-center">TestMethods</h1>
      <p className="text-2xl font-bold text-center">
        {existe
          ? `Le prénom ${nomRecherche} existe dans le tableau.`
          : `Le prénom ${nomRecherche} n'existe pas dans le tableau.`}
      </p>
      <p className="text-lg mt-2">
        {personneTrouvee
          ? `Personne trouvée : ${personneTrouvee.prenom} ${personneTrouvee.nom}`
          : `Aucune personne trouvée !`}
      </p>
    </div>
  );
}
export default TestMethods;
