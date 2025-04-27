const randomcolor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let timer;
const startchange = () => {
  if (!timer) {
    timer = setInterval(changebgcolor, 2000);
  }
};
function changebgcolor() {
  document.body.style.backgroundColor = randomcolor();
}
document.querySelector("#start").addEventListener("click", startchange);
const stopchange = () => {
  clearInterval(timer);
};

document.querySelector("#stop").addEventListener("click", stopchange);
