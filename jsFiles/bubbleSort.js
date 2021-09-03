const bubble = async function () {
  const children = getBars();
  const n = children.length;

  for (let i = 0; i < n; i++) {
    let j = 0;

    for (j = 0; j < n - i - 1; j++) {
      children[j].style.backgroundColor = "orange";
      children[j + 1].style.backgroundColor = "pink";
      if (
        parseInt(children[j].style.height) >=
        parseInt(children[j + 1].style.height)
      ) {
        await waithere();
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
