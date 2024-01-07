/*------------------ carte --------------------*/

const countriesData = {
    "AL": { name: "Albanie", price: 2.57  },
    "AD": { name: "Andorre", price: 4.0  },
    "AM": { name: "Aménie", price: 1.23  },
    "AT": { name: "Autriche", price: 5.50 },
    "BE": { name: "Belgique", price: 6.7  },
    "BG": { name: "Bulgarie", price: 2.96  },
    "BA": { name: "Bosnie Herzegonvine", price: 2.88  },
    "BY": { name: "Biélorussie", price: 1.27  },
    "CH": { name: "Suisse", price: 7.9  },
    "CZ": { name: "Républic Tchèque", price: 4.03  },
    "DE": { name: "Allemagne", price: 6.5  },
    "DK": { name: "Danemark", price: 6.05  },
    "EE": { name: "Estonie", price: 4.5  },
    "FI": { name: "Finlande", price: 8.0  },
    "GB": { name: "Royaume Uni", price: 12.28 },
    "GE": { name: "Géorgie", price: 1.78 },
    "GR": { name: "Grèce", price: 4.60  },
    "HR": { name: "Croatie", price: 3.98  },
    "HU": { name: "Hongrie", price: 4.07  },
    "IE": { name: "Irlande", price: 13.50  },
    "IS": { name: "Islande", price: 8.92  },
    "IT": { name: "Italie", price: 5.5  },
    "LI": { name: "Lichtenstein", price: 8.37  },
    "LT": { name: "Lituanie", price: 3.95  },
    "LU": { name: "Luxemborug", price: 4.80  },
    "LV": { name: "Lettonie", price: 4.0 },
    "MD": { name: "Moldavie", price: 1.66  },
    "MK": { name: "Macédoine du nord", price: 2.26  },
    "ME": { name: "Monténégro", price: 3.20 },
    "NO": { name: "Norvège", price: 11.89 },
    "PL": { name: "Pologne", price: 3.86 },
    "RO": { name: "Roumanie", price: 4.13 },
    "RS": { name: "Serbie", price: 2.96 },
    "SK": { name: "Slovaquie", price: 3.99 },
    "SI": { name: "Slovénie", price: 4.10 },
    "SE": { name: "Suède", price: 6.30 },
    "TR": { name: "Turquie", price: 2.05 },
    "UA": { name: "Ukraine", price: 1.44 },
    // "XK": { name: "Kosova", name: "" },
    "NL": { name: "Pays bas", price: 8.00 },
    "ES": { name: "Espagne", price: 5.00 },
    "FR": { name: "France", price: 10.0 },
    "PT": { name: "Portugal", price: 5.00 },
    "CY": { name: "Chypre", price: 4.9 },

  };
  
  let previousCountry = null;
  const europeMap = document.getElementById('europe-map');
  const tooltip = document.getElementById('tooltip');
  
  europeMap.addEventListener('mousemove', function(e) {
    const countryID = e.target.id;
    const country = countriesData[countryID];
  
    if (country) {
      const { name, price } = country;
      tooltip.innerHTML = `${name}: ${price} €`;
      tooltip.style.top = `${e.pageY}px`;
      tooltip.style.left = `${e.pageX}px`;
      tooltip.classList.add('visible');
  
      if (previousCountry && previousCountry !== e.target) {
        previousCountry.style.fill = ''; // Réinitialise la couleur de l'ancien pays
      }
  
      e.target.style.fill = 'black'; // Change la couleur du pays survolé en bleu
      previousCountry = e.target;
    } else {
      tooltip.classList.remove('visible');
    }
  });
  
  const countries = document.querySelectorAll('path:not(.g1):not(.g2):not(.g3):not(.g4):not(.g5):not(.g6):not(.forma)');

  countries.forEach(country => {
      country.addEventListener('mouseenter', function() {
          this.style.fill = 'black'; // Change la couleur du pays au survol en bleu
      });
  
      country.addEventListener('mouseleave', function() {
          this.style.fill = ''; // Rétablit la couleur initiale du pays après le survol
      });
  });
  
  

  
  europeMap.addEventListener('mouseleave', function() {
    if (previousCountry) {
      previousCountry.style.fill = ''; // Réinitialise la couleur lorsque le curseur quitte la carte
      previousCountry = null;
    }
  });



/*------------------------------------ cigarette ----------------------------------*/
  $(function(){
  
  });