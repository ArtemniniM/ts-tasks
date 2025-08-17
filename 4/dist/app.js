// 1. Создайте класс Rectangle, который содержит свойства width и height, а также метод
// getArea(), который возвращает площадь прямоугольника (ширина * высота). Создайте
// экземпляр класса Rectangle и выведите его площадь.
class NumberOperations {
    arr;
    constructor(arr) {
        this.arr = arr;
    }
    getMax() {
        return this.arr.reduce((max, el) => (el > max ? el : max), this.arr[0]);
    }
    getMin() {
        return this.arr.reduce((min, el) => (el < min ? el : min), this.arr[0]);
    }
    getSum() {
        return this.arr.reduce((sum, el) => sum + el, 0);
    }
    getAverage() {
        return this.arr.reduce((sum, el) => sum + el, 0) / this.arr.length;
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
