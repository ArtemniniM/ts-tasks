// 1. Напиши функцию wrapInArray<T>, которая принимает значение любого типа и возвращает массив, содержащий это значение.
// wrapInArray(5) // [5]
// wrapInArray("hi") // ["hi"]
// function wrapInArray<T>(value: T) {
//   return [value];
// }
// console.log(wrapInArray<string>("hi"));
// console.log(wrapInArray<number>(5));
// 2. Напиши функцию printKey<T, K extends keyof T>, которая принимает объект и ключ, и выводит значение этого ключа.
// printKey({name: "Alex", age: 25}, "name") // Alex
// function printKey<T, K extends keyof T>(obj: T, str: K) {
//   if (typeof str === "string" && typeof obj === "object") {
//     return obj[str];
//   }
// }
// interface Iobj {
//   name: string;
//   age: number;
// }
// console.log(printKey<Iobj, "name">({ name: "Alex", age: 25 }, "name"));
// 3. Напиши функцию mergeObjects<T, U>, которая объединяет два объекта в один.
// mergeObjects({a: 1}, {b: 2}) // {a: 1, b: 2}
// function mergeObjects<T, U>(obj1: T, obj2: U) {
//   const result = { ...obj1, ...obj2 };
//   return result;
// }
// interface In1 {
//   a: number;
// }
// interface In2 {
//   b: number;
// }
// console.log(mergeObjects<In1, In2>({ a: 1 }, { b: 2 }));
// 4. Напиши функцию doubleOrRepeat<T>, которая:
//  • Если T — число, возвращает число, умноженное на 2
//  • Если T — строка, возвращает строку, повторённую дважды
// doubleOrRepeat(5) // 10
// doubleOrRepeat("Hi") // "HiHi"
// function doubleOrRepeat<T>(value: T) {
//   if (typeof value === "number") return value * 2;
//   if (typeof value === "string") return value + value;
// }
// console.log(doubleOrRepeat<number>(5));
// console.log(doubleOrRepeat<string>("Hi"));
// 5. Функция transformArray<T>:
//  • Если массив чисел — возводит каждый элемент в квадрат
//  • Если массив строк — переводит в верхний регистр
// transformArray([2, 3]) // [4, 9]
// transformArray(["hi", "go"]) // ["HI", "GO"]
// function transformArray<T>(val: T) {
//   if (Array.isArray(val)) {
//     return val.map((elem) => {
//       if (typeof elem === "number") return elem ** 2;
//       if (typeof elem === "string") return elem.toUpperCase();
//     });
//   }
// }
// console.log(transformArray<number[]>([2, 3]));
// console.log(transformArray<string[]>(["hi", "go"]));
// 6. Функция maxOrLongest<T>:
//  • Если числа — возвращает максимальное
//  • Если строки — возвращает самую длинную
// maxOrLongest([3, 8, 5]) // 8
// maxOrLongest(["a", "hello", "hi"]) // "hello"
// function maxOrLongest<T extends number | string>(arr: T[]): T {
//   return arr.reduce((max, el) => {
//     if (typeof el === "number" && typeof max === "number") {
//       return el > max ? el : max;
//     }
//     if (typeof el === "string" && typeof max === "string") {
//       return el.length > max.length ? el : max;
//     }
//     return max;
//   });
// }
// console.log(maxOrLongest([3, 8, 5]));
// console.log(maxOrLongest(["a", "hello", "hi"]));
// 7. Функция evenOrLength<T>:
//  • Если число — возвращает true, если оно чётное
//  • Если строка — возвращает её длину
// evenOrLength(4) // true
// evenOrLength("cat") // 3
// function evenOrLength<T>(val: T) {
//   if (typeof val === "number" && val % 2 == 0) return true;
//   if (typeof val === "string") return val.length;
// }
// console.log(evenOrLength<number>(4));
// console.log(evenOrLength<string>("cat"));
// 8. Функция reverseSmart<T>:
//  • Если числа — реверсирует массив
//  • Если строки — реверсирует буквы в строках массива
// reverseSmart([1, 2, 3]) // [3, 2, 1]
// reverseSmart(["hi", "ok"]) // ["ih", "ko"]
// function reverseSmart<T extends number | string>(arr: T[]): T[] {
//   if (arr.every((el) => typeof el === "number")) {
//     return arr.reverse();
//   }
//   if (arr.every((el) => typeof el === "string")) {
//     return arr.map((str) => [...str].reverse().join("")) as T[];
//   }
//   return arr;
// }
// console.log(reverseSmart([1, 2, 3]));
// console.log(reverseSmart(["hi", "ok"]));
// 9. Функция diffOrLengthDiff<T> принимает два аргумента:
//  • Если числа — возвращает их разницу
//  • Если строки — возвращает разницу в длине
// diffOrLengthDiff(10, 4) // 6
// diffOrLengthDiff("cat", "mouse") // 2
function diffOrLengthDiff(val1, val2) {
    if (typeof val1 === "number" && typeof val2 === "number") {
        return val1 - val2;
    }
    if (typeof val1 === "string" && typeof val2 === "string") {
        if (val1.length > val2.length) {
            return val1.length - val2.length;
        }
        else if (val1.length < val2.length) {
            return val2.length - val1.length;
        }
    }
}
console.log(diffOrLengthDiff(10, 4));
console.log(diffOrLengthDiff("catf", "mouse"));
