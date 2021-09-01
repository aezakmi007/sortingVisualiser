const bars = getBars();
const merge = async function (children, l, m, r) {
  let k = 0;
  let n1 = m - l + 1;
  let n2 = r - m;
  let i = 0;
  let j = 0;

  let L = [];
  let R = [];

  for (i = 0; i < n1; i++) {
    await waithere();
    children[i].style.backgroundColor = "orange";
    L[i] = parseInt(children[l + i].style.height);
  }

  for (j = 0; j < n2; j++) {
    await waithere();
    children[i].style.backgroundColor = "pink";
    R[j] = parseInt(children[m + j + 1].style.height);
  }

  k = l;
  await waithere();
  while (i < n1 && j < n2) {
    await waithere();

    if (L[i] <= R[j]) {
      if (n1 + n2 == bars.length) {
        children[i].style.backgroundColor = "green";
      } else {
        children[i].style.backgroundColor = "yellow";
      }
      children[i].style.height = `${L[i]}px`;
      i++;
      k++;
    } else {
      if (n1 + n2 == bars.length) {
        children[j].style.backgroundColor = "green";
      } else {
        children[j].style.backgroundColor = "yellow";
      }
      children[j].style.height = `${R[j]}px`;
      j++;
      k++;
    }
  }
  while (i < n1) {
    await waithere();
    if (n1 + n2 === children.length) {
      children[k].style.backgroundColor = "green";
    } else {
      children[k].style.backgroundColor = "yellow";
    }
    children[k].style.height = `${L[i]}px`;
    i++;
    k++;
  }
  while (j < n2) {
    await waithere();
    if (n1 + n2 === children.length) {
      children[k].style.backgroundColor = "green";
    } else {
      children[k].style.backgroundColor = "yellow";
    }
    children[k].style.height = `${R[j]}px`;
    j++;
    k++;
  }
};

async function mergeSort(children, l, r) {
  if (l >= r) {
    console.log(`return cause just 1 elemment l=${l}, r=${r}`);
    return;
  }
  const m = l + Math.floor((r - l) / 2);

  await mergeSort(children, l, m);
  await mergeSort(children, m + 1, r);
  await merge(children, l, m, r);
}
document.getElementById("MS").addEventListener("click", () => {
  mergeSort(bars, 0, parseInt(bars.length - 1));
});
