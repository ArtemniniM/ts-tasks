// 1. Создайте абстрактный класс Shape (Фигура) с абстрактным методом calculateArea()
// (вычислитьПлощадь). Затем создайте дочерний класс Rectangle (Прямоугольник), который
// наследует Shape и реализует метод calculateArea() для расчета площади прямоугольника. Формула
// для вычисления площади прямоугольника: S = длина * ширина
// Входные: Rectangle(5, 4) → Результат: 20
// Входные: Rectangle(10, 3) → Результат: 30
// Входные: Rectangle(7, 7) → Результат: 49
class TextAnalyzer {
    str;
    constructor(str) {
        this.str = str;
    }
    getUniqueWords() {
        const spl = this.str.split(" ");
        let arr = [];
        for (let i = 0; i < spl.length; i++) {
            if (!arr.includes(spl[i])) {
                arr.push(spl[i]);
            }
        }
        return arr.sort();
    }
    getWordFrequency() {
        const spl = this.str.split(" ");
        let object = {};
        for (let i = 0; i < spl.length; i++) {
            if (object.hasOwnProperty(spl[i])) {
                object[spl[i]] += 1;
            }
            else {
                object[spl[i]] = 1;
            }
        }
        console.log(object);
    }
}
const str = new TextAnalyzer("ahis generate v strings random text text text strings generate.");
console.log(str.getUniqueWords());
console.log(str.getWordFrequency());
