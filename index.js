let ar = [1,2,3,4,5]
  function testing(arr){
  const testing =  arr.reduce((acc, curr) => acc + curr, 0)
  return testing
  }

console.log(testing(ar))



function checkLongestWord1(arr) {
    const testing1 = arr.reduce((acc, curr) => acc + curr, 0)
    return testing1;
};

console.log(checkLongestWord1([1, 3, 5, 6, 6, 8, 9]));




// function checkLongestWord (...args) {
//     args.reduce((acc, curr) => {
//     let long = "";
//     if(acc.length < curr.length) {
//         long = curr;
//     };    
// }) 
// }

// checkLongestWord("team", "gem", "Chisom", "Sun", "gonersfeg");



function checkLongestWord (...args) {

    // const [a, b, c, ...rest] = args;
    // console.log(a, b, c, rest);
    let longest = " ";
    
    for(let i =0; i < args.length; i++) {
       let wordLength = args[i].length;
    

       if(wordLength >= longest.length) {

        longest = args[i];
       }       
    } 


    //closure
    //Inside the for loop, the longest string has been modified.

let longestW = args.filter((el) => el.length === longest.length);


    if(longestW.length == 1) {
        return longest
    }  else {
        return longestW
    }

return(longest)
}

console.log(checkLongestWord("team", "gem", "Chisom", "Sun", "AbdulSalamanrtt","Iamelevenleuiutkr", "gagdgdggg", "gagdgdggg", "gagdgdggg", "Iamelevenleuiutkr"));
let emptyArray = [];

["team", "gem", "Chisom", "Sun", "AbdulSalamanrtt","Iamelevenleuiutkr", "gagdgdggg", "gagdgdggg", "gagdgdggg", "Iamelevenleuiutkr"].map((el) => Math.max(null, emptyArray.push(el.length)));
emptyArray.sort((a, b) => b - a)
console.log(emptyArray);

const area = (b, h) => 0.5 * b * h;
const perimeter = (b, h, l) => b + h + l;

function checkSides(b, h, l, logic) {
    return logic(b, h, l)
}

console.log(checkSides(3, 4, 5, perimeter));


// const hourlyPay = prompt("enter hour");
// const rate_per_hour = prompt("enter rate per hour");

// function hour_rate(a, b) {
//    const finalPay = `Enter hour: ${a}
//    rate per hour: ${b}
//    finalpay: ${a * b}`

//     return finalPay
// };

// console.log(hour_rate(hourlyPay, rate_per_hour))

// const full_name = prompt("Enter your name");
// const family_name = prompt("Enter your family name");


// (full_name.length > family_name.length) ? console.log(`Your first name, ${full_name} is longer than your family name, ${family_name}`) : console.log(`Your name is shorter`);

// const yourAge = Number(prompt("enter your birth year"));
// const todayYear = new Date().getFullYear();
// console.log(todayYear)
// const ageDiff = todayYear - yourAge;
// ageDiff > 18 ? console.log("You are old enough to drive") : console.log(`You are ${ageDiff} years old, and youy have ${18 - ageDiff} years remaining to get a drivers license`)


// const yourAge = Number(prompt("enter your age"));

// console.log(yourAge * 12 * 24 * 60 * 60)

const todaysDate = new Date();
console.log(todaysDate);
const years = todaysDate.getFullYear();
const months = todaysDate.getMonth() + 1;
const day = todaysDate.getDate();
const hours = todaysDate.getHours();
const minutes = todaysDate.getMinutes();
const hour = (hours) => {
    let time = "0";
    if(hours < 10) {
        time += String(hours) 
    } else time = hours;

    return time
};

console.log(hour(hours));

console.log(`${day}/${months}/${years} ${hour(hours)}:${hour(minutes)}`);

// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F


// const score = prompt("please enter your score");

// function scoreGrade(input) {
//     let responseGrade = ""
//     if(input >= 80) {
//         responseGrade += "A"
//     } else if(input >= 70 && input < 90) {
//         responseGrade += "B"
//     } else if(input >=60 && input < 70) {
//         responseGrade += "C"
//     } else if(input >= 50 && input < 60) {
//         responseGrade += "D"
//     } else {
//         responseGrade += "F"
//     }

//     return responseGrade
// }

// console.log(scoreGrade(score));

// const days = prompt("enter the day");



// function checkDayStatus(days) {
//     let finalResponse;
//     const daysLowerCase = days.toLocaleLowerCase();
//     (daysLowerCase == "saturday" || daysLowerCase == "sunday") ? finalResponse = `Today ${daysLowerCase} is a weekend day` : finalResponse = `Today  ${daysLowerCase} is  a working day`;
//     return finalResponse;
// }

