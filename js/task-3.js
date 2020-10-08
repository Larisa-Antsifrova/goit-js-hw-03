console.log(
  "Task 3 ------------------------------------------------------------"
);

// Variant 1
const findBestEmployee = function (employees) {
  let bestStats = Math.max(...Object.values(employees));
  let bestEmployeeName = "";

  for (const key in employees) {
    if (employees[key] === bestStats) {
      // For homework
      // bestEmployeeName = key;

      // For real people
      bestEmployeeName = key[0].toUpperCase() + key.slice(1);
    }
  }
  return bestEmployeeName;
};

// Variant 2
// const findBestEmployee = function (employees) {
//   let bestStats = 0;
//   let bestEmployeeName = "";

//   for (const key in employees) {
//     if (bestStats < employees[key]) {
//       bestStats = employees[key];
//       bestEmployeeName = key;
//     }
//   }

//   return bestEmployeeName;
// };

// Variant by Zhenia Ch.
// const findBestEmployee = function (employees) {
//   let bestEmployee = "";
//   let value = 0;
//   const entries = Object.entries(employees);

//   for (const entry of entries) {
//     if (entry[1] > value) {
//       value = entry[1];
//       bestEmployee = entry[0];
//     }
//   }
//   return bestEmployee;
// };

// Variant by Katrin P.
// const findBestEmployee = function (employees) {
//   const values = Object.values(employees);
//   const max = Math.max(...values);
//   const entries = Object.entries(employees);
//   let maxName = "";

//   for (const entry of entries) {
//     if (entry[1] === max) {
//       maxName = entry[0];
//     }
//   }
//   return maxName;
// };

//  Variant by Roma
// const findBestEmployee = function (employees) {
//   let bestEmployee = "";
//   let bestHour = 0;
//   const persons = Object.entries(employees);

//   for (const person of persons) {
//     if (person[1] > bestHour) {
//       bestHour = person[1];
//       bestEmployee = person[0];
//     }
//   }
//   return bestEmployee;
// };

// Variant by Ruslan Z.
// const findBestEmployee = function (employees) {
//   const entries = Object.entries(employees);
//   let employeeName = "";
//   let numberOfWorks = 0;

//   for (let i = 0; i < entries.length; i++) {
//     if (numberOfWorks < entries[i][1]) {
//       numberOfWorks = entries[i][1];
//       employeeName = entries[i][0];
//     }
//   }
//   return employeeName;
// };

// Variant by Alexandr S.
// const findBestEmployee = function (employees) {
//   // Находим самое большое значение у свойств передаваемого объекта
//   let maxValue = Math.max.apply(null, Object.values(employees));

//   // Находим какому свойству объекта соответствует самое большое значение
//   let maxProp = Object.keys(employees).find(
//     (item) => employees[item] === maxValue
//   );
//   return maxProp === undefined ? "" : maxProp;
// };

// ---------------------------------------------------------------------------
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

const empty = {};
console.log(findBestEmployee(empty));
// ''
