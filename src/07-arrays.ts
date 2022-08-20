(() => {
  // forma inferida
  let numbersArr = [10, 15, 215, 330]; // quedó definido como un array que solo contiene números
  // numbersArr.push('string') // error: valor que no es número
  // numbersArr.push(true)
  // numbersArr.push({})

  let mixedValues = ['string', 21, true];
  mixedValues.push(false) // no lanza error

  // forma explícita
  let explicitForm: (number | string | boolean)[] = [21, 'string', false]
  explicitForm.push(7)

  let prices = [21, 45, 89, 115]
  prices.map(item => item * 2)

})();
