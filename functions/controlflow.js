// if
const userloggedin = true;
const debitcard = true;
const loggedinfromgoogle = false;
const loggedinfromemail = true;

if (userloggedin && debitcard) {
  console.log("Allow to buy a cover");
}
if (loggedinfromgoogle || loggedinfromemail) {
  console.log(" you are logged in");
}

const balance = 1000;
if (balance > 500) console.log("passed"); //implicit scope
