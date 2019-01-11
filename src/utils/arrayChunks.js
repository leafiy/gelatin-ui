export default function arrayChunk(arr, chunk = 1) {
  if (!arr.length) {
    return [];
  }
  const head = arr.slice(0, chunk);
  const tail = arr.slice(chunk);

  return [head, ...arrayChunk(tail, chunk)];
}
