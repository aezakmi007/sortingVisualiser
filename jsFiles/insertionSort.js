const insertionSort = async () => {
  const children = getBars();
  const n = children.length;
  children[0].style.backgroundColor = "green";
  for (let i = 1; i < n; i++) {
    children[i].style.backgroundColor = "red";
    let key = children[i].style.height;
    let j = i - 1;
    await waithere();
    while (j >= 0 && parseInt(children[j].style.height) > parseInt(key)) {
      children[j].style.backgroundColor = "red";
      children[j + 1].style.height = children[j].style.height;
      j--;

      await waithere();

      for (let k = i; k >= 0; k--) {
        children[k].style.backgroundColor = "green";
      }
    }

    children[j + 1].style.height = key;
    children[i].style.backgroundColor = "green";
  }
};

document.getElementById("IS").addEventListener("click", insertionSort);
