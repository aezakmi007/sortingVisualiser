const selection = async function () {
  const children = document.getElementById("bars").children;
  const n = children.length;

  for (let i = 0; i < n - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < n; j++) {
      // children[i].style.backgroundColor = "red";
      children[j].style.backgroundColor = "red";
      children[min_idx].style.backgroundColor = "red";

      if (
        parseInt(children[j].style.height) <=
        parseInt(children[min_idx].style.height)
      ) {
        children[min_idx].style.backgroundColor = "#ffd700";
        min_idx = j;
      }
      if (min_idx != j) {
        children[j].style.backgroundColor = "#ffd700";
      }
    }
    children[i].style.backgroundColor = "red";
    await waithere();
    swap(children[min_idx], children[i]);
    children[i].style.backgroundColor = "green";
    if (min_idx != i) {
      children[min_idx].style.backgroundColor = "#ffd700";
    }
  }

  children[n - 1].style.backgroundColor = "green";
};
document.getElementById("SS").addEventListener("click", selection);
