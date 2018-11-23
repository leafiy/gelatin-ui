export default function isObjectEqual(a, b) {
  if (!a || !b) {
    return false
  }
  let aKeys = Object.keys(a);
  let bKeys = Object.keys(b);


  if (aKeys.length != bKeys.length) {
    return false;
  }

  for (let key of aKeys) {
    if (a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}
