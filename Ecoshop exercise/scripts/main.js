import {product} from "./product.js";

let data = [new product(1, "Aceite esencial de Clavo", "12ml", 8, null, "El aceite esencial de clavo es conocido por sus increíbles propiedades antimicrobianas, antimicóticas, antisépticas, antivirales, afrodisíacas y estimulantes. Perfecto para utilizar en tus mezclas de Cosmética Natural, añadiendo unas cuantas gotas en tu crema corporal o aceite vegetal, conseguirás nutrir y lucir una piel radiante y 100% cuidado.", "../images/1.jpg"), new product(2, "Parches de Oro de 24 kt Rejuvenecedores para Contorno de Ojos", "60uds.", 15.50, [50,3], "Parches de oro de 24 kt rejuvenecedores para contorno de ojos de Natura Siberica. Parches para ojos con efecto rejuvenecedor enriquecidos con oro de 24kt. Su acción descongestiona la piel, la suaviza y mejora su luminosidad.", "../images/2.jpg"), new product(3, "Parches Iluminadores para el Contorno de Ojos", "60uds.", 15.50, null, "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven \n Estos parches iluminadores son una solución rápida y cómoda para darle a tus ojos ese toque de luz y vitalidad que el estrés y la vida urbana les van quitando. Con su base de biome con activo postbiótico único y extractos fermentados de mora de los pantanos norteña y frambuesa silvestre ayudan al microbioma de la piel a aumentar su resistencia y mejorar su luminosidad. La vitamina C presente en su fórmula mejora el tono y la textura del contorno para ayudar a recuperar su brillo natural, y la niacinamida contribuye a fortalecer la barrera de hidratación de la epidermis, dando lugar a un resultado suave, esplendoroso y rejuvenecido.", "../images/3.jpg"), new product(4, "Parches Supertonificantes para Contorno de Ojos", "60uds.", 15.50, null, "Parches supertonificantes para contorno de ojos de Natura siberica. Parches para ojos con efecto tonificante que reducen visiblemente los signos de fatiga en la mirada y le aportan luz y vitalidad al instante. \n Estos parches supertonificantes son la solución definitiva para decir adiós a los signos de fatiga y la hinchazón en el contorno de los ojos. Basados en activo postbiótico único y extractos fermentados de mora de los pantanos norteña y frambuesa silvestre, crean sobre la mirada un efecto iluminador y energizante al instante. La cafeína presente en su fórmula ayuda a tensar las líneas finas y reducir la piel hinchada, mientras que la vitamina E genera un efecto regenerador que deja un aspecto descansado y revitalizado.", "../images/4.jpg"), new product(5, "6 Discos Desmaquillantes de Fibra Natural", "6uds.", 10.50, null, "Eliminan el maquillaje y limpian el rostro con suavidad. Elaborados en algodón y carbón de bambú. De doble cara y función: \n Limpieza diaria: elaborada en algodón ultrasuave es adecuada para productos líquidos. \n Exfoliante: combinación de algodón y carbón de bambú, de propiedades purificantes y desintoxicantes. Indicada para texturas cremosas y densas. \n Incluye 6 discos y una práctica bolsita de algodón para lavarlos ( máx. 30 grados) y guardarlos. No secar en secadora. \n Reúnen ahorro en otros productos de un solo uso (toallitas, discos de algodón) y máximo respeto por el medio ambiente. ", "../images/5.jpg"), new product(6, "Aceite anticelulítico de abedul", "100ml", 22.90, null, "El extracto de hojas de abedul contiene flavonoides y tanines, los cuales sirven para mantener y conservar el metabolismo y circulación de los líquidos en el cuerpo. Su función es dar firmeza, elasticidad y suavidad a la piel, previniendo y mejorando el estado de la misma. Por esta razón, previene y mejora la celulitis. No contiene ni sustancias químicas, ni colorantes, ni conservantes. Es apto para veganos y no está testado en animales.", "../images/6.jpg"), new product(7, "Aceite antiinflamatorio S.O.S Rescate", "30ml", 12.45, null, "Pequeñas heridas, quemaduras, golpes, cicatrices… ¿Cuántos productos diferentes estás usando para paliar estos accidentes? Pues a partir de ahora con uno sólo podrás calmar y regenerar tu piel y la de toda tu familia con S. O. S. Rescate, una extraordinaria mezcla de aceites vegetales y esenciales procedentes de agricultura ecológica.", "../images/7.jpg"), new product(8, "Aceite Bucal de Coco Orgánico Premium", "180ml", 9.60, [30,1], "Oil Pulling de Dr. Goerg. El aceite bucal de coco orgánico premium de Dr. Goerg es fácil de usar y, gracias a sus ingredientes 100 % naturales enriquecidos con aceites esenciales de menta y eucalipto, garantiza una sensación en la boca limpia, agradable y fresca. Nuestro aceite bucal orgánico premium también es 100% vegano y está certificado como cosmético orgánico por Cosmos Organic . Si se usa regularmente antes de cepillarse los dientes, la extracción de aceite puede garantizar un aliento fresco y encías bien cuidadas a largo plazo. Al igual que con todos nuestros productos orgánicos premium, solo utilizamos las mejores materias primas de cultivos exclusivamente sostenibles para nuestro aceite de boca de coco orgánico premium.", "../images/8.jpg"), new product(9, "Aceite corporal blanco siberiano anticelulítico de Natura Siberica", "200ml", 6.95, null, "Este product te trae lo mejor para el cuidado de tu cuerpo gracias a las propiedades de la cera blanca de abeja, los aceites naturales y la schizandra. Regálate lo mejor para tu piel y disfruta de esta combinación que hidratará de forma eficaz las zonas de tu cuerpo que más lo necesite.", "../images/9.jpg"), new product(10, "Aceite corporal Body Sculptor", "",73.70, null, "Aceite corporal que moldea el cuerpo y esculpe la silueta de forma natural y eficaz. Previene el exceso de peso y la retención de líquidos gracias a su acción drenante, activa la microcirculación a la vez que tonifica la piel. Esculpe tu cuerpo realizando tratamientos de forma diaria. Está formulado con aceites vegetales naturales adecuado para pieles sensibles.", "../images/10.jpg"), new product(11, "Aceite corporal de almendras dulces", "500ml", 10.45, null, "El Aceite de Almendras dulces es básico para una hidratación y nutrición de la piel. Puedes utilizarlo en todas las partes de tu cuerpo preferiblemente después de la ducha con la piel húmeda, para ayudar a su absorción llegando a las capas profundas de la piel. Un aceite neutro apto para todo tipo de pieles y edades, utilizándose para toda la familia desde las edades más tempranas. Es ideal como base para formularlo con otros aceites, aceites esenciales y lociones. ", "../images/11.jpg"), new product(12, "Aceite corporal de almendras dulces con dosificador 1L", "1000ml", 14.99, null, "El Aceite de Almendras dulces es básico para una hidratación y nutrición de la piel. Puedes utilizarlo en todas las partes de tu cuerpo preferiblemente después de la ducha con la piel húmeda, para ayudar a su absorción llegando a las capas profundas de la piel. Un aceite neutro apto para todo tipo de pieles y edades, utilizándose para toda la familia desde las edades más tempranas. Es ideal como base para formularlo con otros aceites, aceites esenciales y lociones.", "../images/12.jpg")];
data = data.concat([new product(13, "Aceite corporal de almendras dulces con dosificador 500ml", "500ML", 11.55, null, "El Aceite de Almendras dulces es básico para una hidratación y nutrición de la piel. Puedes utilizarlo en todas las partes de tu cuerpo preferiblemente después de la ducha con la piel húmeda, para ayudar a su absorción llegando a las capas profundas de la piel. Un aceite neutro apto para todo tipo de pieles y edades, utilizándose para toda la familia desde las edades más tempranas. Es ideal como base para formularlo con otros aceites, aceites esenciales y lociones.", "./images/13.jpg"), new product(14, "Aceite Corporal de Granada", "100ML", 22.90, null, "El aceite corporal de granada es de acción antioxidante intensiva que sirve para la regeneración celula, reafirmando y mejorando la elasticidad. Está indicado para pieles secas, maduras y estresadas, pues ayuda a prevenir el envejecimiento prematuro de la piel. Con ingredientes 100% naturales y ecológicos, que otorgan un aroma sensual y dulce. Testado dermatológicamente, no testado en animales. Apto para veganos.", "./images/14.jpg"), new product(15, "Aceite Corporal de Rosa Mosqueta", "100ML", 22.90, null, "La principal acción de la Rosa Mosqueta es la regeneración de la piel y elasticidad, aportando tonicidad a la piel. Combate los primeros signos de envejecimiento de la piel. Este producto combina la acción alisante de la rosa mosqueta con las propiedades hidratantes del aceite de jojoba. Da como resultado un aceite muy nutritivo, de una textura ligera y muy absorvente. Testado dermatológicamente en todo tipo de pieles, pero no en animales. Apto para veganos. De uso diario.", "./images/15.jpg"), new product(16, "Aceite corporal Embellecedor del Busto", "", 81.70, [70,2], "Aceite corporal empleado para moldear y realzar el busto dándole una apariencia de mayor volumen. Hidrata y nutre ayudando a prevenir las estrías de esta zona tan sensible. Utilízalo directamente con ligeros masajes circulares hasta su total absorción. Puedes utilizarlo de forma diaria, para mejores resultados te aconsejamos de dos a tres aplicaciones al día.", "./images/16.jpg"), new product(17, "Aceite corporal Reafirmante de Tejidos", "", 60, null, "Aceite corporal indispensable para prevenir la pérdida de firmeza de los tejidos y reafirmar las zonas que presentan flacidez. Puedes hidratar tu cuerpo de forma diaria con este aceite y beneficiarte de sus propiedades reafirmantes. Con ingredientes totalmente naturales consigue una hidratación en las capas profundas de la piel.", "./images/17.jpg"), new product(18, "Aceite corporal Reafirmante del Busto", "", 81.70, null, "Aceite corporal específico de tratamiento que reafirma eficazmente el seno caído a la vez que hidrata y suaviza la piel devolviéndole su belleza. El tratamiento natural con este aceite realza el busto para que se muestre más bello. Este aceite está libre de hormonas y otros componentes químicos, se basa en ingredientes naturales con propiedades hidratantes y estimuladoras.", "./images/18.jpg"), new product(19, "Aceite corporal Reina de Egipto", "", 57.30, null, "Aceite corporal de exótica fragancia que nutre en profundidad, combate el envejecimiento cutáneo, regenera y alisa, a la vez que aporta autoestima y confianza. Este aceite es muy usado y recomendado entre nuestros clientes gracias a su versatilidad y eficacia.", "./images/19.jpg"), new product(20, "Aceite daúrico corporal de Natura Siberica", "", 18.95, null, "Relaja tu cuerpo con este fantástico producto con el que podrás disfrutar de momentos únicos. Aceite daúrico corporal es perfecto para pieles secas. Una explosión de sensaciones gracias a su composición que revitalizará tu piel.", "./images/20.jpg"), new product(21, "Aceite de Aguacate corporal", "125ml", 15, null, "El aceite de aguacate actúa un bálsamo perfecto para la piel. Destaca por su efecto nutritivo, protector y regenerante. Indicado para pieles secas, agrietadas y envejecidas. Tiene una excelente penetración y además ayuda a filtrar de forma natural la radiación solar.", "./images/21.jpg"), new product(22, "Aceite de almendras corporal Bio", "125ml", 14.95, null, "Hidrata y nutre tu piel con este aceite de almendras ecológico de primera prensada en frío. Te recomendamos su uso después de la ducha con la piel húmeda, mejora su absorción. Puedes utilizarlo de base para formularlo con otro aceites, aceites esenciales y lociones.", "./images/22.jpg"), new product(23, "Aceite de Argán Bio", "30ml", 12.99, null, "Este aceite vegetal rico en vitaminas y antioxidantes te hará lucir una piel radiante. El aceite de argán te aportará la luminosidad y elasticidad que necesitas para presumir de belleza natural. Ideal para todo tipo de pieles y capaz de nutrir las capas profundas de la piel.", "./images/23.jpg"), new product(24, "Aceite de Argán Bio", "100ml", 25.95, null, "Este aceite vegetal rico en vitaminas y antioxidantes te hará lucir una piel radiante. El aceite de argán te aportará la luminosidad y elasticidad que necesitas para presumir de belleza natural. Ideal para todo tipo de pieles y capaz de nutrir las capas profundas de la piel.", "./images/24.jpg"), new product(25, "Aceite de CBD 5%", "15ml", 20.95, [80,2], "Aceite de semillas de cáñamo con CBD al 5%. Adecuado para el uso diario en personas con dolor crónico o de intensidad alta. El aceite de cáñamo con CBD de Terra Verda es orgánico, vegano y libre de crueldad animal. Su exclusivo método de extracción permite mantener todas las propiedades de la semilla de cáñamo sin trazos de tóxicos ni alcoholes. Puedes usarlo diariamente para aliviar las dolencias articulares o musculares por el dolor crónico, días estresantes o la actividad deportiva.", "./images/25.jpg")]);

