// // ECMAScript6

// // var, let dan const

// // console.log(number)
// // var number = 10;

// // let number = 10;
// // number = 5;
// // console.log(number)

// // const pi = 3.14
// // pi = 10;
// // console.log(pi)

// // arrow function

// // Ada 3 cara deklarasi function

// // 1. Function Declaration
// function hello() {
//     console.log("Hello");
//   }
//   // hello()
  
//   // 2. Function Expression
//   const helloExpression = function () {
//     console.log("Hello Express");
//   };
//   // helloExpression()
  
//   // 3. Function Arrow
//   const helloArrow = () => {
//     console.log("Hello Arrow");
//   };
//   // helloArrow()
  
//   /**
//    * Study Case 1
//    * Cek Bilangan Ganjil Genap
//    *
//    */
  
//   // ES5
//   function cekGanjilGenap(n) {
//     if (n % 2 === 0) {
//       return "genap";
//     } else {
//       return "ganjil";
//     }
//   }
//   // console.log(cekGanjilGenap(5))
  
//   // ES6
//   const cekGenapGanjil = (n) => (n % 2 === 0 ? "genap" : "ganjil");
//   // console.log(cekGenapGanjil(7))
  
//   // Template Literal
  
//   let kata1 = "saya";
//   let kata2 = "sudah";
//   let kata3 = "makan";
  
//   // Result: saya sudah makan
  
//   // ES5
//   // console.log(kata1 + " " + kata2 + " " + kata3)
  
//   // ES6
//   // console.log(`${kata1} ${kata2} ${kata3}`)
  
//   // High Order Function
  
//   let scores = [10, 2, 5, 3, 7];
  
//   // .forEach()
//   // ES5
//   for (var i = 0; i < scores.length; i++) {
//     // console.log(scores[i])
//   }
  
//   // ES6
//   scores.forEach((score) => {
//     // console.log(score)
//   });
  
//   // .map()
//   // Result: [100, 4, 25, 9, 49]
  
//   // ES5
//   let temp = [];
//   for (var i = 0; i < scores.length; i++) {
//     temp.push(scores[i] ** 2);
//   }
//   // console.log(temp)
  
//   // ES6
//   let scoresPower2 = scores.map((score) => score ** 2);
//   // console.log(scoresPower2)
  
//   // .filter()
//   // Result: [100, 25, 49]
  
//   // ES5
//   let tempFilter = [];
//   for (let i = 0; i < scoresPower2.length; i++) {
//     if (scoresPower2[i] > 10) {
//       tempFilter.push(scoresPower2[i]);
//     }
//   }
//   // console.log(tempFilter)
  
//   // ES6
//   let filteredScores = scoresPower2.filter((score) => score > 10);
//   // console.log(filteredScores)
  
//   /*
//       Study Case
  
//       Buatlah function untuk:
//       1. Mempangkatkan 3
//       2. Memilihi angka yang lebih besar dari 100
//       3. Tampilkan angka2 nya
//   */
  
//   let stats = [10, 3, 2, 5, 7];
  
//   // ES5
//   function pangkat3(arr) {
//     let temp = [];
//     for (let i = 0; i < arr.length; i++) {
//       temp.push(arr[i] ** 3);
//     }
//     return temp;
//   }
//   function filter100(arr) {
//     let temp = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > 100) {
//         temp.push(arr[i]);
//       }
//     }
//     return temp;
//   }
//   function printStats(arr) {
//     let power3 = pangkat3(arr);
//     let saring100 = filter100(power3);
//     for (let i = 0; i < saring100.length; i++) {
//       console.log(saring100[i]);
//     }
//   }
//   // printStats(stats);
  
//   // ES6
//   // stats.map(stat => stat ** 3).filter(stat => stat > 100).forEach(stat => console.log(stat))
  
//   // Destructuring
  
//   let vehicles = ["Civic 2023", 5000, false];
  
//   // // ES5
//   // let name = vehicles[0]
//   // let cc = vehicles[1]
//   // let isSold = vehicles[2]
  
//   // ES6
//   let [name, cc, isSold] = vehicles;
  
//   let item = {
//     type: "Laptop",
//     price: 1000,
//   };
  
//   const { type, price } = item;
  
//   // Rest dan Spread Operator
  
//   let n1 = [1, 2, 3];
  
//   // ES5
//   // let n2 = n1.slice();
  
//   // ES6
//   let n2 = [...n1]
  
//   n1.push(4, 5);
//   console.log(n1);
//   console.log(n2);
  
  
//   const greet = (...params) => {
//       // console.log(params)
//       const [name, gpa, isGraduated] = params
//       console.log(`${name}, GPA: ${gpa}, Grads: ${isGraduated}`)
//   }
  
//   greet("Vincent", 3.21, true)