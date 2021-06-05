//JavaScript Programming Practices................................
//Arithmetic and Math Library Functions...........................
// let print = (x,y) => {
//     return ((Math.abs(x/y)).toFixed(1));
// };
// console.log(print(23,8));

//Decision Constructs.............................................
// let mid = 100;
// let current = 100;
// let low = 20;
// let found = -1;
// if(current < mid) {
//     mid = (current - low) / 2;
// } else if(current > mid){
//     mid = (current + low) / 2;
// } else {
//     mid = found;
// };
// console.log(mid);

// const month = 'march';
// switch (month) {
//     case 'february':
//         console.log(`Cold ${month}`);
//         break;
//     case 'january':
//         console.log(`Very cold ${month}`);
//         break;
//     case 'march':
//         console.log(`Warm ${month}`);
//         break;
//     default: 
//         console.log(`No info (`);
// };

//Repetition Constructs............................................
// let number = 1;
// let sum = 0;
// while(number < 11) {
//     sum += number;
//     ++number;
// };
// console.log(sum);

// let sum = 0;
// for(let i = 0; i < 11; i++) {
//     sum +=i;
// };
// console.log(sum);

// let numbers = [1, 20, 3, 40, 5, 60, 7];
// let sum = 0;
// for(let i = 0; i <= numbers.length; ++i) {
//     sum += numbers[i];
// };
// console.log(sum);

//Functions.......................................................
// let factorial = (number) => {
//     let product = 1;
//     for(let i = number; i >= 1; --i) {
//         product *= i;
//     };
//     return product;
// };
// console.log(factorial(4));
// console.log(factorial(5));
// console.log(factorial(10));

// let curve = (arr, amount) => {
//     for (let i = 0; i < arr.length; ++i) {
//         arr[i] += amount;
//     };
// };
// let grades = [2, 5, 10, 14, 18];
// curve(grades, 5);
// console.log(grades);

//Variable Scope..................................................
// let func = () => {
//     return scope;
// };
// let scope = 'global';
// console.log(scope);
// console.log(func());

// let func = () => {
//     let scope = 'local';
//     return scope;
// };
// let scope = 'global';
// console.log(scope);
// console.log(func());

//Recursion......................................................
// let factorial = (number) => {
//     if(number ==1) {
//         return number;
//     } else {
//         return number * factorial(number - 1);
//     };
// };
// console.log(factorial(5));

//Objects and Object-Oriented Programming........................
// function Checking(amount) {
//     this.balance = amount;
//     this.deposit = deposit;
//     this.withdraw = withdraw;
//     this.toString = toString;
// }
// function deposit(amount) {
//     this.balance += amount;
// }
// function withdraw(amount) {
//     if (amount <= this.balance) {
//         this.balance -= amount;
// }
//     if (amount > this.balance) {
//     console.log("Insufficient funds");
// }
// }
// function toString() {
//     return "Balance: " + this.balance;
// }

// let account = new Checking(500);
// account.deposit(1000);
// console.log(account.toString());
// account.withdraw(750);
// console.log(account.toString());
// account.withdraw(800);
// console.log(account.toString());

//Arrays..........................................................
//Using Arrays....................................................
//Creating Arrays.................................................
// let numbers = [];
// let numbers = [1,2,3,4,5];
// let numbers = new Array(1,2,3,4,5);
// console.log(numbers.length);
// console.log(Array.isArray(numbers));
// let foo = 10;
// console.log(Array.isArray(foo));

//Accessing and Writing Array Elements............................
// let numbers = [];
// for(let i = 0; i < 100; ++i) {
//     numbers[i] = i + 1;
// }
// console.log(numbers);

// let numbers = [1,2,3,4,5];
// let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3];
// console.log(sum);

// let numbers = [1,2,3,4,5];
// let sum = 0;
// for(let i = 0; i < numbers.length; ++i) {
//     sum += numbers[i];
// }
// console.log(sum);

//Creating Arrays from Strings...................................
// let str = "You are a very good programmer";
// let arrB = str.split(" ");
// let arrC = [];
//     for(let i = 0; i < arrB.length; ++i) {
//     arrC[i] = `word ${i} : ${arrB[i]}`;
//     }
// console.log(arrC);

//Aggregate Array Operations.....................................
//a shallow copy
// let nums = [];
// for(let i = 0; i < 10; ++i) {
//     nums[i] = i + 2;
// }
// let sumnums = nums;
// console.log(sumnums);

