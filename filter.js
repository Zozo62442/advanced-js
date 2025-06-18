// Filter unwanted elements from an array based on a condition.
// Filter always returns a new array, leaving the original array unchanged.

// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough); // [ { name: 'Michael', age: 23 } ]

const paul = people.filter(p => p.name === "Paul"); //Filter out only Paul
const paul2 = people.filter(p => p.name === "Paul")[0]; //Filter out only Paul and get the first element

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// complicated filtering/ method
const candidates = students.filter(student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
    return strongSkills.length > 0;
});
console.log(candidates);

// better way to filter candidates --> isolates callback function and makes it reusable
const hasStrongSkills2 = student => {
    let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
    return strongSkills.length > 0;
};

const candidates2 = students.filter(hasStrongSkills2);
console.log(candidates2);

// even better way to filter candidates --> isolates the skill check too
const has5yearsExp = skill => skill.yrsExperience >= 5;

const hasStrongSkills3 = student => student.skills.filter(has5yearsExp).length > 0;

const candidates3 = students.filter(hasStrongSkills3);

console.log(candidates3);

const names = candidates3.map(student => student.name); // Extracting only names of candidates
console.log(names); // Output: [ 'Mark', 'Jason' ]