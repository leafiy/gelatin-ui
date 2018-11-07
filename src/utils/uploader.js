import axios from "axios";
const uploader = (file, uploadOptions) => {
  return new Promise((resolve, reject) => {
    let {
      uploadApi,
      headers,
      withCredentials,
      onProgress,
      data
    } = uploadOptions;
    let formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });

    let CancelToken = axios.CancelToken;
    let source = CancelToken.source();
    file.source = source;
    let onUploadProgress = e => {
      handleProgress(e, file);
      if (onProgress) {
        onProgress({ e, file });
      }
    };
    const fileType = Object.prototype.toString.call(file);

    if (fileType === "[object File]" || fileType === "[object Blob]") {
      formData.append("file", file);
    } else if (file.raw) {
      formData.append("file", file.raw);
    } else {
      throw new Error("not a file");
    }

    axios({
      method: "post",
      url: uploadApi,
      data: formData,
      headers: headers,
      onUploadProgress: onUploadProgress,
      cancelToken: source.token,
      withCredentials: withCredentials,
      timeout: 600000
    })
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const handleProgress = (e, file) => {
  let percent = (e.loaded / e.total) * 100;
  file.percentage = percent || 0;
};

export default uploader;
