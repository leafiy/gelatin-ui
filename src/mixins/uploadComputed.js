export default {
  computed: {
    wrapperClass() {
      return [
        {
          [`ui-upload-single`]: this.maxNumber == 1,
          [`ui-upload-drag-supportted`]: this.drag,
          [`ui-upload-list-card`]: this.listStyle == "card"
        },
        `ui-upload-${this.type}`
      ];
    },
    triggerClass() {
      return [
        {
          [`ui-upload-drag-over`]: this.dragOver
        }
      ];
    },
    triggerStyles() {
      if (this.type == "drag") {
        return {
          height:
            typeof this.height === "string" ? this.height : `${this.height}px`,
          width: typeof this.width === "string" ? this.width : `${this.width}px`
        };
      }
      if (this.type == "circle") {
        return {
          height:
            typeof this.height === "string" ? this.height : `${this.height}px`,
          width:
            typeof this.height === "string" ? this.height : `${this.height}px`
        };
      }
    },
    showInput() {
      return this.uploadFiles.length ? this.showInputAfterSuccess : true;
    }
  }
};
