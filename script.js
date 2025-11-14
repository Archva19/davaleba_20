// 1.

function createArr(n) {
  let numArr = [];
  let i = 0;
  while (i < n) {
    numArr[i] = i + 1;
    i++;
  }
  return numArr;
}

console.log(createArr(10));

// 2.

function arrReverse(arr) {
  let reversedArr = [];
  let i = 0;
  while (i < arr.length) {
    reversedArr[i] = arr[arr.length - (i + 1)];
    i++;
  }
  return reversedArr;
}

console.log(arrReverse([1, 2, 3, 4, 5]));

// 3.

function maxArrElement(arr) {
  let i = 1;
  let max = arr[0];
  while (i < arr.length) {
    if (arr[i] > max) {
      max = arr[i];
    }
    i++;
  }
  return max;
}

console.log(maxArrElement([2, 6, 4, 3, 7, 5]));

// 4.

function numFrequency(arr, number) {
  let frequency = 0;
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === number) {
      frequency++;
    }
    i++;
  }
  return frequency;
}

console.log(numFrequency([1, 2, 2, 2, 2, 3, 3, 3, 4], 2));

// 5.

function findLongestStr(strArr) {
  let i = 1;
  let longestStrLength = strArr[0].length;
  let longestStr = strArr[0];
  while (i < strArr.length) {
    if (strArr[i].length > longestStrLength) {
      longestStrLength = strArr[i].length;
      longestStr = strArr[i];
    }
    i++;
  }
  return longestStr;
}

console.log(findLongestStr(["Home", "Sun", "Hydroelectricity", "Science"]));
