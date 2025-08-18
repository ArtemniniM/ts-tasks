// 1. Создайте абстрактный класс Shape (Фигура) с абстрактным методом calculateArea()
// (вычислитьПлощадь). Затем создайте дочерний класс Rectangle (Прямоугольник), который
// наследует Shape и реализует метод calculateArea() для расчета площади прямоугольника. Формула
// для вычисления площади прямоугольника: S = длина * ширина
// Входные: Rectangle(5, 4) → Результат: 20
// Входные: Rectangle(10, 3) → Результат: 30
// Входные: Rectangle(7, 7) → Результат: 49

// abstract class Shape {
//   abstract calculateArea(): number;
// }

// class Rectangle extends Shape {
//   constructor(private readonly a: number, private readonly b: number) {
//     super();
//     if (a <= 0 || b <= 0) {
//       throw new Error("Стороны прямоугольника должны быть положительными числами");
//     }
//   }
//   calculateArea(): number {
//     return this.a * this.b;
//   }
// }

// const s = new Rectangle(5, 4);
// console.log(s.calculateArea());

// 2. Создайте абстрактный класс Animal (Животное) с абстрактным методом makeSound() (издатьЗвук).
// Затем создайте два дочерних класса:
// • Dog
// • Cat
// Каждый из этих классов должен наследовать Animal и реализовывать метод makeSound(),
// возвращая соответствующий звук животного.
// Входные: Dog().makeSound() → Результат: "Гав-гав"
// Объяснение: Метод makeSound() для объекта класса Dog должен вернуть звук собаки.
// Входные: Cat().makeSound() → Результат: "Мяу"
// Объяснение: Метод makeSound() для объекта класса Cat должен вернуть звук кошки.
// abstract class Animal {
//   abstract makeSound(): string;
// }

// class Dog extends Animal {
//   makeSound(): string {
//     return "Гав-гав";
//   }
// }

// class Cat extends Animal {
//   makeSound(): string {
//     return "Мяу";
//   }
// }

// const dog = new Dog();
// console.log(dog.makeSound());

// const cat = new Cat();
// console.log(cat.makeSound());

// 3. Создайте интерфейс iAccount со следующими методами:
// • balance: хранит цисловое значение баланса света
// • getBalance(): возвращает текущий баланс счета
// • deposit(amount: number): пополняет счет на указанную сумму
// • withdraw(amount: number): снимает указанную сумму со счета
// Реализуйте класс Account, который имплементирует интерфейс iAccount. Реализуйте все методы
// интерфейса. Перед снятием withdraw проверяйте, достаточно ли средств на счете. Если средств
// недостаточно, выбрасывайте ошибку.

// interface iAccount {
//   balance: number;
//   getBalance(): number;
//   deposit(amount: number): number;
//   withdraw(amount: number): number;
// }

// class Account implements iAccount {
//   balance: number = 100;

//   getBalance(): number {
//     return this.balance;
//   }

//   deposit(amount: number): number {
//     if (amount <= 0) {
//       throw new Error("Сумма пополнения должна быть положительной");
//     }
//     this.balance += amount;
//     return this.balance;
//   }

//   withdraw(amount: number): number {
//     if (amount <= 0) {
//       throw new Error("Сумма снятия должна быть положительной");
//     }
//     if (amount > this.balance) {
//       throw new Error("Недостаточно средств на счете");
//     }
//     this.balance -= amount;
//     return this.balance;
//   }
// }
// const acc = new Account();
// console.log(acc.getBalance());
// console.log(acc.deposit(3));
// console.log(acc.withdraw(2));

// 4. Создайте абстрактный класс "Транспортное средство" (Vehicle), в котором будут два абстрактных
// метода: "завести" (start) и "остановить" (stop). Реализуйте два класса-наследника — "Автомобиль"
// (Car) и "Мотоцикл" (Motorcycle). Эти классы должны расширять класс "Транспортное средство" и
// реализовать методы "завести" и "остановить", чтобы они соответствовали поведению этих
// транспортных средств (например, через console.log).
// Входные:
// let car = new Car();
// car.start();
// → Результат: Car started
// Входные:
// let car = new Car();
// car.stop();
// → Результат: Car stopped
// Входные:
// let motorcycle = new Motorcycle();
// motorcycle.start();
// → Результат: Motorcycle started
// Входные:
// let motorcycle = new Motorcycle();
// motorcycle.stop();
// → Результат: Motorcycle stopped

