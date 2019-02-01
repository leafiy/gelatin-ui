import Vue from "vue";
import Backdrop from "./backdrop.vue";
import events from "../../src/utils/events.js";

const BackdropConstructor = Vue.extend(Backdrop);

const Render = function({ el, options = {} }) {
  if (options.global) {
    this.backdrop = new BackdropConstructor({
      el: document.createElement("div"),
      propsData: options
    });
    this.backdrop.$mount();
    this.backdrop.close = function() {
      events.$emit("close-backdrop");
    };
    document.body.appendChild(this.backdrop.$el);
  } else {
    el.style.position =
      el.style.position == "absolute" ? "absolute" : "relative";
    let style = window.getComputedStyle(el);
    if (style.borderRadius) {
      options.radius = style.borderRadius;
    }
    this.backdrop = new BackdropConstructor({
      el: document.createElement("div"),
      propsData: options
    });
    this.backdrop.$mount();
    el.appendChild(this.backdrop.$el);
  }
};

export default Render;
