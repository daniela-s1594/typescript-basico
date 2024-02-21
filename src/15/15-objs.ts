(() => {
  type Sizes = "S" | "M" | "L" | "XL";
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data);
  };

  addProduct({
    title: "Pro1",
    createdAt: new Date(),
    stock: 10,
    size: "L",
  });

  addProduct({
    title: "Pro2",
    createdAt: new Date(1993, 1, 1),
    stock: 18,
  });

  products.push({
    title: "Pro3",
    createdAt: new Date(2004, 9, 15),
    stock: 19,
    size: "M",
  });

  console.log(products);
})();
