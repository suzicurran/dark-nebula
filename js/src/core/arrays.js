removeWithoutCopy = (arr, item) => {
  while (arr.indexOf(item) > -1) {
    arr.splice(arr.indexOf(item), 1);
  }
  return arr;
};

append = (arr, item) => {
  arr.push(item);
  return arr;
};

truncate = (arr) => {
  arr.pop();
  return arr;
};

prepend = (arr, item) => {
  arr.unshift(item);
  return arr;
};

curtail = (arr) => {
  arr.shift();
  return arr;
};

concat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

insert = (arr, item, index) => {
  arr.splice(index, 0, item);
  return arr;
};

count = (arr, item) => {
  return arr.reduce((n, val) => {
      return n + (val === item);
  }, 0);
};

duplicates = (arr) => {
  duparray = arr.filter((element, index) => {
    return (arr.slice(index+1).includes(element));
  });
  return duparray.filter((element, index) => {
    return duparray.indexOf(element) == index;
  });
};


square = (arr) => {
  return arr.map((currentValue) => {
    return currentValue * currentValue;
  });
};

findAllOccurrences = (arr, item) => {
  indexlist = arr.map((currentValue, index) => {
    if (currentValue == item) {
      return index;
    } else {
      return "x";
    }
  });
  return removeWithoutCopy(indexlist, "x");
};
