(() => {
  const login = (email: string, password: string) => {
    console.log(email, password);
  }

  login('nico@nico.co', '121212') // espera dos parámetros

  const loginWithObject = (data: { email: string, password: string }) => { // recibe un objeto como parámetro
    console.log(data.email, data.password);
  }

  loginWithObject({
    email: 'nico@nico.co',
    password: '121212'
  })

  type Sizes = 'S' | 'M' | 'L' | 'XL'

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }) => {
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

}) ()
