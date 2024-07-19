function start() {
  let button = document.getElementById("add-product");
  button.addEventListener("click", addProduct);
}

let addProduct = () => {
  let gridTable = document.querySelector(".grid-table");
  let productName = document.getElementById("pName");
  let productPrice = document.getElementById("pPrice");
  let imageURL = document.getElementById("pURL");

  let randomProductId = Math.floor(Math.random() * 1000000) + 1;
  let addedProductHTML = `<p>${randomProductId}</p>
        <p>${productName.value}</p>
        <p>${productPrice.value} $</p>
        <img
          class="product-image"
          src="${imageURL.value}"
          alt="${productName.value}"
        />`;
  productName.value = "";
  productPrice.value = "";
  imageURL.value = "";
  gridTable.innerHTML = gridTable.innerHTML + addedProductHTML;
};

window.addEventListener("load", start);
