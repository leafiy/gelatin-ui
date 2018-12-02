const isValidDate = function(d) {
  return d instanceof Date && !isNaN(d);
}

export default isValidDate
