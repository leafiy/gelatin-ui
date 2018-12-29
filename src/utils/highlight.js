import setCharAt from "./setCharAt.js";
const highlight = ({
  el,
  className,
  color = "primary",
  text,
  tag = "b",
  loose = false
}) => {
  if (!el) {
    return;
  }
  let classes = `ui-highlight-text ui-highlight-${color} ${
    className ? "ui-highlight-" + className : ""
  }`;

  if (text) {
    text = text.replace(/[|\\{}()[\]^$+*?.]/g, "");
    let re = loose
      ? new RegExp(text.split("").join("|"), "i")
      : new RegExp(text, "gi");
    el.querySelectorAll("span").forEach(item => {
      let content = item.textContent;
      if (!loose) {
        content = content.replace(
          re,
          `<${tag} class="${classes}">${text}</${tag}>`
        );
      } else {
        let match = [];
        let searchPosition = 0;
        for (let number = 0; number < content.length; number++) {
          let recordChar = content[number];

          if (re.test(recordChar)) {
            recordChar = `<${tag} class="${classes}">${recordChar}</${tag}>`;
            searchPosition++;
          }
          match.push(recordChar);
        }
        content = match.join("");
      }
      item.innerHTML = content;
    });
  } else {
    el.querySelectorAll(tag).forEach(item => {
      if (item.classList.contains("ui-highlight-text")) {
        item.outerHTML = item.textContent;
      }
    });
  }
};
export default highlight;
