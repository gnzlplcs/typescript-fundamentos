(() => {
  // usar any es como deshabilitar el typado
  // any no se debería utilizar
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};

  // de este modo se puede obligar a que una variable tenga un tipo
  myDynamicVar = 'Hola' // el editor de texto no da sugerencias cuando el tipo es any
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta)

  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2)
})();
