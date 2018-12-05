const hasScroll = function(el) {
  if (el == undefined) {
    if (window.innerHeight) {
      return document.body.offsetHeight > window.innerHeight;
    } else {
      return document.documentElement.scrollHeight >
        document.documentElement.offsetHeight ||
        document.body.scrollHeight > document.body.offsetHeight;
    }
  } else {
    return el.scrollHeight > el.offsetHeight;
  }
}

export default hasScroll