/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "developer",
    jill: "developer",
    alicia: "accountant"
};
let { mike, jill, alicia } = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary); // english french

let [, , maryNative, marySecondary] = languages; // skip first two
console.log(maryNative, marySecondary); // spanish german

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "japanese"
};
let { firstLanguage, thirdLanguage } = languages2;
console.log(firstLanguage, thirdLanguage); // english german

// Using rest parameter syntax
let fruits =["apple", "strawberry", "kiwi", "cherry", "peach"];
let [favourite, secondFavorite, ...others] = fruits;
console.log(favourite); // apple
console.log(secondFavorite); // strawberry
console.log(others); // kiwi, cherry, peach

let favouriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "sushi",
    andrea: "steak",
};

let { brian, ...others3 } = favouriteFoods;
console.log(brian); // pizza
console.log(others3); // { anna: 'pasta', sarah: 'sushi', andrea: 'steak' }