			// add to cart  - Счётчик товара в корзине 

// Первый вариант - не правильно будет работать

// for( let i = 0 ; i < addToCartButtons.length; i++ ) {
// 	addToCartButtons[i].addEventListener("click", function() {
// 		let prevProductCount = +productsCountEl.textContent;
// 		productsCountEl.textContent = prevProductCount + 1;
// 	})
// }

// addToCartButtons.addEventListener("click", function() - дописать !!

// let addToCartButtons = document.querySelectorAll(".btn-add-to-cart");
// console.log(addToCartButtons);

// Второй вариант - правильный

let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

let addToCartButtons = document.querySelectorAll(".btn-add-to-cart");
console.log(addToCartButtons);

for( let i = 0 ; i < addToCartButtons.length; i++ ) {
	addToCartButtons[i].addEventListener("click", function() {
		productsCountEl.textContent = +productsCountEl.textContent +1;
	})
}

			//change product quantity - изменить кол-во продукта

let decrementBtn = document.querySelector('.btn-decrement');
let incrementBtn = document.querySelector('.btn-increment');
let quantityInput = document.querySelectorAll(".product-quantity input");
console.log(decrementBtn);
// ==== проверить правильно ли назначили переменные! ====
//console.log(decrementBtn);
//console.log(incrementBtn);
//console.log(quantityInput);

//чтобы кол-во товара не могло быть ноль при первой загрузке
function startData (){
	let currentCount = +quantityInput.value;
	if(currentCount <= 1) {
		decrementBtn.disabled = true;
	}else {
		decrementBtn.disabled = false;
}};

startData();

function curBtn(numBtn){
	let currentCount = +quantityInput.value;
	let nextCount = currentCount + numBtn;

	quantityInput.value = nextCount;
	if (nextCount <= 1){
		decrementBtn.disabled = true;
	}else if(nextCount >= 5){
	incrementBtn.disabled = true;
	}else {
		decrementBtn.disabled = false;
	}
}
// ES6. Стрелочные функции. This - больше не проблема!!!

// for (i = 0 ; i < decrementBtn.length ; i++) {
	incrementBtn.addEventListener("click", () => curBtn(1))
// };

	decrementBtn.addEventListener("click", () => curBtn(-1));

			//add slick slider

$('.slider-block').slick({
    autoplay:true,
    autoplaySpeed:2000,
    dots:true,
})

// change color

let span = document.querySelector(".text")

span.addEventListener("keydown",function() {
    span.style.color = "red"
})
