import LoadingBar from "./loading-bar.vue";
import Vue from "vue";
const UiLoadingBar = Vue.extend(LoadingBar);
let instance = null;

import "../assets/scss/progress.scss";

const timer = function(duration) {
  instance.percentage = 0;
  clearInterval(instance.timer);
  instance.timer = setInterval(() => {
    instance.percentage += 10 / (10 * (duration / 1000));
    if (instance.percentage >= 100) {
      clearInterval(instance.timer);
      instance.close();
    }
  }, 10);
};

const $UiLoadingBar = function(options = {}) {
  if (instance && !options.instance) {
    timer(instance.duration);
    return;
  }
  instance = new UiLoadingBar({
    data: options
  });
  instance.$mount();
  document.body.appendChild(instance.$el);
  if (!options.indeterminate) {
    timer(instance.duration);
  }
  return instance;
};
$UiLoadingBar.finish = function() {
  if (!instance) {
    return;
  }
  instance.percentage = 100;
  clearInterval(instance.timer);
  setTimeout(() => {
    instance.show = false;
  }, 500);
};
$UiLoadingBar.increase = function(percent = 1) {
  if (!instance) {
    return;
  }
  instance.percentage += percent;
  if (instance.percentage >= 100) {
    instance.percentage = 100;
  }
};
$UiLoadingBar.decrease = function(percent = 1) {
  if (!instance) {
    return;
  }
  instance.percentage -= percent;
  if (instance.percentage <= 0) {
    instance.percentage = 0;
  }
};
$UiLoadingBar.fail = function(delay = 1000) {
  if (!instance) {
    return;
  }
  instance.percentage = 100;
  instance.foreColor = "#ea4335";
  instance.close(delay);
  clearInterval(instance.timer);
  instance.time = null;
};
export default $UiLoadingBar;
