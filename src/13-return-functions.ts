(() => {
  const calcTotal = (prices: number[]): number => { // con esto se indica que la función debe retornar un number
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total;
  }

  // tipar una función sin retorno (void)
  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`)
  }

  printTotal([1,2,3,4])
})()
