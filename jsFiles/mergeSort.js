const bars = getBars();
let p;
let n;

const merge = async function (children, l, mid, h) {
  let aux = [];

  let i = l;
  let j = Math.floor(mid + 1);
  let k = l;
  console.log(j);
  while (i <= mid && j <= h) {
    children[i].style.backgroundColor = "orange";
    console.log(children[i]);
    if (children[j]) {
      children[j].style.backgroundColor = "orange";
    }

    await waithere();

    if (
      parseInt(children[i].style.height) < parseInt(children[j].style.height)
    ) {
      aux[k++] = parseInt(children[i++].style.height);
    } else {
      aux[k++] = parseInt(children[j++].style.height);
    }

    children[i].style.backgroundColor = "#ffd700";
    if (children[j]) {
      children[j].style.backgroundColor = "#ffd700";
    }
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
      await waithere();
    } else {
      children[i].style.height = `${aux[i]}px`;
      children[i].style.backgroundColor = "#ffd700";
      // await waithere();
    }
  }
};

async function mergeSort(children, len) {
  let i;
  let mid;
  let h;
  n = children.length;

  for (p = 2; p <= len; p = p * 2) {
    for (i = 0; i + p - 1 < len; i = i + p) {
      l = i;
      h = i + p - 1;
      mid = Math.floor((l + h) / 2);
      console.log(mid);
      await merge(children, l, mid, h);
    }
    if (n - i > p / 2) {
      l = i;
      h = i + p - 1;
      mid = (l + h) / 2;
      merge(children, l, mid, len - 1);
    }
  }
  if (p / 2 < n) {
    await merge(children, 0, p / 2 - 1, len - 1);
  }

  // if (p / 2 < n) {
  //   await merge(children, 0, p / 2, n - 1);
  // }
}
document.getElementById("MS").addEventListener("click", () => {
  mergeSort(bars, bars.length);
});