// abstract class Vehicle {
//   abstract start(): void;
//   abstract stop(): void;
// }

// class Car extends Vehicle {
//   start(): void {
//     console.log("Car started");
//   }

//   stop(): void {
//     console.log("Car stopped");
//   }
// }

// class Motorcycle extends Vehicle {
//   start(): void {
//     console.log("Motorcycle started");
//   }

//   stop(): void {
//     console.log("Motorcycle stopped");
//   }
// }

// let car = new Car();
// car.start();
// car.stop();

// let motorcycle = new Motorcycle();
// motorcycle.start();
// motorcycle.stop();

// !!!!!!5. Создайте абстрактный класс Fruit (Фрукт) со следующим полем:
// • fruits: массив объектов, где каждый объект имеет свойства id, title
// (название) и price (цена)
// Затем создайте дочерний класс Apple (Яблоко), который наследует
// Fruit. В классе Apple реализуйте метод getAppleInfo(), который должен
// возвращать информацию о яблоке из массива fruits, где title равно
// "яблоко".
// Входные: [ {"id": 1, "title": "яблоко", "price": 50}, {"id": 2, "title": "банан", "price": 30}, {"id": 3, "title": "груша", "price":
//     45} ]
//     → Результат: {"id": 1, "title": "яблоко", "price": 50}
//     Входные: [ {"id": 1, "title": "банан", "price": 35}, {"id": 2, "title": "киви", "price": 70}} ] → Результат: null

// interface iFruit {
//   id: number;
//   title: string;
//   price: number;
// }

// abstract class FruitStore {
//   protected readonly arr: iFruit[];
//   constructor(fruits: iFruit[]) {
//     this.arr = fruits;
//   }

//   getByTitle(title: string): iFruit[] {
//     return this.arr.filter((el) => el.title.toLowerCase() === title.toLowerCase());
//   }
// }

// class AppleStore extends FruitStore {
//   getApples(): iFruit[] {
//     return this.getByTitle("яблоко");
//   }
// }
// const appleSearch = new AppleStore([
//   { id: 1, title: "яблоко", price: 50 },
//   { id: 2, title: "банан", price: 30 },
//   { id: 3, title: "груша", price: 45 },
// ]);
// console.log(appleSearch.getApples());

// 6. Создайте интерфейс iValidation, который будет описывать методы для проверки: isValidEmail(),
// isValidDate(), isValidPath(). Создайте класс Validation, который реализует интерфейс iValidation.
// Класс будет иметь публичные методы: isValidEmail(), isValidDate(), isValidPath(). Конструктор класса
// Validation должен принимать параметры email, date, path и инициализировать их как поля класса.
//
// Входные:
// let validation = new Validation('invalid-email', '2023-09-
// 10', '/usr/local/bin');
// validation.isValidEmail();
// → Результат: false

// interface iValidation {
//   isValidEmail(): boolean;
//   isValidDate(): boolean;
//   isValidPath(): boolean;
// }
// class Validation implements iValidation {
//   constructor(public email: string, public data: string, public path: string) {
//     this.email = email;
//     this.data = data;
//     this.path = path;
//   }
//   isValidEmail() {
//     const template = /^[A-Za-z0-9\.\-\_]+@[a-z]+\.[a-z]{2,3}$/gm;
//     return template.test(this.email);
//   }
//   isValidDate() {
//     const template = /^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{4}/gm;
//     return template.test(this.data);
//   }
//   isValidPath() {
//     const template = /[A-Z]\:\\[A-Za-z]+\\[A-Za-zа-яА-Я]+\\[A-Za-zа-яА-Я]+\\[A-Za-zа-яА-Я]+/gm;
//     return template.test(this.path);
//   }
// }
// const res = new Validation("example@mail.com", "10.08.2025", "C:\\Users\\ИмяПользователя\\Documents\\МояПапка");
// console.log(res.isValidDate());
// console.log(res.isValidEmail());
// console.log(res.isValidPath());
// console.log(res.isValidEmail());

