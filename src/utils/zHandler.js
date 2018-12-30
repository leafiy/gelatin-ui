class zHandler {
  constructor(init = 200) {
    this.initZ = init;
  }
  get() {
    return this.initZ;
  }
  add(num) {
    return num ? this.initZ + num : ++this.initZ;
  }
  remove() {
    return --this.initZ;
  }
}

export default zHandler;
