let users = [];

function login(username, password) {
  for (let i = 0; i < users.length; i++) {
    if (username === users[i].username) {
      if (password === users[i].password) {
        console.log(`${username} is logged in`);
      } else {
        console.log(`Incorrect password for ${username}`);
      }
      return;
    }
    console.log("Could not find user");
  }
}

function register(
  username,
  email,
  password,
  subscriptionStatus,
  discordId,
  lessonsCompleted
) {
  let usersObject = {
    username: username,
    email: email,
    password: password,
    subscriptionStatus: subscriptionStatus,
    discordId: discordId,
    lessonsCompleted: lessonsCompleted,
  };

  users.push(usersObject);
}

register("yeh", "yeh@mail", "yeh124", true, 123, 5);
register("zen", "zen@mail", "zen124", false, 1234, 6);
register("hi", "hi@mail", "hi", false, 12345, 6);

console.log(users);


// OR...

// fuction register(user) {
//     users.push(user)
// }

// register({
//     username: 'yeh',
//         email:'yehmail',
//         password:'password',
//         subscriptionStatus:'subscriptionStatus',
//         discordId:'discordId',
//         lessonsCompleted:'lessonsCompleted'
// })