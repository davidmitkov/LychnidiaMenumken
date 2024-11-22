document.addEventListener("DOMContentLoaded", function() {
  const menu = [
      {
        img: "images/juice.jpg",
        name: "Frisdranken",
        id: 0,
      },
      {
        img: "images/beer.jpeg",
        name: "Bier",
        id: 1,
      },
      {
        img: "images/wine.jpeg",
        name: "Wijn",
        id: 2,
      },
      {
        img: "images/coffee.jpg",
        name: "Koffie en Thee",
        id: 3,
      },
      {
        img: "images/alcochol.jpg",
        name: "Alcoholische Dranken",
        id: 4,
      },
      {
        img: "images/salad.jpg",
        name: "Salades",
        id: 5,
      },
      {
        img: "images/foodboard.jpg",
        name: "Plankgerechten",
        id: 6,
      },
      {
        img: "images/breakfast.jpg",
        name: "Ontbijt en Brunch",
        id: 7,
      },
      {
        img: "images/mincemeat.jpg",
        name: "Gerechten met Gehakt",
        id: 8,
      },
      {
        img: "images/vealmeat.jpg",
        name: "Kalfsvlees Gerechten",
        id: 9,
      },
      {
        img: "images/porkmeat.jpg",
        name: "Varkensvlees Gerechten",
        id: 10,
      },
      {
        img: "images/chickenmeat.jpg",
        name: "Kipgerechten",
        id: 11,
      },
      {
        img: "images/tavafood.jpg",
        name: "Tava Gerechten",
        id: 12,
      },
      {
        img: "images/burger.jpg",
        name: "Burgers",
        id: 13,
      },
      {
        img: "images/pasta.jpg",
        name: "Risotto en Pasta",
        id: 14,
      },
      {
        img: "images/speciality.jpg",
        name: "Specialiteiten",
        id: 15,
      },
      {
        img: "images/fish.jpg",
        name: "Vis",
        id: 16,
      },
      {
        img: "images/dessert.jpg",
        name: "Desserts",
        id: 17,
      },
      {
        img: "images/peppers.jpg",
        name: "Toevoegingen",
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
                <a href="productsholland.html?id=${option.id}" class="card">
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
