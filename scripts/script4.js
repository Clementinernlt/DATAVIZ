/*-------------------------------- diagramme ---------------------------------*/
const g1Elements = document.querySelectorAll('path.g1');
const g2Elements = document.querySelectorAll('path.g2');
const g3Elements = document.querySelectorAll('path.g3');
const g4Elements = document.querySelectorAll('path.g4');
const g5Elements = document.querySelectorAll('path.g5');
const g6Elements = document.querySelectorAll('path.g6');

function addTooltipListeners(elements, text) {
    elements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const tooltip = document.getElementById('tooltip'); // Récupérer l'élément tooltip

            tooltip.innerHTML = text; // Définir le texte spécifique pour chaque classe
            tooltip.style.top = `${e.pageY}px`;
            tooltip.style.left = `${e.pageX}px`;
            tooltip.classList.add('visible');
        });

        element.addEventListener('mouseleave', function() {
            const tooltip = document.getElementById('tooltip'); // Récupérer l'élément tooltip
            tooltip.classList.remove('visible'); // Masquer le tooltip au départ du survol
        });
    });
}
addTooltipListeners(g1Elements, '4% Autres maladies');
addTooltipListeners(g2Elements, '29% Cancer des poumons');
addTooltipListeners(g3Elements, '16% Autres cancers');
addTooltipListeners(g4Elements, '17% Maladies cardiaques ischémiques');
addTooltipListeners(g5Elements, '17% Maladies pulmonaires');
addTooltipListeners(g6Elements, '17% Autres maladies cardiovasculaires');
