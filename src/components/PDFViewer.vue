<!-- See more about this component @https://pdfjs.express/blog/how-build-pdf-viewer-vuejs-pdfjs-->

<template>
    <div class="container">
        <iframe height="100%" width=100% :src="getFilePath" :title="title"></iframe>
    </div>
</template>

<script>
export default {
  name: 'PDFViewer',
  props: {
    fileName: String,
    title: String,
  },
  computed: { 
    getFilePath() {
      return encodeURI(`/pdfjs/web/viewer.html?file=${this.fileName}`);
    }
  }
}
</script>

<style scoped>
div {
  width: 75vw;
  height: 75vh;
  min-width: 400px;
  margin: auto;
}
</style>