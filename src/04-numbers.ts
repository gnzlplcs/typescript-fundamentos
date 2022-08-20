(() => {
  // forma inferida
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice)

  // forma explícita
  let customerAge: number = 28;
  console.log('customerAge', customerAge)

  // let productInStock: number;
  // console.log('productInStock', productInStock) // alerta porque la variable no tiene asignación
  let productInStock: number = 21;
  console.log('productInStock', productInStock) // alerta porque la variable no tiene asignación

  let discount = parseInt('nombre')
  console.log('discount', discount)
  if (discount <= 200) {
    console.log('apply')
  } else {
    console.log('not apply')
  }
})()