let gridContainer = document.getElementsByClassName('gridCatalog');

let favorites = [];
let cart = [];

function displayProduct(product) {

    let card = `<div class="cards">
                    `;
    
    if (product.discount != null){
        card += `<div class="discount">
                <p>-${product.discount[0]}%<br>${product.discount[1]}°und.</p>
                </div>`;
    }
    
    let isFavorite = false;

    for (const favProduct of favorites){
        if (favProduct.id == product.id){
            isFavorite = true;
            break;
        }
    }

    card += `   <div class="optionsProduct">
                    <button class="btn addFavorites">`;

    if (isFavorite){
        card += `<i class="bi bi-heart-fill"></i>`;
    }else{
        card += `<i class="bi bi-heart"></i>`;
    }

    card += `       </button>
                </div>

                <p class="productInfoValue">${product.id}</p>

                <img src="${product.image}" class="cardImg" alt="">
                    
                <div class="cardContent">
                        
                    <div class="titleProduct">
                        <h5>${product.productName}</h5>
                    </div>
                    
                    <div class="units">
                        <p>${product.detail}</p>
                    </div>

                    <div class="price">
                        <p>${product.price}<i class="bi bi-currency-euro iconGreen"></i></p>                         
                    </div>

                    <button type="button" class="addCart">
                        <i class="bi bi-basket3 bagIcon">   Añadir a la cesta</i>
                    </button>
                </div>

            </div>`;

    gridContainer[0].innerHTML += card;
}

