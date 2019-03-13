<template>
  <div class="ui-poster">
    <div class="ui-poster-wrapper" ref="wrapper">
      <!-- <template v-if="!src"> -->
      <canvas id="background" ref="background"></canvas>
      <!-- </template> -->
      <!-- <img v-else :src="src" /> -->
    </div>
  </div>
</template>
<script>
import "../assets/scss/poster.scss";
import loadImage from "buxton/browser/loadImage.js";
export default {
  name: "ui-poster",

  data() {
    return {
      src: ""
    };
  },
  props: {
    borderColor: String,
    width: {
      type: Number,
      default: 525
    },
    height: {
      type: Number,
      default: 750
    },
    padding: {
      type: Number,
      default: 24
    },
    ratio: {
      type: Number,
      default: 1
    },
    background: {
      type: String,
      default: "rgba(255, 255, 255, 1)"
    },
    boxShadow: {
      type: Object,
      default() {
        return {
          shadowBlur: "22",
          shadowColor: "rgba(0, 0, 0, 0.07)"
        };
      }
    },
    coverStyle: Object,
    titleStyle: Object,
    dateStyle: Object,
    despStyle: Object,
    authorStyle: Object,
    avatarStyle: Object,
    qrcodeStyle: Object,
    logoStyle: Object,
    cover: String,
    title: String,
    date: String,
    desp: String,
    author: String,
    avatar: String,
    qrcode: String,
    logo: String
  },
  methods: {
    roundRect(ctx, x, y, width, height, radius) {
      if (typeof radius === "number") {
        radius = { tl: radius, tr: radius, br: radius, bl: radius };
      } else {
        var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
        for (var side in defaultRadius) {
          radius[side] = radius[side] || defaultRadius[side];
        }
      }
      ctx.beginPath();
      ctx.moveTo(x + radius.tl, y);
      ctx.lineTo(x + width - radius.tr, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
      ctx.lineTo(x + width, y + height - radius.br);
      ctx.quadraticCurveTo(
        x + width,
        y + height,
        x + width - radius.br,
        y + height
      );
      ctx.lineTo(x + radius.bl, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
      ctx.lineTo(x, y + radius.tl);
      ctx.quadraticCurveTo(x, y, x + radius.tl, y);
      ctx.closePath();
    },
    drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {
      if (arguments.length === 2) {
        x = y = 0;
        w = ctx.canvas.width;
        h = ctx.canvas.height;
      }

      // default offset is center
      offsetX = typeof offsetX === "number" ? offsetX : 0.5;
      offsetY = typeof offsetY === "number" ? offsetY : 0.5;

      // keep bounds [0.0, 1.0]
      if (offsetX < 0) offsetX = 0;
      if (offsetY < 0) offsetY = 0;
      if (offsetX > 1) offsetX = 1;
      if (offsetY > 1) offsetY = 1;

      var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r, // new prop. width
        nh = ih * r, // new prop. height
        cx,
        cy,
        cw,
        ch,
        ar = 1;

      // decide which gap to fill
      if (nw < w) ar = w / nw;
      if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh; // updated
      nw *= ar;
      nh *= ar;

      // calc source rectangle
      cw = iw / (nw / w);
      ch = ih / (nh / h);

      cx = (iw - cw) * offsetX;
      cy = (ih - ch) * offsetY;

      // make sure source rectangle is valid
      if (cx < 0) cx = 0;
      if (cy < 0) cy = 0;
      if (cw > iw) cw = iw;
      if (ch > ih) ch = ih;

      // fill image in dest. rectangle
      ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
    },
    circleImg(ctx, img, x, y, r) {
      ctx.save();
      let d = 2 * r;
      let cx = x + r;
      let cy = y + r;
      ctx.arc(cx, cy, r, 0, 2 * Math.PI);
      ctx.clip();
      ctx.drawImage(img, x, y, d, d);
      ctx.restore();
    },
    onload() {
      const img = new Image();
      img.src = this.cover;
      img.onload = () => {
        const ctx = this.$refs["background"].getContext("2d");
        this.roundRect(
          ctx,
          this.padding,
          this.padding,
          this.width - this.padding * 2,
          this.height - this.padding * 2,
          22
        );
        ctx.fillStyle = this.background;
        ctx.shadowBlur = this.boxShadow.shadowBlur;
        ctx.shadowColor = this.boxShadow.shadowColor;
        ctx.fill();
        if (this.borderColor) {
          ctx.strokeStyle = this.borderColor;
          ctx.stroke();
        }

        this.drawImageProp(
          ctx,
          img,
          this.padding,
          this.padding,
          this.width - this.padding * 2,
          (this.height - this.padding * 2) / 2.5
        );
      };
      // const ctx = this.$refs['background'].getContext('2d')
      // ctx.fillStyle = this.backgroundStyle.background;
      // ctx.fillRect(0, 0, this.width, this.height)
      // ctx.drawImage(img, 0, 0, this.width, this.height)
      // ctx.drawImage($day, 0, this.height / 2 - 120)
      // ctx.drawImage($date, 0, this.height / 2 - 50)
      // ctx.drawImage($title, 0, this.height / 2 + 90)
      // ctx.drawImage($content, 0, this.height / 2 + 200)
      // ctx.drawImage($logo, 0, this.height - $logo.height - 30)
      // ctx.drawImage($description, 0, this.height - $description.height + 30)
      // ctx.strokeStyle = this.borderColor;
      // ctx.setLineDash([5, 6]);
      // ctx.moveTo(0, this.height / 2 + 400)
      // ctx.lineTo(768, this.height / 2 + 400)
      // ctx.stroke()
      // const image = new Image();
      // image.src = this.$refs['background'].toDataURL('image/png')
      // image.width = this.width * this.ratio
      // image.height = this.height * this.ratio
      // ctx.clearRect(0, 0, this.width, this.height)
      // this.src = image.src
    },

    drawOneline(canvas, style, content) {
      const ctx = canvas.getContext("2d");
      canvas.height = parseInt(style.font.match(/\d+/), 10) + 20;
      ctx.font = style.font;
      ctx.fillStyle = style.color;
      ctx.textBaseline = "top";

      let lineWidth = 0;
      let idx = 0;
      let truncated = false;
      for (let i = 0; i < content.length; i++) {
        lineWidth += ctx.measureText(content[i]).width;
        if (lineWidth > canvas.width - 60) {
          truncated = true;
          idx = i;
          break;
        }
      }

      let padding = 30;

      if (truncated) {
        content = content.substring(0, idx);
        padding = canvas.width / 2 - lineWidth / 2;
      }


      if (style.position === "center") {
        ctx.textAlign = "center";
        ctx.fillText(content, canvas.width / 2, 0);
      } else if (style.position === "left") {
        ctx.fillText(content, padding, 0);
      } else {
        ctx.textAlign = "right";
        ctx.fillText(content, canvas.width - padding, 0);
      }
    },
    drawMoreLines(canvas, style, content) {
      const ctx = canvas.getContext("2d");
      const fontHeight = parseInt(style.font.match(/\d+/), 10);


      ctx.font = style.font;
      ctx.fillStyle = style.color;
      ctx.textBaseline = "top";
      ctx.textAlign = "center";

      let alignX = 0;

      if (style.position === "center") {
        alignX = canvas.width / 2;
      } else if (style.position === "left") {
        ctx.textAlign = "left";
        alignX = 60;
      } else {
        ctx.textAlign = "right";
        alignX = canvas.width - 60;
      }

      let lineWidth = 0;
      let lastSubStrIndex = 0;
      let offsetY = 0;
      for (let i = 0; i < content.length; i++) {
        lineWidth += ctx.measureText(content[i]).width;
        if (lineWidth > canvas.width - 120) {
          ctx.fillText(content.substring(lastSubStrIndex, i), alignX, offsetY);
          offsetY += fontHeight * style.lineHeight;
          lineWidth = 0;
          lastSubStrIndex = i;
        }
        if (i === content.length - 1) {
          ctx.fillText(
            content.substring(lastSubStrIndex, i + 1),
            alignX,
            offsetY
          );
        }
      }
    }
  },
  mounted() {
    if (this.cover) {
      this.onload();
      this.$refs["background"].width = this.width;
      this.$refs["background"].height = this.height;
    }
  }
};
</script>
