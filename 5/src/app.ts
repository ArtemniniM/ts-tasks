// 1. Базовый класс хранит массив строк. Наследник добавляет метод filterLong(minLength) —
// возвращает строки длиной больше minLength.

// interface IStringArrayHolder {
//   arr: string[];
// }

// class Base implements IStringArrayHolder {
//   arr: string[];

//   constructor(arr: string[]) {
//     this.arr = arr;
//   }
// }

// class Filter extends Base {
//   filterLong(minLength: number): string[] {
//     return this.arr.filter((str) => str.length > minLength);
//   }
// }

// const instance = new Filter(["hello", "hi", "typescript", "js"]);
// console.log(instance.filterLong(3));

// 2. Создать базовый класс NumberArray, который хранит массив чисел и предоставляет метод
// getArray() для его получения. Создать класс-наследник FilteredNumberArray, который добавляет
// свойство threshold и метод sumAboveThreshold() — возвращает сумму чисел из массива родителя,
// больших порога.
// [1, 2, 3, 4, 5], порог 3 → sumAboveThreshold() = 9
// [10, 20, 30], порог 15 → sumAboveThreshold() = 50
// interface C1 {
//   arr: number[];
//   getArray(): number[];
// }
// interface C2 {
//   threshold: number;
//   sumAboveThreshold(): number;
// }

// class NumberArray implements C1 {
//   arr: number[] = [1, 2, 3, 4, 5];
//   getArray(): number[] {
//     return this.arr;
//   }
// }
// class FilteredNumberArray extends NumberArray implements C2 {
//   threshold: number = 3;
//   sumAboveThreshold(): number {
//     return this.arr.reduce((sum: number, el: number) => (el > this.threshold ? sum + el : sum), 0);
//   }
// }
// // const filt = new FilteredNumberArray();
// // console.log(filt.sumAboveThreshold());

// // 3. Базовый класс StringProcessor с методом process(), который возвращает строку в верхнем регистре.
// // Наследник ReversedStringProcessor переопределяет process() и возвращает перевёрнутую строку
// // в большом регистре.
// // "hello" → "HELLO" (родитель)
// // "hello" → “OLLEH" (наследник)
// // interface C1 {
// //   process(str: string): string;
// // }
// // class StringProcessor implements C1 {
// //   process(str: string): string {
// //     return str.toUpperCase();
// //   }
// // }
// // class ReversedStringProcessor extends StringProcessor implements C1 {
// //   override process(str: string): string {
// //     return super.process(str).split("").reverse().join("");
// //   }
// // }
// // const reverse = new ReversedStringProcessor();
// // console.log(reverse.process("ortem"));

// // 4. Создать базовый класс ObjectFilter с методом filterKeys() — возвращает все ключи объекта,
// // начинающиеся с буквы "a". Создать класс-наследник FilteredObjectLength с дополнительным
// // методом filterLongKeys() — возвращает ключи из родителя, длина которых больше 3.
// // { age: 20, amount: 50, name: "Bob" } → ["age", "amount"] (родитель)
// // { age: 20, amount: 50, name: "Bob" } → ["amount"] (наследник)

// interface Iobj {
//   age: number;
//   amount: number;
//   name: string;
// }

// interface ObjFil {
//   filterKeys(): string[];
// }

// interface Long extends ObjFil {
//   filterLongKeys(): string[];
// }

// class ObjectFilter {
//   filterKeys(): string[] {
//     return Object.keys(this.obj).filter((key) => key.startsWith("a"));
//   }
// }
// class FilteredObjectLength extends ObjectFilter implements Long {
//   filterLongKeys(): string[] {
//     return this.filterKeys().filter((key) => key.length > 3);
//   }
// }
// const data: Iobj = { age: 20, amount: 50, name: "Bob" };

// const base = new ObjectFilter(data);
// console.log(base.filterKeys());

// const extended = new FilteredObjectLength(data);
// console.log(extended.filterLongKeys());

// 5. Базовый класс NumberFilter с методом filterEven() — возвращает только чётные числа. Наследник
// NumberFilterDivisible переопределяет метод и возвращает числа, делящиеся на заданное число n.
// [1, 2, 3, 4, 5], n=2 → [2, 4] (родитель)