function displayPage(pageNumber, displayArrData){

    let loopStart = (pageNumber - 1) * 12;
    let loopFinish = pageNumber * 12;

    if (loopFinish > displayArrData.length){
        loopFinish = displayArrData.length;
    }

    for (let i=loopStart; i < loopFinish; i++){
        displayProduct(displayArrData[i]);
    }

}

function removeCardsGrid(container){
    
    let child = container[0].lastElementChild;

    while (child) {
        container[0].removeChild(child);
        child = container[0].lastElementChild;
    }
}

function addFavorites(){

    const favoriteButton = document.getElementsByClassName('addFavorites');

    for (const button of favoriteButton){

        button.addEventListener("click", (event) =>{
            
            let productIdentificator = event.target.parentElement.parentElement.nextElementSibling.innerText;

            if (event.target.className != 'bi bi-heart-fill'){
                
                for (const product of data){
                    if (product.id == productIdentificator){         
                        favorites.push(product);
                        event.target.className = "bi bi-heart-fill";    
                    }
                }
            }
            else{

                for (let i = 0; i < favorites.length; i++){
                    if (favorites[i].id == productIdentificator){
                        favorites.splice(i, 1);
                        event.target.className = "bi bi-heart";
                        break;         
                    }
                }
            }
        });
    }
}

