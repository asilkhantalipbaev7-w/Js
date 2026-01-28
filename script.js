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

// let mevalar = ["Olma", "Banan", "Uzum"];
// mevalar.push("Anor", "Nok");
// console.log(mevalar);

// let sonlar = [10, 20, 30, 40, 50];
// sonlar.pop();
// console.log(sonlar);

// let numbers = [5, 12, 8, 17, 4, 21, 16, 9];
// for(let a = 0; a < numbers.length; a++ ) {
//     if (numbers [a] % 2 === 0) {
//         console.log(numbers[a])
//     }
// }

// let arr1 = [3, -5, 8, -2, 0, -9, 4, -1];

// let b = 0;
// for (let c = 0; c < arr1.length; c++){
//     if (arr1[c] < 0){
//         b++;
//     }
// }
// console.log(b);
 

// let texnologiyalar = ['HTML' , 'JavaScript' , 'Python' , 'Java' , 'CSS' , 'React'];

// let til = texnologiyalar.slice(1,4);
// console.log(til);


// let fanlar = ['Ona tili' , 'Matematike' , 'Tarix' , 'English'];

// let dars = fanlar.splice(1, "Informatika" , "Fazika");
// console.log(dars);

// // let Ranglar = ['Qizil', 'Yashil' , 'Kok' , 'sariq' , 'oq' , 'Olma' , 'Shaftoli'];

// let cars = ['Cobalt' , 'Centra' , 'Damas', 'Spark', 'Olama', 'Banan' ];

// let lishni = cars.slice(-1);
// console.log(lishni);

// let nmadur = cars.splice(4 , 'Tarvuz' , 'Qovun');
// console.log(nmadur);


// let mavallar = ['HTML' , 'CSS' , "Javascript", 'Python', 'Java'];

// let juma = mavallar.slice(2, 'TypeScript');
// console.log(juma);


// let Ballar = [75,85,90,60,95];

// let balli = Ballar.filter(son => son > 80);
// console.log(Ballar);


// let prices = [150,80,200,50,120];

// let kam = prices.find(son => son < 100);
// console.log(kam);


// let scores = [70,85,90,95,80];

// let ball = scores.find(son => son > 90);
// console.log(ball);


// let shaharlar = ["Toshkent", "Samarqand", "Buxoro", "Xiva", "Namangan", "Andijon"];

// let last = shaharlar.slice(-3);
// console.log(last);


// let fanlar = ["Ingliz tili", "Tarix", "Matematika", "Fizika", "Kimyo"];

// let = fanlar.splice(2,2,'Dasturlash tili');
// console.log(fanlar);


// let fruits = ["olma", "banan", "apelsin", "shaftoli"];

// fruits.forEach((fruit, from, payme) => {
//   payme[from] = fruit[0].toUpperCase() + fruit.slice(1);
// });

// console.log(fruits);

// const car = {}


// let talaba4 = {
//     ism: "Madina" ,
//     fakultet: "Informatika" ,
//     shahar: "Samarqand" ,
//     yil: 2
// };
// delete talaba4.shahar;

// console.log(talaba4);

// let person = {
//     ism: "Karim" ,
//     yosh: 30 ,
//     greet: function () {
//         console.log("Salom mening ismim:" +  this.ism);
//     }
// };
// person.greet();

// let kitob = {
//     nomi: "JavaScript Dasturlash",
//     muallif: "Saidjon",
//     yil:2020
// };
// let yangiKitob = {kitob};
// yangiKitob.nomi = "PHP,PYTHON,JAVA";
// console.log(yangiKitob);


// let talabalar = [
//     {ism: "Ali" , ball:75},
//     {ism: "Vali" , ball:85},
//     {ism: "Guli", ball:90},
//     {ism: "Olim", ball: 60}
// ];
// let balliKotalar = talabalar.filter( talaba => talaba.ball > 80);
// console.log(balliKotalar);

// let mahsulotlar = [
//     {id: 1, nomi: "Telefon" , narxi:3000000},
//     {id:2, nomi:"Laptop" , narxi:8000000},
//     {id:3, nomi:"tablaet" , narxi:2500000}
// ];
// let idsiUch = mahsulotlar.find (mahsulot => mahsulot.id === 3);
// console.log( idsiUch.narxi);

alert('Sinf ishi');
// let languages = ["JavaScript" , "Python" , "Java" , "C++"];

// let [nolinchi,birinchi,ikinchi,uchinchi] = languages;
// console.log(nolinchi);
// console.log(birinchi);
// console.log(ikinchi);
// console.log(uchinchi);



// let product = {
//     nomi: "Smartphone" ,
//     narxi: 500 ,
//     rangi: "Qora"
// };
// let {nomi , narxi , rangi , kategory = "Boshqa"} = product;

// console.log(nomi);
// console.log(narxi);
// console.log(rangi);
// console.log(kategory);


// let foydalanuvchi = {
//     id: 1,
//     ism:"Jasur" ,  
//     manzil:{
//      shahar:"Buxoro",
//      tuman:"Kogon",
//      kocha:"Navoyi"
//     },
//     kontakt: {
//         telefon:"+998998887765",
//         emeil: "jasuriniguzini@gmail.com"
//     }
// };
// let {manzil:{shahar, tuman } , kontakt:{telefon,emeil}} = foydalanuvchi;
// console.log(shahar);
// console.log(tuman);
// console.log(telefon);
// console.log(emeil);



const a = [1,2,3];
const b = [4,5,6];
const c = [7,8,9];

const one = [0, ...a, ...b, ...c , 100];
console.log(one);

const mahsulot = {
    nomi: "Laptop" ,
    narxi: 50000000 , 
    rangi: "Kumush"
};

const  {narxi, ...others } = mahsulot;
const obj = {
    ...others ,
    narxi: narxi * 0.2 ,
    chegirma: true
};
console.log(obj);

function kopaytma( ...numbers) {
    let natija = 1;

    for ( let number of numbers ) {
        natija *=  number ;
    }
    return natija;
};
console.log(kopaytma(2,3,4));
console.log(kopaytma(5,5));
console.log(kopaytma(1,2,3,4));
