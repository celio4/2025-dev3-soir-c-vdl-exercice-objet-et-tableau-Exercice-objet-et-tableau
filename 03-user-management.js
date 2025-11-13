// Crée une fonction whoIsAdmin qui affiche les noms des utilisateurs qui sont admin
// Elle prend en paramètre un tableau d'objets utilisateurs
// Chaque objet a : nom (string), age (number), estAdmin (boolean)
// La fonction doit retourner un tableau contenant les noms des utilisateurs qui sont admin.

function whoIsAdmin(users) {
  if (!Array.isArray(users) || users.length === 0) return [];
  return users
    .filter(user => user.estAdmin)  // garde uniquement les admins
    .map(user => user.nom);         // récupère leurs noms
}

module.exports = {
  whoIsAdmin,
};




