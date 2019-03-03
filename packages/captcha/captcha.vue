<template>
  <div class="ui-captcha">
    <canvas
      ref="canvas"
      @click="click"
      :width="width"
      :height="height"
    ></canvas>
  </div>
</template>
<script>
import randomCode from "buxton/string/randomCode";
export default {
  name: "ui-captcha",
  data() {
    return {
      canvas: null,
      paint: null,
      captcha: ""
    };
  },
  props: {
    clickRefresh: {
      type: Boolean,
      default: true
    },
    lineWidth: {
      type: Number,
      default: 0.5
    },
    lineNum: {
      type: Number,
      default: 2
    },
    dotNum: {
      type: Number,
      default: 10
    },
    dotRadius: {
      type: Number,
      default: 1
    },
    foreColor: {
      type: [Array, String],
      default() {
        return [10, 80];
      }
    },
    backColor: {
      type: [Array, String],
      default() {
        return [150, 250];
      }
    },
    fontSize: {
      type: Number,
      default: 30
    },
    font: {
      type: String,
      default: "Georgia"
    },
    fontStyle: {
      type: String,
      default: "fill",
      validator(value) {
        return ["fill", "stroke"].includes(value);
      }
    },
    factor: {
      type: String,
      default: "acdefhijkmnpwxy12345789"
    },
    len: {
      type: Number,
      default: 4
    },
    width: Number,
    height: Number
  },
  methods: {
    getColor(color) {
      if (Array.isArray(color)) {
        let colors = new Array(3).fill(""); // 创建一个长度为3的数组，值都填充为 ''
        return colors.map(v => this.getRand(...color));
      } else {
        return color;
      }
    },
    getRand(...arr) {
      arr.sort((a, b) => a - b);
      return Math.floor(Math.random() * (arr[1] - arr[0]) + arr[0]);
    },
    getText() {
      this.captcha = randomCode(this.len, this.factor);
      return this.captcha;
    },
    drawLine() {
      [...Array(this.lineNum)].map((_, i) => {
        let x = this.getRand(0, this.canvas.width),
          y = this.getRand(0, this.canvas.height),
          endx = this.getRand(0, this.canvas.width),
          endy = this.getRand(0, this.canvas.width);
        this.paint.beginPath();
        this.paint.lineWidth = this.lineWidth;
        let colors = this.getColor(this.foreColor);
        this.paint.strokeStyle = Array.isArray(colors)
          ? `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.8)`
          : this.colors;
        this.paint.moveTo(x, y);
        this.paint.lineTo(endx, endy);
        this.paint.closePath();
        this.paint.stroke();
      });
    },
    drawDot() {
      [...Array(this.dotNum)].map((_, i) => {
        let x = this.getRand(0, this.canvas.width),
          y = this.getRand(0, this.canvas.height);
        this.paint.beginPath();
        this.paint.arc(x, y, this.dotRadius, 0, Math.PI * 2, false);
        this.paint.closePath();
        let colors = this.getColor(this.foreColor);
        this.paint.fillStyle = Array.isArray(colors)
          ? `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.8)`
          : this.colors;
        this.paint.fill();
      });
    },
    drawFont() {
      let str = this.getText();
      this.paint.font = `${this.fontSize}px ${this.fontFamily}`;
      this.paint.textBaseline = "middle";
      let fontStyle = `${this.fontStyle}Text`;
      let colorStyle = `${this.fontStyle}Style`;
      [...Array(this.len)].map((_, i) => {
        let fw = this.paint.measureText(str[i]).width;
        let x =
          this.getRand(
            (this.canvas.width / this.len) * i,
            (this.canvas.width / this.len) * i + fw / 2
          ) + 10;
        let deg = this.getRand(-6, 6);
        let colors = this.getColor(this.foreColor);
        this.paint[colorStyle] = Array.isArray(colors)
          ? `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.8)`
          : this.colors;
        this.paint.save();
        this.paint.rotate((deg * Math.PI) / 180);
        this.paint[fontStyle](str[i], x, this.canvas.height / 2);
        this.paint.restore();
      });
    },
    draw() {
      if (!this.paint) {
        this.canvas = this.$refs["canvas"];
        if (!this.canvas) return;
        this.paint = this.canvas.getContext("2d");
        if (!this.paint) return;
      }
      let colors = this.getColor(this.backColor);
      this.paint.fillStyle = Array.isArray(colors)
        ? `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, 0.8)`
        : this.colors;
      this.paint.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawDot();
      this.drawLine();
      this.drawFont();
    },
    clear() {
      this.paint.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    click() {
      if (!this.clickRefresh) return;
      this.clear();
      this.draw();
      this.$emit("refresh");
    }
  },
  mounted() {
    this.draw();
  }
};
</script>
