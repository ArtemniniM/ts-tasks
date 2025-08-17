// 1. Создайте абстрактный класс Shape (Фигура) с абстрактным методом calculateArea()
// (вычислитьПлощадь). Затем создайте дочерний класс Rectangle (Прямоугольник), который
// наследует Shape и реализует метод calculateArea() для расчета площади прямоугольника. Формула
// для вычисления площади прямоугольника: S = длина * ширина
// Входные: Rectangle(5, 4) → Результат: 20
// Входные: Rectangle(10, 3) → Результат: 30
// Входные: Rectangle(7, 7) → Результат: 49
class University {
    students;
    constructor(students) {
        this.students = students;
    }
}
class UniversityStudent extends University {
    getStudentById(id) {
        for (const student of this.students) {
            if (student.id === id) {
                return student;
            }
        }
    }
}
class Student {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const students = [new Student(1, "Alice"), new Student(2, "Bob"), new Student(3, "Charlie")];
const university = new UniversityStudent(students);
console.log(university.getStudentById(1));
