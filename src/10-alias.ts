(() => {
  // ALIAS permite crear un tipado que puede ser reutilizado
  type UserID = string | number | boolean; // este tipado se puede reutilizar y ya tiene los tipos seteados
  let userId: UserID;

  function greeting(userId: UserID){
    if (typeof userId === 'string') {
      console.log(`string: ${userId.toUpperCase()}`);
    }
  }

  // LITERAL TYPES
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';
  // shirtSize= 's' // lanza error porque no está predefinido

  function purchase(user: UserID, shirt: Sizes) {
    console.log(`The user ${user} purchased a size ${shirt}`)
  }

  purchase('Gonzalo', 'L');
  purchase(2121, 'XL');
  // purchase({}, 'XXL'); // lanza error porque no son las opciones

})()
