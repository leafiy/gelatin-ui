<template>
  <div class="ui-loader">
    <div
      class="ui-loader__header"
      :style="{ height: pullHeight + 'px' }"
      v-show="'pull-down' === pull.type"
    >
      <div class="ui-loader__header-text" v-show="!pull.available">
        {{ lang.pullDownToRefresh }}
      </div>
      <div
        class="ui-loader__header-text"
        v-show="pull.available && 'pull-down' !== loadingType"
      >
        {{ lang.releaseToRefresh }}
      </div>
      <div class="ui-loader__header-text" v-show="'pull-down' === loadingType">
        <slot :name="'pull-down-loading'"> <ui-spinner></ui-spinner> </slot>
      </div>
    </div>
    <div class="ui-loader__content"><slot></slot></div>
    <div
      class="ui-loader__footer"
      v-if="showFooter"
      :style="{ height: pullHeight + 'px' }"
      v-show="'pull-up' === pull.type"
    >
      <div class="ui-loader__footer-text" v-show="!pull.available">
        {{ lang.pullUpToLoad }}
      </div>
      <div
        class="ui-loader__footer-text"
        v-show="pull.available && 'pull-up' !== loadingType"
      >
        {{ lang.releaseToRefresh }}
      </div>
      <div class="ui-loader__footer-text" v-show="'pull-up' === loadingType">
        <slot :name="'pull-up-loading'"> <ui-spinner></ui-spinner> </slot>
      </div>
    </div>
    <div
      class="ui-loader__footer"
      v-if="showFooter"
      :style="{ height: distance + 'px' }"
      v-show="loading && 'scroll' === loadingType"
    >
      <div class="footer-text">
        <slot :name="'scroll-loading'"> <ui-spinner></ui-spinner> </slot>
      </div>
    </div>
    <div
      class="ui-loader__footer"
      v-if="showFooter"
      :style="{ height: distance + 'px' }"
      v-show="showCompleted"
    >
      <div class="ui-loader__footer-text">{{ lang.loadCompleted }}</div>
    </div>
  </div>
</template>
<script>
import "../assets/scss/loader.scss";
import UiSpinner from "../spinner/spinner.vue";

export default {
  name: "ui-loader",
  components: {
    UiSpinner
  },
  props: {
    lang: {
      type: Object,
      default() {
        return {
          pullDownToRefresh: "下拉刷新数据",
          releaseToRefresh: "松开刷新数据",
          pullUpToLoad: "上拉加载数据",
          loadCompleted: "加载完毕"
        };
      }
    },
    disableBrowserPull: {
      type: Boolean,
      default: true
    },
    loading: Boolean,
    completed: Boolean,
    distance: {
      type: Number,
      default: 60
    },
    offset: {
      type: Number,
      default: 0
    },
    listens: {
      type: Array,
      default() {
        return ["infinite-scroll", "pull-down", "pull-up"];
      }
    },
    container: {
      type: String
    },
    initScroll: Boolean,
    showFooter: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      margin: {
        top: 0,
        bottom: 0
      },
      pull: {
        from: -1,
        to: -1,
        distance: 0,
        type: null,
        available: false
      },
      loadingType: null,
      inited: false
    };
  },
  computed: {
    _container() {
      return this.container
        ? this.$parent.$refs[this.container]
        : window.window;
    },
    pullHeight() {
      return this.pull.distance > this.distance
        ? this.distance
        : this.pull.distance;
    },
    showCompleted() {
      return (
        !this.loading &&
        this.completed &&
        ("pull-up" !== this.pull.type && !this.pull.available)
      );
    }
  },
  watch: {
    loading(val, oldVal) {
      if (oldVal && !val) {
        this.resetPull();
        this.setLoadingType();
      }
    }
  },
  methods: {
    updateView() {
      let { top, height } = this.$el.getBoundingClientRect();
      this.margin = {
        top,
        bottom: window.innerHeight - (height + top + this.offset)
      };
    },
    setLoadingType(type = null) {
      this.loadingType = type;
    },
    handleScroll() {
      this.updateView();
      if (this.loading || this.completed) {
        return;
      }
      if (this.margin.bottom >= 0) {
        this.$emit("scroll");
        this.setLoadingType("scroll");
      }
    },
    handleTouchStart(e) {
      if (
        this.loading ||
        !(this.hasListen("pull-up") || this.hasListen("pull-down")) ||
        (this.margin.top < 0 && this.margin.bottom < 0)
      ) {
        return;
      }

      this.pull.from = e.touches.item(0).pageY;
    },
    handleTouchMove(e) {
      if (this.loading || this.pull.from < 0) {
        return;
      }
      this.pull.to = e.touches.item(0).pageY;
      let distance = this.pull.to - this.pull.from;

      if (distance > 0 && this.margin.top > 0 && this.hasListen("pull-down")) {
        // pull down
        this.pull.type = "pull-down";
      } else if (
        distance < 0 &&
        this.margin.bottom > 0 &&
        this.hasListen("pull-up")
      ) {
        // pull up
        this.pull.type = "pull-up";
      } else {
        this.pull.type = null;
      }

      this.pull.distance = Math.abs(distance);
      this.pull.available = this.pull.distance >= this.distance;
    },
    handleTouchEnd() {
      if (this.pull.distance >= this.distance) {
        if ("pull-up" === this.pull.type || "pull-down" === this.pull.type) {
          this.$emit(this.pull.type);
          this.setLoadingType(this.pull.type);
        }
      } else {
        this.resetPull();
      }
    },
    resetPull() {
      this.pull = {
        from: -1,
        to: -1,
        distance: 0,
        type: null,
        available: false
      };
    },
    bindEvents() {
      // scroll
      if (this.hasListen("scroll")) {
        ["scroll", "resize"].forEach(e => {
          this._container.addEventListener(e, this.handleScroll);
        });
      }

      // touch
      if (this.hasListen("pull-up") || this.hasListen("pull-down")) {
        this._container.addEventListener("touchstart", this.handleTouchStart);
        this._container.addEventListener("touchmove", this.handleTouchMove);
        this._container.addEventListener("touchend", this.handleTouchEnd);
      }
    },
    hasListen(event) {
      return this.listens.indexOf(event) >= 0;
    },
    init() {
      this.bindEvents();
      this.updateView();
      if (this.initScroll) {
        this.handleScroll();
      }
    },
    unBindEvents() {
      if (this.hasListen("scroll")) {
        ["scroll", "resize"].forEach(e => {
          this._container.removeEventListener(e, this.handleScroll);
        });
      }

      // touch
      if (this.hasListen("pull-up") || this.hasListen("pull-down")) {
        this._container.removeEventListener(
          "touchstart",
          this.handleTouchStart
        );
        this._container.removeEventListener("touchmove", this.handleTouchMove);
        this._container.removeEventListener("touchend", this.handleTouchEnd);
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
      this.inited = true;
      if (this.disableBrowserPull) {
        document.body.style["overscroll-behavior-y"] = "contain";
      }
    });
  },
  activated() {
    if (this.inited) {
      this.init();
    }
  },
  deactivated() {
    this.unBindEvents();
  },
  beforeDestroy() {
    this.unBindEvents();
  }
};
</script>
