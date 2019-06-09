import uniqueId from "nanoid";
import { getOrientation } from "../../utils/imgUtils.js";

export default {
  methods: {
    click(params) {
      this.$refs.input.click();
      this.params = params;
    },
    handleChange(e) {
      const files = e.target.files;
      if (!files) {
        return;
      }
      this.handleFiles(files);
      this.onChange && this.onChange({ e });
      this.$refs.input.value = null;
    },
    handleClick() {
      this.$refs.input.click();
    },
    onDrop(e) {
      this.dragOver = false;
      const files = e.dataTransfer.files;
      if (!files) {
        return;
      }
      this.onChange && this.onChange({ e });
      this.handleFiles(files);
    },
    onDragover() {
      if (this.drag) {
        this.dragOver = true;
      }
    },
    onDragleave() {
      if (this.drag) {
        this.dragOver = false;
      }
    },
    handleFiles(files) {
      let postFiles = Array.prototype.slice.call(files);
      if (postFiles.length === 0) return;
      if (postFiles.length + this.uploadFiles.length > this.maxNumber) {
        this.onNumberExceed && this.onNumberExceed({ files });
        return;
      }

      postFiles.forEach(file => {
        this.handleFilesStart(file);
      });
    },
    handleFilesStart(file) {
      if (this.useBuiltInValidate) {
        this.validateFile(file)
          .then(() => {
            this.handleBeforeUpload(file);
          })
          .catch(() => {});
      } else {
        this.handleBeforeUpload(file);
      }
    },
    handleBeforeUpload(file) {
      this.prepareFile(file).then(_file => {
        if (this.beforeUpload) {
          this.beforeUpload(_file)
            .then(() => {
              this.startUpload(_file);
            })
            .catch(() => {});
        } else {
          this.startUpload(_file);
        }
      });
    },
    handleDelFile({ file, index }) {
      if (file.source && file.source.cancel) {
        file.source.cancel("canceled");
      }
      this.uploadFiles.splice(index, 1);
      this.onRemove && this.onRemove({ file, index });
    },
    handleRetryFile({ file, index }) {
      file.percentage = 0;
      file.status = "ready";
      this.$set(this.uploadFiles, index, file);
      this.onRetry && this.onRetry({ file, index });
      this.post(file);
    },
    handleCancelFile({ file, index }) {
      file.source.cancel("canceled");
      file.status = "canceled";
      this.onCancel && this.onCancel({ file, index });
    },
    handleFileList({ file, oldIndex, newIndex }) {
      if (this.maxNumber == 1) {
        this.uploadFiles = [file];
      } else {
        this.uploadFiles.splice(oldIndex, 1);
        this.uploadFiles.splice(newIndex, 0, file);
      }
      this.onOrderChange && this.onOrderChange({ file, oldIndex, newIndex });
    },
    prepareFile(file) {
      return new Promise(resolve => {
        const fileType = Object.prototype.toString.call(file);

        if (fileType === "[object File]" || fileType === "[object Blob]") {
          let _file = {
            // url: URL.createObjectURL(file),
            status: "ready",
            percentage: 0,
            name: file.name,
            raw: file,
            uid: uniqueId(),
            params: this.params
          };

          if (this.autoOrient && this.accept.includes("image")) {
            getOrientation(file)
              .then(orientation => {
                _file.url = URL.createObjectURL(file);
                _file.orientation = orientation;
                resolve(_file);
              })
              .catch(err => {
                console.log(err);
              });

            // import("../utils/imgUtils.js").then(
            //   module => {
            //     const getBase64 = module.default.getBase64;
            //     const getOrientation = module.default.getOrientation;
            //     const resetOrientation = module.default.resetOrientation;
            //     Promise.all([getBase64(file), getOrientation(file)]).then(
            //       data => {

            //     if (data[1] > 1) {
            //       resetOrientation(data[0], data[1])
            //         .then(url => {
            //           _file.url = url;
            //           _file.orientation = data[1]
            //           resolve(_file);
            //         })
            //         .catch(err => {
            //           console.log(err);
            //         });
            //     } else {
            //       _file.url = URL.createObjectURL(file);
            //       resolve(_file);
            //     }
            //     }
            //     );
            //   }
            // );
          } else {
            _file.url = URL.createObjectURL(file);
            resolve(_file);
          }
        } else {
          resolve(file);
        }
      });
    },
    clickFile({ file, index }) {
      this.onClickFile && this.onClickFile({ file, index });
    }
  }
};
