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

// const arr: number[] = [];
// for (let i: number = 0; i <= 6; i++) {
//   arr.push(+prompt());
// }
// const res: string[] = arr.map((el) => (el % 2 === 0 ? "чет" : "нечет"));
// console.log(res);

// 14. Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.

// const str: string = "hschool";
// const obj: any = {};
// let count: number = 0;
// let value: string = "";
// for (let key in obj) {
//   if (obj[key] > count) {
//     count = obj[key];
//     value = key;
//   }
// }
// console.log(value);

// !!!!!!!!!!!!!!!!!!!!!!!!!HOMEWORK

// 1.Преобразовать все строки в верхний регистр
// Необходимо 3 решения: for, for of, map
// const words = ['hello', 'world'];
// // Ожидается: ['HELLO', 'WORLD']

// const words: string[] = ["hello", "world"];
// const res: string[] = [];
// for (let elem of words) {
//   res.push(elem.toUpperCase());
// }
// console.log(res);

// const res: string[] = [];
// for (let i = 0; i < words.length; i++) {
//   res.push(words[i].toUpperCase());
// }
// console.log(res);

// const res: string[] = words.map((el) => el.toUpperCase());
// console.log(res);

// 2.Найти строку с максимальной длиной
// Необходимо 3 решения: for, forEach, reduce
// const words = ['pen', 'notebook', 'book', 'dictionary'];
// Ожидается: 'dictionary'

// const words: string[] = ["pen", "notebook", "book", "dictionary"];
// const maxWord: string = words.reduce((longest, curr) => (curr.length > longest.length ? curr : longest));
// console.log(maxWord);

// let maxWord: string = words[0];
// words.forEach((word) => {
//   if (word.length > maxWord.length) {
//     maxWord = word;
//   }
// });
// console.log(maxWord);

// let maxWord: string = words[0];
// for (let i = 1; i < words.length; i++) {
//   if (words[i].length > maxWord.length) {
//     maxWord = words[i];
//   }
// }
// console.log(maxWord);

// 3.Подсчитать количество строк, содержащих букву “e”
// Необходимо 3 решения: for, while, и через filter и length
// const words = ['tree', 'bush', 'flower', 'grass'];
// // Ожидается: 2

// const words: string[] = ["tree", "bush", "flower", "grass"];

// const count = words.filter((el) => el.includes("e")).length;
// console.log(count);

// let count: number = 0;
// let i: number = 0;
// while (i < words.length) {
//   if (words[i].includes("e")) {
//     count++;
//   }
//   i++;
// }
// console.log(count);

// let count: number = 0;
// for (let i: number = 0; i < words.length; i++) {
//   if (words[i].includes("e")) {
//     count++;
//   }
// }
// console.log(count);

// 4.Проверить, содержит ли массив хотя бы один палиндром
// Необходимо 6 решений: for, for of, while, do while, forEach, some
// const words = ['hello', 'level', 'world'];
// // Ожидается: true

// const words: string[] = ["hello", "level", "world"];
// const result: boolean = words.some((word) => word === word.split("").reverse().join(""));
// console.log(result);
// let flag: boolean = false;

// words.forEach((word) => {
//   if (word === word.split("").reverse().join("")) {
//     flag = true;
//   }
// });
// console.log(flag);

// let flag: boolean = false;
// let i: number = 0;
// do {
//   const word = words[i];
//   if (word === word.split("").reverse().join("")) {
//     flag = true;
//     break;
//   }
//   i++;
// } while (i < words.length);
// console.log(flag);

// let flag: boolean = false;
// let i: number = 0;
// while (i < words.length) {
//   const word = words[i];
//   if (word === word.split("").reverse().join("")) {
//     flag = true;
//     break;
//   }
//   i++;
// }
// console.log(flag);

// let flag: boolean = false;

// for (let word of words) {
//   if (word === word.split("").reverse().join("")) {
//     flag = true;
//     break;
//   }
// }
// console.log(flag);

// let flag:boolean = false;
// for (let i:number = 0; i < words.length; i++) {
//   const word = words[i];

//   if (word === word.split("").reverse().join("")) {
//
//     flag = true;
//     break;
//   }
// }
// console.log(flag);

// 5.Найти сумму квадратов только положительных чисел
// Необходимо 5 решений: for, for of, while, do while, forEach
// const nums = [-3, 2, -1, 4];

// const nums = [-3, 2, -1, 4];
// let sum: number = 0;

// nums.forEach((el) => (el > 0 ? (sum += el ** 2) : null));
// console.log(sum);

// let i: number = 0;
// do {
//   if (nums[i] > 0) {
//     sum += nums[i] ** 2;
//   }
//   i++;
// } while (i < nums.length);
// console.log(sum);

// let sum: number = 0;
// let i: number = 0;
// while (i < nums.length) {
//   if (nums[i] > 0) {
//     sum += nums[i] ** 2;
//   }
//   i++;
// }
// console.log(sum);