// a deep copy
// let copy = (arr1, arr2) => {
//     for(let i = 0; i < arr1.length; ++i) {
//        arr2[i] = arr1[i];
//     }
// };

// let nums = [];
// for(let i = 0; i < 100; ++i) {
//     nums[i] = i + 1;
// }
// let sumnums = [];

// copy(nums,sumnums);

// nums[0] = 400;

// console.log(nums[0]);
// console.log(sumnums[0]);

//Accessor Functions.............................................
//Searching for a Value..........................................
// let names = ["Bob", "Bob", "Mary", "Rachel", "Kim", "Sam"];
// let lastposition = names.lastIndexOf("Bob");
// console.log(lastposition);
// for(let i = 0; i <= names.length; ++i) {
//     const name = names[i];
//     let position = names.indexOf(name);
//     if(position >= 0) {
//     console.log(`${name} found at position ${position}`);
// } 
// }

//String Representations of Arrays...............................
// let names = ["Bob", "Bob", "Mary", "Rachel", "Kim", "Sam"];
// let str1 = names.join();
// let str2 = names.toString();
// console.log(`${str1} and ${str2}`);

//Creating New Arrays from Existing Arrays.......................
// let names1 = ["Bob", "Mary", "Rachel", "Kim", "Sam"];
// let names2 = ["Tom", "Lissi", "Brian"];
// const conc1 = names1.concat(names2);
// const conc2 = names2.concat(names1);
// console.log(conc1);
// console.log(conc2);

// let names = ["Bob", "Mary", "Rachel", "Kim", "Sam"];
// let newArr = names.splice(1,2);
// let changedArr = names;
// console.log(newArr);
// console.log(changedArr);

//Mutator Functions..............................................
//Adding Elements to an Array....................................
// let names = ["Bob", "Mary", "Rachel", "Kim", "Sam"];
// names.push("Steve");
// names[names.length] = "Steve";
// console.log(names);

// let names = ["Bob", "Mary", "Rachel", "Kim", "Sam"];
// names.unshift("Steve","Karl");
// console.log(names);

//Removing Elements from an Array.................................
// let nums = [1,2,3,4,5];
// let result = nums.pop();
// console.log(nums);
// console.log(result);
// let res = nums.shift();
// console.log(nums);
// console.log(res);

//Adding and Removing Elements from the Middle of an Array........
// let nums = [1,2,3,4,8,9];
// let newNums = [5,6,7];
// nums.splice(4,0,newNums);
// console.log(nums);
// nums.splice(0,3);
// console.log(nums);

//Putting Array Elements in Order.................................
// let names = ["Bob", "Mary", "Rachel", "Kim", "Sam"];
// names.reverse();
// console.log(names);
// names.sort();
// console.log(names);

// let nums = [100,2,30,14,5];
// nums.sort();
// console.log(nums);
// let compare = (num1,num2) => {
//     return num1-num2;
// }
// nums.sort(compare);
// console.log(nums);

//Iterator Functions..............................................
//Non–Array-Generating Iterator Functions.........................
// let func = (num) => {
//     console.log(num, num*2);
// };
// const nums = [1,2,3,4,5,6];
// nums.forEach(func);

// let isEven = (num) => {
//     return num % 2 == 0;
// };
// const nums = [2,4,6,8,10];
// const n = nums.every(isEven);

// if(n) {
//     console.log('is true')
// } else {
//     console.log('false')
// }

// let isEven = (num) => {
//     return num % 2 == 0;
// };
// const nums = [1,3,5,6];
// const n = nums.some(isEven);
// if(n) {
//     console.log('is true')
// } else {
//     console.log('false')
// }

// let add = (runningTotal, currentValue) => {
//     return runningTotal + currentValue;
// };
// let nums = [1,2,3,4,5,6,7,8,9,10];
// let sum = nums.reduce(add);
// console.log(sum);

// let add = (accumulatedString, item) => {
//     return accumulatedString + ' ' + item;
// };
// let arr = ["I", "want", "to", "go", "home"];
// let str = arr.reduce(add);
// console.log(str);

// let add = (accumulatedString, item) => {
//     return accumulatedString + ' ' + item;
// };
// let arr = ["I", "want", "to", "go", "home"];
// let str = arr.reduceRight(add);
// console.log(str);

