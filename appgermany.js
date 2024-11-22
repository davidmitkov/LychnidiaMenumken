document.addEventListener("DOMContentLoaded", function() {
  const menu = [
      {
        img: "images/juice.jpg",
        name: "Erfrischungsgetränke",
        id: 0,
      },
      {
        img: "images/beer.jpeg",
        name: "Bier",
        id: 1,
      },
      {
        img: "images/wine.jpeg",
        name: "Wein",
        id: 2,
      },
      {
        img: "images/coffee.jpg",
        name: "Kaffee und Tee",
        id: 3,
      },
      {
        img: "images/alcochol.jpg",
        name: "Alkoholische Getränke",
        id: 4,
      },
      {
        img: "images/salad.jpg",
        name: "Salate",
        id: 5,
      },
      {
        img: "images/foodboard.jpg",
        name: "Essenstafeln",
        id: 6,
      },
      {
        img: "images/breakfast.jpg",
        name: "Frühstück und Brunch",
        id: 7,
      },
      {
        img: "images/mincemeat.jpg",
        name: "Gerichte mit Hackfleisch",
        id: 8,
      },
      {
        img: "images/vealmeat.jpg",
        name: "Gerichte mit Kalbfleisch",
        id: 9,
      },
      {
        img: "images/porkmeat.jpg",
        name: "Gerichte mit Schweinefleisch",
        id: 10,
      },
      {
        img: "images/chickenmeat.jpg",
        name: "Gerichte mit Hühnerfleisch",
        id: 11,
      },
      {
        img: "images/tavafood.jpg",
        name: "Tava-Gerichte",
        id: 12,
      },
      {
        img: "images/burger.jpg",
        name: "Burgers",
        id: 13,
      },
      {
        img: "images/pasta.jpg",
        name: "Risotto und Pasta",
        id: 14,
      },
      {
        img: "images/speciality.jpg",
        name: "Spezialitäten",
        id: 15,
      },
      {
        img: "images/fish.jpg",
        name: "Fisch",
        id: 16,
      },
      {
        img: "images/dessert.jpg",
        name: "Desserts",
        id: 17,
      },
      {
        img: "images/peppers.jpg",
        name: "Beilagen",
        id: 18,
      },
      {
        img: "images/cocktails.jpg",
        name: "Cocktails",
        id: 19,
      },
  ]
    const appElement = document.getElementById('app');

    menu.forEach(option => {
        const menuItem = `
            <div class="col-6 col-md-4">
                <a href="productsgr.html?id=${option.id}" class="card">
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
