import { debounce } from "lodash";
import "../../packages/assets/scss/rem.scss";

// from https://github.com/imwtr/rem-vw-layout

const docElem = document.documentElement;
let metaElem = document.querySelector('meta[name="viewport"]');
let deviceDpr = window.devicePixelRatio;
if (!metaElem) {
  const meta = document.createElement("meta");
  meta.setAttribute("name", "viewport");
  meta.setAttribute(
    "content",
    "width=device-width,initial-scale=1,user-scalable=no"
  );
  document.head.appendChild(meta);
}

const setScale = function(dpr) {
  metaElem.setAttribute(
    "content",
    `initial-scale=${1 / dpr},maximum-scale=${1 / dpr},minimum-scale=${1 /
      dpr},user-scalable=no`
  );
};

const rem = function({
  dpr = window.devicePixelRatio,
  blocks = 12,
  minWidth = 320,
  maxWidth = 560,
  calcMaxWidth = 999999,
  debounceDelay = 100
} = {}) {
  document.body.classList.add("gelatin-rem-layout");
  if (metaElem.getAttribute("data-content-max") !== null) {
    calcMaxWidth = maxWidth;
  }
  // disable scale if dpr < 2, for some old android phones
  if (
    (navigator.appVersion.match(/android/gi) && dpr <= 2) ||
    (navigator.appVersion.match(/qq\//gi) && docElem.clientWidth <= 360)
  ) {
    dpr = 1;
  }
  setScale(dpr);
  docElem.setAttribute("data-dpr", dpr);

  const setFontSize = function() {
    let clientWidth = docElem.clientWidth;
    clientWidth = Math.max(clientWidth, minWidth * dpr);
    if (calcMaxWidth >= maxWidth) {
      clientWidth = Math.min(clientWidth, maxWidth * dpr);
    }
    docElem.style.fontSize = clientWidth / blocks + "px";
  };
  setFontSize();
  window.addEventListener(
    window.orientationchange ? "orientationchange" : "resize",
    debounce(setFontSize, debounceDelay),
    false
  );
};

export default rem;
