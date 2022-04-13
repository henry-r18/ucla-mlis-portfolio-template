<template>
  <!-- This view uses the PDFViewer component (which in turn uses the PDF.js web PDF viewer)
  to render important PDFs you want to feature on your portfolio,
  in this case your issue paper.-->
  <main id="main">
    <div class="container">
      <h1 class="title">Issue Paper</h1>
      <h2 class="subtitle">A short blurb about your issue paper</h2>
      <PDFViewer fileName="placeholder.pdf" title="Issue Paper" />
    </div>
  </main>
</template>

<script>
import PDFViewer from '@/components/PDFViewer.vue';

export default {
  name: 'IssuePaper',
  components: {
    PDFViewer
  }
}
</script>

<style>

</style>