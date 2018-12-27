export default {
  methods: {
    highlightItem(direction) {
      let items = this.showItems.filter(item => item.show);
      if (items.length === 0) {
        return;
      }
      let selectedIndex = items.findIndex((item, index) => {
        return index === this.activeItemIndex;
      });
      if (selectedIndex === -1) {
        if (direction === "down") {
          selectedIndex = 0;
        } else {
          selectedIndex = items.length - 1;
        }
      } else {
        this.activeIndexItem = 0;
        if (direction === "down") {
          selectedIndex++;
          if (selectedIndex === items.length) {
            selectedIndex = 0;
          }
        } else {
          selectedIndex--;
          if (selectedIndex < 0) {
            selectedIndex = items.length - 1;
          }
        }
      }
      this.activeItemIndex = selectedIndex;

      let list = this.$refs["list"];
      let listItems = list.querySelectorAll(".ui-autocomplete-list-item");
      listItems.forEach(item => {
        item.classList.remove("ui-autocomplete-list-item-active");
      });
      listItems[this.activeItemIndex].classList.add(
        "ui-autocomplete-list-item-active"
      );
      let item = listItems[this.activeItemIndex];
      let scrollTop = list.scrollTop;
      let offsetTop = item.offsetTop;

      if (offsetTop + item.scrollHeight > scrollTop + list.clientHeight) {
        list.scrollTop += item.scrollHeight;
      }
      if (offsetTop < scrollTop) {
        list.scrollTop -= item.scrollHeight;
      }
    },
    onKeyDown(e) {
      switch (e.keyCode) {
        case 40:
          if (this.showList) {
            this.highlightItem("down");
          }
          e.preventDefault();
          break;
        case 38:
          if (this.showList) {
            this.highlightItem("up");
          }
          e.preventDefault();
          break;
        case 13:
          if (this.activeItemIndex == -1) {
            break;
          }
          let items = this.showItems.filter(item => item.show);
          if (items.length) {
            let item = items[this.activeItemIndex].item;
            let index = this.items.findIndex(i => i == item);
            this.selectItem(index);
          }
          e.preventDefault();
          break;
        default:
          return true;
      }
    }
  }
};
