function getPosition(el) {
  var pos = 0;
  pos = el.selectionStart;
  return pos;
}

function setPosition(el, pos) {
  el.focus();
  el.setSelectionRange(pos, pos);
}

export { getPosition, setPosition };
