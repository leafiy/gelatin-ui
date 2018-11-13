import { throttle } from 'lodash'

let x, y, target

document.addEventListener('mousemove', throttle(onMouseUpdate, 100), false);
document.addEventListener('mouseenter', throttle(onMouseUpdate, 100), false);

function onMouseUpdate(e) {
  target = e.target
  x = e.pageX
  y = e.pageY
}



export default () => {


  return {
    x,
    y,
    target
  }
}
