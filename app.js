document.addEventListener("DOMContentLoaded", function() {
    const menu = [
        {
          img: "images/juice.jpg",
          name: "НЕГАЗИРАНИ ПИЈАЛОЦИ",
          id: 0,
        },
        {
          img: "images/pivo3.jpg",
          name: "ПИВО",
          id: 1,
        },
        {
          img: "images/wine.jpeg",
          name: "ВИНАРИЈА",
          id: 2,
        },
        {
          img: "images/coffee.jpg",
          name: "КАФЕ И ЧАЈ",
          id: 3,
        },
        {
          img: "images/rakija.jpg",
          name: "РАКИЈА",
          id: 4,
        },
        {
          img: "images/jack.jpg",
          name: "АЛКОХОЛНИ ПИЈАЛОЦИ",
          id: 5,
        },
      
        {
          img: "images/sopska.jpg",
          name: "САЛАТИ",
          id: 6,
        },
        {
          img: "images/daski.png",
          name: "ДАСКИ",
          id: 7,
        },   
        {
          img: "images/breakfast.jpg",
          name: "ПРИЛОЗИ И ДОРУЧЕК",
          id: 8,
        },
        {
          img: "images/mincemeat.jpg",
          name: "ЈАДЕЊА ОД МЕЛЕНО МЕСО",
          id: 9,
        },
        {
          img: "images/vealmeat.jpg",
          name: "ЈАДЕЊА ОД ТЕЛЕШКО МЕСО",
          id: 10,
        },
        {
          img: "images/porkmeat.jpg",
          name: "ЈАДЕЊА ОД СВИНСКО МЕСО",
          id: 11,
        },
        {
          img: "images/chickenmeat.jpg",
          name: "ЈАДЕЊА ОД ПИЛЕШКО МЕСО",
          id: 12,
        },
        {
          img: "images/tavafood.jpg",
          name: "ЈАДЕЊА ВО ТАВА",
          id: 13,
        },
        {
          img: "images/musaka.jpg",
          name: "МАКЕДОНСКИ ТРАДИЦИОНАЛНИ ЈАДЕЊА",
          id: 14,
        },
        {
          img: "images/pasta.jpg",
          name: "РИЖОТО И ПАСТА",
          id: 15,
        },
        {
          img: "images/speciality.jpg",
          name: "ПРЕДЈАДЕЊА",
          id: 16,
        },
        {
          img: "images/fish.jpg",
          name: "РИБА",
          id: 17,
        },
        {
          img: "images/dessert.jpg",
          name: "ДЕСЕРТИ",
          id: 18,
        },
        {
          img: "images/peppers.jpg",
          name: "ДОДАТОЦИ",
          id: 19,
        },
        {
          img: "images/cocktails.jpg",
          name: "КОКТЕЛИ",
          id: 20,
        },
        {
          img: "images/extraoffer.png",
          name: "ЕКСТРА ПОНУДА",
          id: 21,
        },
      ]

    const appElement = document.getElementById('app');

    menu.forEach(option => {
        const menuItem = `
            <div class="col-6 col-md-4">
                <a href="product.html?id=${option.id}" class="card">
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
