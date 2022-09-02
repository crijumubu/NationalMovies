import {product} from "./product.js";

let data_principal = [new product(1, "Aceite esencial de Clavo", "12ml", 8, null, "El aceite esencial de clavo es conocido por sus increíbles propiedades antimicrobianas, antimicóticas, antisépticas, antivirales, afrodisíacas y estimulantes. Perfecto para utilizar en tus mezclas de Cosmética Natural, añadiendo unas cuantas gotas en tu crema corporal o aceite vegetal, conseguirás nutrir y lucir una piel radiante y 100% cuidado.", "../images/1.jpg"), new product(2, "Parches de Oro de 24 kt Rejuvenecedores para Contorno de Ojos", "60uds.", 15.50, [50,3], "Parches de oro de 24 kt rejuvenecedores para contorno de ojos de Natura Siberica. Parches para ojos con efecto rejuvenecedor enriquecidos con oro de 24kt. Su acción descongestiona la piel, la suaviza y mejora su luminosidad.", "../images/2.jpg"), new product(3, "Parches Iluminadores para el Contorno de Ojos", "60uds.", 15.50, null, "Parches iluminadores para el contorno de ojos de Natura Siberica. 60 Parches para ojos con efecto iluminador que hidratan la piel del contorno, le devuelven la vitalidad y mejoran su protección para mantenerla joven \n Estos parches iluminadores son una solución rápida y cómoda para darle a tus ojos ese toque de luz y vitalidad que el estrés y la vida urbana les van quitando. Con su base de biome con activo postbiótico único y extractos fermentados de mora de los pantanos norteña y frambuesa silvestre ayudan al microbioma de la piel a aumentar su resistencia y mejorar su luminosidad. La vitamina C presente en su fórmula mejora el tono y la textura del contorno para ayudar a recuperar su brillo natural, y la niacinamida contribuye a fortalecer la barrera de hidratación de la epidermis, dando lugar a un resultado suave, esplendoroso y rejuvenecido.", "../images/3.jpg"), new product(4, "Parches Supertonificantes para Contorno de Ojos", "60uds.", 15.50, null, "Parches supertonificantes para contorno de ojos de Natura siberica. Parches para ojos con efecto tonificante que reducen visiblemente los signos de fatiga en la mirada y le aportan luz y vitalidad al instante. \n Estos parches supertonificantes son la solución definitiva para decir adiós a los signos de fatiga y la hinchazón en el contorno de los ojos. Basados en activo postbiótico único y extractos fermentados de mora de los pantanos norteña y frambuesa silvestre, crean sobre la mirada un efecto iluminador y energizante al instante. La cafeína presente en su fórmula ayuda a tensar las líneas finas y reducir la piel hinchada, mientras que la vitamina E genera un efecto regenerador que deja un aspecto descansado y revitalizado.", "../images/4.jpg"), new product(5, "6 Discos Desmaquillantes de Fibra Natural", "6uds.", 10.50, null, "Eliminan el maquillaje y limpian el rostro con suavidad. Elaborados en algodón y carbón de bambú. De doble cara y función: \n Limpieza diaria: elaborada en algodón ultrasuave es adecuada para productos líquidos. \n Exfoliante: combinación de algodón y carbón de bambú, de propiedades purificantes y desintoxicantes. Indicada para texturas cremosas y densas. \n Incluye 6 discos y una práctica bolsita de algodón para lavarlos ( máx. 30 grados) y guardarlos. No secar en secadora. \n Reúnen ahorro en otros productos de un solo uso (toallitas, discos de algodón) y máximo respeto por el medio ambiente. ", "../images/5.jpg"), new product(6, "Aceite anticelulítico de abedul", "100ml", 22.90, null, "El extracto de hojas de abedul contiene flavonoides y tanines, los cuales sirven para mantener y conservar el metabolismo y circulación de los líquidos en el cuerpo. Su función es dar firmeza, elasticidad y suavidad a la piel, previniendo y mejorando el estado de la misma. Por esta razón, previene y mejora la celulitis. No contiene ni sustancias químicas, ni colorantes, ni conservantes. Es apto para veganos y no está testado en animales.", "../images/6.jpg"), new product(7, "Aceite antiinflamatorio S.O.S Rescate", "30ml", 12.45, null, "Pequeñas heridas, quemaduras, golpes, cicatrices… ¿Cuántos productos diferentes estás usando para paliar estos accidentes? Pues a partir de ahora con uno sólo podrás calmar y regenerar tu piel y la de toda tu familia con S. O. S. Rescate, una extraordinaria mezcla de aceites vegetales y esenciales procedentes de agricultura ecológica.", "../images/7.jpg"), new product(8, "Aceite Bucal de Coco Orgánico Premium", "180ml", 9.60, [30,1], "Oil Pulling de Dr. Goerg. El aceite bucal de coco orgánico premium de Dr. Goerg es fácil de usar y, gracias a sus ingredientes 100 % naturales enriquecidos con aceites esenciales de menta y eucalipto, garantiza una sensación en la boca limpia, agradable y fresca. Nuestro aceite bucal orgánico premium también es 100% vegano y está certificado como cosmético orgánico por Cosmos Organic . Si se usa regularmente antes de cepillarse los dientes, la extracción de aceite puede garantizar un aliento fresco y encías bien cuidadas a largo plazo. Al igual que con todos nuestros productos orgánicos premium, solo utilizamos las mejores materias primas de cultivos exclusivamente sostenibles para nuestro aceite de boca de coco orgánico premium.", "../images/8.jpg"), new product(9, "Aceite corporal blanco siberiano anticelulítico de Natura Siberica", "200ml", 6.95, null, "Este product te trae lo mejor para el cuidado de tu cuerpo gracias a las propiedades de la cera blanca de abeja, los aceites naturales y la schizandra. Regálate lo mejor para tu piel y disfruta de esta combinación que hidratará de forma eficaz las zonas de tu cuerpo que más lo necesite.", "../images/9.jpg"), new product(10, "Aceite corporal Body Sculptor", "",73.70, null, "Aceite corporal que moldea el cuerpo y esculpe la silueta de forma natural y eficaz. Previene el exceso de peso y la retención de líquidos gracias a su acción drenante, activa la microcirculación a la vez que tonifica la piel. Esculpe tu cuerpo realizando tratamientos de forma diaria. Está formulado con aceites vegetales naturales adecuado para pieles sensibles.", "../images/10.jpg"), new product(11, "Aceite corporal de almendras dulces", "500ml", 10.45, null, "El Aceite de Almendras dulces es básico para una hidratación y nutrición de la piel. Puedes utilizarlo en todas las partes de tu cuerpo preferiblemente después de la ducha con la piel húmeda, para ayudar a su absorción llegando a las capas profundas de la piel. Un aceite neutro apto para todo tipo de pieles y edades, utilizándose para toda la familia desde las edades más tempranas. Es ideal como base para formularlo con otros aceites, aceites esenciales y lociones. ", "../images/11.jpg"), new product(12, "Aceite corporal de almendras dulces con dosificador 1L", "1000ml", 14.99, null, "El Aceite de Almendras dulces es básico para una hidratación y nutrición de la piel. Puedes utilizarlo en todas las partes de tu cuerpo preferiblemente después de la ducha con la piel húmeda, para ayudar a su absorción llegando a las capas profundas de la piel. Un aceite neutro apto para todo tipo de pieles y edades, utilizándose para toda la familia desde las edades más tempranas. Es ideal como base para formularlo con otros aceites, aceites esenciales y lociones.", "../images/12.jpg")];

function displayProducts(product) {
    let gridContainer = document.getElementsByClassName('gridCatalog');
    console.log(gridContainer);
    let card = `<div class="cards">`;
    if (product.discount != null){
        card += `<div class="discount">
                <p>-${product.discount[0]}%<br>${product.discount[1]}°und.</p>
                </div>`;
    }
    card += `<button class="addFavorites">
                        <i class="bi bi-heart"></i>
                    </button>

                    <img src="${product.image}" class="cardImg" alt="">
                    
                    <div class="cardContent">
                        
                        <div class="titleProduct">
                            <div class="titleProduct">
                            <h5>${product.productName}</h5>
                        </div>
                        </div>
                        
                        <p class="units">${product.detail}</p>
                        
                        <div class="price">
                            <p>${product.price}<i class="bi bi-currency-euro iconGreen"></i></p>                         
                        </div>

                        <button type="button" class="addCard">
                            <i class="bi bi-basket3 bagIcon">   Añadir a la cesta</i>
                        </button>
                    </div>

                </div>`;

    gridContainer[0].innerHTML += card;
}

for (let i=0; i < data_principal.length; i++){
    displayProducts(data_principal[i]);
}
