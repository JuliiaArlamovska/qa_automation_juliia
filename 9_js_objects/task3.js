const car1 = {brand: "Volkswagen", model: "Golf", year: 2020};
const car2 = {brand: "Honda", model: "Accord", owner: "Ihor"};
const car3 = {
firstCar: { ...car1},
secondCar: { ...car2}
}
console.log(car3);