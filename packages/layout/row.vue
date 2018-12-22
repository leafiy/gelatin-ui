<script>
import "../assets/scss/layout.scss";
import camelToDash from "../../src/utils/camelToDash.js";

export default {
  name: "ui-row",

  data() {
    return {};
  },
  props: {
    tag: {
      type: String,
      default: "div"
    },
    // around: Boolean,
    // between: Boolean,
    reverse: Boolean,
    xsAround: Boolean,
    smAround: Boolean,
    mdAround: Boolean,
    lgAround: Boolean,
    xsBetween: Boolean,
    smBetween: Boolean,
    mdBetween: Boolean,
    lgBetween: Boolean,
    xsStart: Boolean,
    smStart: Boolean,
    mdStart: Boolean,
    lgStart: Boolean,
    xsCenter: Boolean,
    smCenter: Boolean,
    mdCenter: Boolean,
    lgCenter: Boolean,
    xsEnd: Boolean,
    smEnd: Boolean,
    mdEnd: Boolean,
    lgEnd: Boolean,
    xsTop: Boolean,
    smTop: Boolean,
    mdTop: Boolean,
    lgTop: Boolean,
    xsMiddle: Boolean,
    smMiddle: Boolean,
    mdMiddle: Boolean,
    lgMiddle: Boolean,
    xsBottom: Boolean,
    smBottom: Boolean,
    mdBottom: Boolean,
    lgBottom: Boolean,
    noGutter: Boolean,
    gutterV: Boolean,
    alignContent: {
      type: String,
      validator: function(value) {
        return [
          "start",
          "center",
          "end",
          "stretch",
          "around",
          "between"
        ].includes(value);
      }
    },
    alignH: {
      type: String,
      validator: function(value) {
        return [
          "start",
          "center",
          "end",
          "baseline",
          "stretch",
          "evenly",
          "between"
        ].includes(value);
      }
    },
    alignV: {
      type: String,
      validator: function(value) {
        return ["top", "middle", "bottom", "stretch"].includes(value);
      }
    },
    wrap: {
      type: String,
      // default: 'nowrap',
      validator: function(value) {
        return ["nowrap", "wrap", "reverse"].includes(value);
      }
    }
  },
  computed: {
    classes() {
      return [
        "ui-row",
        this.getSizeProps().join(" "),
        this.warp && `ui-row-${this.wrap}`,
        this.alignH && `ui-row-justify-content-${this.alignH}`,
        this.alignV && `ui-row-align-item-${this.alignV}`,
        this.alignContent && `ui-row-align-content-${this.alignContent}`,
        this.reverse && "ui-row-reverse",
        this.noGutter && "ui-row-no-gutter",
        this.gutterV && "ui-row-gutter-vertical"
      ];
    }
  },
  methods: {
    getSizeProps() {
      let classes = [];
      Object.keys(this.$props).forEach(s => {
        if (this.$props[s]) {
          if (s.includes("Around") || s.includes("Between")) {
            classes.push(`ui-row-${camelToDash(s)}`);
          }
          if (
            s.includes("Center") ||
            s.includes("Start") ||
            s.includes("End") ||
            s.includes("Top") ||
            s.includes("Middle") ||
            s.includes("Bottom") ||
            s.includes("First") ||
            s.includes("Last")
          ) {
            classes.push(`ui-row-${camelToDash(s)}`);
          }
        }
      });
      return classes;
    }
  },
  mounted() {
    this.getSizeProps();
  },
  render(h) {
    return h(
      this.tag,
      {
        class: this.classes
      },
      this.$slots.default
    );
  }
};
</script>
<style lang="css" scoped></style>
