// Reduce all elements in an array to a single value/ output.

// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 7);
// The first argument "acc" is the accumulator, the second "curr" is the current value.
// The initial value of "acc" is 7 - good practice to always provide an initial value.
console.log(sum); // Output: 17

const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience); // Output: 16

// Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((acc, curr) => {
    let key = curr.profession;
    if (!acc[key]) {
        acc[key] =  curr.yrsExperience; // Not yet in the accumulator, so initialize it with the current value
    } else {
        acc[key] += curr.yrsExperience; // Already in the accumulator, so add the current value
    }
    return acc;
}, {});
console.log(experienceByProfession); // Output: { Developer: 12, Designer: 4 }

// Example 2
const biggest = students.reduce(({max, name}, {name:n, results:{english}}) => { 
    if(max < english) {
        acc = {name:n, max: english};
    }
    return acc;
    }, {name: '', max: 0}); //This starts us off with a dummy student with no name and a score of 0.
    
console.log(biggest);

// {max, name}: This represents the accumulator — the result so far.
//     max: the highest score so far
//     name: the student with that score

// {name:n, results:{english}}: This represents the current student being processed.
//     Rename name to n (to avoid name clash)
//     Extract english score from the nested results object

// "if ..." : this checks whether the current student’s English score is greater than the previous max.
// If it is, we create a new object with:
//     name: n (the student’s name)
//     max: english (their score)
// If it’s not higher, we return the previous { name, max } unchanged.

