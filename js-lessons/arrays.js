//  поиск по массиву из объектов
const basket = [
  {
    id: 1,
    name: "JS book",
    price: 99.0,
    quantity: 1,
  },
  {
    id: 2,
    name: "PHP book",
    price: 79.0,
    quantity: 1,
  },
  {
    id: 3,
    name: "React JS book",
    price: 199.0,
    quantity: 1,
  },
];

const resultBasket = basket.find((el) => el.price === 199.0);
console.log(resultBasket);
