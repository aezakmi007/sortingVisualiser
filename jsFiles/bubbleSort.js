const bubble = async function () {
  const children = document.getElementById("bars").children;
  const n = children.length;

  for (let i = 0; i < n; i++) {
    let j = 0;

    for (j = 0; j < n - i - 1; j++) {
      children[j].style.backgroundColor = "red";
      children[j + 1].style.backgroundColor = "red";
      if (
        parseInt(children[j].style.height) >=
        parseInt(children[j + 1].style.height)
      ) {
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 2000)
        );
        swap(children[j], children[j + 1]);
      }

      children[j].style.backgroundColor = "#ffd700";
      children[j + 1].style.backgroundColor = "#ffd700";
    }

    children[n - 1 - i].style.background = "green";
  }
  children[0].style.background = "green";
};

document.getElementById("BS").addEventListener("click", bubble);
