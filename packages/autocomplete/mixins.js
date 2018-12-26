export default {
  methods: {
    highlightItem(direction) {
      if (this.items.length === 0) {
        return;
      }
      let selectedIndex = this.items.findIndex((item, index) => {
        return index === this.activeItemIndex;
      });
      if (selectedIndex === -1) {
        if (direction === "down") {
          selectedIndex = 0;
        } else {
          selectedIndex = this.items.length - 1;
        }
      } else {
        this.activeIndexItem = 0;
        if (direction === "down") {
          selectedIndex++;
          if (selectedIndex === this.items.length) {
            selectedIndex = 0;
          }
        } else {
          selectedIndex--;
          if (selectedIndex < 0) {
            selectedIndex = this.items.length - 1;
          }
        }
      }
      this.activeItemIndex = selectedIndex;
    },
    onKeyDown(e) {
      switch (e.keyCode) {
        case 40:
          this.highlightItem("down");
          e.preventDefault();
          break;
        case 38:
          this.highlightItem("up");
          e.preventDefault();
          break;
        case 13:
          this.selectItem(this.activeItemIndex);
          e.preventDefault();
          break;
        default:
          return true;
      }
    }
  }
};
