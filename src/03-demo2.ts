// arroja error porque ya declararon en otro archivo
// esto se puede evitar ejecutando dentro de un IIFE
(() => {
  let myProductName = 'Product 1';
  let myProductPrice = 199;
})();
