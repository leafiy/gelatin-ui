import UiAvatar from "./avatar/index.js";
import UiIcon from "./icon/index.js";
import UiLoader from "./loader/index.js";
import UiSpinner from "./spinner/index.js";
import UiUpload from "./uplaoder/index.js";
import UiCard from "./card/index.js";
import UiAlert from "./alert/index.js";
import { UiInput, UiInputGroup } from "./input/index.js";
import UiTextarea from "./textarea/index.js";
import UiImage from "./image/index.js";
import UiHeading from "./heading/index.js";
import { UiRow, UiCol } from "./layout/index.js";
import { UiButton, UiButtonGroup } from "./button/index.js";
import { UiAccordion, UiAccordionItem } from "./accordion/index.js";
import UiCheckbox from "./checkbox/index.js";
import UiRadio from "./radio/index.js";
import UiTag from "./tag/index.js";
import UiHightlight from "./highlight/index.js";
import UiHr from "./hr/index.js";
import { UiBackdrop } from "./backdrop/index.js";
import UiAutocomplete from "./autocomplete/index.js";
import UiLoading from "./loading/index.js";
import UiMask from "./mask/index.js";
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
import { $UiPopover, UiTooltip, UiDropdown } from "./popover/index.js";
import $UiToast from "./toast/index.js";
import $UiMessage from "./message/index.js";
import $UiLoadingBar from "./loading-bar/index.js";
import { $UiCover } from "./backdrop/index.js";
import { $UiConfirm } from "./confirm/index.js";
import { $UiModal } from "./modal/index.js";
// import Rem from '../src/utils/rem.js'
const components = [
  UiAvatar,
  UiIcon,
  UiV,
  UiLoader,
  UiSpinner,
  UiUpload,
  UiDropdown,
  UiAlert,
  UiRow,
  UiCol,
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
  UiHeightTransition
];

const plugins = {
  $UiPopover,
  $UiToast,
  $UiCover,
  $UiModal,
  $UiConfirm,
  $UiMessage,
  $UiLoadingBar
};

const directives = [UiTooltip, UiHightlight, UiLoading, UiMask, UiSticky];

import ZHandler from "../src/utils/zHandler.js";

const install = function(Vue, options = {}) {
  Vue.prototype.$zIndex = new ZHandler(options.zIndex);
  components.forEach(component => Vue.component(component.name, component));
  Object.keys(plugins).forEach(key => {
    Vue.prototype[key] = plugins[key];
    plugins.$zIndex = Vue.prototype.$zIndex;
  });
  directives.forEach(directive => {
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
  UiDropdown,
  UiTooltip,
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
  $UiPopover,
  $UiToast,
  $UiCover,
  $UiModal,
  $UiConfirm,
  $UiMessage,
  $UiLoadingBar
  // Rem
};