// console.log(checkDayStatus(days));

// const days = prompt("enter the month");
// const array = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const monthsCount = [31, 28, 31, 30, 31, 30, 31, 31, 31, 30, 31, 31];

// function monthsCorrelation(array, months, days) {
//     let finalThought;
//     for(let i =0; i < array.length; i++) {
//         if(days.toLowerCase() == array[i].toLowerCase()) {
//             const lowerCase = array[i].toLowerCase();
//             const responseCase = lowerCase.replace(lowerCase[0], lowerCase[0].toUpperCase());
//             finalThought = `${responseCase} has ${months[i]} days`;
//             return finalThought;
//         } 
//         else {
//             finalThought = `kindly enter a valid month name`
//         }
//     }  
//    return finalThought;
// };

// console.log(monthsCorrelation(array, monthsCount, days));


// USE AN OBJECT INSTEAD


// let num = prompt("enter a number");
// for(let i = 2; i < num; i++) {
//     if(num / i == 0) {
//         console.log(`${num} is not a prime number`)
//     } else {
//         console.log(`${num} is a prime number`)
//     }
// };

// let isTrue = true;
// let j = prompt("enter a number");
// for(let k = 2; k < j; k++) {

//     if(j % k === 0) {
//         break;
//     } else {
//         console.log(`${j} is a prime number`)
//     }
// }

const callback = (item) => {
    return item;
};

const callbackMap = (item) => {
    return item * 8;
};

const callbackFilter = (item) => {
    if(item > 8) {
       return item;
    }
};

const myObj = {
    arr: [9, 7, 8, 9],
    forEach(cb) {
        for(let i = 0; i < this.arr.length; i++) {
          cb(this.arr[i]);
        }
        // return check.toString();
    }, 
    
    map(cb) {
        let check = [];
        for(let i = 0; i < this.arr.length; i++) {
          check.push(cb(this.arr[i]));
        }
       return check;
    }, 

    filter(cb) {
        let check = [];
        for(let i = 0; i < this.arr.length; i++) {
          if(cb(this.arr[i]))
            check.push(this.arr[i]);
        }
       return check;
    }, 
}


console.log(myObj.forEach(callback));
console.log(myObj.map(callbackMap));
console.log(myObj.filter(callbackFilter));


const countries5 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];


const priceSum = products.filter((item) => item.price != false).map((hi) => hi.price).reduce((acc, curr) => acc + curr)
console.log(priceSum);

console.log(products.filter((item) => item.price != false).map((hi) => hi.price).reduce((acc, curr) => acc + curr));
console.log()

let cbMap = (item) => item.toUpperCase();
let cbFilter = (item) => {
    if(item > 2) {
        return item
    };
};

console.log(countries5.reduce((acc, next, idx, arr) => {
    return acc += arr.length === ++idx ? `, and ${next} is the` : `, ${next}`
}));

console.log(numbers.reduce((acc, curr, idx, arr) => {
    return acc += arr.length === ++idx ? `, and ${curr} is the` : `, ${curr}`
}))

const getStringLists = (arr) => {
    return arr.filter((item) => typeof item === "string")
};

let list = "amonsuru@afexnigeria.com";
console.log(list.slice(list.indexOf("@") + 1));

function totalVotes(arr) {
    // your code here
  
    const finalVotes = arr.reduce((acc, next) => {
       return acc += next.voted ? 1 : 0
    }, 0);
    return finalVotes;
}
 
var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7

function shoppingSpree(arr) {
    // your code here  
    
   const dev = arr.reduce((acc, next) => {
      acc += next.price
      return acc;
    }, 0);

    return dev;
}
 
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
 
console.log(shoppingSpree(wishlist));

function flatten(arr) {
    // your code here 
    const tame = arr.reduce((acc, next, index) => {
      acc.push(...next);
      return acc;
    }, []);
    
    return tame;
}
 
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];
 
console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

let counter1 = 0;
let counter2 = 0
for(let i of voters) {
   counter1 += i.voted ? 1 : 0;
   i.voted ? counter2 += 1 : counter2 += 0
};

console.log(counter1, counter2);

function stringConcat(arr) {
    // your code here
   const find = arr.reduce((acc, next) => {
       return acc+=next;
    }, "");
    return find;
}
 
console.log(stringConcat([1,2,3]));


