const swap = function (el1, el2) {
  let temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
};

const getBars = () => {
  return document.getElementById("bars").children;
};

function waithere() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 2000)
  );
}
