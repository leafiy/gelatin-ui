import getFileExt from "@/utils/getFileExt.js";

export default {
  methods: {
    validateFile(file) {
      return new Promise((resolve, reject) => {
        this.validateFileType(file)
          .then(file => {
            return this.validateFileSize(file);
          })
          .then(file => {
            resolve(file);
          })
          .catch(err => {
            this.onError && this.onError({ err, file });
            reject(err);
          });
      });
    },
    validateFileType(file) {
      return new Promise((resolve, reject) => {
        let ext = getFileExt(file.name);
        if (this.supportFormat.includes(ext)) {
          resolve(file);
        } else {
          this.onFormatError && this.onFormatError({ file });
          reject({ message: "format error" });
        }
      });
    },
    validateFileSize(file) {
      return new Promise((resolve, reject) => {
        if (file.size <= this.maxSize) {
          resolve(file);
        } else {
          this.onSizeExceed && this.onSizeExceed({ file });
          reject({ message: "exceed size" });
        }
      });
    }
  }
};