var voters1 = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   const funct = arr.reduce((acc, curr) => {
        const age = curr.age;
        const voted = curr.voted;
        acc["numYoungVotes"] += (age >= 18 && age <= 25 && voted) ? 1 : 0;
        acc["numYoungPeople"] += (age >= 18 && age <= 25) ? 1 : 0;
        acc["numMidVotesPeople"] += (age >= 26 && age <= 35 && voted) ? 1 : 0;
        acc["numMidsPeople"] += (age >= 26 && age <= 35) ? 1 : 0;
        acc["numOldVotesPeople"] += (age >= 36 && age <= 55 && voted) ? 1 : 0;
        acc["numOldsPeople"] += (age >= 36 && age <= 55) ? 1 : 0;

        return acc;
   }, {numYoungVotes: 0, numYoungPeople: 0, numMidVotesPeople: 0, numMidsPeople: 0, numOldVotesPeople: 0, numOldsPeople: 0});
   return funct;
}

console.log(voterResults(voters1));  // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/

console.log(getStringLists([3, 4, "teen", "test", "performance"]));

console.log(countries5.filter((item) => item.includes("land")));
console.log(countries5.filter((item) => item.length === 6));
console.log(countries5.filter((item) => item.length >= 6));
console.log(countries5.filter((item) => item.startsWith("E")));
console.log(products.filter((item) => item.price != false ));


let initialCheck = countries5.forEach((item) =>console.log(item));
console.log(initialCheck)
let initialCheck2 = numbers.forEach((item) =>console.log(item));
let initialCheck3 = names.forEach((item) =>console.log(item));
let initialCheck4 = countries5.map(cbMap);
let checker = [];
let initialCheck5 = countries5.map((item) => item);
let initialCheck6 = names.map((item) => item.toUpperCase());
let initialCheck7 = products.map((item) => `${item.product}: ${item.price}`)

console.log(initialCheck4);
console.log(initialCheck6);
console.log(initialCheck7);



const manths = ["jan", "feb", "march"];
const daye = [31, 31, 30];

const monthDayMatching = manths.reduce((acc, next, i) => {
    acc[next.toLocaleLowerCase()] = daye[i];
    return acc;
}, {})


console.log(monthDayMatching)

const randomNumberGenerator = Math.floor((Math.random() * (5 - 0)));
const randomNumberGenerator1 = Math.floor((Math.random() * (5 - 0)));
const randomNumberGenerator2 = Math.floor((Math.random() * (5 - 0)));
const randomNumberGenerator3 = Math.floor((Math.random() * (5 - 0)));
const randomNumberGenerator4 = Math.floor((Math.random() * (5 - 0)));

console.log(randomNumberGenerator,
    randomNumberGenerator1,
    randomNumberGenerator2,
    randomNumberGenerator3,
    randomNumberGenerator4
);

let month2 = [];
const myObj2 = {jan: 31, feb: 31, march: 30};
const value = Object.keys(myObj2);
const value2 = Object.values(myObj2);
console.log(value, value2);



const fruits = ['banana', 'orange', 'mango', 'lemon'];
let finalFruits = []
for(let i = fruits.length -1; i >= 0; i--) {
    console.log(fruits[i]);
    finalFruits.push(fruits[i])
};

console.log(finalFruits);


const frontEndTeam = [
    { name: "Prosper", 
        department: "frontEnd",
        id: 1,
        hobby: "eating"
    },

    { name: "Chisom", 
        department: "frontEnd",
        id: 2,
        hobby: "eating"
    },

    { name: "AbdulSalam", 
        department: "frontEnd",
        id: 3,
        hobby: "eating"
    },

    { name: "Monsuru", 
        department: "frontEnd",
        id: 4,
        hobby: "eating"
    }

];

const frontEndTeamReduced = frontEndTeam.reduce((acc, curr) => {
    let check = {};
    const {name, id } = curr;
    // check["label"] = name;
    // check["value"] = id;c

    // console.log(check);
    acc.push({value: id, label: name});
    return acc;
}, []);

console.log(frontEndTeamReduced);

function likes(names) {
    if(names.length == 0) {
        return "no one likes this"
    } else if(names.length == 1) {
        return `${names[0]} likes this`
    } else if(names.length == 2) {
      const [a, b] = names;
      return `${a} and ${b} like this`
    } else if(names.length == 3){
        const slicedCopy = names.slice(0, names.length -1) 
        return `${slicedCopy.join(", ")} and ${names[names.length -1]} like this`
    } else {
        const [a, b, ...rest] = names ;
        return `${a}, ${b} and ${rest.length} others like this`
    }

}

console.log(likes(["Alex", "Jacob", "Mark", "James"]))


const countries =  [
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
];

