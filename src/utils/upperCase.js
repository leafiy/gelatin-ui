const upperCase = function(str, index = 0) {
  if (!str) return "";
  if (index >= str.length) return str.toUpperCase();
  return `${str.slice(0, index + 1).toUpperCase()}${str.slice(index + 1)}`;
};

export default upperCase;