// 7. Создайте класс ArrayAnalyzer, который будет содержать массив чисел как поле класса,
// инициализируемое через конструктор. Реализуйте методы:
// • getAverage для вычисления среднего значения массива,
// • getMax для поиска максимального значения в массиве,
// • getMin для поиска минимального значения в массиве.

// Входные:
// let analyzer = new ArrayAnalyzer([1, 2, 3, 4, 5]);
// analyzer.getAverage();
// → Результат: 3
// Входные:
// let analyzer = new ArrayAnalyzer([10, 20, 5, 30, 15]);
// analyzer.getMax();
// → Результат: 30

// interface Iobj {
//   arr: number[];
//   getAverage(): number;
//   getMax(): number;
//   getMin(): number;
// }

// class ArrayAnalyzer implements Iobj {
//   arr: number[];
//   constructor(arr: number[]) {
//     this.arr = arr;
//   }
//   getAverage(): number {
//     return this.arr.reduce((sum: number, el: number) => sum + el, 0) / this.arr.length;
//   }
//   getMax(): number {
//     return this.arr.reduce((acc: number, el: number) => (acc > el ? (acc = el) : acc));
//   }
//   getMin(): number {
//     return this.arr.reduce((acc: number, el: number) => (acc < el ? (acc = el) : acc));
//   }
// }
// const analyzer = new ArrayAnalyzer([10, 20, 5, 30, 15]);
// console.log(analyzer.getAverage());
// console.log(analyzer.getMax());
// console.log(analyzer.getMin());

// 8. Создайте класс StringManipulator, который будет иметь три метода:
// • reverseString(str) — разворачивает строку,
// • isPalindrome(str) — проверяет, является ли строка палиндромом,
// • countVowels(str) — подсчитывает количество гласных букв в строке.
// Входные:
// let manipulator = new StringManipulator();
// manipulator.isPalindrome('madam');
// // → Результат: true

// interface Iobj {
//   reverseString(str: string): string;
//   isPalindrome(str: string): boolean;
//   countVowels(str: string): number;
// }
// class StringManipulator implements Iobj {
//   reverseString(str: string): string {
//     return str.split("").reverse().join("");
//   }
//   isPalindrome(str: string): boolean {
//     return str === str.split("").reverse().join("");
//   }
//   countVowels(str: string): number {
//     const vowels: string[] = ["a", "e", "y", "u", "i", "o"];
//     const spl: string[] = str.split("");
//     let count: number = 0;
//     let i: number = 0;
//     while (i < spl.length) {
//       if (vowels.includes(spl[i])) {
//         count++;
//       }
//       i++;
//     }
//     return count;
//   }
// }
// let manipulator = new StringManipulator();
// console.log(manipulator.reverseString("mdam"));
// console.log(manipulator.isPalindrome("madam"));
//  console.log(manipulator.countVowels("madam"));

// 9. Создайте интерфейс iPwd, который описывает метод showPwd. Реализуйте класс Pwd, который
// будет содержать метод showPwd, возвращающий случайно сгенерированный пароль из 8 цифр.
// Создайте класс Validation, который наследуется от Pwd и переопределяет метод showPwd,
// вызывая метод родительского класса через super и дополняя его выводом результата в консоль.

// interface iPwd {
//   showPwd(): string;
// }

// class Pwd implements iPwd {
//   showPwd(): string {
//     let pwd = "";
//     for (let i = 0; i < 8; i++) {
//       pwd += Math.floor(Math.random() * 10);
//     }
//     return pwd;
//   }
// }

// class Validation extends Pwd {
//   showPwd(): string {
//     const password = super.showPwd();
//     console.log(`pass: ${password}`);
//     return password;
//   }
// }
// const validPwd = new Validation();
// validPwd.showPwd();

// 10. Создайте абстрактный класс University, который содержит:
// • абстрактный метод getStudentById(id: number),
// • поле students — массив объектов студентов.
// Реализуйте класс Student, который наследуется от University и реализует метод getStudentById,
// возвращающий объект студента по его ID.
// const students = [
//  new Student(1, 'Alice'),
//  new Student(2, 'Bob'),
//  new Student(3, 'Charlie')
// ];
// Входные:
// let university = new UniversityStudent([
//  new Student(1, 'Alice'),
//  new Student(2, 'Bob')
// ]);
// university.getStudentById(1);
// → Результат: { id: 1, name: 'Alice' }

