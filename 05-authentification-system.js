let baseDeDonnees = [];

function signUp(nom, email, password, passwordConfirm) {
  if (baseDeDonnees.find(u => u.email === email)) {
    return "Erreur: cet email existe déjà";
  }
  if (password !== passwordConfirm) {
    return "Erreur: les mots de passe ne correspondent pas";
  }

  const newUser = {
    id: baseDeDonnees.length + 1,
    nom,
    email,
    password, // exactement ce nom de propriété
    estBloque: false,
    estConnecte: false,
  };

  baseDeDonnees.push(newUser);
  return newUser;
}

function login(email, password) {
  const user = baseDeDonnees.find(u => u.email === email);
  if (!user) return "Erreur: utilisateur non trouvé";
  if (user.password !== password) return "Erreur: mot de passe incorrect";
  if (user.estBloque) return "Erreur: utilisateur bloqué";

  user.estConnecte = true;
  return user;
}

module.exports = { signUp, login, baseDeDonnees };
