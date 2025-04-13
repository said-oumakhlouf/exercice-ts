function Boucles() {
  const notes: number[] = [12, 5, 17, 9, 14, 7, 16, 10, 8];
  let total = 0;
  let moyenne = 0;
  let nbAvecMoyenne = 0;

  // Affichage des notes
  for (const note of notes) {
    console.log(`Note : ${note}`);

    // Comptage des élèves avec la moyenne
    if (note >= 10) {
      nbAvecMoyenne++;
    }

    // Affichage "Bravo" pour ceux qui ont 15 ou +
    if (note >= 15) {
      console.log(`Bravo à l'élève avec ${note} !`);
    }

    // Addition pour la moyenne
    total += note;
  }

  moyenne = total / notes.length;

  return (
    <div>
      <p>{`Notes : ${notes.join(", ")}`}</p>
      <p>{`La moyenne de la classe est de : ${moyenne.toFixed(2)}`}</p>
      <p>{`Nombre d'élèves avec la moyenne : ${nbAvecMoyenne}`}</p>
    </div>
  );
}

export default Boucles;