//Iterator Functions That Return a New Array..........................
// let func = (grade) => {
//     return grade += 5;
// };
// let grades = [10,11,9,12];
// let result = grades.map(func);
// console.log(result);

// let func = (item) => {
//     return item[0];
// };
// let words = ['Let', 'me', 'come', 'in'];
// let result = words.map(func).join('');
// console.log(result);

// let isEven = (num) => {
//     return num % 2 == 0;
// };
// let isOdd = (num) => {
//     return num % 2 != 0;
// };
// let nums = [];
// for(let i = 0; i < 20; ++i) {
//     nums[i] = i + 1;
// }
// let even = nums.filter(isEven);
// let odd = nums.filter(isOdd);
// console.log(even);
// console.log(odd);

// let passing = (grade) => {
//     return grade >= 60;
// }
// let grades = [];
// for(let i = 0; i < 20; ++i) {
//     grades[i] = Math.floor(Math.random() * 101);
// };
// let result = grades.filter(passing);
// console.log(grades);
// console.log(result);

// let afterc = (word) => {
//     if(word.indexOf("cie") > -1) {
//         return true;
//     } 
//     return false;
// };
// let words = ["recieve", "conceive", "deceive", "percieve"];
// let misspelled = words.filter(afterc);
// console.log(misspelled);

// Two-Dimensional and Multidimensional Arrays...........................
// Creating Two-Dimensional Arrays.......................................
// let arr = [];
// let rows = 5;
// for(let i = 0; i <= rows; ++i) {
//     arr[i] = [];
// };
// console.log(arr);

// Array.matrix = (numrows, numcolms, initial) => {
//     let arr = [];
//     for(let i = 0; i < numrows; ++i) {
//         let columns = [];
//         for(let j = 0; j < numcolms; ++j) {
//             columns[j] = initial;
//         }
//         arr[i] = columns;
//     }
//     return arr;
// }

// let foo = Array.matrix(5,5,0);
// console.log(foo[1][1]);

// let foo1 = Array.matrix(3,3,"Ann");
// console.log(foo1[1][1]);
// console.log(foo1);

//Processing Two-Dimensional Array Elements..............................
// let grades = [[34, 56, 78], [15, 64, 33], [23, 90, 45]];
// let total = 0;
// let average = 0.0;

// for(let row = 0; row < grades.length; ++row) {
//     for(let col = 0; col < grades[row].length; ++col) {
//     total += grades[row][col];
// }
// average = total / grades[row].length;
// console.log(`Student ${row+1} average: ${average.toFixed(2)}`);
// total = 0;
// average = 0.0;
// }

// let grades = [[34, 56, 78], [15, 64, 33], [23, 90, 45]];
// let total = 0;
// let average = 0.0;

// for(let col = 0; col < grades.length; ++col) {
//     for(let row = 0; row < grades[col].length; ++row) {
//     total += grades[row][col];
// }
// average = total / grades[col].length;
// console.log(`Student ${col+1} average: ${average.toFixed(2)}`);
// total = 0;
// average = 0.0;
// }

//Jagged Arrays.........................................................
// let grades = [[34, 56], [15, 64, 33, 88], [23, 90, 45]];
// let total = 0;
// let average = 0.0;

// for(let row = 0; row < grades.length; ++row) {
//     for(let col = 0; col < grades[row].length; ++col) {
//     total += grades[row][col];
// }
//     average = total / grades[row].length;
//     console.log(`Student ${row + 1} has grades: ${average.toFixed(2)}`);
//     total = 0;
//     average = 0.0;
// }

//Arrays of Objects.....................................................
// function Point (x,y) {
//     this.x = x;
//     this.y = y;
// }

// let p1 = new Point(1,2);
// let p2 = new Point(3,4);
// let p3 = new Point(5,6);
// let p4 = new Point(7,8);

// let pts = [p1,p2,p3,p4];
// for(let i = 0; i < pts.length; ++i) {
//     console.log(`Point ${parseInt(i+1)}: ${pts[i].x}, ${pts[i].y}`)
// }

// let displayPts = (arr) => {
//     for(let i = 0; i < arr.length; ++i) {
//         console.log(`${arr[i].x}, ${arr[i].y}`)
//     }
    
