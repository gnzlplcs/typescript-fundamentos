import _ from 'lodash'
// el editor de texto muestra cómo "transformar" una librería que no tiene soporte para TypeScript

const data = [
  {
    username: 'nico',
    role: 'admin'
  },
  {
    username: 'carmen',
    role: 'seller'
  },
  {
    username: 'gloria',
    role: 'seller'
  },
  {
    username: 'fer',
    role: 'cm'
  },
];

const rta = _.groupBy(data, (item) => item.role)
console.log(rta)
