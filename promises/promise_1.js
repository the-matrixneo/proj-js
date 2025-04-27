const promiseOne = new Promise(function (resolve, reject) {
  // Do DB Calls
  // do async task
  // it is directly connected to resolve --> then
  setTimeout(() => {
    console.log("async ");
    resolve({
      usernmae: "lolo",
      email: "lolo@gmailcom",
    });
  }, 1000);
});
promiseOne.then((user) => {
  console.log(user);
});
const Promisetwo = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({
        username: "lolo",
        password: "aa22f",
      });
    } else {
      reject("Error: 404");
    }
  }, 2000);
});
Promisetwo.then((user) => {
  console.log(user);
  return user.username;
})
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("promise is resolved"));
const promisethree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
  });
});

// oR async await method
async function consumepromisethree() {
  try {
    const response = await promisethree;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumepromisethree();
// async function getAllusers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E: error");
//   }
// }// direct fetch ---->
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
