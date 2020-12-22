// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// console.table('players:', players);

// /*
//  * Получаем массив имен всех игроков
//  */

// // Через обычный for
// const playerNames = [];
// for (const player of players) {
//   playerNames.push(player.name);
// }
// // Через метод .map()
// const playerNamesMap = players.map(function (player) {
//   return player.name;
// });
// console.log(playerNames);
// console.log(playerNamesMap);

// /*
//  * Увеличиваем кол-во поинтов каждого игрока
//  */

// // Через обычный for
// console.log('players:', players);

// const updatedPlayers = [];
// for (const player of players) {
//   updatedPlayers.push({
//     ...player,
//     points: player.points + player.points * 0.1,
//   });

// }

// console.log('updatedPlayers:', updatedPlayers);
// console.log('players:', players);

// // Через метод .map()
// const updatedPlayersMap = players.map(function (player) {
//   return { ...player, points: player.points + player.points * 0.1 }; // При { points: player.points * 1.1 } после запятой указывается очень много цифр...
// });

// console.table(updatedPlayers === players); // false
// console.table(updatedPlayers[0] === players[0]); // true
// console.table(updatedPlayersMap === updatedPlayers); // false
// console.table(updatedPlayersMap[0] === players[0]); // false
// console.table(updatedPlayersMap2[0] === updatedPlayersMap[0]); // true

// /*
//  * Увеличиваем кол-во часов игрока по id
//  */

// // Через метод .map()
// const playerIdToUpdate = 'player-3';
// const updatedPlayersId = players.map(function (player) {

//   if (player.id === playerIdToUpdate) {
//     return {
//       ...player, timePlayed: player.timePlayed + 50
//     }
//   }

//   return player;
// });

// console.table(updatedPlayersId);

// /*
//  * map своими руками
//  */

// const nubmers = [5, 10, 15, 20, 25];

// // - создает и возвращает новый массив
// // - перебирает оригинальный массив
// // // - вызывает колбек для каждого элемента и кидает туда аргументы
// //?  зачем колбек?
// // // - записывает результат вызова функции в новый массив
// // - записывает значение элементов в новый массив

// const map = function (array) {
//   const newArray = [];

//   for (let i = 0; i < array.length; i++) {
//     newArray.push(array[i] * 2);
//     console.log(array[i]);
//     console.log(i);
//     console.log(array);
//   }

//   return newArray;
// };

// console.log(map(nubmers));

//! Тренировка

// const salary = { mango: 100, poly: 50, ajax: 150 };
// const values = Object.values(salary);
// console.log(values);
// const totalSalary = values.reduce(((acc, value) => acc + value), 0)
// console.log(totalSalary);

// const numbers = [1, 2, 3];
// console.log(numbers);
// numbers.forEach((number, index) => numbers[index] += 10)
// console.log(numbers);

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const filteredNumbers = numbers.filter(el => el < 5)
// console.log(filteredNumbers);

// const add = function () { console.log(arguments) };
// add(1, 2, 3, 4, 5); // Arguments(5) [1, 2, 3, 4, 5, callee: (...), Symbol(Symbol.iterator): f]
// const add2 = () => { console.log(arguments) };
// add2(1, 2, 3, 4, 5); // Uncaught ReferenceError: arguments is not defined

// const cart = [ { label: 'Apples', price: 100, quantity: 2 }, { label: 'Bananas', price: 120, quantity: 3 }, { label: 'Lemons', price: 70, quantity: 4 }, ];
// const countTotalAmount = function (array) {
//   let totalAmount = array.reduce((acc, element) => {
//     return acc + element.price * element.quantity;
//   }, 0);
//   return totalAmount;
// };
// Ниже максимально сокразенная запись
// const countTotalAmount = array => array.reduce((acc, element) => acc + element.price * element.quantity, 0);
// console.log(countTotalAmount(cart));

// array.forEach(element => {
//   if (element === 0) {
//     array.splice(array.indexOf(element), 1)
//     array.push(element)
//   }
// })

// const moveZeros = array => {
//   array.forEach(element => {
//     if (element === 0) {
//       array.splice(array.indexOf(element), 1);
//       array.push(element);
//     }
//   });
//   return array;
// };
// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']));
// // (9) [false, 1, 1, 2, 1, 3, 'a', 0, 0]