// }
// let p5 = new Point(12,-3);
// pts.push(p5);
// console.log("After push: ")
// displayPts(pts);
// pts.shift();
// console.log("After shift: ")
// displayPts(pts);

//Arrays in Objects.....................................................
// function weekTemps() {
//     this.dataStorage = [];
//     this.add = add;
//     this.average = average;
// }

// function add(temp) {
//     this.dataStorage.push(temp);
// }

// function average() {
//     let total = 0;
//     for(let i = 0; i < this.dataStorage.length; ++i) {
//         total += this.dataStorage[i];
//     }
//     return total / this.dataStorage.length;
// }

// let thisWeek = new weekTemps();
// thisWeek.add(23);
// thisWeek.add(25);
// thisWeek.add(26);
// thisWeek.add(21);
// thisWeek.add(20);
// thisWeek.add(18);
// thisWeek.add(22);

// console.log(thisWeek.average().toFixed(2));

//Exercises..............................................................
// function Grades() {
//     this.store = [];
//     this.add = add;
//     this.display = display;
// }

// function add(grade) {
//     this.store.push(grade);
// }

// function display() {
//     let total = 0;
//     for(let i =0; i < this.store.length; ++i) {
//         total += this.store[i];
//     }
//     console.log(total / this.store.length);
// }

// let currentGrades = new Grades();
// currentGrades.add(23);
// currentGrades.add(33);
// currentGrades.add(43);
// currentGrades.add(53);
// currentGrades.add(63);

// currentGrades.display();



// let words = [['cap ', 'jacket ', 'coat '], ['man ', 'woman ', 'kid '], ['sun ', 'moon ', 'planet ']];

// for(let row = 0; row < words.length; ++row) {
//     let total = [];
//     for(let col = 0; col < words[row].length; ++col) {
//         total += words[row][col];
//     }
//     console.log(`This row is: ${total}`);
// }

// for(let col = 0; col < words.length; ++col) {
//     let total = [];
//     for(let row = 0; row < words.length; ++row) {
//         total += words[row][col];
//     }
//     console.log(`This col is: ${total}`);
// }



// function monthTemps() {
//     this.dataStorage = [];
//     this.add = add;
//     this.monthAverage = monthAverage;
//     this.weekAverage = weekAverage;
//     this.allWeeksAverage = allWeeksAverage;

//     function add (temp) {
//         let rows = 4;
//         let cols = 7;
//         for(let i = 0; i < rows; ++i) {
//             this.dataStorage.push([]);
//             this.dataStorage[i].push([]);

//         for(let j = 0; j < cols; ++j) {
//             this.dataStorage[i][j] = temp[i][j];
//             }
//         }
//     }

//     function monthAverage () {
//         let total = 0;
//         for(let row = 0; row < this.dataStorage.length; ++row) {
//             for(let col = 0; col < this.dataStorage[row].length; ++col) {
//                 total += this.dataStorage[row][col];
//             }
//         }
//         return total / 30;
//     }

//     function weekAverage () {
//         let total = 0;
//         let row = 0;
//             for(let col = 0; col < this.dataStorage[row].length; ++col) {
//                 total += this.dataStorage[row][col];
//             }
        
//         return total / 7;
//     }

//     function allWeeksAverage () {
//         let total = 0;
//         let average = 0.00;
//         for(let row = 0; row < this.dataStorage.length; ++row) {
//             for(let col = 0; col < this.dataStorage[row].length; ++col) {
//                 total += this.dataStorage[row][col];
//             }
//         average = total / 7;
//         console.log(`Week's ${row + 1} average temperature is ${average.toFixed(2)}`);
//         total = 0;
//         average = 0.00;
//         }    
      
//     }
// }

// let newMonth = new monthTemps();
// newMonth.add([[10,21,22,13,14,25,16],[17,18,29,20,21,12,23],[24,15,26,27,88,29,30],[21,32,33,34,35,36,17]]);

// console.log(newMonth.dataStorage);
// console.log(newMonth.monthAverage().toFixed(2));
// console.log(newMonth.weekAverage().toFixed(2));
// newMonth.allWeeksAverage();



// function Word() {
//     this.letters = [];
//     this.store = store;
//     this.singleWord = singleWord;

//     function store(letter) {
//         this.letters.push(letter);
//     }

//     function singleWord() {
//         return this.letters.join('');
//     }  
// }

