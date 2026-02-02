// Récupération des tâches depuis le localStorage au démarrage
var todos = JSON.parse(localStorage.getItem('todos') || '[]');
// Sélection des éléments du DOM
var input = document.querySelector('.input-group input');
var addBtn = document.getElementById('add-btn');
var list = document.querySelector('.List');
// Fonction pour sauvegarder l'état actuel dans le localStorage
function save() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
// Gérer l'ajout d'une nouvelle tâche au clic sur le bouton
addBtn.addEventListener('click', function () {
    var text = input.value.trim();
    if (text) {
        todos.push({ id: Date.now(), text: text, completed: false });
        input.value = ''; // Vider le champ d'entrée
        save();
        // render();
    }
});
// Permettre d'ajouter une tâche en appuyant sur la touche "Entrée"
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter')
        addBtn.click();
});
// Premier rendu au chargement de la page
// render();
