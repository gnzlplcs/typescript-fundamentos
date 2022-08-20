(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createAt: Date,
    stock: number,
    size: Sizes
  ) {
    return { title, createAt, stock, size }
  }

  const product1 = createProductToJson('product 01', new Date(), 21, 'L'); // TS obliga a que se respeten todos los parámetros
  console.log(product1)

  // con arrow function
  // el parámetro size se setea de forma opcional
  const createProductToJsonV2 = (
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes // parámetro opcional
  ) => {
    return { title, createAt, stock, size }
  }
  const product2 = createProductToJsonV2('product 02', new Date(), 42);
  console.log(product2.size) // undefined

})()
