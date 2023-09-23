const zx: number | string = "ll";

type themeMode = "light" | "dark";

// define types

interface User {
    name: string;
    readonly id: number;
    age?: number; // optional and cannot override
}

const user: User = {
    name: "polo",
    id: 1,
    age: 22,
};

class UserAccount implements User {
    name: string;
    id: number;
    age?: number | undefined;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user1: User = new UserAccount("Murphy", 1);
console.log(user1.name);

// Composing Types

type boolx = boolean;

const xx: boolx = true;

type funcType = (n: number, m: number) => void;

const func = (n: number, m: number): number => {
    console.log(n * m);
    return 1;
};

const func2: funcType = (n, m) => {
    console.log(n * m);
};

const func3: (n: number, m: number) => string = (n, m) => {
    console.log(n * m);
    return (n * m).toString();
};

// rest operator

const func4: (...n: number[]) => string = (...n) => {
    // console.log(n*m);

    return (n[0] + n[1]).toString();
};

// console.log(func4(2, 5));

const func5: (n: User) => void = (n: User) => {
    // console.log(n*m);
    // n.id = 12; // u cant reassign as its readonly field
};

//  never type
const func6 = (): never => {
    throw new Error();
};

interface ProductType {
    name: string;
    id: number;
    offer?: boolean;
}

class smartPhone implements ProductType {
    private loremId: string = "lorem";
    constructor(public name: string, public id: number) {}

    public getLoremId(): string {
        return this.loremId;
    }
}
const x = new smartPhone("xx", 123);
console.log(x.getLoremId());

// DOM manipulation
// TYPE assertion

// const domEle = document.getElementById("myForm")!
// const domEle = <HTMLFormElement>document.getElementById("myForm")
const domEle = document.getElementById("myForm") as HTMLFormElement;
const ipVal = document.querySelector("form>input") as HTMLInputElement;
const emailInput = document.querySelector(
    "form>input[type='email']"
) as HTMLInputElement;

domEle.onsubmit = (e) => {
    e.preventDefault();
    console.log(ipVal.value);

    let datas = document.createElement("h3");
    datas.textContent = ipVal.value + " = " + emailInput.value;
    const body = document.querySelector("body")!;
    body.append(datas);
};

interface Person {
    [key: string]: string | number;
}

const myObj: Person = {
    name: "polo",
    age: 20,
};

const getData = (key: keyof Person) => {
    return myObj[key];
};

// console.log(getData("age"));

// if you dont have interface reference

console.log(myObj["name" as keyof typeof myObj]);

// UTILITY methods

// partial<Type> => it will make optional type

/* interface PersonDemo{
    name:string,
    age:number
}

type lorem = Partial<PersonDemo> */

// Required<Type> => it will make mandatory type (opposite of partial)

/* interface PersonDemo{
    name?:string,
    age:number
}

type lorem = Required<PersonDemo> */

// Required<Type> => it will make mandatory type (opposite of partial)

/* interface PersonDemo{
    name?:string,
    age:number
}

// type lorem = Required<PersonDemo>


const zcx:Required<PersonDemo>={
    name: "",
    age: 0
} */

// Readonly<Type> => u cant reassign variable

/* interface PersonDemo {
    name?: string;
    age: number;
}

const zcx: Readonly<PersonDemo> = {
    name: "qw",
    age: 0,
}; */

// Readonly<Type> => u cant reassign variable

/* interface PersonDemo {
    name?: string;
    age: number;
}
type recordPerson = "lorem" | "polo";

const zcx: Record<recordPerson, PersonDemo> = {
    lorem: {
        age: 1,
    },
    polo: {
        age: 2,
    },
}; */

// Readonly<Type> => u cant reassign variable

/* interface PersonDetails {
    name: string;
    age?: number;
    address: string;
}

const zcx: Pick<PersonDetails, "address"> = {
    address: "12",
};

const zcxx: Omit<PersonDetails, "address"> = {
    name: "",
}; */

// Exclude<Type> => remove any type from a collection type

/* interface PersonDemo {
    name?: string;
    age: number;
}
type recordPerson = Exclude<string|number|boolean, boolean>;

const xa:recordPerson = "true" */

// Extract<Type> => get any one type from collection type

/* interface PersonDemo {
    name?: string;
    age: number;
}
type recordPerson = Extract<string | number | boolean, boolean>;

const xa: recordPerson = true; */

//  REMEMBER Exclude<> and omit<> are different as omit <> is used by refering any interface but not in the case of Exclude<>
// AND same applied for Extract<> and pick<>

// NonNullable<Type> => cant be null
/* interface PersonDemo {
    name?: string;
    age: number;
}
type recordPerson = NonNullable<string | boolean | undefined>;

const xa: recordPerson = true;
 */

// Parameters<Type> => get parameters of a function

/* const funcc = (a: number, b: string) => {};

type recordPerson = Parameters<typeof funcc>; */

// ConstructorParameters<Type> => get parameters of a Constructor

/* class lorem {
    constructor(public x: number, public y: string) {}
}

type recordPerson = ConstructorParameters<typeof lorem>;
 */

// Parameters<Type> => get parameters of a function

/* const funcc: (a: number, b: string) => number = (a: number, b: string) => {
    return 1;
};

type recordPerson = ReturnType<typeof funcc>; */

// ConstructorParameters<Type> => get parameters of a Constructor

/* class lorem {
    constructor(public x: number, public y: string) {}
}

type recordPerson = InstanceType<typeof lorem>;

const loremm: recordPerson = {
    x: 0,
    y: "",
}; */

//  Generics

interface custPerson {
    name: string;
    age: number;
}

const users: custPerson[] = [
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

const filterByData = <T, U extends keyof T>(
    users: T[],
    dataKey: U,
    val: T[U]
): T[] => {
    // console.log(dataKey,val);
    return users.filter((item) => {
       return item[dataKey] === val;
    });
    // return users;
};

console.log(filterByData(users, "age", 100));