// let sum: number = 0;
// for (let digit of nums) {
//   if (digit > 0) {
//     sum += digit ** 2;
//   }
// }
// console.log(sum);

// let sum: number = 0;
// for (let i: number = 0; i < nums.length; i++) {
//   if (nums[i] > 0) {
//     sum += nums[i] ** 2;
//   }
// }
// console.log(sum);

// Ожидается: 2² + 4² = 4 + 16 = 20
// 15. На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]

// const arr: string[] = ["hschool", "company"];
// const newArr: string[] = [];

// arr.forEach((el) => {
//   newArr.push("!" + el);
// });
// console.log(newArr);

// 16. Создайте массив чисел и определите, является ли он строго возрастающей
// последовательностью.

// const numsArr: number[] = [1, 2, 3, 4, 5];

// for (let i: number = 1; i < numsArr.length; i++) {
//   if (numsArr[i] > numsArr[i - 1]) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// 17. Создайте массив чисел и найдите наибольшую разницу между двумя элементами.

// const numsArr: number[] = [1, 2, 3, 4, 5];
// const maxDiff = Math.max(...numsArr) - Math.min(...numsArr);
// console.log(maxDiff);

// 18. Создайте массив объектов, представляющих книги, и найдите книгу где автор
// Булгаков (author – одно из полей объекта)
// interface Book {
//   title: string;
//   author: string;
//   price: number;
// }
// const books:Book[] = [
//   {
//     title: "Война и мир",
//     author: "Толстой",
//     year: 1869,
//   },
//   {
//     title: "Преступление и наказание",
//     author: "Достоевский",
//     year: 1866,
//   },
//   {
//     title: "Мастер и Маргарита",
//     author: "Булгаков",
//     year: 1967,
//   },
//   {
//     title: "Собачье сердце",
//     author: "Булгаков",
//     year: 1925,
//   },
//   {
//     title: "Мёртвые души",
//     author: "Гоголь",
//     year: 1842,
//   },
// ];

// const res = books.filter((el) => el.author === "Булгаков");
// console.log(res);

// // 19. Создайте массив объектов, представляющих книги, и отобразите книги где цена
// // каждой > 50 (price – одно из полей объекта)
// interface Book {
//   title: string;
//   author: string;
//   price: number;
// }
// const books:Book[] = [
//   {
//     title: "Гарри Поттер и философский камень",
//     author: "Роулинг",
//     price: 65,
//   },
//   {
//     title: "Властелин колец",
//     author: "Толкин",
//     price: 80,
//   },
//   {
//     title: "1984",
//     author: "Оруэлл",
//     price: 45,
//   },
//   {
//     title: "Три товарища",
//     author: "Ремарк",
//     price: 55,
//   },
//   {
//     title: "Маленький принц",
//     author: "Сент-Экзюпери",
//     price: 30,
//   },
//   {
//     title: "Атлант расправил плечи",
//     author: "Рэнд",
//     price: 120,
//   },
//   {
//     title: "Шерлок Холмс",
//     author: "Дойл",
//     price: 42,
//   },
// ];

// const res = books.filter((el) => el.price > 50);
// console.log(res);

// 20.Создайте массив объектов, представляющих книги, и найдите книгу с самым
// большим количеством страниц (count – одно из полей объекта)

// interface obj {
//   title: string;
//   author: string;
//   count: number;
// }

// const books:obj[] = [
//   {
//     title: "Война и мир",
//     author: "Толстой",
//     count: 1225,
//   },
//   {
//     title: "Преступление и наказание",
//     author: "Достоевский",
//     count: 671,
//   },
//   {
//     title: "Мастер и Маргарита",
//     author: "Булгаков",
//     count: 470,
//   },
//   {
//     title: "Анна Каренина",
//     author: "Толстой",
//     count: 864,
//   },
//   {
//     title: "Братья Карамазовы",
//     author: "Достоевский",
//     count: 796,
//   },
//   {
//     title: "Тихий Дон",
//     author: "Шолохов",
//     count: 1500,
//   },
// ];

// const res = books.reduce((maxBook, currentBook) => (currentBook.count > maxBook.count ? currentBook : maxBook));

// console.log(res);

// 21. Напишите программу, которая находит и выводит длину наиболее длинного
// слова в заданной строке.

// const text: string = "Программирование это очень увлекательная и интересная деятельность";
// const textSpl: string[] = text.split(" ");
// let max: number = 0;
// for (let i: number = 0; i < textSpl.length; i++) {
//   if (textSpl[i].length > max) {
//     max = textSpl[i].length;
//   }
// }
// console.log(max);

// 22. Создайте массив объектов, представляющих сотрудников, с полями "имя" и
// "зарплата". Найдите среднюю зарплату всех сотрудников.

