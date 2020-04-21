"use strict";

//add selectize.js

$(document).ready(function () {
  // $(".js-example-basic-multiple").select2();
  $(".chosen-select").chosen({ disable_search_threshold: 10 });
});

//add slick slider

$(".slider-block").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
});

// change color arrow in slick-slider

// let span = document.querySelector(".text")

// span.addEventListener("keydown",function() {
//     span.style.color = "red"
// })

// change 'like' state

let likeCountEl = document.getElementById("like-count-num");

function getLike() {
  let likeBtn = document.querySelectorAll(".like-btn");
  for (let i = 0; i < likeBtn.length; i++) {
    likeBtn[i].addEventListener("click", function () {
      if (likeBtn[i].classList.contains("like-js")) {
        likeBtn[i].classList.remove("like-js");
        likeCountEl.textContent = +likeCountEl.textContent - 1;
      } else {
        likeCountEl.textContent = +likeCountEl.textContent + 1;
        likeBtn[i].classList.add("like-js");
      }
    });
  }
}

getLike();

// Add to cart & change product quantity

let products = document.querySelectorAll(".good-info");
let productsCountEl = document.getElementById("products-count");

function applyValue(iBtn, dBtn, input, value) {
  function toggelDisabledBtn(Count) {
    dBtn.disabled = Count <= 1;
    iBtn.disabled = Count >= 5;
  }
  let nextCount = +input.value + value;
  // console.log(input.value);

  toggelDisabledBtn(nextCount);
  input.value = nextCount;
}

for (var i = 0; i < products.length; i++) {
  let decrementBtn = products[i].querySelector(".btn-decrement");
  let incrementBtn = products[i].querySelector(".btn-increment");
  let quantityInput = products[i].querySelector("input");
  let addToCartBtn = products[i].querySelector(".btn-add-to-cart");
  startData();

  function startData() {
    let currentCount = +quantityInput.value;
    if (currentCount <= 1) {
      decrementBtn.disabled = true;
    } else {
      decrementBtn.disabled = false;
    }
  }

  addToCartBtn.addEventListener("click", function () {
    productsCountEl.textContent =
      +productsCountEl.textContent + +quantityInput.value;
    quantityInput.value = 1;

    decrementBtn.disabled = false;
    incrementBtn.disabled = false;
  });

  incrementBtn.addEventListener("click", function (e) {
    applyValue(incrementBtn, decrementBtn, quantityInput, 1);
  });
  decrementBtn.addEventListener("click", () =>
    applyValue(incrementBtn, decrementBtn, quantityInput, -1)
  );
}

//   - Счётчик товара в корзине

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

// let productsCountEl = document.getElementById("products-count");
// console.log(productsCountEl);

// let addToCartButtons = document.querySelectorAll(".btn-add-to-cart");
// console.log(addToCartButtons);

// for( let i = 0 ; i < addToCartButtons.length; i++ ) {
// 	addToCartButtons[i].addEventListener("click", function() {
// 		productsCountEl.textContent = +productsCountEl.textContent +1;
// 	})
// }

//change product quantity - изменить кол-во продукта

// let decrementBtn = document.querySelectorAll('.btn-decrement');
// let incrementBtn = document.querySelectorAll('.btn-increment');
// let quantityInput = document.querySelectorAll(".product-quantity input");
// console.log(decrementBtn);
// ==== проверить правильно ли назначили переменные! ====
//console.log(decrementBtn);
//console.log(incrementBtn);
//console.log(quantityInput);

//чтобы кол-во товара не могло быть ноль при первой загрузке
// function startData (){
// 	let currentCount = +quantityInput.value;
// 	if(currentCount <= 1) {
// 		decrementBtn.disabled = true;
// 	}else {
// 		decrementBtn.disabled = false;
// }};

// startData();

// function curBtn(numBtn){
// 	let currentCount = +quantityInput.value;
// 	let nextCount = currentCount + numBtn;

// 	quantityInput.value = nextCount;
// 	if (nextCount <= 1){
// 		decrementBtn.disabled = true;
// 	// }else if(nextCount >= 5){
// 	// incrementBtn.disabled = true;
// 	}else {
// 		decrementBtn.disabled = false;
// 	}
// }
// // ES6. Стрелочные функции. This - больше не проблема!!!

// // for (i = 0 ; i < decrementBtn.length ; i++) {
// 	incrementBtn.addEventListener("click", () => curBtn(1))
// // };

// 	decrementBtn.addEventListener("click", () => curBtn(-1));

// finish change product quantity
