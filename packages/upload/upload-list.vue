<template>
  <div class="ui-upload-list">
    <div
      v-for="(file, index) of fileList"
      :key="file.id || file.uid"
      :class="'ui-upload-file-' + file.status"
      class="ui-upload-file-item"
    >
      <img
        class="ui-upload-thumb"
        :src="file.url"
        @click="handlePreview(file, index)"
      />
      <div
        class="ui-upload-actions"
        :style="{ zIndex: $zIndex ? $zIndex.get() : 100 }"
        v-if="file"
      >
        <span
          v-if="file.status == 'uploading'"
          v-html="lang.cancel"
          @click.prevent="cancel(file, index)"
        ></span>
        <span
          v-if="file.status == 'ready' && !autoUpload"
          v-html="lang.ready"
        ></span>
        <span
          v-if="file.status == 'error' || file.status == 'canceled'"
          v-html="lang.retry"
          @click.prevent="retry(file, index)"
        ></span>
        <span
          v-if="
            file.status == 'finished' || file.status == 'error' || !file.status
          "
          v-html="lang.del"
          @click.prevent="del(file, index)"
        ></span>
      </div>
      <transition name="fade">
        <ui-progress
          type="ring"
          v-if="file.status == 'uploading'"
          :percentage="file.percentage"
        ></ui-progress>
      </transition>
    </div>
  </div>
</template>
<script>
import UiProgress from "../progress/progress.vue";
export default {
  name: "ui-upload-list",

  data() {
    return {};
  },
  props: {
    fileList: {
      type: Array,
      default() {
        return [];
      }
    },
    lang: Object,
    width: [Number, String],
    height: [Number, String],
    listStyle: String,
    autoUpload: Boolean
  },
  computed: {
    // listItemStyles() {
    //   if (this.listStyle == "card") {
    //     return {
    //       width: typeof this.height === "string" ? this.height : `${this.height}px`,
    //       height: typeof this.height === "string" ? this.height : `${this.height}px`
    //     };
    //   } else {
    //     return {
    //       height: typeof this.height === "string" ? this.height : `${this.height}px`,
    //       width: typeof this.width === "string" ? this.width : `${this.width}px`
    //     };
    //   }
    // }
  },
  components: {
    UiProgress
  },
  methods: {
    cancel(file, index) {
      this.$emit("cancel-file", { file: file, index: index });
    },
    retry(file, index) {
      this.$emit("retry-file", { file: file, index: index });
    },
    del(file, index) {
      this.$emit("del-file", { file: file, index: index });
    },
    handlePreview(file, index) {
      this.$emit("clik-ifle", { file, index });
    }
  }
};
</script>
