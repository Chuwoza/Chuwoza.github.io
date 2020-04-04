
// 16.1.0 Произвольный цифровой массив

let numMas = [1 , 7 , 9 , 14 , 380 , 67 , 87 , 148 , 273, 342];
console.log(numMas);

// 16.1.1 Вывести последний елемент из массива 

const lastItem = numMas[numMas.length - 1];
console.log("Последнее число массива - это " + lastItem);

// 16.1.2 Посчитать сумму элементов в массиве

let result = numMas.reduce((sum, current) => sum + current, 0);
console.log("Сумма всех чисел в массиве = " + result)

// 16.1.3 Вернуть наибольшее значение из массива

console.log("Наибольшее число в массиве - это " + Math.max.apply(null, numMas));

console.log("Второй способ поиска наибольешего числа - это " + Math.max(...numMas));

// - - - - - -ещё вариант расчета: - - - - - - 

// let max = getMaxValue(numMas);
// let min = getMinValue(numMas);
// console.log(max);
// console.log(min);

// function getMaxValue(numMas){
//     var max = numMas[0]; // берем первый элемент массива
    // for (var i = 0; i < numMas.length; i++) { // переберем весь массив
        // если элемент больше, чем в переменной, то присваиваем его значение переменной
    //     if (max < numMas[i]) max = numMas[i]; 
    // }
    // возвращаем максимальное значение
//     return max;

//---------------------------------------------------------

// Вторая задача 29 марта


// let sum=+prompt("Сумма вашик покупок составляет:");

// console.log("Сумма покупки со скидкой: "+priceWithDis(sum));

// function priceWithDis(sum){
//     let discount;
//         if(sum<1000){
//             discount=3;
//         }
//         else if(sum>=1000 && sum<=5000){
//             discount=5;
//         }
//         else if(sum>5000){
//             discount=7;
//         }
//     return sum - sum*discount/100;
// }


	/* Получить данные от пользователя, и вывести большее число, 
	если третье значение true, и меньшее - если false */
// let x;
// x = +prompt("Задайте число №1", "");
// let y;
// y = +prompt("Задайте число №2", "");
// let age
// age = +prompt("Укажите свой возраст", "");
// let accessAllowed ;
// let max ;
// let min ;	
	
// if (age >= 18){
// 	accessAllowed=1;
// } else if (age < 18) {
// 	accessAllowed=0;
// } else {
// 	accessAllowed=0;
// }


// if ( x > y ) {
// 	max = x;
// 	min = y;
// }else {
// 	max = y;
// 	min = x;
// }

// if (accessAllowed) {
// 	alert ("Большее число " + max );
// }else {
// 	alert ("Меньшее число " + min );
// };

    		/* Расчет процента депозита. Задача усложненная!!!

   процентная ставка зависит от срока депозита 
     >= 6  то 13% годовых
   7 >= 9  то 15% годовых
     > 10  то 17% годовых
   */
 /*  alert ("Задача по JS!")
 	let nameUser = prompt("Введите свое имя", "");
 	let sumDep = +prompt("Введите сумму депозита", "");
	let periodDep = +prompt("Укажите срок депозита, кол-во месяцев", "");

	let currency = "грн." ;
	let stake = 0;

	if (periodDep <= 6) {
		stake = 13;
	} else if ((7 <= periodDep) && (periodDep <= 9)) {
		stake = 15;
	} else if (periodDep > 10){
		stake = 17;
	} else {
		stake = 1;
	}

	let stakeSum = sumDep*stake/100;
	let stakeDep = stakeSum/12*periodDep;
	let amountSumDep = sumDep + stakeDep;

		alert("Ответ смотри в консоле!");

console.log(`Уважаемый ${nameUser} , за ${periodDep} мес. 
Ваша процентная ставка составит ${stake}% . 
Вы получите: ${stakeDep.toFixed(2) } ${currency} дохода от депозита!
Общая сумма доступная к снятию: ${amountSumDep.toFixed(2)} ${currency}`);  */


		//Расчет процентной скидки:

// let discount = 20;
// let currency = "грн.";
// let numQestion = 1;

// function sum (numQestion) {
// 	let productPrice = +prompt("Введите вартість товару", "");
// 	let productPriceWithDiscount = productPrice - (productPrice*discount/100);	
// 	console.log("Стоимость " + numQestion + "товара со скидкой" + " " + productPriceWithDiscount + " "+"грн.");
// }


// sum (1) 
// sum (2) 
// sum (100) 




            // Ввести два числа, но отобразить большее

// let a = +prompt("Введите первое число", "");
// let b = +prompt("Введите Второе число", "");

// if (a > b) {
// 	alert ("Большее число" + " " + a)
// } else if ( a === b ){
// 	alert ("Числа равны!")
// } else {
// 	alert ("Большее число" + " " + b)
// }


            //Вычисление квадрата числа


	// let a = +prompt ("Введите,пожалуйста любое целое число", "")

	// alert (`Квадрат вашего числа = ${a ** 2}`)


			// Определить время года

// let season = prompt("Введите пору року", "");

// if (season === "зима"){
// 	alert ("Зараз зима")	
// } else if (season === "весна") {
// 	alert ("Зараз весна")
// } else if (season === "літо") {
// 	alert ("Зараз літо")
// } else if (season === "oсінь"){
// 	alert ("Зараз oсінь")
// } else {
// 	alert("Такої пори року як " + season + " не існує")
// }

			// Стоимость товара со скидкой:


// let discount = 20;
// let currency = "грн.";
// let productPrice = +prompt("Введите вартість товару", "");
// let productPriceWithDiscount = productPrice - (productPrice*discount/100);

// console.log("Стоимость товара со скидкой" + " " + productPriceWithDiscount + " "+"грн.");
	

			/* Расчет процента депозита
			   депозитная ставка составляет 15%*/

// 	let a = prompt("Введите свое имя", "");
// 	let b = +prompt("Введите сумму депозита", "");
// 	let c = b * 1.15 - b;
// 	let d = c / 2; 	

// 	alert(`Уважаемый ${a} , за 6 месяцев вы получите: ${d.toFixed(2) } грн. дохода от депозита!
// Общая сумма доступная к снятию: ${b + d} грн.`);