// interface IStudent {
//   id: number;
//   name: string;
// }

// abstract class University {
//   protected students: IStudent[];
//   constructor(students: IStudent[]) {
//     this.students = students;
//   }
//   abstract getStudentById(id: number): IStudent;
// }

// class UniversityStudent extends University {
//   getStudentById(id: number): IStudent {
//     for (const student of this.students) {
//       if (student.id === id) {
//         return student;
//       }
//     }
//   }
// }

// class Student implements IStudent {
//   constructor(public id: number, public name: string) {}
// }

// const students: IStudent[] = [new Student(1, "Alice"), new Student(2, "Bob"), new Student(3, "Charlie")];
// const university = new UniversityStudent(students);
// console.log(university.getStudentById(1));

// 11. Создайте класс Counter и интерфейс класса iCounter. У класса должно быть:
// • Приватное свойство count.
// • Публичный Метод increment — увеличивает значение счётчика на 1 и возвращает .
// • Публичный Метод decrement — уменьшает значение счётчика на 1 и возвращает .

// interface iCounter {
//   increment(): number;
//   decrement(): number;
// }

// class Counter implements iCounter {
//   private count: number = 0;
//   public increment(): number {
//     return ++this.count;
//   }
//   public decrement(): number {
//     return --this.count;
//   }
// }
// const count = new Counter();
// console.log(count.increment());
// console.log(count.decrement());

// 12. Необходимо реализовать класс QuoteGenerator, добавить интерфейс класса iQuoteGenerator,
// который содержит список приватных цитат arr и публичный метод getRandomQuote() для
// получения случайной цитаты из массива.

// interface iQuoteGenerator {
//   getRandomQuote(): string;
// }

// class QuoteGenerator implements iQuoteGenerator {
//   private quotes: string[] = [
//     "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
//     "Life is 10% what happens to us and 90% how we react to it. — Charles R. Swindoll",
//     "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
//     "Believe you can and you're halfway there. — Theodore Roosevelt",
//     "Do not watch the clock. Do what it does. Keep going. — Sam Levenson",
//     "Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman",
//     "It does not matter how slowly you go as long as you do not stop. — Confucius",
//     "Your time is limited, don't waste it living someone else's life. — Steve Jobs",
//     "The best way to predict the future is to create it. — Peter Drucker",
//     "You miss 100% of the shots you don't take. — Wayne Gretzky",
//   ];
//   getRandomQuote() {
//     const res = Math.floor(Math.random() * (this.quotes.length - 1));
//     return this.quotes[res];
//   }
// }
// const random = new QuoteGenerator();
// console.log(random.getRandomQuote());

// 13. Создайте интерфейс INumberStats, который описывает следующие методы:
// • getEvenNumbers(): number[] — возвращает массив всех чётных чисел.
// • getAverage(): number — возвращает среднее значение всех чисел.
// • getPositiveNumbersCount(): number — возвращает количество положительных чисел в
// массиве.
// Создайте класс NumberStats, который реализует интерфейс INumberStats.
// Класс должен принимать массив чисел number[] в конструкторе и реализовывать все методы
// интерфейса. Также добавьте инкапсуляцию: скрывайте внутренний массив чисел, позволяя
// работать с ним только через методы класса.

// interface INumberStats {
//   getEvenNumbers(): number[];
//   getAverage(): number;
//   getPositiveNumbersCount(): number;
// }

// class NumberStats implements INumberStats {
//   private arr: number[];
//   constructor(arr: number[]) {
//     this.arr = arr;
//   }
//   getEvenNumbers(): number[] {
//     return this.arr.filter((n) => n % 2 === 0);
//   }
//   getAverage(): number {
//     return this.arr.reduce((res: number, el: number) => res + el, 0) / this.arr.length;
//   }
//   getPositiveNumbersCount(): number {
//     return this.arr.reduce((acc: number, el: number) => (el > 0 ? acc + 1 : acc), 0);
//   }
// }
// const stats = new NumberStats([1, 2, 3, 4, -1]);
// console.log(stats.getEvenNumbers());
// console.log(stats.getAverage());
// console.log(stats.getPositiveNumbersCount());

