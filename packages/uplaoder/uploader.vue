<template>
  <div :class="wrapperClass" class="ui-upload-container">
    <div class="ui-upload-inner" :class="triggerClass" @click="handleClick" @drop.prevent="onDrop" @dragover.prevent="onDragover" @dragleave.prevent="onDragleave" v-if="showInput && !$slots.trigger">
      <div class="ui-upload-text">
        <slot name="text"></slot>
      </div>
      <button class="ui-upload-button" v-if="type == 'select'" v-html="text"></button>
      <input ref="input" type="file" class="ui-uploader-input" :multiple="multiple" @change="handleChange" :accept="accept" />
      <slot></slot>
      <slot name="trigger"></slot>
    </div>
    <upload-list ref="upload-list" v-if="uploadFiles.length && showList" @del-file="handleDelFile" @cancel-file="handleCancelFile" @retry-file="handleRetryFile" :file-list="uploadFiles" :lang="lang" :width="width" :height="height" @click-file="clickFile" :list-style="listStyle" :auto-upload="autoUpload"></upload-list>
    <div class="clearfix"></div>
  </div>
</template>
<script>
import uploadPropsFunctions from "../../src/mixins/uploader/uploadPropsFunctions.js";
import uploadPropsOptions from "../../src/mixins/uploader/uploadPropsOptions.js";
import uploadMethods from "../../src/mixins/uploader/uploadMethods.js";
import uploadComputed from "../../src/mixins/uploader/uploadComputed.js";
import uploadAction from "../../src/mixins/uploader/uploadAction.js";
import uploadValidate from "../../src/mixins/uploader/uploadValidate.js";
import UploadList from "./uploader-list.vue";
import "../assets/scss/uploader.scss";
export default {
  name: "ui-uploader",
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
