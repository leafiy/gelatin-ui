export default {
  props: {
    type: {
      type: String,
      default: "select",
      validator: function(value) {
        return ["drag", "select"].indexOf(value) !== -1;
      }
    },
    accept: {
      type: String,
      default: "image/jpeg,image/png,image/jpg,image/gif,image/webp"
    },
    height: {
      type: [Number, String],
      default: "140px"
    },
    width: {
      type: [Number, String],
      default: "100%"
    },
    maxSize: {
      type: Number,
      default: 1024 * 1024 * 15
    },
    maxNumber: {
      type: Number,
      default: 1
    },
    supportFormat: {
      type: Array,
      default() {
        return ["gif", "jpg", "jpeg", "png", "webp"];
      }
    },
    lang: {
      type: Object,
      default() {
        return {
          cancel: "cancel",
          del: "delete",
          retry: "retry"
        };
      }
    },
    text: {
      type: String,
      default: "click to upload"
    },
    uploadApi: String,
    headers: Object,
    withCredentials: Boolean,
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    drag: {
      type: Boolean,
      default: true
    },
    useBuiltInValidate: {
      type: Boolean,
      default: true
    },
    showInputAfterSuccess: {
      type: Boolean,
      default: true
    },
    showList: {
      type: Boolean,
      default: true
    },
    showPreview: Boolean,
    showPercentage: {
      type: Boolean,
      default: true
    },
    listStyle: {
      type: String,
      default: "list",
      validator: function(value) {
        return ["list", "card", "custom", ""].indexOf(value) !== -1;
      }
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    autoOrient: Boolean,
    fileList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
