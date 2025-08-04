// 1. Создайте массив чисел и найдите сумму всех нечетных элементов в массиве.

// const arr: number[] = [1, 2, 3, 4];
// const res = arr.filter((el) => el % 2 === 0).reduce((sum, elem) => sum + elem, 0);
// console.log(res);

// 2. Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a'.

// const strArr: string[] = ["artem", "rechka", "rest", "dist"];
// const resArr: string[] = [];

// for (let i = 0; i < strArr.length; i++) {
//   for (let j = 0; j < strArr[i].length; j++) {
//     if (strArr[i][j].includes("a")) {
//       resArr.push(strArr[i]);
//     }
//   }
// }
// console.log(resArr);

// 3. На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива

// const arr: number[] = [];
// for (let i = 0; i < 5; i++) {
//   arr.push(+prompt());
// }

// let i: number = 0;
// let sum: number = 0;
// do {
//   sum += +arr[i];
//   i++;
// } while (i < arr.length);
// console.log(sum);

// let i: number = 0;
// let sum: number = 0;
// while (i < arr.length) {
//   sum += arr[i];
//   i++;
// }
// console.log(sum);

// let sum: number = 0;
// for (let num of arr) {
//   sum += num;
// }
// console.log(sum);

// let sum: number = 0;
// for (let i: number = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// const res = arr.reduce((sum, el) => sum + el, 0);
// console.log(res);

// 4. Создайте динамический массив строк. Используя Some выведите true в случае
// если хотя бы 1 элемент массива имеет длину > 5 символов.

// const arr: string[] = [];
// for (let i = 0; i < 5; i++) {
//   arr.push(prompt());
// }
// const res = arr.some((el) => el.length > 5);
// console.log(res);

// 5. Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
// делятся на 2

// const arr: number[] = [4, 3, 5, 6, 9, 12];
// const filterArr = arr.filter((el) => el % 3 === 0 && el % 2 !== 0);
// console.log(filterArr);

// 6. Создайте массив строк и объедините все элементы в одну строку без пробелов.

// const strArr: string[] = ["artem", "rechka", "rest", "dist"];
// const result: string = strArr.join("");
// console.log(result);

// 7. На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполняет массив. Необходимо создать массив только из чисел.

// const arr: number[] = [];
// for (let i = 0; i < 5; i++) {
//   const input = prompt();
//   const num = Number(input);
//   if (!isNaN(num)) {
//     arr.push(num);
//   }
// }

// console.log(arr);

// 8. Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.

// const strArr: string[] = ["artem", "rechka", "rest", "dist", "alla"];
// const res = strArr.some((el) => el === el.split("").reverse().join(""));
// console.log(res);

// 9. Создайте массив из чисел и строк и удалите из него все повторяющиеся
// элементы, оставив только уникальные значения.

// const strArr: (number | string)[] = ["artem", "rechka", "rechka", "rest", 4, 4, 6, 5, "dist", "alla", "alla"];
// const newArr: (number | string)[] = [];

// let i: number = 0;
// do {
//   if (!newArr.includes(strArr[i])) {
//     newArr.push(strArr[i]);
//   }
//   i++;
// } while (i < strArr.length);
// console.log(newArr);

// let i: number = 0;
// while (i < strArr.length) {
//   if (!newArr.includes(strArr[i])) {
//     newArr.push(strArr[i]);
//   }
//   i++;
// }
// console.log(newArr);

// for (let el of strArr) {
//   if (!newArr.includes(el)) {
//     newArr.push(el);
//   }
// }
// console.log(newArr);

// for (let i = 0; i < strArr.length; i++) {
//   if (!newArr.includes(strArr[i])) {
//     newArr.push(strArr[i]);
//   }
// }
// console.log(newArr);

// 10. Создайте массив строк и преобразуйте каждую строку в новую строку,
// содержащую только гласные буквы.

// const strArr: string[] = ["artem", "river", "rest", "dist"];
// const resultStr: string[] = [];
// const vowels = ["a", "e", "y", "u", "i", "o"];
// for (let i: number = 0; i < strArr.length; i++) {
//   for (let j = 0; j < strArr[i].length; j++) {
//     if (vowels.includes(strArr[i][j])) {
//       resultStr.push(strArr[i][j]);
//     }
//   }
// }
// console.log(resultStr.join(""));

// 11. На входе динамичный массив строк. Используя every выведите true если все
// элементы массива соответствуют регулярному выражению почты

// const strArr: string[] = [];
// for (let i = 0; i < 4; i++) {
//   strArr.push(prompt());
// }

// const res = strArr.every((el) => /^\S+@\S+\.\S+$/.test(el));
// console.log(res);

// 12. Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
// позициях (индексах) массива.

// const numsArr: number[] = [1, 2, 3, 4, 5];
// let sum: number = 0;
// for (let i: number = 0; i < numsArr.length; i++) {
//   if (i % 2 !== 0) {
//     sum += numsArr[i];
//   }
// }
// console.log(sum);

// 13. На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]

const arr: number[] = [];
for (let i: number = 0; i <= 6; i++) {
  arr.push(+prompt());
}
const res: string[] = arr.map((el) => (el % 2 === 0 ? "чет" : "нечет"));
console.log(res);
