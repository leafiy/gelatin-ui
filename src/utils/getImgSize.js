const getImgSize = url => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = url;
    img.onload = () => {
      let width = img.naturalWidth,
        height = img.naturalHeight;

      URL.revokeObjectURL(img.src);
      resolve({ width, height });
    };
    img.onerror = () => {
      reject();
    };
  });
};
export default getImgSize;