// let newWord = new Word();
// newWord.store('h');
// newWord.store('a');
// newWord.store('n');
// newWord.store('d');

// console.log(newWord.letters);
// console.log(newWord.singleWord());

//Lists...................................................................
//A List ADT..............................................................
//A List Class Implementation.............................................
// function List() {
//     this.listSize = 0;
//     this.pos = 0;
//     this.dataStore = [];
//     this.append = append;
//     this.find = find;
//     this.remove = remove;
//     this.length = length;
//     this.toString = toString;
//     this.insert = insert;
//     this.clear = clear;
//     this.contains = contains;
//     this.front = front;
//     this.end = end;
//     this.prev = prev;
//     this.next = next;
//     this.currPos = currPos;
//     this.moveTo = moveTo;
//     this.getElement = getElement;
   

//     function append(element) {
//         this.dataStore[this.listSize++] = element;
//     }
//     function find(element) {
//         for(let i = 0; i < this.dataStore.length; ++i) {
//             if(this.dataStore[i] == element) {
//                 return i;
//             }
//         }
//         return -1;
//     }
//     function remove(element) {
//         let foundAt = this.find(element);
//         if(foundAt > -1) {
//             this.dataStore.splice(foundAt,1)
//             --this.listSize;
//             return true;
//         }
//         return false
//     }
//     function length() {
//         return this.listSize;
//     }
//     function toString() {
//         return this.dataStore;
//     }
//     function insert(element, after) {
//         let insPos = this.find(after);
//         if(insPos > -1) {
//             this.dataStore.splice(insPos+1, 0, element);
//             ++this.listSize;
//             return true;
//         }
//         return false;
//     }
//     function clear() {
//         delete this.dataStore;
//         this.dataStore = [];
//         this.listSize = this.pos = 0;
//     }
//     function contains(element) {
//         for(let i = 0; i < this.dataStore.length; ++i) {
//             if(this.dataStore[i] == element) {
//                 return true;
//             }
//         }
//         return false;
//     }
//     function front() {
//         this.pos = 0;
//     }
//     function end() {
//         this.pos = this.listSize-1;
//     }
//     function prev() {
//         if(this.pos >= 0) {
//              --this.pos;
//         }
//     }
//     function next() {
//         if(this.pos < this.listSize) {
//              ++this.pos;
//         }
//     }
//     function currPos() {
//         return this.pos;
//     }
//     function moveTo(position) {
//         this.pos = position;
//     }
//     function getElement() {
//         return this.dataStore[this.pos];
//     }
// }

// let newList = new List();
// newList.append(1);
// newList.append('cat');
// newList.append('dog');
// newList.remove('cat');
// newList.insert('cat', 'dog');
// newList.clear();
// newList.front();
// newList.end();
// newList.prev();
// newList.next();
// newList.currPos();
// newList.moveTo(0);

//console.log(newList.dataStore);
//console.log(newList.find('dog'));
//console.log(newList.length());
//console.log(newList.toString());
//console.log(newList.contains('cat'));
//console.log(newList.getElement());

//Iterating Through a List................................................
// for(newList.front(); newList.currPos() < newList.length(); newList.next()) {
//    console.log(newList.getElement());
// }
// for(newList.end(); newList.currPos() >= 0; newList.prev()) {
//    console.log(newList.getElement());
// }

//A List-Based Application................................................
// const fs = require('fs');
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

// function createArr(file) {
//     let arr = fs.readFileSync(file,'utf8');
//     let arrN = arr.split("\n");
//     for(let i = 0; i < arrN.length; ++i) {
//         arrN[i] = arrN[i].trim();
//     }
//     return arrN;
// }
// let movies = createArr('films.txt');

// let movieList = new List();
// for(let i = 0; i < movies.length; ++i) {
//     movieList.append(movies[i]);
// }

// let customers = new List();

// function Customer(name, movie) {
//     this.name = name;
//     this.movie = movie;
// }

// let rentedMovies = new List();

// function displayList(list) {
//     for(list.front(); list.currPos() < list.length(); list.next()) {
//         if(list.getElement() instanceof Customer) {
//             console.log(list.getElement()['name'] + ', ' + list.getElement()['movie']);
//         } else {
//             console.log(list.getElement());
//         }
//     }
// }

