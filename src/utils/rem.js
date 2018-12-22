function rrem(designWidth = 750, remSize = 10) {
  let percent = remSize / designWidth;

  let doc = window.document;
  let docEl = doc.documentElement;
  let metaEl = doc.querySelector('meta[name="viewport"]');
  if (!metaEl) {
    metaEl = doc.createElement("meta");
    metaEl.setAttribute("name", "viewport");
  }

  let dpr = Math.min(window.devicePixelRatio, 2);

  let scale = 1 / dpr;

  metaEl.setAttribute(
    "content",
    [
      "initial-scale=",
      scale,
      ", maximum-scale=",
      scale,
      ", minimum-scale=",
      scale,
      ", user-scalable=yes" // setUseWideViewport(true)和user-scalable=no 冲突？待验证
    ].join("")
  );

  if (docEl.firstElementChild) {
    docEl.firstElementChild.appendChild(metaEl);
  } else {
    let wrap = doc.createElement("div");
    wrap.appendChild(metaEl);
    doc.write(wrap.innerHTML);
  }

  function setRootSize() {
    let width = docEl.getBoundingClientRect().width;
    docEl.style.fontSize = width * percent + "px";
  }
  setRootSize();
  window.addEventListener("resize", setRootSize);
}
