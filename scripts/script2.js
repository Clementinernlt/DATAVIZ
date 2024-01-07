const circles = document.querySelectorAll('circle');

circles.forEach(circle => {
    const originalRadius = circle.getAttribute('r'); // Enregistrer la taille d'origine du cercle
    
    circle.addEventListener('mouseover', function(event) {
        const hoveredCircle = event.target;
        const price = hoveredCircle.getAttribute('price');

        if (price) {
            hoveredCircle.setAttribute('r', originalRadius * 1.5);
            
            const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            textElement.setAttribute('x', hoveredCircle.getAttribute('cx') - 380);
            textElement.setAttribute('y', hoveredCircle.getAttribute('cy') - 140);
            textElement.setAttribute('class', 'circle-text');
            textElement.textContent = price;
            hoveredCircle.parentNode.appendChild(textElement);
        }
    });

    circle.addEventListener('mouseover', function(event) {
      const hoveredCircle = event.target;
      const prica = hoveredCircle.getAttribute('prica');

      if (prica) {
          hoveredCircle.setAttribute('r', originalRadius * 1.5); // Augmenter légèrement la taille du cercle au survol
          
          const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          textElement.setAttribute('x', hoveredCircle.getAttribute('cx') - 10);
          textElement.setAttribute('y', hoveredCircle.getAttribute('cy') - 50); // Positionner le texte au-dessus du cercle
          textElement.setAttribute('class', 'circle-text');
          textElement.textContent = prica;
          
          // Ajouter le texte au SVG
          hoveredCircle.parentNode.appendChild(textElement);
      }
  });

    circle.addEventListener('mouseover', function(event) {
      const hoveredCircle = event.target;
      const prico = hoveredCircle.getAttribute('prico');

      if (prico) {
          hoveredCircle.setAttribute('r', originalRadius * 1.5); // Augmenter légèrement la taille du cercle au survol
          
          const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          textElement.setAttribute('x', hoveredCircle.getAttribute('cx') - 50);
          textElement.setAttribute('y', hoveredCircle.getAttribute('cy') - 40); // Positionner le texte au-dessus du cercle
          textElement.setAttribute('class', 'circle-text');
          textElement.textContent = prico;
          
          // Ajouter le texte au SVG
          hoveredCircle.parentNode.appendChild(textElement);
      }
    });


    circle.addEventListener('mouseover', function(event) {
      const hoveredCircle = event.target;
      const prite = hoveredCircle.getAttribute('prite');

      if (prite) {
          hoveredCircle.setAttribute('r', originalRadius * 1.5); // Augmenter légèrement la taille du cercle au survol
          
          const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          textElement.setAttribute('x', hoveredCircle.getAttribute('cx') - 50);
          textElement.setAttribute('y', hoveredCircle.getAttribute('cy') - 40); // Positionner le texte au-dessus du cercle
          textElement.setAttribute('class', 'circle-text');
          textElement.textContent = prite;
          
          // Ajouter le texte au SVG
          hoveredCircle.parentNode.appendChild(textElement);
      }
    });

    circle.addEventListener('mouseover', function(event) {
      const hoveredCircle = event.target;
      const prita = hoveredCircle.getAttribute('prita');

      if (prita) {
          hoveredCircle.setAttribute('r', originalRadius * 1.5); // Augmenter légèrement la taille du cercle au survol
          
          const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          textElement.setAttribute('x', hoveredCircle.getAttribute('cx') - 50);
          textElement.setAttribute('y', hoveredCircle.getAttribute('cy') - 25); // Positionner le texte au-dessus du cercle
          textElement.setAttribute('class', 'circle-text');
          textElement.textContent = prita;
          
          // Ajouter le texte au SVG
          hoveredCircle.parentNode.appendChild(textElement);
      }
    });

    circle.addEventListener('mouseover', function(event) {
      const hoveredCircle = event.target;
      const prito = hoveredCircle.getAttribute('prito');

      if (prito) {
          hoveredCircle.setAttribute('r', originalRadius * 1.5); // Augmenter légèrement la taille du cercle au survol
          
          const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          textElement.setAttribute('x', hoveredCircle.getAttribute('cx') - 70);
          textElement.setAttribute('y', hoveredCircle.getAttribute('cy') - 40); // Positionner le texte au-dessus du cercle
          textElement.setAttribute('class', 'circle-text');
          textElement.textContent = prito;
          
          // Ajouter le texte au SVG
          hoveredCircle.parentNode.appendChild(textElement);
      }
    });

    circle.addEventListener('mouseout', function(event) {
        const hoveredCircle = event.target;
        hoveredCircle.setAttribute('r', originalRadius); // Rétablir la taille d'origine du cercle
        
        const textElements = document.querySelectorAll('.circle-text');
        textElements.forEach(textElement => {
            textElement.parentNode.removeChild(textElement);
        });
    });
});

