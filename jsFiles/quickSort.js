const children = getBars();

const partition = async function (arr, low, high) {
  console.log("inside partition function");
  let pivot = parseInt(arr[low].style.height);
  arr[low].style.backgroundColor = "red";
  let i = low + 1;
  let j = high;
  arr[i].style.backgroundColor = "pink";
  arr[j].style.backgroundColor = "pink";
  while (true) {
    while (i <= j && parseInt(arr[i].style.height) <= pivot) {
      await waithere();
      arr[i].style.backgroundColor = "yellow";
      i++;
      if (i <= high && arr[i].style.backgroundColor != "green") {
        arr[i].style.backgroundColor = "pink";
      }
    }

    while (parseInt(arr[j].style.height) >= pivot && j >= i) {
      await waithere();
      arr[j].style.backgroundColor = "yellow";
      j--;
      if (j >= low && arr[j].style.backgroundColor != "red") {
        arr[j].style.backgroundColor = "pink";
      }
    }

    if (j < i) {
      break;
    } else {
      await waithere();
      swap(arr[i], arr[j]);
    }
  }
  await waithere();
  swap(arr[low], arr[j]);
  arr[j].style.backgroundColor = "green";
  arr[low].style.backgroundColor = "green";
  if (i <= high && arr[i].style.backgroundColor != "green") {
    arr[i].style.backgroundColor = "yellow";
  }
  return j;
};

const quickSort = async function (children, low, high) {
  if (low < high) {
    let p = await partition(children, low, high);
    await quickSort(children, low, p - 1);
    await quickSort(children, p + 1, high);
  }
};
const startSorting = function () {
  quickSort(children, 0, children.length - 1);
};
document.getElementById("QS").addEventListener("click", startSorting);
