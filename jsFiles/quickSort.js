const children = getBars();

const partition = async function (arr, low, high) {
  console.log("inside partition function");
  let pivot = parseInt(arr[low].style.height);
  arr[low].style.backgroundColor = "black";
  let i = low + 1;
  let j = high;
  arr[i].style.backgroundColor = "red";
  arr[j].style.backgroundColor = "red";
  while (true) {
    while (i <= j && parseInt(arr[i].style.height) <= pivot) {
      i++;
      arr[i].style.backgroundColor = "Red";
      arr[i - 1].style.backgroundColor = "yellow";
    }

    while (parseInt(arr[j].style.height) >= pivot && j >= i) {
      j--;
      arr[j].style.backgroundColor = "Red";
      arr[j + 1].style.backgroundColor = "yellow";
    }
    // await waithere();
    if (j < i) {
      arr[i].style.backgroundColor = "yellow";
      break;
    } else {
      await waithere();
      swap(arr[i], arr[j]);
      arr[i].style.backgroundColor = "yellow";
      arr[j].style.backgroundColor = "yellow";
    }
  }
  await waithere();
  swap(arr[low], arr[j]);
  arr[j].style.backgroundColor = "green";
  arr[low].style.backgroundColor = "yellow";
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
