const { Memory } = require("./memory");

const memory = new Memory();
// class Array {
//   constructor() {
//     this.length = 0;
//     this.ptr = memory.allocate(this.length);
//   }
//   push(value) {
//     this._resize(this.length + 1);
//     memory.set(this.ptr + this.length, value);
//     this.length++;
//   }
//   get(index) {
//     if (index < 0 || index >= this.length) {
//       throw new Error("Index error");
//     }
//     return memory.get(this.ptr + index);
//   }
//   pop() {
//     if (this.length == 0) {
//       throw new Error("Index error");
//     }
//     const value = memory.get(this.ptr + this.length - 1);
//     this.length--;
//     return value;
//   }
//   insert(index, value) {
//     if (index < 0 || index >= this.length) {
//       throw new Error("Index error");
//     }

//     if (this.length >= this._capacity) {
//       this._resize((this.length + 1) * Array.SIZE_RATIO);
//     }

//     memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
//     memory.set(this.ptr + index, value);
//     this.length++;
//   }
//   remove(index) {
//     if (index < 0 || index >= this.length) {
//       throw new Error("index error");
//     }
//     memory.copy(
//       this.ptr + index,
//       this.ptr + index + 1,
//       this.length - index - 1
//     );
//     this.length--;
//   }
//   _resize(size) {
//     const oldPtr = this.ptr;
//     this.ptr = memory.allocate(size);
//     if (this.ptr === null) {
//       throw new Error("Out of memory");
//     }
//     memory.copy(this.ptr, oldPtr, this.length);
//     memory.free(oldPtr);
//   }
// }

function main() {
  Array.SIZE_RATIO = 3;

  let arr = new Array();

  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr.get(0));

  console.log(arr);
}

// 5 URLify
function urlIfy(string) {
  let resultString = "";
  for (let i = 0; i < string.length; i++) {
    resultString += string[i] === " " ? "%20" : string[i];
  }
  return resultString;
}

function filterLessThanFive(arr) {
  const filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) continue;
    filteredArray.push(arr[i]);
  }
  return filteredArray;
}

function maxSum(arr) {
  let maxSum = 0;
  function sum(arr) {
    return arr.reduce((acc, current) => acc + current, 0);
  }
  for (let i = 0; i < arr.length; i++) {
    const remaining = arr.slice(i + 1);
    const current = [arr[i]];

    while (remaining.length) {
      current.push(remaining.shift());
      maxSum = maxSum < sum(current) ? sum(current) : maxSum;
    }
  }
  return maxSum;
}

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

function remove(string, charsToRemove) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    let remove = false;
    for (let j = 0; j < charsToRemove.length; j++) {
      if (currentChar === charsToRemove[j]) remove = true;
    }
    if (!remove) result += currentChar;
  }
  return result;
}

function products(arr) {
  return arr.map((_, i) => {
    return [...arr.slice(0, i), ...arr.slice(i + 1)].reduce(
      (acc, cur) => cur * acc,
      1
    );
  });
}

function twoDee(arr) {
  const zeroes = new Array(arr.length).fill(0);
  return arr.map((array) =>
    array.some((entry) => !entry) ?zeroes : array
  );
}

console.log(
  twoDee([
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ])
);
