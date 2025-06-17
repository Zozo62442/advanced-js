  
// map() --> Execute a function on all elements of an array and return a new array with the results.


// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num * 2);
}
console.log(results); // Output: [2, 4, 6, 8, 10]

// Using map()
const multByTwo = function (num) {
  return num * 2;
};

const mapResults = nums.map(multByTwo);
console.log(mapResults); // Output: [2, 4, 6, 8, 10]

// Simplified w/ map()
const simplified = nums.map(function (num) {
  return num * 2;
});

// Simplfied w/ map() + arrow function
const simplifiedArrow = nums.map(num => num * 2);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.name, students.id]);
console.log(studentsWithIds); // Output: [ [ 'Mark', 1 ], [ 'Ariel', 2 ], [ 'Jason', 3 ] ]

// Extracting only id and name from each student object
const onlyIdsAndNamesStudents = students.map(student => ({
  id: student.id,
  name: student.name
}));

console.log(onlyIdsAndNamesStudents);

// Adding ages to the student objects
const updatedStudents = students.map((student, index) => ({
  id: student.id,
  name: student.name,
  age: ages[index]
}));

console.log(updatedStudents);
