    		/* Расчет процента депозита. Задача усложненная!!!

   процентная ставка зависит от срока депозита 
     >= 6  то 13%годовых
   7 >= 9  то 15%годовых
     > 10  то 17%годовых
   */


	let nameUser = prompt("Введите свое имя", "");
	let periodDep = +prompt("Введите кол-во месяцев вклада ", "");
	let sumDep = +prompt("Введите сумму депозита", "");
	let currency = "грн." ;
	let stake = 13;

	if (periodDep <= 6) {
		let stake = 13;
	} else if (7 <= periodDep <= 9){
		let stake = 15;
	} else if (periodDep > 10){
		++stake;
		++stake;
	} else {
		let stake = 1;
	}

	let stakeSum = sumDep*stake/100;
	let stakeDep = stakeSum/12*periodDep;
	let amountSumDep = sumDep + stakeDep;

	console.log(`Уважаемый ${nameUser} , за ${periodDep} мес. Ваша процентная ставка составит ${stake}% . 
Вы получите: ${stakeDep.toFixed(2) } ${currency} дохода от депозита!
Общая сумма доступная к снятию: ${amountSumDep.toFixed(2)} ${currency}`);


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



