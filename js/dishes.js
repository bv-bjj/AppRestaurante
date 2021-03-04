let arraydishes = [{
    id: 1,
    imgFood: "./img/gyozas.png",
    priceFood: 4.00,
    nameFood: "Gyoza",
    descriptionFood: "Con carne o verdura",
    quantity: 0,
    categoryFood: "Entrantes",

},

{
    id: 2,
    imgFood: "./img/sopa de miso.png",
    priceFood: 3.00,
    nameFood: "Sopa de miso",
    descriptionFood: "Con apio, zanahoria y soja",
    quantity: 0,
    categoryFood: "Entrantes",

},

{
    id: 3,
    imgFood: "./img/edamame.png",
    priceFood: 3.00,
    nameFood: "Edamame",
    descriptionFood: "Con sal y salsa de romesco",
    quantity: 0,
    categoryFood: "Entrantes",

},

{
    id: 4,
    imgFood: "./img/yakisoba.png",
    priceFood: 6.00,
    nameFood: "Yakisoba",
    descriptionFood: "Con ternera y verdura",
    quantity: 0,
    categoryFood: "Principal",

},

{
    id: 5,
    imgFood: "./img/ramen.png",
    priceFood: 7.00,
    nameFood: "Ramen",
    descriptionFood: "Con huevos, carne y verduras",
    quantity: 0,
    categoryFood: "Principal",

},

{
    id: 6,
    imgFood: "./img/sushi variado.png",
    priceFood: 7.00,
    nameFood: "Sushi variado",
    descriptionFood: "Nigiri de atun y salmon",
    quantity: 0,
    categoryFood: "Principal",

},

{
    id: 7,
    imgFood: "./img/nigiri atun.png",
    priceFood: 6.00,
    nameFood: "Sushi de atun",
    descriptionFood: "Nigiri y maki de atun",
    quantity: 0,
    categoryFood: "Principal",

},

{
    id: 8,
    imgFood: "./img/cocacola.png",
    priceFood: 1.50,
    nameFood: "Coca-cola",
    descriptionFood: "330 ml",
    quantity: 0,
    categoryFood: "Bebidas",

},

{
    id: 9,
    imgFood: "./img/cerveza.png",
    priceFood: 1.50,
    nameFood: "Cerveza",
    descriptionFood: "500 ml",
    quantity: 0,
    categoryFood: "Bebidas",

},

{
    id: 10,
    imgFood: "./img/agua.png",
    priceFood: 1.50,
    nameFood: "Agua",
    descriptionFood: "500 ml",
    quantity: 0,
    categoryFood: "Bebidas",

},

{
    id: 11,
    imgFood: "./img/mochis.png",
    priceFood: 3.00,
    nameFood: "Mochis",
    descriptionFood: "De chocolate, te verde y judias",
    quantity: 0,
    categoryFood: "Postres",

},

{
    id: 12,
    imgFood: "./img/trufas.png",
    priceFood: 2.50,
    nameFood: "Trufas",
    descriptionFood: "De chocolate con leche o blanco",
    quantity: 0,
    categoryFood: "Postres",

},

];

let dishesDiv = "";



function printdishes () {
    
        for (let indice = 0; 
        indice < arraydishes.length; 
        indice++) {

         
        dishesDiv+= `<div class="info-dish">
                        <img class="photo-info-dish" src="${arraydishes[indice].imgFood}">
                        <div class="detail-info-dish">
                            <p class="price-dish">€${arraydishes[indice].priceFood}</p>
                            <h4 class="name-dish">${arraydishes[indice].nameFood}</h4>
                            <p class="subtitle-dish">${arraydishes[indice].descriptionFood}</p>
                            <div class="counter">
                                <button class="counterLeft">-</button>
                                <p class="counter-display">0</p>
                                <button class="counterRight">+</button>
                            </div>
                        </div>
            </div>`;
                       
    }
    

  
    document.querySelector(".dishes").innerHTML = dishesDiv;
   

}

printdishes ();