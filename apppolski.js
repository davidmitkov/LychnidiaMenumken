document.addEventListener("DOMContentLoaded", function() {
  const menu = [
      {
        img: "images/juice.jpg",
        name: "Napoje Bezalkoholowe",
        id: 0,
      },
      {
        img: "images/pivo3.jpg",
        name: "Piwo",
        id: 1,
      },
      {
        img: "images/wine.jpeg",
        name: "Wino",
        id: 2,
      },
      {
        img: "images/coffee.jpg",
        name: "Kawa i Herbata",
        id: 3,
      },
      {
        img: "images/rakija.jpg",
        name: "RAKIJA",
        id: 4,
      },
      {
        img: "images/jack.jpg",
        name: "Napoje Alkoholowe",
        id: 5,
      },
      {
        img: "images/sopska.jpg",
        name: "Sałatki",
        id: 6,
      },
      {
        "img": "images/daski.png",
        "name": "DESKI",
        "id": 7
      },      
      {
        img: "images/breakfast.jpg",
        name: "Śniadanie i Brunch",
        id: 8,
      },
      {
        img: "images/mincemeat.jpg",
        name: "Dania z Mięsa Mielonego",
        id: 9,
      },
      {
        img: "images/vealmeat.jpg",
        name: "Dania z Mięsa Cielęcego",
        id: 10,
      },
      {
        img: "images/porkmeat.jpg",
        name: "Dania z Mięsa Wieprzowego",
        id: 11,
      },
      {
        img: "images/chickenmeat.jpg",
        name: "Dania z Mięsa Kurczaka",
        id: 12,
      },
      {
        img: "images/musaka.jpg",
        name: "TRADYCYJNE DANIA MACEDOŃSKIE",
        id: 13,
      },
      {
        img: "images/pasta.jpg",
        name: "Risotto i Makaron",
        id: 14,
      },
      {
        img: "images/speciality.jpg",
        name: "Specjalności",
        id: 15,
      },
      {
        img: "images/fish.jpg",
        name: "Ryba",
        id: 16,
      },
      {
        img: "images/dessert.jpg",
        name: "Desery",
        id: 17,
      },
      {
        img: "images/peppers.jpg",
        name: "Dodatki",
        id: 18,
      },
      {
        img: "images/cocktails.jpg",
        name: "Koktajle",
        id: 19,
      },
      {
        img: "images/extraoffer.png",
        name: "OFERTA DODATKOWA",
        id: 20,
      },
    ]

  const appElement = document.getElementById('app');

  menu.forEach(option => {
      const menuItem = `
          <div class="col-6 col-md-4">
              <a href="productspl.html?id=${option.id}" class="card">
                  <img src="${option.img}" class="card-img" alt="${option.name}">
                  <div class="card-body">
                      <h5 class="card-title">${option.name}</h5>
                  </div>
              </a>
          </div>
      `;
      appElement.innerHTML += menuItem;
  });
});
