var productsArray = [];

function showProductsList(array) {

    let content = "";
    for (let i = 0; i < array.length; i++) {
        let product = array[i];

        content += `<img src="` + product.imgSrc + `" alt="` + product.name + `" + width="150" + style="float:left;margin-right:15px;">` +
        "<br>" +
        "<p>" +
        product.currency + " " +
        product.cost + "<br>" +
        product.name + "<br>" +
        product.description + "<br>" +
        "</p>" +
        "<br>" + "<br>";
        document.getElementById('container productos').innerHTML = content;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            productsArray = resultObj.data;
            showProductsList(productsArray);
        }
    });
});