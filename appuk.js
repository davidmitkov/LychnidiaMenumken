document.addEventListener("DOMContentLoaded", function() {
    const menu = [
        {
          img: "images/juice.jpg",
          name: "Soft Drinks",
          id: 0,
        },
        {
          img: "images/pivo3.jpg",
          name: "Beer",
          id: 1,
        },
        {
          img: "images/wine.jpeg",
          name: "Wine",
          id: 2,
        },
        {
          img: "images/coffee.jpg",
          name: "Coffee and Tea",
          id: 3,
        },
        {
          img: "images/rakija.jpg",
          name: "RAKIJA",
          id: 4,
        },
        {
          img: "images/jack.jpg",
          name: "Alcoholic Drinks",
          id: 5,
        },
      
        {
          img: "images/sopska.jpg",
          name: "Salads",
          id: 6,
        },
        {
          "img": "images/daski.png",
          "name": "BOARDS",
          "id": 7
        },        
       
        {
          img: "images/breakfast.jpg",
          name: "Breakfast and Brunch",
          id: 8,
        },
        {
          img: "images/mincemeat.jpg",
          name: "Minced Meat Dishes",
          id: 9,
        },
        {
          img: "images/vealmeat.jpg",
          name: "Veal Meat Dishes",
          id: 10,
        },
        {
          img: "images/porkmeat.jpg",
          name: "Pork Meat Dishes",
          id: 11,
        },
        {
          img: "images/chickenmeat.jpg",
          name: "Chicken Meat Dishes",
          id: 12,
        },
        {
          img: "images/tavafood.jpg",
          name: "Tava Dishes",
          id: 13,
        },
        {
          img: "images/musaka.jpg",
          name: "Traditional macedonian foods",
          id: 14,
        },
        {
          img: "images/pasta.jpg",
          name: "Risotto and Pasta",
          id: 15,
        },
        {
          img: "images/speciality.jpg",
          name: "Specialities",
          id: 16,
        },
        {
          img: "images/fish.jpg",
          name: "Fish",
          id: 17,
        },
        {
          img: "images/dessert.jpg",
          name: "Desserts",
          id: 18,
        },
        {
          img: "images/peppers.jpg",
          name: "Additives",
          id: 19,
        },
        {
          img: "images/cocktails.jpg",
          name: "Cocktails",
          id: 20,
        },
        {
          img: "images/extraoffer.png",
          name: "EXTRA OFFER",
          id: 21,
        },
      ]

    const appElement = document.getElementById('app');

    menu.forEach(option => {
        const menuItem = `
            <div class="col-6 col-md-4">
                <a href="productsuk.html?id=${option.id}" class="card">
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
