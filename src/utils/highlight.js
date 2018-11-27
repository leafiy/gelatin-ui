const highlight = ({ el, className, type = 'default', text,tag='em' }) => {
  if (!el) {
    return
  }
  let classes = `ui-highlight-text ui-highlight-${type} ${className? 'ui-highlight-'+className : ''}`

  // let content = el.innerHTML,
  //   pattern = new RegExp('(>[^<.]*)(' + text + ')([^<.]*)', 'g'),
  //   replaceWith = '$1<span class="' + classes + '">$2</span>$3',
  //   highlighted = content.replace(pattern, replaceWith);
  // return (el.innerHTML = highlighted) !== content;

  let re = new RegExp(text,'gi')
  el.querySelectorAll('span').forEach(item=>{
    let content = item.textContent
    content= content.replace(re,`<${tag} class="${classes}">${text}</${tag}>`)
    item.innerHTML = content
  })


}
export default highlight