let count = 0;

function addCart(){

    const cartButton = document.getElementsByClassName('addCart');
    const cartCount = document.getElementsByClassName('cartCount')[0];
    
    for (const button of cartButton){

        button.addEventListener('click', (event) => {

            let productIdentificator;

            if (event.target.className =="bi bi-basket3 bagIcon"){
                productIdentificator = event.target.parentElement.parentElement.previousElementSibling.previousElementSibling.innerText;
            }else{
                productIdentificator = event.target.parentElement.previousElementSibling.previousElementSibling.innerText;
            }

            for (const product of data){
                if (product.id == productIdentificator){         
                    cart.push(product);

                    if (count == 0){
                        cartCount.style.display = "block";
                    }
        
                    count += 1
                    cartCount.innerText = count;
                    console.log(cart);
                }
            }
        });
    }
}

let initPageNumber;
let limitPageNumber;

function pagination(pageNumber, displayArrData){

    displayPage(pageNumber, displayArrData);

    let paginationQuantity = Math.ceil(displayArrData.length / 12);

    let j = initPageNumber - 1;
    let paginationDiv = document.createElement("div");
    paginationDiv.classList.add("pagination");

    let initPageNumberCopy = initPageNumber;

    do{
        j += 1;

        let buttonPagination = document.createElement("button");
        buttonPagination.classList.add("btn");
        buttonPagination.innerHTML = j;

        if (initPageNumberCopy > 5){
            buttonPagination.innerHTML = "&lt;";
            initPageNumberCopy = 0;
            j -= 1;
        }
        
        if (j > limitPageNumber){
            buttonPagination.innerHTML = "&gt;";
        }
        
        if (j == pageNumber){
            buttonPagination.classList.add("active");
        }

        buttonPagination.addEventListener('click', function () {

            let buttonPaginationContent = buttonPagination.innerHTML;

            removeCardsGrid(gridContainer);

            if (buttonPaginationContent == "&gt;"){

                initPageNumber = limitPageNumber + 1;

                if (limitPageNumber + 5 > paginationQuantity){
                    limitPageNumber = paginationQuantity;
                }else{
                    limitPageNumber += 5;
                }
                console.log(limitPageNumber);
                pagination(initPageNumber, displayArrData);
            }
            else if (buttonPaginationContent == "&lt;"){
                
                limitPageNumber = initPageNumber - 1;
                initPageNumber = initPageNumber - 5;

                pagination(limitPageNumber, displayArrData);

            }else{

                pageNumber =  parseInt(buttonPagination.innerHTML);
                pagination(pageNumber, displayArrData);
            }
        });

        paginationDiv.appendChild(buttonPagination);

    }while(paginationQuantity > j && j <= limitPageNumber)

    gridContainer[0].appendChild(paginationDiv);
    addFavorites();
    addCart();
}

