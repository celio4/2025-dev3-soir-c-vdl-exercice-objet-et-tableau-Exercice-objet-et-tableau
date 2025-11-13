function showStudentBulletin(eleves) {
  // Vérifie que le paramètre est bien un tableau
  if (!Array.isArray(eleves)) {
    return [];
  }

  // Parcourt chaque élève et génère son bulletin
  return eleves.map((eleve) => {
    // S’il n’a pas de notes, on considère une moyenne de 0
    if (!eleve.notes || eleve.notes.length === 0) {
      return {
        nom: eleve.nom,
        moyenne: 0,
        commentaire: "À revoir",
      };
    }

    // Calcul de la moyenne
    const total = eleve.notes.reduce((sum, note) => sum + note, 0);
    const moyenne = parseFloat((total / eleve.notes.length).toFixed(2));

    // Détermination du commentaire selon la moyenne
    let commentaire = "";
    if (moyenne >= 16) commentaire = "Excellent";
    else if (moyenne >= 14) commentaire = "Très Bien";
    else if (moyenne >= 12) commentaire = "Bien";
    else if (moyenne >= 10) commentaire = "Passable";
    else commentaire = "À revoir";

    // Retourne le bulletin de l’élève
    return {
      nom: eleve.nom,
      moyenne,
      commentaire,
    };
  });
}

module.exports = {
  showStudentBulletin,
};
