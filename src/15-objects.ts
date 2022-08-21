(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = [];

  const addProduct = (data: Product) => {
    products.push(data)
  }

  addProduct({ // size ni siquiera se imprimirá como undefined
    title: 'prod 01',
    createAt: new Date(1983, 1, 21),
    stock: 21
  });

  addProduct({
    title: 'prod 02',
    createAt: new Date(1982, 6, 21),
    stock: 7,
    size: 'S'
  })

  console.log(products)
  // products.push(12); // lanza error
  products.push({
    title: 'prod 03',
    createAt: new Date(1981, 11, 14),
    stock: 21,
    size: 'M'
  })

  console.log(products)

}) ()
