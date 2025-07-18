document.addEventListener("DOMContentLoaded", function() {
    const menu = [
      {
        img: "images/juice.jpg",
        name: "Alkolsüz İçecekler",
        id: 0,
      },
      {
        img: "images/beer.jpeg",
        name: "Bira",
        id: 1,
      },
      {
        img: "images/wine.jpeg",
        name: "Şarap",
        id: 2,
      },
      {
        img: "images/coffee.jpg",
        name: "Kahve ve Çay",
        id: 3,
      },
      {
        img: "images/alcochol.jpg",
        name: "Alkollü İçecekler",
        id: 4,
      },
      {
        img: "images/salad.jpg",
        name: "Salatalar",
        id: 5,
      },
      {
        img: "images/breakfast.jpg",
        name: "Kahvaltı ve Brunch",
        id: 6,
      },
      {
        img: "images/mincemeat.jpg",
        name: "Kıyma Yemekleri",
        id: 7,
      },
      {
        img: "images/vealmeat.jpg",
        name: "Dana Eti Yemekleri",
        id: 8,
      },
      {
        img: "images/porkmeat.jpg",
        name: "Domuz Eti Yemekleri",
        id: 9,
      },
      {
        img: "images/chickenmeat.jpg",
        name: "Tavuk Eti Yemekleri",
        id: 10,
      },
      {
        img: "images/tavafood.jpg",
        name: "Tava Yemekleri",
        id: 11,
      },
      {
        img: "images/burger.jpg",
        name: "Burgerler",
        id: 12,
      },
      {
        img: "images/pasta.jpg",
        name: "Risotto ve Makarna",
        id: 13,
      },
      {
        img: "images/speciality.jpg",
        name: "Uzmanlık Yemekleri",
        id: 14,
      },
      {
        img: "images/fish.jpg",
        name: "Balık",
        id: 15,
      },
      {
        img: "images/dessert.jpg",
        name: "Tatlılar",
        id: 16,
      },
      {
        img: "images/peppers.jpg",
        name: "Ekstralar",
        id: 17,
      },
      {
        img: "images/cocktails.jpg",
        name: "Kokteyller",
        id: 18,
      },
    ]
    

    const appElement = document.getElementById('app');

    menu.forEach(option => {
        const menuItem = `
            <div class="col-6 col-md-4">
                <a href="productsturkey.html?id=${option.id}" class="card">
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
