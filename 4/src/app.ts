// 1. Создайте класс Rectangle, который содержит свойства width и height, а также метод
// getArea(), который возвращает площадь прямоугольника (ширина * высота). Создайте
// экземпляр класса Rectangle и выведите его площадь.

// interface IObj {
//   width: number;
//   height: number;
//   getArea(): number;
// }

// class Rectangle implements IObj {
//   width: number;
//   height: number;
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   getArea(): number {
//     return this.width * this.height;
//   }
// }
// const rect = new Rectangle(10, 10);
// console.log(rect.getArea());

// 2. Создайте класс Calculator, который содержит методы add() (сложение), subtract() (вычитание),
// multiply() (умножение) и divide() (деление). Создайте экземпляр класса Calculator и
// выполните несколько операций.
// interface Iobj {
//   a: number;
//   b: number;
//   add(): number;
//   subtract(): number;
//   multiply(): number;
//   divide(): number;
// }
// class Calculator implements Iobj {
//   a: number;
//   b: number;
//   constructor(a, b) {
//     this.a = a;
//     this.b = b;
//   }
//   add() {
//     return this.a + this.b;
//   }
//   subtract() {
//     return this.a - this.b;
//   }
//   multiply() {
//     return this.a * this.b;
//   }
//   divide() {
//     if (this.b !== 0) {
//       return this.a / this.b;
//     }
//   }
// }
// const calc = new Calculator(3, 3);
// console.log(calc.add());
// console.log(calc.subtract());
// console.log(calc.multiply());
// console.log(calc.divide());

// 3. Создайте класс CircleR, который содержит свойство radius (радиус круга) и метод getArea()
// (вычисление площади круга). Создайте экземпляр класса CircleR и выведите площадь
// окружности. Площадь круга: π * r^2

// interface Iobj {
//   radius: number;
//   getArea(): number;
// }
// class CircleR implements Iobj {
//   radius: number;
//   constructor(radius) {
//     this.radius = radius;
//   }
//   getArea() {
//     return 3.14 * this.radius ** 2;
//   }
// }
// const AreaFor = new CircleR(3);
// console.log(AreaFor.getArea());

// 4. Создайте класс Product, который содержит объект product (продукт) с полями и price (цена
//     продукта), title (название продукта). Реализуйте метод displayProductInfo(), который выводит
//     массив продуктов, где цена > 20. Создайте экземпляр класса Product и вызовите метод
//     displayProductInfo().
// interface Iobj {
//   title: string;
//   price: number;
// }
// interface cl {
//   products: Array<Iobj>;
// }
// class Product implements cl {
//   products: Iobj[] = [
//     { title: "onion", price: 10 },
//     { title: "carrot", price: 201 },
//     { title: "cheese", price: 320 },
//   ];

//   displayProductInfo() {
//     const resFilt = this.products.filter((el) => el.price > 20);
//     return resFilt;
//   }
// }
// const product = new Product();
// console.log(product.displayProductInfo());

// 5. Создайте класс Library, который содержит список книг. Каждая книга представляет собой
// объект с такими свойствами, как title, author, year, genre. Класс должен содержать следующие
// методы:
// addBook(book) — добавление книги в библиотеку.
// removeBookByTitle(title) — удаление книги по названию.
// getBooksByAuthor(author) — получение всех книг, написанных определенным автором.
// getBooksByYear(year) — получение всех книг, выпущенных в определенный год.
// getBooksByGenre(genre) — получение всех книг в определенном жанре.

// interface Iobj {
//   title: string;
//   author: string;
//   year: number;
//   genre: string;
// }
// interface cl {
//   books: Array<Iobj>;
// }
// class Library implements cl {
//   books: Iobj[] = [
//     {
//       title: "Война и мир",
//       author: "Толстой",
//       year: 1800,
//       genre: "fin",
//     },
//     {
//       title: "Преступление и наказание",
//       author: "Достоевский",
//       year: 1810,
//       genre: "fin",
//     },
//     {
//       title: "Мастер и Маргарита",
//       author: "Булгаков",
//       year: 1820,
//       genre: "rom",
//     },
//     {
//       title: "Анна Каренина",
//       author: "Толстой",
//       year: 1830,
//       genre: "war",
//     },
//     {
//       title: "Братья Карамазовы",
//       author: "Достоевский",
//       year: 1840,
//       genre: "war",
//     },
//     {
//       title: "Тихий Дон",
//       author: "Шолохов",
//       year: 1850,
//       genre: "lir",
//     },
//   ];
//   addBook(book: Iobj) {
//     this.books.push(book);
//   }
//   removeBookByTitle(title) {
//     this.books = this.books.filter((book) => (book.title === title ? false : true));
//     return this.books;
//   }
//   getBooksByAuthor(author) {
//     const resFiltAuth = this.books.filter((auth) => (auth.author === author ? true : false));
//     return resFiltAuth;
//   }

//   getBooksByYear(year) {
//     const resFiltYear = this.books.filter((ye) => (ye.year === year ? true : false));
//     return resFiltYear;
//   }
//   getBooksByGenre(genre) {
//     const resFiltGenre = this.books.filter((gen) => (gen.genre === genre ? true : false));
//     return resFiltGenre;
//   }
// }
// const library = new Library();
// console.log(
//   library.addBook({
//     title: "Тихий Дон",
//     author: "Шолохов",
//     year: 1850,
//     genre: "lir",
//   })
// );
// console.log(library.removeBookByTitle("Война и мир"));
// console.log(library.getBooksByAuthor("Достоевский"));
// console.log(library.getBooksByYear(1820));
//  console.log(library.getBooksByGenre("rom"));

// 6. Создайте класс NumberStats, который будет работать с массивом чисел. Класс должен
// содержать только метод:
// getMode() — находит и возвращает моду массива чисел (самое часто встречающееся число).

// interface Iobj {
//   arr: number[];
//   getMode(): number;
// }
// class NumberStats implements Iobj {
//   arr: number[];
//   constructor(arr) {
//     this.arr = arr;
//   }
//   getMode() {
//     return this.arr.sort((a, b) => this.arr.filter((c) => c === b).length - this.arr.filter((c) => c === a).length)[0];
//   }
// }
// const numberStats = new NumberStats([1, 2, 3, 3, 3, 2, 2, 3]);
// console.log(numberStats.getMode());

// 7. Создайте класс NumberOperations, который должен включать сам массив и методы для
// работы с массивом чисел:
// getMax() — возвращает максимальное число из массива.
// getMin() — возвращает минимальное число из массива.
// getSum() — вычисляет сумму всех чисел в массиве.
// getAverage() — вычисляет среднее значение чисел в массиве.
// getAboveAverage() — возвращает массив чисел, которые выше среднего значения.
// sortAscending() — сортирует массив по возрастанию.
// sortDescending() — сортирует массив по убыванию.
interface Iobj {
  arr: number[];
  getMax(): number;
  getMin(): number;
  getSum(): number;
  getAverage(): number;
  getAboveAverage(): number[];
  sortAscending(): number[];
  sortDescending(): number[];
}
class NumberOperations implements Iobj {
  arr: number[];
  constructor(arr: number[]) {
    this.arr = arr;
  }
  getMax() {
    return this.arr.reduce((max, el) => (el > max ? el : max), this.arr[0]);
  }
  getMin() {
    return this.arr.reduce((min, el) => (el < min ? el : min), this.arr[0]);
  }
  getSum() {
    return this.arr.reduce((sum: number, el: number) => sum + el, 0);
  }
  getAverage() {
    return this.arr.reduce((sum: number, el: number) => sum + el, 0) / this.arr.length;
  }
  getAboveAverage() {
    const avg = this.getAverage();
    return this.arr.filter((el) => el > avg);
  }
  sortAscending() {
    return [...this.arr].sort((a, b) => a - b);
  }

  sortDescending() {
    return [...this.arr].sort((a, b) => b - a);
  }
}
const oper = new NumberOperations([1, 2, 3, 3, 4, 2, 3]);
console.log(oper.getMax());
console.log(oper.getMin());
console.log(oper.getSum());
console.log(oper.getAverage());
console.log(oper.getAboveAverage());
console.log(oper.sortAscending());
console.log(oper.sortDescending());
