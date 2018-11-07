import Avatar from "./avatar/index.js";
import Icon from "./icon/index.js";
import Loader from "./loader/index.js";
import Popover from "./popover/index.js";
import Spinner from "./spinner/index.js";
import Toast from "./toast/index.js";
import Upload from "./uplaoder/index.js";

const components = [Avatar, Icon, Loader, Spinner, Upload];

const install = function(Vue) {
  if (install.installed) return;
  components.forEach(component => Vue.component(component.name, component));
  Vue.prototype.$Popover = Popover;
  Vue.prototype.$Toast = Toast;
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Avatar,
  Icon,
  Loader,
  Popover,
  Spinner,
  Toast,
  Upload
};
