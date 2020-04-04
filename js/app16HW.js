alert("Откройте, пожалуйста консоль!!!")

// 16.1.0 Произвольный цифровой массив
console.log("Домашнее задание №16:")

let numArray = [1 , 7 , 9 , 14 , 380 , 67 , 87 , 148 , 273, 342];
console.log("Список чисел: " + numArray);

// 16.1.1 Вывести последний елемент из массива 

const lastItem = numArray[numArray.length - 1];
console.log("   Последнее число массива - это " + lastItem);

// 16.1.2 Посчитать сумму элементов в массиве

let result = numArray.reduce((sum, current) => sum + current, 0);
console.log("   Сумма всех чисел в массиве = " + result)

// 16.1.3 Вернуть наибольшее значение из массива

// как вывести эти данные?;?%?!?!?!?!?!?-------------------------
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
//---------------------------------------------------------------	

console.log("   Наибольшее число в массиве - это " + Math.max.apply(null, numArray));

console.log("   Второй способ поиска наибольешего числа - это " + Math.max(...numArray));

console.log("  ")
console.log("  ")