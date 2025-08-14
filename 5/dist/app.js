// 1. Базовый класс хранит массив строк. Наследник добавляет метод filterLong(minLength) —
// возвращает строки длиной больше minLength.
class Multiplier {
    multiplyByTwo(arr) {
        return arr.map((el) => el * 2);
    }
}
class CustomMultiplier extends Multiplier {
    multiplyByTwo(arr) {
        return super.multiplyByTwo(arr).filter((el) => el % 2 == 0);
    }
}
const multi = new CustomMultiplier();
console.log(multi.multiplyByTwo([1, 2, 3]));
