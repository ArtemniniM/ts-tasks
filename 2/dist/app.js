// 1. Создайте массив чисел и найдите сумму всех нечетных элементов в массиве.
const teams = [
    { id: 1, members: ["Alice", "Bob"] },
    { id: 2, members: ["Bob", "Clara"] },
    { id: 3, members: ["Dave", "Alice"] },
];
const filt = [...new Set(teams.map((el) => el.members).flat())];
console.log(filt);
