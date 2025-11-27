document.addEventListener("DOMContentLoaded", function() {
  const menu = [
      {
        img: "images/juice.jpg",
        name: "Frisdranken",
        id: 0,
      },
      {
        img: "images/pivo3.jpg",
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
        img: "images/rakija.jpg",
        name: "RAKIJA",
        id: 4,
      },
      {
        img: "images/jack.jpg",
        name: "Alcoholische Dranken",
        id: 5,
      },
      {
        img: "images/sopska.jpg",
        name: "Salades",
        id: 6,
      },
      {
        "img": "images/daski.png",
        "name": "PLANKEN",
        "id": 7
      },      
      {
        img: "images/breakfast.jpg",
        name: "Ontbijt en Brunch",
        id: 8,
      },
      {
        img: "images/mincemeat.jpg",
        name: "Gerechten met Gehakt",
        id: 9,
      },
      {
        img: "images/vealmeat.jpg",
        name: "Kalfsvlees Gerechten",
        id: 10,
      },
      {
        img: "images/porkmeat.jpg",
        name: "Varkensvlees Gerechten",
        id: 11,
      },
      {
        img: "images/chickenmeat.jpg",
        name: "Kipgerechten",
        id: 12,
      },
      {
        img: "images/tavafood.jpg",
        name: "Tava Gerechten",
        id: 13,
      },
      {
        img: "images/musaka.jpg",
        name: "MACEDONISCHE TRADITIONELE GERECHTEN",
        id: 14,
      },
      {
        img: "images/pasta.jpg",
        name: "Risotto en Pasta",
        id: 15,
      },
      {
        img: "images/speciality.jpg",
        name: "Specialiteiten",
        id: 16,
      },
      {
        img: "images/fish.jpg",
        name: "Vis",
        id: 17,
      },
      {
        img: "images/dessert.jpg",
        name: "Desserts",
        id: 18,
      },
      {
        img: "images/peppers.jpg",
        name: "Toevoegingen",
        id: 19,
      },
      {
        img: "images/cocktails.jpg",
        name: "Cocktails",
        id: 20,
      },
      {
        img: "images/extraoffer.png",
        name: "EXTRA AANBIEDING",
        id: 21,
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
