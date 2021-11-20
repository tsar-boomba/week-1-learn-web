console.log('Hello TypeScript!');

/* basics */
const num = 0;
let numba: number;
let str: string;
let bool: boolean;
let arr: number[];
let multArr: (number | string)[];
let obj: object;

numba = 1; // good TypeSript! :D

/*
numba = "string"; not allowed, won't compile
*/

obj = { prop: 1 };
arr = [1, 2, 3, 4];
multArr = ["string", 1, 2, "string"];
const constObj = { anything: true, anyType: 1, nested: { anythingHereToo: "yes!" } }
// only get auto complete on const objects because they have a constant type
console.log(constObj.nested.anythingHereToo); // how to access stuff on an object


/* functions */
// You can type the return values of functions and their paramenters similarly to variables
function returnsNum(): number {
	return 1;
}

function returnsNothing(): void {
	return;
}

// hover  v  to see automatic type inference
const returnsObj = (param: string) => {
	return param.length >= 3 ? { value: 'greater than 3' } : { value: false };
}
console.log(returnsObj('lo'));
console.log(returnsObj('greater than 3!'));

/* custom types */
// types
type MyType = string | number;
let custom: MyType = 0;
custom = "string!!?!?!?";

// interfaces (object types)
interface MyInterface {
	value1: number;
	value2: 'this specific string';
	value3: boolean[];
	customType: MyType;
	nestedObj: {
		value: string;
	};
	notRequired?: 'dont need me';
}

let customObj: MyInterface = {
	value1: 10101010.02,
	value2: 'this specific string', // must be the exact string defined in the interface
	value3: [true, false, false],
	customType: 2,
	nestedObj: {
		value: "im nested!"
	}
}
// get auto complete because it has its type defined instead of being a generic object
console.log(customObj.value2);

