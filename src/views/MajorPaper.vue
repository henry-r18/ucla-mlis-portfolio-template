<template>
  <!-- This view uses the PDFViewer component (which in turn uses the PDF.js web PDF viewer)
  to render important PDFs you want to feature on your portfolio,
  in this case your major paper.-->
  <main id="main">
    <div class="container">
      <h1 class="title">Major Paper</h1>
      <h2 class="subtitle">What class did your write your major paper for?</h2>
      <p class="has-text-left mb-4">A longer explanation of your major paper's context.</p>
      <PDFViewer fileName="placeholder.pdf" title="Major Paper"/>
    </div>
  </main>
</template>

<script>
import PDFViewer from '@/components/PDFViewer.vue';

export default {
  name: 'MajorPaper',
  components: {
    PDFViewer
  }
}
</script>

<style>

</style>