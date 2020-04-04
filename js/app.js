
// Счётчик товара в корзине 

let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

let addToCartButtons = document.querySelectorAll(".btn-add-to-cart");
console.log(addToCartButtons);

for( let i = 0 ; i < addToCartButtons.length; i++ ) {
	addToCartButtons[i].addEventListener("click", function() {
		let prevProductCount = +productsCountEl.textContent;
		productsCountEl.textContent = prevProductCount + 1;
	})
}