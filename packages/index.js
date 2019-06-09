import UiAvatar from "./avatar/index.js";
import UiIcon from "./icon/index.js";
import UiLoader from "./loader/index.js";
import UiSpinner from "./spinner/index.js";
import UiUpload from "./uploader/index.js";
import UiCard from "./card/index.js";
import UiAlert from "./alert/index.js";
import UiInput from "./input/index.js";
import UiInputGroup from "./input-group/index.js";
import UiTextarea from "./textarea/index.js";
import UiImage from "./image/index.js";
import UiHeading from "./heading/index.js";
// import UiRow from "./row/index.js";
// import UiCol from "./col/index.js";
import { UiRow, UiCol, UiContainer } from "./layout/index.js";
import UiButton from "./button/index.js";
import UiButtonGroup from "./button-group/index.js";
import UiAccordion from "./accordion/index.js";
import UiAccordionItem from "./accordion-item/index.js";
import UiCheckbox from "./checkbox/index.js";
import UiRadio from "./radio/index.js";
import UiTag from "./tag/index.js";
import UiHightlight from "./highlight/index.js";
import UiHr from "./hr/index.js";
import UiBackdrop from "./backdrop/index.js";
import UiAutocomplete from "./autocomplete/index.js";
import UiMask from "./backdrop/mask.js";
import { UiConfirm } from "./confirm/index.js";
import { UiModal } from "./modal/index.js";
import UiV from "./v/index.js";
import UiProgress from "./progress/index.js";
import UiMarquee from "./marquee/index.js";
import UiShare from "./share/index.js";
import UiTyper from "./typer/index.js";
import UiCarousel from "./carousel/index.js";
import UiCountdown from "./countdown/index.js";
import UiSlidePanel from "./slide-panel/index.js";
import UiSticky from "./sticky/index.js";
import UiHeightTransition from "./height-transition/index.js";
import UiPopover from "./popover/index.js";
import $UiToast from "./toast/index.js";
import $UiMessage from "./message/index.js";
import $UiLoadingBar from "./loading-bar/index.js";
import { $UiConfirm } from "./confirm/index.js";
import { $UiModal } from "./modal/index.js";
import UiRouterTransition from "./router-transition/index.js";
import UiSelect from "./select/index.js";
import UiTabs from "./tabs/index.js";
import $UiDropdown from "./dropdown/index.js";
import UiTooltip from "./tooltip/index.js";
import UiCaptcha from "./captcha/index.js";
import UiLoading from "./backdrop/loading.js";
import { directive as UiClickOutside } from "./click-outside/index.js";
import UiLazyLoad from "./lazy-load/index.js";
// import Rem from '../src/utils/rem.js'
const components = [
  UiAvatar,
  UiIcon,
  UiV,
  UiLoader,
  UiSpinner,
  UiUpload,
  UiAlert,
  UiRow,
  UiCol,
  UiContainer,
  UiCard,
  UiInput,
  UiInputGroup,
  UiImage,
  UiHeading,
  UiButton,
  UiButtonGroup,
  UiCheckbox,
  UiRadio,
  UiAccordion,
  UiAccordionItem,
  UiAutocomplete,
  UiTag,
  UiHr,
  UiBackdrop,
  UiTextarea,
  UiModal,
  UiConfirm,
  UiProgress,
  UiMarquee,
  UiShare,
  UiTyper,
  UiCarousel,
  UiCountdown,
  UiSlidePanel,
  UiHeightTransition,
  UiRouterTransition,
  UiSelect,
  UiPopover,
  UiTabs,
  UiCaptcha
];

const plugins = {
  $UiToast,
  $UiModal,
  $UiConfirm,
  $UiMessage,
  $UiLoadingBar,
  $UiDropdown
};
const directives = [
  UiHightlight,
  UiLoading,
  UiMask,
  UiSticky,
  UiTooltip,
  UiLoading,
  UiClickOutside,
  UiLazyLoad
];

import ZHandler from "../src/utils/zHandler.js";

const install = function(Vue, options = {}) {
  Vue.prototype.$zIndex = new ZHandler(options.zIndex);
  components.forEach(component => Vue.component(component.name, component));
  Object.keys(plugins).forEach(key => {
    Vue.prototype[key] = plugins[key];
    plugins.$zIndex = Vue.prototype.$zIndex;
  });
  directives.forEach(directive => {
    directive.$zIndex = Vue.prototype.$zIndex;
    Vue.directive(directive.name, directive);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  UiAvatar,
  UiIcon,
  UiLoader,
  UiSpinner,
  UiUpload,
  UiRow,
  UiCol,
  UiCard,
  UiAlert,
  UiInput,
  UiInputGroup,
  UiImage,
  UiHeading,
  UiButton,
  UiButtonGroup,
  UiCheckbox,
  UiRadio,
  UiAccordion,
  UiAccordionItem,
  UiAutocomplete,
  UiTag,
  UiHr,
  UiBackdrop,
  UiTextarea,
  UiV,
  UiProgress,
  UiMarquee,
  UiShare,
  UiTyper,
  UiCarousel,
  UiCountdown,
  UiSlidePanel,
  UiSticky,
  UiModal,
  UiHeightTransition,
  UiRouterTransition,
  UiPopover,
  $UiToast,
  $UiModal,
  $UiConfirm,
  $UiMessage,
  $UiLoadingBar,
  $UiDropdown,
  UiSelect,
  UiTabs,
  UiCaptcha,
  UiClickOutside,
  UiLazyLoad
  // Rem
};
