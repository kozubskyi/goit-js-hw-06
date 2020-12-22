import users from './users.js'; // users - имя переменной, которое мы сами выбираем

//! Задание 1

// Получить массив имен всех пользователей (поле name).

//* Обычная функция
// const getUserNames = function(users) {
//   const userNamesArray = users.map(function (user) {
//     return user.name
//   });
//   return userNamesArray;
// };

//* Стрелочная функция
// const getUserNames = users => {
//   const userNamesArray = users.map(user => {
//     return user.name
//   });
//   return userNamesArray;
// };

//* Масимально сокращенная запись
const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//! Задание 2

// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

//* Обычная функция
// const getUsersWithEyeColor = function(users, color) {
//   const filteredUsers = users.filter(function(user) {
//     if (color === user.eyeColor) {
//       return user;
//     }
//   });
//   return filteredUsers;
// };

//* Стрелочная функция
// const getUsersWithEyeColor = (users, color) => {
//   const filteredUsers = users.filter(user => {
//     if (color === user.eyeColor) {
//       return user;
//     }
//   });
//   return filteredUsers;
// };

//* Масимально сокращенная запись
const getUsersWithEyeColor = (users, color) =>
  users.filter(user => color === user.eyeColor);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//! Задание 3

// Получить массив имен пользователей по полу (поле gender).

//* Обычная функция
// const getUsersWithGender = function (users, gender) {
//   const filteredUsers = users.filter(function (user) {
//     if (gender === user.gender) {
//       return user;
//     }
//   });
//   return filteredUsers;
// };

//* Стрелочная функция
// const getUsersWithGender = (users, gender) => {
//   const filteredUsers = users.filter(user => {
//     if (gender === user.gender) {
//       return user
//     }
//   })
//   return filteredUsers
// }

//* Масимально сокращенная запись
const getUsersWithGender = (users, gender) =>
  users.filter(user => gender === user.gender).map(user => user.name);

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//! Задание 4

// Получить массив только неактивных пользователей (поле isActive).

//* Стрелочная функция
// const getInactiveUsers = users => {
//   const filteredUsers = users.filter(user => {
//     if (!user.isActive) {
//       return user;
//     }
//   });
//   return filteredUsers;
// };

//* Масимально сокращенная запись
const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//! Задание 5

// Получить пользоваля (не массив) по email (поле email, он уникальный).

//* Стрелочная функция
// const getUserWithEmail = (users, email) => {
//   const neededUser = users.find(user => {
//     if (email === user.email) {
//       return user
//     }
//   })
//   return neededUser;
// };

//* Масимально сокращенная запись
const getUserWithEmail = (users, email) =>
  users.find(user => email === user.email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//! Задание 6

// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

//* Стрелочная функция
// const getUsersWithAge = (users, min, max) => {
//   const filteredUsers = users.filter(user => {
//     if (user.age >= min && user.age < max) {
//       return user;
//     }
//   });
//   return filteredUsers;
// };

//* Масимально сокращенная запись
const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age >= min && user.age < max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//! Задание 7

// Получить общую сумму баланса (поле balance) всех пользователей.

//* Стрелочная функция через метод .forEach()
// const calculateTotalBalance = users => {
//   let totalBalance = 0;
//   users.forEach(user => {
//     return (totalBalance += user.balance);
//   });
//   return totalBalance;
// };

//* Стрелочная функция через метод .reduce()
// const calculateTotalBalance = users => {
//   let totalBalance = users.reduce((acc, user) => {
//     return acc + user.balance
//   }, 0)
//   return totalBalance
// };

//* Масимально сокращенная запись
const calculateTotalBalance = users =>
  users.reduce((totalBalance, user) => totalBalance + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916

//! Задание 8

// Массив имен всех пользователей у которых есть друг с указанным именем.

//* Сделал через методы .reduce() и .includes()
// const getUsersWithFriend = (users, friendName) => {
//   const userNames = users.reduce((acc, user) => {
//     if (user.friends.includes(friendName)) {
//       acc.push(user.name);
//     }
//     return acc;
//   }, []);
//   return userNames
// };

//* Сделал через методы .reduce() и .some()
// const getUsersWithFriend = (users, friendName) => {
//   const userNames = users.reduce((acc, user) => {
//     if (user.friends.some(userFriend => friendName === userFriend)) {
//       acc.push(user.name);
//     }
//     return acc;
//   }, []);
//   return userNames;
// };

//*Максимально короткая запись
const getUsersWithFriend = (users, friendName) =>
  users.reduce(
    (array, user) =>
      user.friends.includes(friendName) ? [...array, user.name] : array,
    // Не совсем понимаю зачем нужна запись [...array, user.name] поскольку мы уже вроде как создали массив ниже при помощи .reduce()
    [],
  );

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//! Задание 9

// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

//*Максимально короткая запись
const getNamesSortedByFriendsCount = users =>
  [...users]
    .sort((prev, next) => prev.friends.length - next.friends.length)
    .map(user => user.name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//! Задание 10

// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

//todo 1. Перебрать массив users
//todo 2. Перебрать массив skills каждого обьекта
//todo 3. Если элемент массива skills не совпадает ни с одним элементом из массива skillsArray, то запушить его в skillsArray
//todo 4. Отсортировать с помощью .sort()

//* Сделал через методы .forEach(), .includes(), .push(), .sort()
// const getSortedUniqueSkills = users => {
//   const skillsArray = [];

//   users.forEach(user =>
//     user.skills.forEach(skill =>
//       // skillsArray.includes(skill) ? null : skillsArray.push(skill),
//       !skillsArray.includes(skill) ? skillsArray.push(skill) : null,
//     ),
//   );
//   skillsArray.sort();

//   return skillsArray;
// };

//* Сделал через методы .reduce(), .filter(), .sort()
const getSortedUniqueSkills = users => {
  const allSkillsArray = [...users].reduce((acc, user) => acc = [...acc, ...user.skills], [])
  const result = allSkillsArray
    .filter((value, index) => allSkillsArray.indexOf(value) === index)
    .sort();
  return result
}

console.log(getSortedUniqueSkills(users));
// (19) [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