// function checkOut(name, movie, filmList, customerList, rentedList) {
//     if(movieList.contains(movie)) {
//         let c = new Customer(name,movie);
//         customerList.append(c);
//         filmList.remove(movie);
//         rentedList.append(movie);
//     } 
//     else {
//         console.log(`${movie} is not available`);
//     }
// }

// function checkIn(movie, filmList, rentedList) {
//     if(rentedList.contains(movie)) {
//         filmList.append(movie);
//         rentedList.remove(movie);
//         console.log(`Rented ${movie} is returned`);
//     } else {
//         console.log(`${movie} is not in the rentedList`);
//     }
// }

// console.log("Available movies: \n");
// displayList(movieList);
// readline.question('Enter your name: ', name => {
// readline.question('What movie would you like? ', movie => {
// checkOut(name, movie, movieList, customers, rentedMovies);
// console.log("\nCustomer Rentals: \n");
// displayList(customers);
// console.log("\nMovies now available: \n");
// displayList(movieList);
// console.log("\nRented movies: \n");
// displayList(rentedMovies);
// readline.question('\nWhat movie are you returning?: \n', movie => {
// checkIn(movie, movieList, rentedMovies);
// console.log("\nMovies now available: \n");
// displayList(movieList);
// console.log("\nRented movies: \n");
// displayList(rentedMovies);
// readline.close();
// });
// });
// });

// function insertElementB(element, list) {
//     let found = 0;
//     for(list.front(); list.currPos() < list.length(); list.next()) {
//     if(list.getElement().toLowerCase().charCodeAt(0)-96 > element.toLowerCase().charCodeAt(0)-96) { 
//         found++;
//     }
//     }
//     if(found != 0) {
//         console.log(`${element} doesn/t fit`);
//     } else {
//         list.append(element);
//     }
// }

// function insertElementS(element, list) {
//     let found = 0;
//     for(list.front(); list.currPos() < list.length(); list.next()) {
//     if(list.getElement().toLowerCase().charCodeAt(0)-96 < element.toLowerCase().charCodeAt(0)-96) { 
//         found++;
//     }
//     }
//     if(found != 0) {
//         console.log(`${element} doesn't fit`);
//     } else {
//         list.append(element);
//     }
// }

// console.log("Available movies: \n");
// displayList(movieList);
// insertElementS('American', movieList);
// console.log("Available movies: \n");
// displayList(movieList);

// let persons = new List();
// class Person {
//     constructor(name, gender) {
//     this.name = name;
//     this.gender = gender;
//     }
// }
// let displayList = (list) => {
//     for(list.front(); list.currPos() < list.length(); list.next()) {
//         if(list.getElement()['gender'] = 'female') {
//             console.log(list.getElement()['name'] + ', ' + list.getElement()['gender']);
//         }
//     }
// }

// let person1 = new Person('Alison', 'female');
// let person2 = new Person('Bob', 'male');
// let person3 = new Person('Mary', 'female');
// let person4 = new Person('Ann', 'female');
// let person5 = new Person('John', 'male');
// let person6 = new Person('Peter', 'male');
// let person7 = new Person('Susan', 'female');
// let person8 = new Person('Steve', 'male');
// let person9 = new Person('Pol', 'male');
// let person10 = new Person('Sara', 'female');
// persons.append(person1);
// persons.append(person2);
// persons.append(person3);
// persons.append(person4);
// persons.append(person5);
// persons.append(person6);
// persons.append(person7);
// persons.append(person8);
// persons.append(person9);
// persons.append(person10);

// displayList(persons);

//Chapter 4. Stacks........................................................
//Stack Operations.........................................................
//A Stack Implementation...................................................
function Stack() {
    this.dataStorage = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}
function push(element) {
    this.dataStorage[this.top++] = element;
}
function pop() {
    return this.dataStorage[--this.top];
}
function peek() {
    return this.dataStorage[this.top-1];
}
function clear() {
    this.top = 0;
}
function length() {
    return this.top;
}

// let test = new Stack();
// test.push('green');
// test.push('yellow');
// test.push('blue');
// console.log(test.length());
// console.log(test.peek());
// let popped = test.pop();
// console.log(popped);
// console.log(test.peek());
// test.push('red');
// console.log(test.peek());
// test.clear();
// console.log(test.length());
// console.log(test.peek());