function btnsAction(){

    const btnInit = document.getElementsByClassName('btnInit')[0];
    
    btnInit.addEventListener("click", () => {
        removeCardsGrid(gridContainer);
        pagination(1, data);
    });

    const btnShowFavorites = document.getElementsByClassName('btnShowFavorites')[0];

    btnShowFavorites.addEventListener("click", () => {
        removeCardsGrid(gridContainer);
        if (favorites.length != 0){
            pagination(1, favorites);
        }else{
            gridContainer[0].innerHTML = `<p class="notFound">No se encontraron resultados para tu búsqueda.</p>`;
        }
    });

    const btnShowCart = document.getElementsByClassName('btnShowCart')[0];
    const modalCart = document.getElementsByClassName('modalCart')[0];

    btnShowCart.addEventListener("click", () => {

        modalCart.style.display = "block";

        displayProductCart();

        const btnClose = document.getElementsByClassName('close')[0];

        btnClose.addEventListener("click", () =>{
            modalCart.style.display = "none";
        });
          
        window.addEventListener("click", (event) =>{
            if (event.target == modalCart || event.target.className == "closeIcon bi bi-x-lg") {
                modalCart.style.display = "none";
            }
        });

        const quantityInput = document.getElementsByClassName('quantity');
        const subtotalPrice = document.getElementsByClassName('subtotalPrice')[0];
        const totalPrice = document.getElementsByClassName('totalPrice')[0];

        for (let input of quantityInput){

            input.addEventListener("keyup", ()=>{

                if (input.value != ''){

                    const productIdentificator = input.parentElement.previousSibling.previousSibling.previousSibling.previousSibling;
                    let price = 0;
    
                    for (const product of cart){
                        if (product.id == productIdentificator.innerText){
                            price = product.price;
                        }
                    }
    
                    const priceLabel = input.parentElement.nextSibling.nextSibling;
                    priceLabel.innerHTML = (price * parseFloat(input.value)).toFixed(2) + `<i class="bi bi-currency-euro"></i>`;
                    
                    const productPrice = document.getElementsByClassName('productPrice');
                    let finalPrice = 0;

                    for (const price of productPrice){
                        finalPrice += parseFloat(price.innerText);
                    }

                    //const finalPrice = (parseFloat(subtotalPrice.innerText) + (price * (parseFloat(input.value) - 1))).toFixed(2)
                    subtotalPrice.innerHTML = finalPrice + `<i class="bi bi-currency-euro"></i>`;
                    totalPrice.innerHTML = finalPrice + `<i class="bi bi-currency-euro"></i>`;

                    const messageDeliver = document.getElementsByClassName('messageDeliver')[0];
                    
                    if (finalPrice > 50){
                        messageDeliver.style.display = "none";
                    }else{
                        messageDeliver.innerHTML = `Te faltan ${50 - finalPrice}<i class="bi bi-currency-euro"></i> para disfrutar del envío gratuito.`;
                    }
                }
            });
        }

        removeProductCart();
    });

    const searchSubmit = document.getElementsByClassName('searchSubmit')[0];

    searchSubmit.addEventListener("click", () =>{
        const searchInput = document.getElementsByClassName('searchProduct')[0];
        const value  = searchInput.value;
    
        const searchQuery = value.toLowerCase();
    
        let matchProducts = []
    
        for (const product of data) {
    
            let productName = product.productName.toLowerCase();
    
            if (productName.includes(searchQuery)) {
    
                matchProducts.push(product);
            }
        }
    
        searchInput.value = "";

        removeCardsGrid(gridContainer);

        if (matchProducts.length != 0){
            pagination(1, matchProducts);
        }else{
            gridContainer[0].innerHTML = `<p class="notFound">No se encontraron resultados para tu búsqueda.</p>`;
        }
    });
}

