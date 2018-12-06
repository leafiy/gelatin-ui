import Toast from "../toast/toast.js";


const $Message = function(options = {}) {
  options = typeof options === "string" ? { message: options } : options;
  options.isMessage = true;
  if(!options.title && !options.message){
   throw new Error('must have title/message')
  }
  let message = new Toast(options)
  return message
}

const types = ["info", "error", "warning"];

types.forEach(type => {
  $Message[type] = options => {
    options = typeof options === "string" ? { message: options } : options;
    return $Message({ ...options, type });
  };
});


export default $Message;
