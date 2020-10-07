console.log(
  "Task 3 ------------------------------------------------------------"
);

// Task 3
// Variant 1
const findBestEmployee = function (employees) {
  let justStats = Object.values(employees);
  let bestStats = Math.max(...justStats);
  let bestEmployeeName = "";

  // if (Object.keys(employees).length === 0) {
  //   return "";
  // }

  for (const key in employees) {
    if (employees[key] === bestStats) {
      bestEmployeeName = key;
    }
  }
  return bestEmployeeName;
};

// Variant 2
// const findBestEmployee = function (employees) {
//   let bestStats = 0;
//   let bestEmployeeName;

//   if (Object.keys(employees).length === 0) {
//     return "";
//   }

//   for (const key in employees) {
//     if (bestStats < employees[key]) {
//       bestStats = employees[key];
//       bestEmployeeName = key;
//     }
//   }

//   return bestEmployeeName;
// };

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'

// const empty = {};
// console.log(findBestEmployee(empty));