function getMinMaxPrice(){

    let min = data[0].price;
    let max = data[0].price;

    for (let i=1; i < data.length; i++){

        let value = data[i].price;

        if (value > max){
            max = value;
        }
        else if (value < min){
            min = value;
        }
    }

    return [min, max];
}

function filter(){

    let minMax = getMinMaxPrice();

    const slider = document.getElementsByClassName('inputRange')[0];

    slider.setAttribute("min", minMax[0]);
    slider.setAttribute("max", minMax[1]);
    slider.value = (minMax[0] + minMax[1]) / 2;

    const lowerInput = document.getElementsByClassName("lowerRange")[0];
    const upperInput = document.getElementsByClassName("upperRange")[0];

    let selectedInput = lowerInput;
    
    slider.addEventListener("change", () =>{
        selectedInput.setAttribute('value', slider.value);
    });

    lowerInput.addEventListener("keyup", () =>{
        slider.value = lowerInput.value;
    });

    lowerInput.addEventListener("click", () =>{
        slider.value = lowerInput.value;
        selectedInput = lowerInput;
    });

    upperInput.addEventListener("keyup", () =>{
        slider.value = upperInput.value;
    });

    upperInput.addEventListener("click", () =>{
        slider.value = upperInput.value;
        selectedInput = upperInput;
    });

    const filterSubmit = document.getElementsByClassName('filterSubmit')[0];

    filterSubmit.addEventListener("click", () =>{

        const lower = lowerInput.value;
        const upper = upperInput.value;

        let matchProducts = [];
    
        for (const product of data){
            if (product.price >= lower && product.price <= upper){
                matchProducts.push(product);
            }
        }

        lowerInput.value = "";
        upperInput.value = "";
        slider.value = (minMax[0] + minMax[1]) / 2;

        removeCardsGrid(gridContainer);

        if (matchProducts.length != 0){
            pagination(1, matchProducts);
        }
        else{
            gridContainer[0].innerHTML = `<p class="notFound">No se encontraron resultados para tu búsqueda.</p>`;
        }
    });
}


