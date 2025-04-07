function bumbble(username) {
  if (!undefined) {
    console.log("Please enter your user name");
    return;
  }
  return `${username} logged in`;
}
console.log(bumbble()); //undefined when no input is given
///////////////
function calculatecart(...cart1) {
  return cart1;
}
console.log(calculatecart(300, 400, 9000, 800));
// output : [ 300, 400, 9000, 800 ] <= array
// handle array
const arr = [300, 30000, 600, 700];
function item(rate) {
  return rate[3];
}
console.log(item([500, 600, 7000, 760]));
