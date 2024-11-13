// Hositing Var Let Const

/* 
console.log(a);
var a=10


console.log(b);
let b=10

console.log(c);
let c=10 */

const bioData = {
  name: "janakirasu",
  lastName: "J",
  age: 29,
  class: "FSD..MERN",
  sklis: ["html", "Css", "Js", "React", "MongoDP", "Sql", "Node_JS"],
};
console.log(bioData);
console.log(bioData.name);
console.log(bioData.lastName);
console.log(bioData.age);
console.log(bioData.class);

for (let i = 0; i < bioData.sklis.length; i++) {
  console.log(bioData.sklis[i]);
}

const resume = {
  name: "Janakirasu J",
  age: 29,
  gender: "Male",
  martial_Status: "90 Kids",
  phone: "9874563210",
  email: "Johntasu21@gmail.com",
  education: ["10th", "12th", "BCA"],
  sklis: ["html", "Css", "Js", "React", "MongoDP", "Sql", "Node_JS"],
  adrsess: {
    doorNo: 143,
    street: "Road Street",
    village: "MKP",
    city: "kpm",
    pinCode: 631502,
  },
};

console.log(resume.name);
console.log(resume.age);
console.log(resume.gender);
console.log(resume.phone);
console.log(resume.email);
console.log(resume.martial_Status);
for (let i = 0; i < resume.education.length; i++) {
  console.log(resume.education[i]);
}
for (let i = 0; i < resume.sklis.length; i++) {
  console.log(resume.sklis[i]);
}
console.log(resume.adrsess.doorNo);
console.log(resume.adrsess.street);
console.log(resume.adrsess.village);
console.log(resume.adrsess.city);
console.log(resume.adrsess.pinCode);

let forIn = "johnjohn";

for (let key in forIn) {
  console.log(key);
}
const resume1 = {
  name: "Janakirasu J",
  age: 29,
  gender: "Male",
  martial_Status: "90 Kids",
  phone: "9874563210",
  email: "Johntasu21@gmail.com",
};
for (let key in resume1) {
  console.log(key);
  // console.log(resume[key]);in key value output
}

// for (let val of resume1) {
//   console.log(val);
// }

const resume2 = {
  name: "Janakirasu J",
  age: 29,
  gender: "Male",
  martial_Status: "90 Kids",
  phone: "9874563210",
  email: "Johntasu21@gmail.com",
  education: ["10th", "12th", "BCA"],
  sklis: ["html", "Css", "Js", "React", "MongoDP", "Sql", "Node_JS"],
};

for (let key in resume2) {
  console.log(key);
  // console.log(resume[key]);
}
resume2.education.forEach((ele) => {
  console.log(ele);
});
resume2.sklis.forEach((ele) => {
  console.log(ele);
});

//json stringify Parse

const resume3 = {
  name: "Janakirasu J",
  age: 29,
  gender: "Male",
  martial_Status: "90 Kids",
  phone: "9874563210",
  email: "Johntasu21@gmail.com",
  education: ["10th", "12th", "BCA"],
  sklis: ["html", "Css", "Js", "React", "MongoDP", "Sql", "Node_JS"],
};

let res = JSON.stringify(resume3);
console.log(res);
let final = JSON.parse(res);
console.log(final);

let arrObj = [
  { name: "John", age: "29" },
  { name: "dhoni", age: "39" },
  { name: "vijay", age: "49" },
];

// ArrObject Print ForEach

arrObj.forEach((ele) => {
  console.log(ele);
});

// ArrObject Print in

for (let key in arrObj) {
  console.log(arrObj[key]);
}
// ArrObject Print for loop

for (let i = 0; i < arrObj.length; i++) {
  console.log(arrObj[i]);
}
