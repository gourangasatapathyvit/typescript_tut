"use strict";
const zx = "ll";
const user = {
    name: "polo",
    id: 1,
    age: 22,
};
class UserAccount {
    name;
    id;
    age;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user1 = new UserAccount("Murphy", 1);
console.log(user1.name);
const xx = true;
const func = (n, m) => {
    console.log(n * m);
    return 1;
};
const func2 = (n, m) => {
    console.log(n * m);
};
const func3 = (n, m) => {
    console.log(n * m);
    return (n * m).toString();
};
// rest operator
const func4 = (...n) => {
    // console.log(n*m);
    return (n[0] + n[1]).toString();
};
// console.log(func4(2, 5));
const func5 = (n) => {
    // console.log(n*m);
    // n.id = 12; // u cant reassign as its readonly field
};
//  never type
const func6 = () => {
    throw new Error();
};
class smartPhone {
    name;
    id;
    loremId = "lorem";
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    getLoremId() {
        return this.loremId;
    }
}
const x = new smartPhone("xx", 123);
console.log(x.getLoremId());
// DOM manipulation
// TYPE assertion
// const domEle = document.getElementById("myForm")!
// const domEle = <HTMLFormElement>document.getElementById("myForm")
const domEle = document.getElementById("myForm");
const ipVal = document.querySelector("form>input");
const emailInput = document.querySelector("form>input[type='email']");
domEle.onsubmit = (e) => {
    e.preventDefault();
    console.log(ipVal.value);
    let datas = document.createElement("h3");
    datas.textContent = ipVal.value + " = " + emailInput.value;
    const body = document.querySelector("body");
    body.append(datas);
};
const myObj = {
    name: "polo",
    age: 20,
};
const getData = (key) => {
    return myObj[key];
};
// console.log(getData("age"));
// if you dont have interface reference
console.log(myObj["name"]);
const users = [
    {
        name: "polo",
        age: 22,
    },
    {
        name: "lorem",
        age: 99999,
    },
    {
        name: "xyz",
        age: 20,
    },
    {
        name: "xyz",
        age: 100,
    },
];
const filterByData = (users, dataKey, val) => {
    // console.log(dataKey,val);
    return users.filter((item) => {
        return item[dataKey] === val;
    });
    // return users;
};
console.log(filterByData(users, "age", 100));
