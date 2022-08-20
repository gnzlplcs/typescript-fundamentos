(() => {
  let userId: string | number;
  userId: 'gonzalo';
  userId: 2121;

  function greeting(myText: string | number){
    if (typeof myText === 'string') {
      console.log(`string: ${myText.toUpperCase()}`);
    } else {
      console.log(`number: ${myText.toFixed(2)}`);
    }
  }

  greeting('nombre')
  greeting(1212)
})()
