<template>
  <div :class="classes" :style="styles"><slot></slot></div>
</template>
<script>
import camelToDash from "../../src/utils/camelToDash.js";
export default {
  name: "ui-col",

  data() {
    return {
      gutter: ""
    };
  },
  props: {
    autoWidth: Boolean,
    xs: {
      type: Number,
      default: 12
    },
    sm: Number,
    md: Number,
    lg: Number,
    xlg: Number,
    xsOffset: Number,
    smOffset: Number,
    mdOffset: Number,
    lgOffset: Number,
    xsFirst: Boolean,
    smFirst: Boolean,
    mdFirst: Boolean,
    lgFirst: Boolean,
    xsLast: Boolean,
    smLast: Boolean,
    mdLast: Boolean,
    lgLast: Boolean,
    first: Boolean,
    last: Boolean,
    reverse: Boolean,
    grow: Number,
    shrink: Number,
    basis: Number,
    order: Number,
    alignSelf: {
      type: String,
      validator: function(value) {
        return ["start", "center", "end", "baseline", "stretch"].includes(
          value
        );
      }
    }
  },
  computed: {
    styles() {
      return {
        "flex-grow": this.grow,
        "flex-shrink": this.shrink,
        "flex-basis": `${this.basis}%`,
        "align-self": this.alignSelf,
        paddingLeft: this.gutter + "rem",
        paddingBottom: this.gutter + "rem",
        order: this.order
      };
    },
    classes() {
      return [
        "ui-col",
        this.getSizeProps().join(" "),
        this.autoWidth && "ui-col-auto-width",
        {
          "ui-col-first": this.first,
          "ui-col-last": this.last,
          "ui-col-reverse": this.reverse
        }
      ];
    }
  },
  methods: {
    getSizeProps() {
      let cols = ["xs", "sm", "md", "lg", "xlg"];
      let classes = [];
      Object.keys(this.$props).forEach(s => {
        if (this.$props[s]) {
          if (cols.includes(s)) {
            classes.push(`ui-col-${s}-${this.$props[s]}`);
          }
          if (s.includes("Offset")) {
            classes.push(`ui-col-${camelToDash(s)}-${this.$props[s]}`);
          }
        }
      });
      return classes;
    }
  },
  mounted() {
    this.getSizeProps();
    if (this.$parent.gutter) {
      this.gutter = this.$parent.gutter;
    }
  }
  // render(h) {
  //   return h(
  //     this.tag, {
  //       class: this.classes,
  //       style: this.styles
  //     },
  //     this.$slots.default
  //   );
  // }
};
</script>
