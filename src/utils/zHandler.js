// class zHandler {
//   constructor(init = 200) {
//     this.initZ = init;
//   }
//   get() {
//     return this.initZ;
//   }
//   add(num) {
//     return num ? this.initZ + num : ++this.initZ;
//   }
//   remove() {
//     return --this.initZ;
//   }
// }

const ZHandler = function(init = 200) {
  this.z = init;
};

ZHandler.prototype.get = function() {
  return this.z;
};

ZHandler.prototype.add = function(num) {
  return num ? this.z + num : ++this.z;
};
ZHandler.prototype.remove = function() {
  return --this.z;
};

export default ZHandler;
