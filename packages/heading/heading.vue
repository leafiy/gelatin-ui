<script>
import "../assets/scss/heading.scss";
export default {
  name: "ui-heading",
  components: {
    heading: {
      props: ["tag", "classes"]
    }
  },
  props: {
    bold: Boolean,
    primary: {
      type: Boolean,
      default: true
    },
    divider: Boolean,
    bullet: Boolean,
    margin: Boolean,
    tag: {
      type: String,
      default: "h2",
      validator(value) {
        return ["h1", "h2", "h3", "h4", "h5"].includes(value);
      }
    }
  },
  computed: {
    classes: function() {
      return [
        `ui-heading`,
        {
          ["ui-heading-margin"]: this.margin,
          ["ui-heading-bold"]: this.bold,
          ["ui-heading-primary"]: this.primary,
          ["ui-heading-divider"]: this.divider,
          ["ui-heading-bullet"]: this.bullet
        }
      ];
    }
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
