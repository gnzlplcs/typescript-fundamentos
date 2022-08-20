(() => {
  // let myNumber: number = undefined; // no se puede
  // let myString: string = null; // no se puede

  let myNull = null; // no se puede inferir, TypeScript lo asigna como tipo any
  let myUndefined = undefined; // no se puede inferir, TypeScript lo asigna como tipo any

  let reallyNull: null;
  let reallyUndefined: undefined;

  let myNumber: number | null = null; // un valor puede ser null hasta que no se cargue, por ejemplo, en un framework
  myNumber = 21;

  let myString: string | undefined = undefined;
  myString = 'string';

  function hi(name: string | null) {
    let hello ='Hola';
    if (name) console.log(`${hello} ${name}!`); // funciona solo si se le pasa un string
    else console.log(hello) // si no hay string aún puede funcionar
  }

  hi('Gonzalo')
  hi(null)

  function hiWithOptionalChaining(name: string | null) {
    let hello ='Hola ';
    hello += name?.toLowerCase() || 'nobody'; // optional chaining (JS) sirve para hacer evaluación rápida
    console.log(hello)
  }

  hiWithOptionalChaining('GONZALO')
  hiWithOptionalChaining(null)

})()