function displayProductCart() {

    let modalContent = document.getElementsByClassName("modalContent");

    removeCardsGrid(modalContent);

    let card = `<header class="headerModalCart">
                    <button class="close"><i class="closeIcon bi bi-x-lg"></i></button>
                    <h6>MI CARRITO (${cart.length})</h6>
                </header>`

    let totalPrice = 0;

    for (const product of cart){

        card += `<div class="product">   
                    <img class="productImage" src="${product.image}">
                    <p class="productTitle">${product.productName.toUpperCase()}</p>
                    <button class="removeProduct"><i class="remove bi bi-x-lg"></i></button>
                    <p class="productInfoValue">${product.id}</p>
                    <p class="productDetails">${product.detail}</p>
                    <label class="labelQuantity">Cantidad: <input class="quantity" value="1"> </label>
                    <p class="productPrice">${product.price}<i class="bi bi-currency-euro"></i></p>
                </div>`

        totalPrice += product.price;
    }

    card += `   <div class="summary">
                    <p class="subtotalLabel">Subtotal</p>
                    <p class="subtotalPrice">${totalPrice.toFixed(2)}<i class="bi bi-currency-euro"></i></p>
                </div>

                <div class="summary">
                    <p class="totalLabel"> <span class="main">TOTAL</span> <span class="sub">(IVA incluido)</span></p>
                    <p class="totalPrice">${totalPrice.toFixed(2)}<i class="bi bi-currency-euro"></i></p>
                </div>

                <div class="infoCart">`;

    if (totalPrice < 50){
        card += `   <p class='messageDeliver'>Te faltan ${50 - totalPrice}<i class="bi bi-currency-euro"></i> para disfrutar del envío gratuito.</p>`;
    }

    card += `       <button class="btnCart goCart">Ir al carrito</button>
                    <button class="btnCart submitCart">Realizar pedido</button>
                </div>`;

    modalContent[0].innerHTML += card;
}

function removeProductCart(){

    const removeProduct = document.getElementsByClassName('removeProduct');

        for (const cartProduct of removeProduct){

            cartProduct.addEventListener("click", (event) =>{

                let productIdentificator;

                if (event.target.className == "remove bi bi-x-lg"){
                    productIdentificator = event.target.parentElement.nextElementSibling.innerText;
                }else{
                    productIdentificator = event.target.nextElementSibling.innerText;
                }

                for (let i = 0; i < cart.length; i++){
                    if (cart[i].id == productIdentificator){
                        cart.splice(i, 1);
                        break;         
                    }
                }

                displayProductCart();
                removeProductCart();

                const cartCount = document.getElementsByClassName('cartCount')[0];
                
                count -= 1;
                cartCount.innerText = count;
            });
        }

}

function main(){

    let startPage = 1;
    
    initPageNumber = 1;
    limitPageNumber = 5;

    pagination(startPage, data);
    btnsAction();
    filter();
}

main();