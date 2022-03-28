- [1, 2, 3].push(4)    //[1,2,3,4]
- [1, 2, 3].pop()      //[1,2]
- [1, 2, 3].shift()    //[2,3]
- [1, 2, 3].unshift(0) //[0,1,2,3]

- ["a", "b"].concat('c); // ["a", "b", "c"];
- ["a", "b", "c"].join('-); //a-b-c
- ["a", "b", "c"].slice(1); //['a', 'b']
- ["a", "b", "c"].indexOf('b); //1
- ["a", "b", "c"].includes('c'); // true

- [3, 5, 6, 8].find((n) => n % 2 === 0);      // 6
- [2, 4, 3, 5].findIndex((n) => n % 2 !== 0); // 2
- [3, 4, 6, 8].map((n) => n * 2);             // [6,8,12,16]
- [1, 4, 7, 8].filter((n) => n % 2 === 0);    // [4,8]
- [1, 4, 7, 8].filter((n) => n % 2 !== 0);    // [1,7]
- [2, 4, 3, 7].reduce((acc, cur) => acc + cur);// 16
- [2, 3, 4, 5].every((x) => x < 6);            // true
- [2, 3, 4, 5, 6, 7, 8].every((x) => x < 6);   // false
- [3,5,6,8].some((n)=>n>6);                    // true
- [3,4,6,2,9].reverse()                        // [9,2,6,4,3]
- [3,5,7,8].at(-2)                             // 7
//------------------------------------------
const arr = [1, 2, 3];
const pushArr = arr.push(4);
console.log(arr);
const popArray = arr.pop();
console.log(arr);
const shiftArr = arr.shift();
console.log(arr);

const arr2 = ["a", "b", "c", "d"];
const concatArr = arr2.concat("e");
console.log(concatArr);
const joinArr = arr2.join("--");
console.log(joinArr);
const sliceArr = arr2.slice(1);
console.log(sliceArr);
const indexOfArr = arr2.indexOf("c");
console.log(indexOfArr);
const includesArr = arr2.includes("e");
console.log(includesArr);
const includesArr2 = arr2.includes("b");
console.log(includesArr2);

const findArr = [3, 5, 6, 8].find((n) => n % 2 === 0);
console.log(findArr);
const findIndexArr = [2, 4, 3, 5].findIndex((n) => n % 2 !== 0);
console.log(findIndexArr);
const mapArr = [3, 4, 8, 6].map((n) => n * 3);
console.log(mapArr);
const filterArr = [1, 4, 7, 8].filter((n) => n % 2 === 0);
console.log(filterArr);
const filterArr1 = [1, 4, 7, 8].filter((n) => n % 2 !== 0);
console.log(filterArr1);
const reduceArr = [2, 4, 3, 7].reduce((acc, cur) => acc + cur);
console.log(reduceArr);
const everyArr = [2, 3, 4, 5].every((x) => x < 6);
console.log(everyArr);
const everyArr1 = [2, 3, 4, 5, 6, 7, 8].every((x) => x < 6);
console.log(everyArr1);
const someArr=[3,5,6,8].some((n)=>n>6)
console.log(someArr);
const reverseArr=[3,4,6,2,9].reverse()
console.log(reverseArr);
const atArr=[3,5,7,8,4,2,6,9,3].at(-2)
console.log(atArr);

-----------------------------
Number	Cardinal	Ordinal
1	one	first
2	two	second
3	three	third
4	four	fourth
5	five	fifth
6	six	sixth
7	seven	seventh
8	eight	eighth
9	nine	ninth
10	ten	tenth
11	eleven	eleventh
12	twelve	twelfth
13	thirteen	thirteenth
14	fourteen	fourteenth
15	fifteen	fifteenth
16	sixteen	sixteenth
17	seventeen	seventeenth
18	eighteen	eighteenth
19	nineteen	nineteenth