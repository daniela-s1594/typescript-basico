import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: "Pro1",
  createdAt: new Date(),
  stock: 15,
  size: "L",
});

addProduct({
    title: "Pro2",
    createdAt: new Date(1993, 1, 1),
    stock: 15,
  });

console.log(products);
let total = calcStock();
console.log(total);
