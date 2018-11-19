import Avatar from "./avatar/index.js";
import Icon from "./icon/index.js";
import Loader from "./loader/index.js";
import Popover from "./popover/index.js";
import Spinner from "./spinner/index.js";
import Toast from "./toast/index.js";
import Upload from "./uplaoder/index.js";
import Dropdown from "./dropdown/index.js";
import Tooltip from "./tooltip/index.js";
import Card from './card/index.js'
import Alert from './alert/index.js'
import Input from './input/index.js'
import Image from './image/index.js'
import Heading from './heading/index.js'
import { Row, Col } from './layout/index.js'
import { Button, ButtonGroup } from './button/index.js'
const components = [Avatar, Icon, Loader, Spinner, Upload, Dropdown, Alert, Row, Col, Card, Input, Image, Heading, Button,
  ButtonGroup
];

const install = function(Vue) {
  if (install.installed) return;
  components.forEach(component => Vue.component(component.name, component));
  Vue.prototype.$Popover = Popover;
  Vue.prototype.$Toast = Toast;

  Vue.directive(Tooltip.name, Tooltip);
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
  Upload,
  Dropdown,
  Tooltip,
  Row,
  Col,
  Card,
  Alert,
  Input,
  Image,
  Heading,
  Button,
  ButtonGroup
};
