<template>
  <!-- This view uses the PDFViewer component (which in turn uses the PDF.js web PDF viewer)
  to render important PDFs you want to feature on your portfolio,
  in this case your resume.-->
  <main id="main">
    <div class="container">
      <h1 class="title">Resume</h1>
      <h2 class="subtitle">Your most recent professional resume</h2>
      <PDFViewer fileName="placeholder.pdf" title="Resume" />
    </div>
  </main>
</template>

<script>
import PDFViewer from '@/components/PDFViewer.vue';

export default {
  name: 'Resume',
  components: {
    PDFViewer
  }
}
</script>

<style>

</style>