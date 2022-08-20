(() => {
  let productTitle = 'my amazing product';
  // productTitle = null;
  // productTitle = () => {};
  // productTitle = 123;
  productTitle = 'another product';
  console.log('productTitle', productTitle);

  // forma explícita
  let productDescription: string = 'description product'

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: $100.99
  `;
  console.log(summary)
})();
