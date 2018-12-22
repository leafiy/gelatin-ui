const regexSort = (list, patterns) => {
  function presetIndex(input) {
    for (var i = 0; i < patterns.length; ++i) {
      if (patterns[i].test(input)) {
        return i;
      }
    }
    return Infinity;
  }

  let indexes = list.map(c => ({
    input: c,
    index: presetIndex(c)
  }));

  indexes.sort((a, b) => (a.index < b.index ? -1 : 1));

  return indexes.map(c => c.input);
};

export default regexSort;