// interface Employee {
//   name: string;
//   salary: number;
// }
// const employees: Employee[] = [
//   {
//     name: "Алексей",
//     salary: 50000,
//   },
//   {
//     name: "Мария",
//     salary: 65000,
//   },
//   {
//     name: "Петр",
//     salary: 45000,
//   },
//   {
//     name: "Елена",
//     salary: 70000,
//   },
//   {
//     name: "Дмитрий",
//     salary: 55000,
//   },
//   {
//     name: "Анна",
//     salary: 60000,
//   },
// ];

// const res: number = employees.reduce((sum, elem) => sum + elem.salary, 0);
// console.log(res / employees.length);

// 23. Дан массив объектов с полями "название", "цена" и "количество". Найдите
// суммарную стоимостью всех товаров учитывая количество каждого.
// Итог = цена_1_товара * кол-во_1_товара + цена_2_товара * кол-во_2_товара + ...

// interface Product {
//   name: string;
//   price: number;
//   quantity: number;
// }

// const products: Product[] = [
//   {
//     name: "Хлеб",
//     price: 30,
//     quantity: 2,
//   },
//   {
//     name: "Молоко",
//     price: 60,
//     quantity: 3,
//   },
//   {
//     name: "Яблоки",
//     price: 120,
//     quantity: 1,
//   },
//   {
//     name: "Сыр",
//     price: 250,
//     quantity: 2,
//   },
//   {
//     name: "Мясо",
//     price: 400,
//     quantity: 1,
//   },
// ];

// const res = products.reduce((sum, elem) => sum + elem.quantity * elem.price, 0);
// console.log(res);

// !!!!!!!!!!!!!!!!!!!!!HOMEWORK

// interface User {
//     id: number;
//     name: string;
//     isActive: boolean;
//   }
//   const users: User[] = [
//     { id: 1, name: "Alice", isActive: true },
//     { id: 2, name: "Bob", isActive: false },
//     { id: 3, name: "Charlie", isActive: true },
//     { id: 4, name: "Diana", isActive: false },
//   ];

//   1. Отфильтруй массив users, чтобы получить только активных пользователей.
// const result: User[] = users.filter((el) => el.isActive === true);
// console.log(result);

// 2.Преобразуй массив users в массив строк из имён пользователей.
// const names: string[] = users.map((el) => el.name);
// console.log(names);

// 3. Проверь, есть ли хотя бы один неактивный пользователь. Если есть - true, иначе - false
// const inactive: boolean = users.some((el) => el.isActive === false);
// console.log(inactive);

// 4. Из массива students отфильтруй только тех, у кого балл выше 80.
// interface User {
//   id: number;
//   name: string;
//   score: number;
// }
// const students: User[] = [
//   { id: 1, name: "Anna", score: 75 },
//   { id: 2, name: "John", score: 92 },
//   { id: 3, name: "Tom", score: 88 },
// ];
// const ball: User[] = students.filter((el) => el.score > 80);
// console.log(ball);

// 5. Отобрази список имён всех курсов, которые проходят пользователи. Курсы находятся внутри каждого пользователя в массиве courses.
// Результат: ['TS', 'React', 'Node', 'TS', 'HTML'].
// interface User {
//   id: number;
//   name: string;
//   courses: string[];
// }
// const users:User[] = [
//   { id: 1, name: "Alice", courses: ["TS", "React"] },
//   { id: 2, name: "Bob", courses: ["Node", "TS"] },
//   { id: 3, name: "Clara", courses: ["HTML"] },
// ];

// const courses:string[] = users.map((el) => el.courses).flat();
// console.log(courses);

// 6. Из массива projects получи список названий только тех проектов, в которых участвует пользователь с userId === 3.
// interface User {
//   id: number;
//   name: string;
//   members: number[];
// }
// const projects: User[] = [
//   { id: 1, name: "CRM", members: [1, 2, 3] },
//   { id: 2, name: "Landing Page", members: [2] },
//   { id: 3, name: "Mobile App", members: [3, 4] },
// ];

// const list: string[] = projects.filter((el) => el.members.includes(3)).map((us) => us.name);
// console.log(list);

// 7. В массиве events найди все записи, которые происходят в 2023 году.
// Результат:  ["Conference", "Workshop"]
// interface User {
//   id: number;
//   name: string;
//   date: string;
// }
// const events: User[] = [
//   { id: 1, name: "Conference", date: "2023-05-01" },
//   { id: 2, name: "Workshop", date: "2023-11-15" },
//   { id: 3, name: "Webinar", date: "2025-01-20" },
// ];
// const filt: string[] = events.filter((el) => el.date.includes("2023")).map((el) => el.name);
// console.log(filt);

// 8. Для массива teams получи имена всех участников всех команд, но без повторений.
// Результат:  ['Alice', 'Bob', 'Clara', 'Dave']
// interface User {
//   id: number;
//   members: string[];
// }
// const teams: User[] = [
//   { id: 1, members: ["Alice", "Bob"] },
//   { id: 2, members: ["Bob", "Clara"] },
//   { id: 3, members: ["Dave", "Alice"] },
// ];
// const filt: string[] = [...new Set(teams.map((el) => el.members).flat())];
// console.log(filt);
