export default {
  username: /^[A-Za-z0-9_._\u4e00-\u9fa5_\。_\、_\@]+$/,
  email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
  url: /^\S*$/,
  link: /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
  htmlGeneric: /<[a-z][\s\S]*>/,
  htmlStrict: /<[a-z/][\s\S]*>/
};
