//     Расчет процентной скидки 		
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




    		/* Расчет процента депозита. Задача усложненная!!!

   процентная ставка зависит от срока депозита 
     >= 6  то 13%годовых
   7 >= 9  то 15%годовых
     > 10  то 17%годовых
   */


// let nameUser = prompt("Введите свое имя", "");
// let periodDep = +prompt("Введите кол-во месяцев вклада ", "");
// let sumDep = +prompt("Введите сумму депозита", "");
// let currency = "грн." ;
// let stake;
// в этой строке ошибка, но я не понимаю почему....
// let stakeSum = sumDep*stake/100;

// if (periodDep <= 6) {
// 	let stake = 13;
// } else if ((7 <= periodDep) && (periodDep <= 9)) {
// 	let stake = 15;
// } else if (periodDep > 10){
// 	let stake = 17;
// } else {
// 	let stake = 1;
// }

// let stakeDep = stakeSum/12*periodDep;
// let amountSumDep = sumDep + stakeDep;

// console.log(`Уважаемый ${nameUser} , за ${periodDep} мес. Ваша процентная ставка составит ${stake}% . 
// Вы получите: ${stakeDep.toFixed(2) } ${currency} дохода от депозита!
// Общая сумма доступная к снятию: ${amountSumDep.toFixed(2)} ${currency}`);

// Вариант Степана


let name=prompt("Введіть ваше імя:");
let sum=+prompt("Введіть суму депозиту:");
let period=+prompt("Введіть строк дії депозиту (кількість місяців):");
let sum2;
let percent;
if (period<=6){
    persent=13;
} else if((period>6) &&(period<=9)){
    persent=15;
} else if(period>=10){1
    persent=17;
}
sum2=(persent*period* sum)/(12*100);
let sum3=sum2+sum;
console.log("Шановний "+name+"! Сума вашого депозиту: "+sum+" грн.Строк дії: "+period
+" місяців,а Ваша ставка будет:" + persent +  "%. В кінці цього періоду ви отримаєте додатково: "+sum2
+" грн. В загальному: " +sum3+" грн");


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