// for(let coun of countries) {
//     for(let land of coun) {
//         console.log(land)
//     }
// };
let higheestCharacter = "";
for(let j = 0; j < countries.length; j++) {
    if(countries[j][0].includes("land"))
    console.log(countries[j][0]);

    if(countries[j][0].endsWith("ia")) console.log(countries[j][0]);

    if(countries[j][0].length > higheestCharacter.length) {
        higheestCharacter = countries[j][0];
        console.log(higheestCharacter)
    }

    if(countries[j][0].length == 5) console.log(countries[j][0])

}


for(let j = 1; j <= 100; j++) {

    let dummy = 0;
    for(let i = 2; i < j; i++) {

        if(j % i == 0) {
            dummy = 1;
            break;
        }  
    }

    if(j > 1 && dummy == 0) {
        console.log(j)
    }
};

loop1: for (i = 2; i <= 200; i++) {
    // The second for statement is labeled "loop2"
    loop2: for (j = 2; j < i; j++) {
      if (i % j == 0) {
        continue loop1;
      }
    }

    console.log(i);
}

const users = [
    { id: 1, email: 'dcontreras@email.tld' },
    { id: 2, email: 'afeher@email.tld' },
    { id: 3, email: 'odj@email.tld' },
];
  
const profiles = [
    { userId: 1, firstName: 'Danielle', lastName: 'Contreras' },
    { userId: 2, firstName: 'Alfredas', lastName: 'Fehér' },
    { userId: 3, firstName: 'Orpheus', lastName: 'De Jong' },
];


const fey = users.map((item) => {
    const finder = profiles.find((items) => items.userId === item.id);
    return {...item, finder};
});


function foo(a){
    let b = 5;
    return a * b + 10;
};

function res(x) {
    var y = 5;
    return foo(x * y)
};


console.log(res(6));






// function t() {
//     throw new error("Oops")
// };

// function i() {
//     t();
// };

// function k() {
//     i();
// };

// console.log(k());


console.log(fey);

const profiles1 = [
    { userId: 1, firstName: 'Danielle', lastName: 'Contreras' },
    { userId: 2, firstName: 'Alfredas', lastName: 'Fehér' },
    { userId: 3, firstName: 'Orpheus', lastName: 'De Jong' },
];
  
// Transform the profiles into an object keyed by the userId:

const profilesByUserId = profiles1.reduce((next, profile) => {
    const { userId } = profile;
    return { ...next, [userId]: profile };
}, {});

console.log(profilesByUserId);


const obje = { 1: {userId: 1, firstName: 'Danielle', lastName: 'Contreras'},
2: {userId: 2, firstName: 'Alfredas', lastName: 'Fehér'},
3: {userId: 3, firstName: 'Orpheus', lastName: 'De Jong'}
};


const usersWithProfiles = users.map((user, i) => {
    return { ...user, profile: profiles1[user.id] };
}, {});

console.log(usersWithProfiles);

const form = users.reduce((acc, curr, idx) => {
   acc.push({...curr, profile: Object.values(obje)[idx]});
   return acc
}, []);

console.log(form)

// usersWithProfiles:

// [
//   { id: 1, email: 'dcontreras@email.tld', profile: { userId: 1, firstName: 'Danielle', lastName: 'Contreras' } },
//   { id: 2, email: 'afeher@email.tld', profile: { userId: 2, firstName: 'Alfredas', lastName: 'Fehér' } },
//   { id: 3, email: 'odj@email.tld', profile: { userId: 3, firstName: 'Orpheus', lastName: 'De Jong' } },
// ]

// const viewTest = document.querySelector(".amount-column").addEventListener("click", fetchData);
// console.log(viewTest);

async function fetchResponse() {
    const initialResponse = await fetch("https://api.github.com/users/MONSURU-rgb/repos");
    const jsonFormat = await initialResponse.json();
    const fineTunedMap = jsonFormat.map((item) => item.node_id);
    return fineTunedMap;
    // const finalResult = jsonFormat.reduce((acc, next, index) => {
    //    return acc["node"] = [next["name"]];
    // }, {});
    
    // return finalResult;
};

console.log(fetchResponse());

async function fetchData() {
    const response = await fetch("https://course-api.com/react-tours-project");
    const jsonData = await response.json();
    let j = [];
    for(let i of jsonData) {
        j.push(i.name);
    };

    return j
}  

console.log(fetchData());





// Endpoint URL
// fetch("https://course-api.com/react-tours-project");
//async create a promise
//JSON
// async function fetchData() {
//     const response = await fetch("https://course-api.com/react-tours-project");
//     console.log(response);
//     const jsonData = await response.json();
//     console.log(jsonData);
//     for(let i of jsonData) {
//         console.log(i.name)
//     }
// };

// fetchData();
