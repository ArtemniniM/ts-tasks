// 1. Создайте класс Rectangle, который содержит свойства width и height, а также метод
// getArea(), который возвращает площадь прямоугольника (ширина * высота). Создайте
// экземпляр класса Rectangle и выведите его площадь.
class NumberOperations {
    arr;
    constructor(arr) {
        this.arr = arr;
    }
    getMax() {
        let max = 0;
        this.arr.forEach((el) => (el > max ? (max = el) : el));
        return max;
    }
    getMin() {
        return this.arr.reduce((acc, el) => (el < acc ? (acc = el) : acc));
    }
    getSum() {
        return this.arr.reduce((sum, el) => sum + el, 0);
    }
    getAverage() { }
    getAboveAverage() { }
    sortAscending() { }
    sortDescending() { }
}
const oper = new NumberOperations([1, 2, 3, 3, 4, 2, 3]);
console.log(oper.getMax());
console.log(oper.getMin());
console.log(oper.getSum());
console.log(oper.getAverage());
console.log(oper.getAboveAverage());
console.log(oper.sortAscending());
console.log(oper.sortDescending());
