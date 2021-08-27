let arr = [];
const generateRandom = () => {
  return Math.floor(Math.random() * 501);
};
const element = document.getElementById("bars");
const generateBars = () => {
  element.innerHTML = "";
  for (let i = 0; i < 100; i++) {
    arr[i] = generateRandom();
  }
  for (let i = 0; i < 100; i++) {
    const bar = document.createElement("div");
    element.appendChild(bar).classList.add("bar");
    bar.style.height = `${arr[i]}px`;
  }
};

document.getElementById("NA").addEventListener("click", generateBars);
