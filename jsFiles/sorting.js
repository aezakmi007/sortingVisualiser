let arr = [];
const generateRandom = () => {
  return Math.floor(Math.random() * 501);
};
const element = document.getElementById("bars");
const generateBars = (n) => {
  element.innerHTML = "";
  for (let i = 0; i < n; i++) {
    arr[i] = generateRandom();
  }
  for (let i = 0; i < n; i++) {
    const bar = document.createElement("div");
    element.appendChild(bar).classList.add("bar");
    bar.style.height = `${arr[i]}px`;
  }
};

document.getElementById("NA").addEventListener("click", () => {
  generateBars(100);
});

const setSize = document.getElementById("rangeInput");
setSize.addEventListener("input", () => {
  generateBars(parseInt(setSize.value));
});
