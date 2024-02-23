
// Объект базы данных
const database = {
  users: [],
};

// Функция регистрации пользователя
function registerUser(firstName, lastName, username, phone, password) {
  // Проверка чтобы логин был уникальным
  const isUsernameUnique = database.users.every((user) => user.username !== username);
  
  if (isUsernameUnique) {
    // Создание объекта пользователя
    const user = {
      firstName,
      lastName,
      username,
      phone,
      password,
      cart: [],
    };
    
    // Добавление пользователя в базу данных
    database.users.push(user);
    console.log('Регистрация прошла успешно!');
  } else {
    console.log('Такой логин уже зарегистрирован!');
  }
}

// // Функция добавления товара в корзину пользователя
// function addToCart(username, item) {
//   // Получение пользователя по логину
//   const user = database.users.find((user) => user.username === username);
  
//   // Проверка существования пользователя
//   if (user) {
//     // Добавление артикула товара в корзину пользователя
//     user.cart.push(item);
//     console.log('Товар добавлен в корзину!');
//   } else {
//     console.log('Пользователь с таким логином не найден!');
//   }
// }

// Функция авторизации пользователя
function loginUser(username, password) {
  // Поиск пользователя по логину
  const user = database.users.find((user) => user.username === username);
  
  if (user) {
    // Проверка соответствия введенного пароля
    if (user.password === password) {
      console.log('Авторизация успешна!');
      console.log('Товары в корзине:', user.cart);
    } else {
      console.log('Неверный пароль!');
    }
  } else {
    console.log('Пользователь с таким логином не найден!');
  }
}

// // Пример использования функций
// registerUser('Иван', 'Иванов', 'ivan_1', '123456789', 'password123'); // Регистрация пользователя

// addToCart('ivan_1', 'item_1'); // Добавление товара в корзину пользователя

// loginUser('ivan_1', 'password123'); // Авторизация пользователя
