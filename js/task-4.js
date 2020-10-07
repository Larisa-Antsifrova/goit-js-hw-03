console.log(
  "Task 4 ------------------------------------------------------------"
);
const countTotalSalary = function (employees) {
  const totalArray = Object.values(employees);
  let totalSalary = 0;

  for (const item of totalArray) {
    totalSalary += item;
  }

  return totalSalary;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500

const empty = {};
console.log(countTotalSalary(empty));
// 0
