<template>
  <div :class="wrapperClass" class="ui-upload-container">
    <div
      class="ui-upload-inner"
      :class="triggerClass"
      @click="handleClick"
      @drop.prevent="onDrop"
      @dragover.prevent="onDragover"
      @dragleave.prevent="onDragleave"
      v-if="showInput && !$slots.trigger"
    >
      <div class="ui-upload-text"><slot name="text"></slot></div>
      <button
        class="ui-upload-button"
        v-if="type == 'select'"
        v-html="text"
      ></button>
      <input
        ref="input"
        type="file"
        class="ui-upload-input"
        :multiple="multiple"
        @change="handleChange"
        :accept="accept"
      />
      <slot></slot> <slot name="trigger"></slot>
    </div>
    <upload-list
      ref="upload-list"
      v-if="uploadFiles.length && showList"
      @del-file="handleDelFile"
      @cancel-file="handleCancelFile"
      @retry-file="handleRetryFile"
      :file-list="uploadFiles"
      :lang="lang"
      :width="width"
      :height="height"
      @click-file="clickFile"
      :list-style="listStyle"
      :auto-upload="autoUpload"
    ></upload-list>
    <div class="clearfix"></div>
  </div>
</template>
<script>
import uploadPropsFunctions from "../../src/mixins/upload/uploadPropsFunctions.js";
import uploadPropsOptions from "../../src/mixins/upload/uploadPropsOptions.js";
import uploadMethods from "../../src/mixins/upload/uploadMethods.js";
import uploadComputed from "../../src/mixins/upload/uploadComputed.js";
import uploadAction from "../../src/mixins/upload/uploadAction.js";
import uploadValidate from "../../src/mixins/upload/uploadValidate.js";
import UploadList from "./upload-list.vue";
import "../assets/scss/upload.scss";
export default {
  name: "ui-upload",
  data() {
    return {
      dragOver: false,
      reqs: {},
      uploadFiles: [],
      params: null
    };
  },
  mixins: [
    uploadPropsFunctions,
    uploadPropsOptions,
    uploadMethods,
    uploadComputed,
    uploadAction,
    uploadValidate
  ],
  components: {
    UploadList
  },
  mounted() {
    this.uploadFiles = this.fileList;
  }
};
</script>