// 14. Создайте класс User, содержащий 1 поле массива User[], где каждый объект:
// • Name = string
// • Age = number
// • Gender = 'male' | 'female'
// Создайте класс UserFilter, наследующийся от User и реализует методы:
// • filterByAge(min: number, max: number): User[] — возвращает пользователей с возрастом от
// min до max включительно
// • filterByGender(gender: 'male' | 'female'): User[] — возвращает пользователей с заданным полом

// interface iUser {
//   name: string;
//   age: number;
//   gender: "male" | "female";
// }

// class User {
//   constructor(public user: iUser[]) {}
// }

// class UserFilter extends User {
//   filterByAge(min: number, max: number): iUser[] {
//     return this.user.filter((el: iUser) => el.age > min && el.age < max);
//   }
//   filterByGender(gender: "male" | "female") {
//     return this.user.filter((el) => el.gender === gender);
//   }
// }
// const users: iUser[] = [
//   { name: "Artem", age: 25, gender: "male" },
//   { name: "Olga", age: 30, gender: "female" },
//   { name: "Ivan", age: 40, gender: "male" },
//   { name: "Darya", age: 22, gender: "female" },
// ];

// const userFilter = new UserFilter(users);
// console.log(userFilter.filterByAge(25, 35));
// console.log(userFilter.filterByGender("male"));

// 15. Создайте класс TextAnalyzer и интерфейс класса iTextAnalyzer, который принимает строку в
// конструкторе.
// Реализуйте методы:
// • getUniqueWords() — возвращает массив уникальных слов в заданной строке,
// отсортированных по алфавиту (метод sort)
// • getWordFrequency() — возвращает объект, в котором ключ — слово, значение — количество
// вхождений

// interface iTextAnalyzer {
//   getUniqueWords(): string[];
//   getWordFrequency(): void;
// }

// class TextAnalyzer implements iTextAnalyzer {
//   private str: string;
//   constructor(str: string) {
//     this.str = str;
//   }
//   getUniqueWords() {
//     const spl = this.str.split(" ");
//     let arr = [];
//     for (let i = 0; i < spl.length; i++) {
//       if (!arr.includes(spl[i])) {
//         arr.push(spl[i]);
//       }
//     }
//     return arr.sort();
//   }
//   getWordFrequency(): void {
//     const spl = this.str.split(" ");
//     let object = {};
//     for (let i: number = 0; i < spl.length; i++) {
//       if (object.hasOwnProperty(spl[i])) {
//         object[spl[i]] += 1;
//       } else {
//         object[spl[i]] = 1;
//       }
//     }
//     console.log(object);
//   }
// }
// const str = new TextAnalyzer("ahis generate v strings random text text text strings generate.");
// console.log(str.getUniqueWords());
// str.getWordFrequency();

// 16. Создайте интерфейс IChecker, описывающий методы:
// • hasNumbers(): boolean — строка содержит хотя бы одну цифру
// • hasUpperCase(): boolean — строка содержит хотя бы одну заглавную букву
// • hasSymbols(): boolean — строка содержит хотя бы один специальный символ (!@#$%^&*())
// Создайте класс StringChecker, который реализует интерфейс и принимает строку в
// конструкторе.
// Каждый метод должен использовать регулярные выражения для выполнения проверок.

// interface IChecker {
//   str: string;
//   hasNumbers(): boolean;
//   hasUpperCase(): boolean;
//   hasSymbols(): boolean;
// }

// class StringChecker implements IChecker {
//   str: string;

//   constructor(str: string) {
//     this.str = str;
//   }

//   hasNumbers(): boolean {
//     return /\d/.test(this.str);
//   }

//   hasUpperCase(): boolean {
//     return /[A-ZА-Я]/.test(this.str);
//   }

//   hasSymbols(): boolean {
//     return /[!@#$%^&*()]/.test(this.str);
//   }
// }
// const checker = new StringChecker("Hello@2025");
// console.log(checker.hasNumbers());
// console.log(checker.hasUpperCase());
// console.log(checker.hasSymbols());
