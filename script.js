// const kalkulator = (son1,son2,amal) => {
//     let natija;
    
    
    

//       switch (amal) {
//     case "+": 
//       natija = son1 + son2;
//       break;
//     case "-":
//       natija = son1 - son2;
//       break;    
//     case "*":
//       natija = son1 * son2;
//       break;  
//     case "/":
//       natija = son1 / son2;
//       break;  
//     default:
//       natija = "Noto'g'ri amal kiritildi";
//   }
//   return natija;
// };
// console.log(kalkulator(10, 5, "+"));
// console.log(kalkulator(10, 5, "-"));
// console.log(kalkulator(10, 5, "*"));
// console.log(kalkulator(10, 5, "/"));


// function baholash(ball){
// let baho;
// if( ball >= 95 ) {
//     baho = "A'lo";
// } else if (ball >=70){
//     baho = "Qoniqarli";
// }
// else if (ball >= 45){
//     baho = "Yomon"
// }
// else if(ball <=10 ){
//     baho = "Tupoy misiz"
// }
// else if(ball <= 25){
//     baho = "Juda yomon"
// }
//  else {
//     baho = "siz topshirmagansiz"
// }
// return baho;
// }

// console.log(baholash(95));
// console.log(baholash(72));
// console.log(baholash(45));
// console.log(baholash(25));
// console.log(baholash(10));

// function juftsonlar (number) {
//     let juft;
//     if (number % 2 == 0){
//         console.log("juft son")
//     }
//     else {
//         console.log("toq son")
//     }
// }
// juftsonlar(2)
// juftsonlar(5)

// function Kattasi(a,b,c) {
// let max = a;
//  if (b > max) {
//   max = b;
//  }
// if (c > max) {
//   max = c;
// }
// console.log ("Eng kotta son",max)
// }
// Kattasi(3,7,9);
// Kattasi(8,3,5);


// let sonlar =[10, 20, 30];

// sonlar.push(40);
// console.log(sonlar);

// sonlar.unshift(5);
// console.log(sonlar);

// sonlar.pop();
// console.log(sonlar);

// sonlar.shift();
// console.log(sonlar);

let mevalar = ["Olma", "Banan", "Uzum"];
mevalar.push("Anor", "Nok");
console.log(mevalar);

let sonlar = [10, 20, 30, 40, 50];
sonlar.pop();
console.log(sonlar);

let numbers = [5, 12, 8, 17, 4, 21, 16, 9];
for(let a = 0; a < numbers.length; a++ ) {
    if (numbers [a] % 2 === 0) {
        console.log(numbers[a])
    }
}

let arr1 = [3, -5, 8, -2, 0, -9, 4, -1];

let b = 0;
for (let c = 0; c < arr1.length; c++){
    if (arr1[c] < 0){
        b++;
    }
}
console.log(b);












