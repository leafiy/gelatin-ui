import uploader from "../../utils/uploader.js";
export default {
  methods: {
    startUpload(file) {
      if (this.maxNumber == 1) {
        if (
          this.uploadFiles.length &&
          this.uploadFiles[0].source &&
          this.uploadFiles[0].source.cancel
        ) {
          this.uploadFiles[0].source.cancel("canceled");
        }
        this.uploadFiles = [file];
      } else {
        this.uploadFiles.push(file);
      }
      if (!this.autoUpload) return;
      this.post(file);
      this.onStart && this.onStart({ file });
    },
    submit() {
      this.uploadFiles.forEach(file => {
        if (file.status == "ready") {
          this.onSubmit && this.onSubmit({ file });
          this.post(file);
        }
      });
    },
    post(file) {
      if (!file) return;
      file.status = "uploading";
      uploader(file, {
        headers: this.headers,
        uploadApi: this.uploadApi,
        data: this.data,
        withCredentials: this.withCredentials,
        onProgress: this.onProgress
      })
        .then(res => {
          if (this.parseUrl) {
            file.url = this.parseUrl(res);
          }
          delete file.source;
          file.status = "finished";
          this.onSuccess && this.onSuccess({ file: file, res: res });
        })
        .catch(err => {
          file.status = "error";
          this.onError && this.onError({ file: file, err: err });
        });
    }
  }
};
