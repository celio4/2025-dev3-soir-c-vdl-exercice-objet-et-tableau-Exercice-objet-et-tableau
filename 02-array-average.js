// Crée un tableau `notes` contenant 5 nombres
const notes = [12, 8, 15, 10, 9];

// Écrire une fonction averageNote avec `notes` comme paramètre qui effectue les opérations suivantes :
// - Calcule la moyenne des notes
// - retourne un message "Réussi" si la moyenne est >= 10, sinon "Échoué"

function averageNote(notes) {
  // Vérifie que le tableau n'est pas vide
  if (!notes || notes.length === 0) {
    return "Échoué";
  }

  // Calcule la somme de toutes les notes
  const somme = notes.reduce((total, note) => total + note, 0);

  // Calcule la moyenne
  const moyenne = somme / notes.length;

  // Retourne le message selon la moyenne
  return moyenne >= 10 ? "Réussi" : "Échoué";
}

module.exports = {
  averageNote,
};




