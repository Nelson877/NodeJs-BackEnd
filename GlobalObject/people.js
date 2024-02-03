const people = ["Erica", "Eric", "Mary", "Paul", "Mensah"];
const age = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(people);

// exporting two files
module.exports = {
  people,
  age,
};
// exporting one file
// module.exports = people