//Using the Stack Class......................................................
//Multiple Base Conversions..................................................
// let mulBase = (num, base) => {
//     let s = new Stack();
//     while(num > 0) {
//         s.push(num % base);
//         num = Math.floor(num /= base);
//     }
//     converted = '';
//     while(s.length() > 0) {
//         converted += s.pop();
//     }
//     return converted;
// }

// let num = 32;
// let base = 2;
// let result = mulBase(num, base);
// console.log(`${num} converted to ${base} base is ${result}`);

//Palindromes................................................................
// let func = (word) => {
//     let s = new Stack();
//     for (i = 0; i < word.length; ++i) {
//         s.push(word[i]);
//     }
//     let rword = '';
//     while(s.length() > 0) {
//         rword += s.pop();
//     }
//     if(word == rword) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let word = 'racecar';
// if(func(word)) {
//     console.log(`${word} is a palindrome`);
// } else {
//     console.log(`${word} is not a palindrome`);
// }

//Demonstrating Recursion....................................................
// let fact = (n) => {
//     if(n === 0) {
//         return 1;
//     } else {
//          return n * fact(n-1);
//      }
// }
// let factor = (n) => {
//     let s = new Stack();
//     while(n > 1) {
//         s.push(n--);
//     }
//     let product = 1;
//     while(s.length() > 0) {
//         product *= s.pop();
//     }
//     return product;
// }
    
// console.log(fact(5));
// console.log(factor(5));

//Exercises..................................................................
// let func = (exp) => {
//     let s = new Stack();
//     for (i = 0; i < exp.length; i++) {
//         if(exp[i] === '(') {
//             s.push(exp[i]);
//         }
//         if(exp[i] === ')') {
//             if(s.pop() === undefined) {
//                 console.log("Mismatched ) at " + i);
//             }
//         }
//     }
//     if (s.length() === 0) { 
//         console.log("no mismatching parens!");
//       } else if (s.length() > 0) {
//         console.log("Mismatching ( at position " + s.peek());
//       }
// }

// func('2.3 + 23 / 12 + (3.14159 * .24.')

let func = (exp) => {
    let operators = new Stack();
    let foo = new Stack();
    let result = '';
    let evaluated = '';
    let precedence = (operator) => {
		switch(operator){
		case '*':
		case '/':
			return 2;
		case '+':
		case '-':
			return 1;
		}
	}
    for(i = 0; i < exp.length; i++) {
        let c = exp[i];
        let v = exp[i-1]
        if(!isNaN(parseInt(c))) {
            if(!isNaN(parseInt(v))) {
                result += `${c}`;
            } else {
                result += ` ${c}`;
            }
        }
        else if(precedence(c) > precedence(operators.peek()) || operators.dataStorage === [] || operators.dataStorage === ['(']) {
            operators.push(c);
        }
        else if(c === '+' || c === '-' || c === '*' || c === '/') {
            while(precedence(c) <= precedence(operators.peek())) {
                result += ` ${operators.pop()}`;
            }
            operators.push(c);
        }
        else if(c === '(') {
            operators.push(c);
        }
        else if(c === ')') {
            while(operators.peek() !== "(") {
                result += ` ${operators.pop()}`;
                operators.dataStorage.length --;
            }
            operators.pop();
            operators.dataStorage.length --;
        }
    }
   while(operators.dataStorage.length !== 0) {
       result += ` ${operators.pop()}`;
       operators.dataStorage.length --;
   }
   result = result.trim();
   console.log(result);
   
   for (i = 0; i < result.length; i++) {
       let r = result[i];
       let next = result[i+1];
       let prev = result[i-1];
       let val2 = '';
       let val1 = '';
       let calc = '';
       let num = '';
       
       if(!isNaN(parseInt(r))) {
           if (!isNaN(parseInt(next))) {
               num += r;
               num += next;
               operators.push(num);
               num = '';
           } 
           if (!isNaN(parseInt(prev))){
               foo.push(r);
           } 
           if (isNaN(parseInt(prev)) && isNaN(parseInt(next))) {
            operators.push(r);
           }
        }
           console.log(operators.dataStorage);
          
       if(r === '+' || r === '-' || r === '*' || r === '/') {
            val2 += operators.pop();
            val1 += operators.pop();

        calc = eval(`${val1} ${r} ${val2}`);
        operators.push(calc);
        }
   };    
    evaluated += operators.pop();
    console.log(evaluated);
}
func('(30+5)*(4-2)');
//30 5 + 4 2 - *
