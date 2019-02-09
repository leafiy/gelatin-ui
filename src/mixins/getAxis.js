import getAxis from "../utils/getAxis.js";
export default {
  data() {
    return {
      axis: {}
    };
  },
  methods: {
    getAxis() {
      this.axis = getAxis();
    },
    unbindEvents() {},
    bindEvents() {}
  }
};
