(() => {
  const login = (data: { email: string; password: number }) => {
    console.log(data.email, data.password);
  };
  login({
    email: "niconico@ni.co",
    password: 12121212,
  });

  type Sizes = "S" | "M" | "L" | "XL";

  const products: any[] = [];

  const addProduct = (data: {
    title: string;
    createdAt: Date;
    stock: number;
    size?: Sizes;
  }) => {
    products.push(data);
  };

  addProduct({
    title: 'Pro1',
    createdAt: new Date(),
    stock: 10,
    size:'L',
  });

  addProduct({
    title: 'Pro2',
    createdAt: new Date(),
    stock: 18,
  });
  console.log(products);
  
})();
