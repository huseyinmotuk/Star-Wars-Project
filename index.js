const starwars = [{
        "id": 1,
        "name": "Luke Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
        "homeworld": "tatooine"
    },
    {
        "id": 2,
        "name": "C-3PO",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
        "homeworld": "tatooine"
    },
    {
        "id": 3,
        "name": "R2-D2",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
        "homeworld": "naboo"
    },
    {
        "id": 4,
        "name": "Darth Vader",
        "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
        "homeworld": "tatooine"
    },
    {
        "id": 5,
        "name": "Leia Organa",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
        "homeworld": "alderaan"
    },
    {
        "id": 6,
        "name": "Owen Lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
        "homeworld": "tatooine"
    },
    {
        "id": 7,
        "name": "Beru Whitesun lars",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
        "homeworld": "tatooine"
    },
    {
        "id": 8,
        "name": "R5-D4",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
        "homeworld": "tatooine"
    },
    {
        "id": 9,
        "name": "Biggs Darklighter",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
        "homeworld": "tatooine"
    },
    {
        "id": 10,
        "name": "Obi-Wan Kenobi",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
        "homeworld": "stewjon"
    },
    {
        "id": 11,
        "name": "Anakin Skywalker",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
        "homeworld": "tatooine"
    },
    {
        "id": 12,
        "name": "Wilhuff Tarkin",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
        "homeworld": "eriadu"
    },
    {
        "id": 13,
        "name": "Chewbacca",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
        "homeworld": "kashyyyk"
    },
    {
        "id": 14,
        "name": "Han Solo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
        "homeworld": "corellia"
    },
    {
        "id": 15,
        "name": "Greedo",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
        "homeworld": "Rodia"
    },
    {
        "id": 16,
        "name": "Jabba Desilijic Tiure",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
        "homeworld": "tatooine"
    },
    {
        "id": 18,
        "name": "Wedge Antilles",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
        "homeworld": "corellia"
    },
    {
        "id": 19,
        "name": "Jek Tono Porkins",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
        "homeworld": "bestine"
    },
    {
        "id": 20,
        "name": "Yoda",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
    },
    {
        "id": 21,
        "name": "Palpatine",
        "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
        "homeworld": "naboo"
    }
]

/* Array içindeki homeworld kontrol - nulish coalescing - set ile yeni array oluşturma*/

const homeworldsdRaw = starwars.map(character => character.homeworld ?? 'other');
console.log(homeworldsdRaw);

const homeworldsdUnique = [...new Set(homeworldsdRaw.map(homeworldsdRaw => homeworldsdRaw.toLowerCase()))];
console.log(homeworldsdUnique);

const homeworlds = homeworldsdUnique;
console.log(homeworlds);




/* Other Obje Kontrolü */

starwars.forEach(character => {
    if (!character.homeworld) {
      character.homeworld = 'other';
    }
  });



/*Radio Butonları Kontro Etme Fonksiyonu */


function handleClick(event) {


    const filteredHomeworld = starwars.filter(starwar => starwar?.homeworld?.toLowerCase() === event?.value?.toLowerCase());

           const rowDiv1 = document.querySelector('.cards');
           rowDiv1.remove();

           const newDiv1 = document.createElement('div');
           newDiv1.className = 'cards row mx-4';

           document.body.appendChild(newDiv1);
           const rowDiv2 = document.querySelector('.cards');

           filteredHomeworld.forEach(starwars => {
       const cardHTML = `<div class="col-lg-3">
       <div class="card mb-5 mx-3 border-danger">
           <img class="card-img-top" style="max-height:20rem; object-fit:cover; object-position:top"  src="${starwars.pic}" alt="Card image cap">
           <ul class="list-group list-group-flush">
               <li class="list-group-item">Name: ${starwars.name}</li>
               <li class="list-group-item">Homeworld: ${starwars.homeworld}</li>
           </ul>
       </div></div>`;

       rowDiv2.innerHTML += cardHTML;
   });
} 

let isCharactersVisible = false;

function renderCharacters() {
    // Tüm elemanları temizle
    const existingCardsDiv = document.querySelector('.cards');
    if (existingCardsDiv) {
        existingCardsDiv.remove();
    }

    const existingRadioDiv = document.querySelector('.radio-buttons');
    if (existingRadioDiv) {
        existingRadioDiv.remove();
    }

    /* Radio Butonları Kısmı */

    const forHomeworlds = document.createElement('div');
    forHomeworlds.className = 'radio-buttons row mx-5 my-5';
    document.body.appendChild(forHomeworlds);
    const homeDiv = document.querySelector('.radio-buttons');

    homeworlds.forEach((homeworld, index) => {
        const radioHTML = `
        <div class="col-md"> <div class="form-check">
            <input class="form-check-input" type="radio" name="homeworld" id="homeworld-${homeworld}" onclick="handleClick(this)" value="${homeworld}">
            <label class="form-check-label text-white" for="homeworld-${homeworld}">${homeworld}</label>
        </div></div>`;
        homeDiv.innerHTML += radioHTML;
    });

    /* Kartlar Oluşturma Kısmı */

    const newDiv = document.createElement('div');
    newDiv.className = 'cards row mx-4';
    document.body.appendChild(newDiv);
    const rowDiv = document.querySelector('.cards');

    starwars.forEach(starwars => {
        const cardHTML = `<div class="col-lg-3">
        <div class="card mb-5 mx-3 border-danger">
            <img class="card-img-top" style="max-height:20rem; object-fit:cover; object-position:top" src="${starwars.pic}" alt="Card image cap">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name: ${starwars.name}</li>
                <li class="list-group-item">Homeworld: ${starwars.homeworld}</li>
            </ul>
        </div></div>`;
        rowDiv.innerHTML += cardHTML;
    });

    const button = document.getElementById('butoncontrol');
    const cardsDiv = document.querySelector('.cards');
    const radioButtonsDiv = document.querySelector('.radio-buttons');

    if (isCharactersVisible) {

        if (cardsDiv) {
            cardsDiv.style.display = 'none';
        }
        if (radioButtonsDiv) {
            radioButtonsDiv.style.display = 'none';
        }


        button.classList.remove('red');
        button.textContent = 'Show Characters';
    } else {
   
        if (cardsDiv) {
            cardsDiv.style.display = 'flex';
        }
        if (radioButtonsDiv) {
            radioButtonsDiv.style.display = 'flex';
        }

        
        button.classList.add('red');
        button.textContent = 'Hide Characters';
    }


    isCharactersVisible = !isCharactersVisible;
}


