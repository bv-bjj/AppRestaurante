console.log("hola");
    
    let dishesFiltered = "";

    function filtercategory (categoryFood) {
        dishesFiltered = "";
        for (let indice = 0; indice < arraydishes.length; indice++) {
            if(categoryFood === arraydishes[indice].categoryFood){

            dishesFiltered+= `<div class="info-dish">
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
    }
    document.querySelector(".dishes").innerHTML = dishesFiltered;
}