// interface C1 {
//   array: number[];
//   filterEven(): number[];
// }
// class NumberFilter implements C1 {
//   array: number[] = [1, 2, 3, 4, 5];
//   filterEven(): number[] {
//     return this.array.filter((el: number) => el % 2 === 0);
//   }
// }
// class NumberFilterDivisible extends NumberFilter implements C1 {
//   n: number = 2;
//   override filterEven(): number[] {
//     return super.filterEven().filter((el) => el % this.n === 0);
//   }
// }
// const numberDivis = new NumberFilterDivisible();
// console.log(numberDivis.filterEven());

// 6. Базовый класс хранит текст. Наследник добавляет метод getWordsStartingWith(letter) —
// возвращает слова, начинающиеся с указанной буквы.
// interface Cl1 {
//   text: string;
// }
// interface Cl2 {
//   getWordsStartingWith(letter: string): string[];
// }
// class BaseText implements Cl1 {
//   text: string =
//     "Text messages are used for personal, family, business, and social purposes. Governmental and non-governmental organizations use text messaging for communication between colleagues.";
// }
// class Letters extends BaseText implements Cl2 {
//   getWordsStartingWith(letter: string): string[] {
//     return this.text.split(" ").filter((el) => el[0] === letter);
//   }
// }
// const letterStart = new Letters();
// console.log(letterStart.getWordsStartingWith("a"));

// 7. Базовый класс TextFilter с методом filterWords(text) — возвращает все слова, начинающиеся с
// заглавной буквы. Наследник LongWordFilter переопределяет метод и возвращает только слова
// длиной больше 5.
// "Hello World from TypeScript" → ["Hello", "World", "TypeScript"] (родитель)
// "Hello World from TypeScript" → ["TypeScript"] (наследник)

// interface Cl {
//   filterWords(text: string): string[];
// }

// class TextFilter implements Cl {
//   filterWords(text: string): string[] {
//     return text.split(" ").filter((el: string) => el[0] === el[0].toUpperCase());
//   }
// }

// class LongWordFilter extends TextFilter implements Cl {
//   filterWords(text: string): string[] {
//     return super.filterWords(text).filter((word: string) => word.length > 5);
//   }
// }

// const long = new LongWordFilter();
// console.log(long.filterWords("Hello World from TypeScript"));

// 8. Базовый класс ArrayUpper с методом toUpperCaseArray() — возвращает все строки в верхнем
// регистре. Наследник FilteredArrayUpper переопределяет метод и возвращает только строки
// длиной больше 3.
// [“a”, “ab”, “abc”, “abcd”] → [“A”, “AB”, “ABC”, “ABCD”] (родитель)
// [“a”, “ab”, “abc”, “abcd”] → [“ABCD”] (наследник)

// interface CL {
//   toUpperCaseArray(arr: string[]): string[];
// }
// class ArrayUpper implements CL {
//   toUpperCaseArray(arr: string[]): string[] {
//     return arr.map((el) => el.toUpperCase());
//   }
// }
// class FilteredArrayUpper extends ArrayUpper implements CL {
//   toUpperCaseArray(arr: string[]): string[] {
//     return super.toUpperCaseArray(arr).filter((el) => el.length > 3);
//   }
// }
// const res = new FilteredArrayUpper();
// console.log(res.toUpperCaseArray(["a", "ab", "abc", "abcd"]));

// 9. Базовый класс Multiplier с методом multiplyByTwo() — умножает все числа массива на 2. Наследник
// CustomMultiplier переопределяет метод и возвращает все четные элементы массива.
interface CL {
  multiplyByTwo(arr: number[]): number[];
}
class Multiplier implements CL {
  multiplyByTwo(arr: number[]): number[] {
    return arr.map((el: number) => el * 2);
  }
}
class CustomMultiplier extends Multiplier implements CL {
  multiplyByTwo(arr: number[]): number[] {
    return super.multiplyByTwo(arr).filter((el: number) => el % 2 == 0);
  }
}
const multi = new CustomMultiplier();
console.log(multi.multiplyByTwo([1, 2, 3]));
