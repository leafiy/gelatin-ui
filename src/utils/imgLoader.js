const imgLoader = function(url) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = function() {
      resolve(url);
    };
    img.onerror = function() {
      console.log(url);
      reject(url);
    };
    img.src = url;
  });
};

export default imgLoader;
