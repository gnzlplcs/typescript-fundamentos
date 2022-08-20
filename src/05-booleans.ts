(() => {
  // forma inferida
  let isEnable = true
  // isEnable = 'as' // no se le debe asignar otro tipo de dato
  // isEnable = 21
  isEnable = false

  // forma explícita
  let isNew: boolean = false
  console.log('isNew', isNew)
  isNew = true;
  console.log('isNew', isNew)

  const random = Math.random()
  console.log('random', random)
  isNew = random > 0.5 // tiene que recibir un valor booleano como asignación
  console.log('isNew', isNew)
})();
