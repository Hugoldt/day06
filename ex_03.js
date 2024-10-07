function ajouterVoiture(agent, marque, modele, couleur, puissance) {
    if (marque && typeof marque !== 'string') {
        console.error('Marque mal saisie');
        return null;
    }
    if (modele && typeof modele !== 'string') {
        console.error('Modèle mal saisie');
        return null;
    }
    if (agent && typeof agent !== 'object') {
        console.error('Agent mal saisie'); 
    }
    if (couleur && typeof couleur !== 'string') {
        console.error('Couleur mal saisie');
        return null;
    }
    if (puissance && typeof puissance !== 'string') {
        console.error('Puissance mal saisie');
        return null;
    }
    agent.voiture = {
        modele: modele,
        marque: marque,
        couleur: couleur,
        puissance: puissance
    };
    
    return agent; 
    const monAgent = {
    prenom: 'James',
    nom: 'Bond',
    age: 45,
    localisation: 'Londres'
    }};
const agentMisAJour = ajouterVoiture(monAgent, 'Aston Martin', 'DB5', 'Argent', '280 chevaux');
shareThatBeauty(agentMisAJour);