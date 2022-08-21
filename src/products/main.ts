import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: 'prod 01',
  createAt: new Date(1983, 1, 21),
  stock: 5
});

addProduct({
  title: 'prod 02',
  createAt: new Date(1982, 6, 21),
  stock: 6,
  size: 'S'
})

console.log(products)
const total = calcStock();
console.log(total)
