const bars = getBars();
let p;
let n;

const merge = async function (children, l, mid, h) {
  let aux = [];

  let i = l;
  let j = mid + 1;
  let k = l;
  console.log(j);
  while (i <= mid && j <= h) {
    children[i].style.backgroundColor = "orange";
    console.log(children[i]);
    children[j].style.backgroundColor = "orange";

    await waithere();

    if (
      parseInt(children[i].style.height) < parseInt(children[j].style.height)
    ) {
      aux[k++] = parseInt(children[i++].style.height);
    } else {
      aux[k++] = parseInt(children[j++].style.height);
    }
    children[i].style.backgroundColor = "yellow";
    children[j].style.backgroundColor = "yellow";
  }

  for (; i <= mid; i++) {
    aux[k++] = parseInt(children[i].style.height);
  }
  for (; j <= h; j++) {
    aux[k++] = parseInt(children[j].style.height);
  }

  for (i = l; i <= h; i++) {
    if (p >= n) {
      children[i].style.height = `${aux[i]}px`;
      children[i].style.backgroundColor = "green";
    } else {
      children[i].style.height = `${aux[i]}px`;
      children[i].style.backgroundColor = "yellow";
    }
    await waithere();
  }
};

async function mergeSort(children, n) {
  let i;
  let mid;
  let h;

  for (p = 2; p <= n; p = p * 2) {
    for (i = 0; i + p - 1 < n; i = i + p) {
      l = i;
      h = i + p - 1;
      mid = Math.floor((l + h) / 2);
      await merge(children, l, mid, h);
    }
  }

  if (p / 2 < n) {
    await merge(children, 0, p / 2, n - 1);
  }
}
document.getElementById("MS").addEventListener("click", () => {
  mergeSort(bars, bars.length);
});
