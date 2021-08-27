const children = getBars();

const partition = async function (arr, low, high) {
  let pivot = parseInt(arr[low].style.height);
  arr[low].style.backgroundColor = "red";

  let i = low + 1;
  let j = high;

  arr[i].style.backgroundColor = "pink";
  arr[j].style.backgroundColor = "pink";

  while (true) {
    while (i <= j && parseInt(arr[i].style.height) <= pivot) {
      await waithere();
      if (i != j) {
        arr[i].style.backgroundColor = "#ffd700";
      }
      i++;
      if (i <= high && arr[i].style.backgroundColor != "green") {
        arr[i].style.backgroundColor = "pink";
      }
    }

    while (parseInt(arr[j].style.height) >= pivot && j >= i) {
      await waithere();
      arr[j].style.backgroundColor = "#ffd700";
      j--;
      if (j > low && arr[j].style.backgroundColor != "red") {
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

  if (arr[j] == arr[low]) {
    arr[low].style.backgroundColor = "green";
  } else {
    arr[low].style.backgroundColor = "#ffd700";
  }

  return j;
};

const quickSort = async function (children, low, high) {
  if (low < high) {
    let p = await partition(children, low, high);
    await quickSort(children, low, p - 1);
    await quickSort(children, p + 1, high);
  } else {
    for (let i = high; i >= 0; i--) {
      children[i].style.backgroundColor = "green";
    }
  }
};

const startSorting = function () {
  quickSort(children, 0, children.length - 1);
};

document.getElementById("QS").addEventListener("click", startSorting);
