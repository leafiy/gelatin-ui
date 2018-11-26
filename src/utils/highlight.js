const highlight = ({ el, className, type = 'default', text }) => {
  if (!el) {
    return
  }

  // el.textContent = el.textContent.replace(new RegExp(text, "gi"), match => {
  //   return `<span class="ui-highlight-text ui-highlight-${type} ${className? 'ui-highlight-'+className : ''}">${match}</span>`;
  // })

  let classes = `ui-highlight-text ui-highlight-${type} ${className? 'ui-highlight-'+className : ''}`

  let content = el.innerHTML,
    pattern = new RegExp('(>[^<.]*)(' + text + ')([^<.]*)', 'g'),
    replaceWith = '$1<span class="' + classes + '">$2</span>$3',
    highlighted = content.replace(pattern, replaceWith);
  return (el.innerHTML = highlighted) !== content;

}


export default highlight
