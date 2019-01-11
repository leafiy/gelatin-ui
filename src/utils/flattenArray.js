const flatten = (arr, depth = 1, result = []) => {
  let index = -1;
  let length = arr.length;
  while (++index < length) {
    let value = arr[index];
    if (Array.isArray(value)) {
      if (depth > 1) {
        flatten(value, depth - 1, result);
      } else {
        result.push(value);
      }
    } else {
      result.push(value);
    }
  }
  return result;
};

export default flatten;
