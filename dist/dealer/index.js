import { Dealer } from "./Dealer.js";
console.log('####################################');
console.log('####################################');
console.log('####################################');
console.clear();
const bandis = new Dealer('Al Bundy', 'EUR');
const chuck = new Dealer('Chuck Norris');
// Hi, my name is Al Bundy!
console.log(bandis.getCar('Volvo', 15_000));
console.log(bandis.getCar('Volvo', 0.01));
console.log(bandis.getCar('Volvo', 0.1));
console.log(bandis.getCar('Volvo', 1));
console.log(bandis.getCar('Volvo', 1.1));
console.log(bandis.getCar('Volvo', 1.01));
console.log(bandis.getCar('Volvo', 1000));
console.log(bandis.getCar('Volvo', 1001));
console.log(bandis.getCar('Volvo', 1010));
console.log(bandis.getCar('Volvo', 1100));
console.log(bandis.getCar('Volvo', 12_345.89));
console.log(bandis.getCar('Volvo', 1_002.03));
console.log(bandis.getCar('Volvo', 10_002.03));
// New car everyone! Volvo for only 15.000 EUR!
console.log(bandis.getCar('Vokswagen Passat', 19_999.99));
// New car everyone! Passat for only 19.999,99 EUR!
// console.log(bandis.getCar('Toyota', 17_500));
// // New car everyone! Toyota for only 17.500 EUR!
// console.log(bandis.getCar('Mazda', 10_500));
// // New car everyone! Mazda for only 10.500 EUR!
// console.log(bandis.carList());
// // Al Bundy's car dealership:
// // ==========================
// // 1) Volvo: 15.000 EUR;
// // 2) Passat: 20.000 EUR;
// // 3) Toyota: 17.500 EUR;
// // 4) Mazda: 10.500 EUR.
// console.log(bandis.changeCarPrice(1, 17_300));
// // New Volvo price is 17.300 EUR.
// console.log(bandis.changeCarPrice(2, 19_500));
// // New Passat price is 19.500 EUR.
// console.log(bandis.carList());
// // Al Bundy's car dealership:
// // ==========================
// // 1) Volvo: 17.300 EUR;
// // 2) Passat: 19.500 EUR;
// // 3) Toyota: 17.500 EUR;
// // 4) Mazda: 10.500 EUR.
// console.log(bandis.sellCar(1));
// // Wow! Volvo sold for 17.300 EUR!
// console.log(bandis.sellCar(5));
// // SORRY! There is no such car for sale :(
// console.log(bandis.sellCar(2));
// // Wow! Toyota sold for 17.500 EUR!
// console.log(bandis.fortune());
// // Al Bundy has sold 2 cars for total of 34.800 EUR!
// console.log(bandis.carList());
// // Al Bundy's car dealership:
// // ==========================
// // 1) Passat: 19.500 EUR;
// // 2) Mazda: 10.500 EUR.
// console.log(bandis.sellCar(1));
// // Wow! Passat sold for 19.500 EUR!
// console.log(bandis.changeCarPrice(1, 15_000));
// // New Mazda price is 15.000 EUR.
// console.log(bandis.sellCar(1));
// // Wow! Mazda sold for 15.000 EUR!
// console.log(bandis.fortune());
// // Al Bundy has sold 4 cars for total of 69.300 EUR!
// console.log(bandis.carList());
// // Al Bundy's car dealership:
// // ==========================
// // SORRY! No cars for sale :(
// console.log(bandis.sellCar(5));
// // SORRY! There is no such car for sale :(d
