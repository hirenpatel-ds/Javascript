// user = {
//     name : "Hiren",
//     age : 23
// }
// console.log(user)
// relational operator
// let a = 10;
// let b = 30;
// let c = 25;
// let d = 15;

// console.log("a < d", a < d);
// console.log("b > c",b > c);
// console.log("d > b",d > b);
// console.log()
// console.log("False, Undefined also false: ", false && undefined);
// null,undefined,false,empty String, Nan, -0, 0 all of these are falsy value
// console.log(10 && 6);
// console.log(true && 10);
// console.log(false,20)

// Nested if else

// isPremiumMember = true;
// isVipMember = true;

// if (isPremiumMember){
//     console.log("Enjoy Premium Content.!!");
// }
// else if(isVipMember){
//     console.log("Enjoy Vip Content.!");
// }
// else{
//     console.log("Please purchase any plan to watch premium content");
// }

// let a = 25;
// let b = 35;
// let c = 20;
// if (a > b && a > c){
//     console.log("A is Max: "+ a);
// }
// else if (b > a && b > c){
//     console.log("B is Max: "+ b);
// }
// else{
//     console.log("C is Max"+ c)
// }

// find Perfect triangle

// let a = 12;
// let b = 5;
// let c = 17;

// if (a + b >= c && b+c >= a && c+a >= b ){
//     console.log("Yes This triangle is perfect: ");
// }
// else{
//     console.log("This triangle is not perfect.");
// }

// While loop

// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i += 1;
// }

// printing number in reverse
// let i = 20;
// while (i >= 1){
//    console.log(i);
//    i -= 1;
// }

// Use for loop for above statement

// for(let i =0; i<=22; i+=2){
//     console.log(i);
// }

// Print 50 odd or even numbers
// function isOddEven(num){
//     if (num % 2 == 0){
//         return "Even"
//     }
//     else{
//         return "Odd"
//     }
// } 
// for (let i = 0;  i<=50; i++){
//     console.log("The Number "+ i + " is "+isOddEven(i))
// }

// return true if number is Prime
// function isPrime(n){
//     for (let i = 2;i<=n-1;i+=1){
//         if (n%i == 0){
//             return "Composite Number";
//         }
//     }
//     return "Prime Number";
// }
// for (let i = 0;  i<=50; i++){
//     console.log("The Number "+ i + " is "+isPrime(i))
// }
// isPrime Practice

// function isPrimeNumber(n){
//     for (let i = 2; i<= n-1;i+=1){
//         if (n%i == 0){
//             return "Composite Number";
//         }           
//     }
//     return "Prime number";
// }
// for(i=0;i<=10;i++){
//     console.log("The Number "+i+" is "+isPrimeNumber(i) )
// }

// function pattern(n){
//     for (let i=1;i<=n;i+=1){
//         let pt = '';
//         for (let col=1;col<=n;col++){
//             pt =pt + '*';
//         }
//         console.log(pt)
//     }
// }
// pattern(5)
// pattern(6)

// Pattern practice
// function pattern(n){
//     for (let row = 1;row<=n; row++){
//         let star = '';
//         for (let col=1; col<=n;col++){
//             star = star + '*';
//         }
//         console.log(star);
//     }
// }
// pattern(4)

// function pattern(n){
//     for (let row=1; row<=n;row++){
//         let star = '';
//         for(let col= 1;col<=row;col++){
//             star =star + '*';
//         }
//         console.log(star)
//     }
// }

// pattern(4)
// pattern(5)

// function pattern(n){
//     for(let row=1;row<=n;row++){
//         let str='';
//         let spaces= n - row;
//         for(j=1;j<=spaces;j++){
//             str = str + ' ';
//         }
//         let star = row
//         for(let col=1;col<=star;col++){
//             str += '*'
//         }
//         console.log(str)
//     }
// }
// pattern(4)
// pattern(12)

// codewithharry started


const hiren = require('./second');
console.log(hiren['isDeveloper'])