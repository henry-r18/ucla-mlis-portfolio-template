<template>
  <!-- This view makes use of the Bulma Timeline add-on component
  to give a nice timeline presentation of your advising history. -->
  <main id="main">
    <h1 class="title">Advising History</h1>
    <hr />
    <section class="section">
      <h2 class="title">Academic Advising</h2>
      <h3 class="subtitle">
        Timeline of meetings with your academic advisor
      </h3>

      <div class="timeline is-centered">
        <header class="timeline-header">
          <span class="tag is-medium is-info">2020</span>
        </header>

        <div class="timeline-item is-info">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <p class="heading">September 30, 2020</p>
            <p>First meeting</p>
          </div>
        </div>

        <div class="timeline-item is-info">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <p class="heading">November 17, 2020</p>
            <p>Second meeting</p>
          </div>
        </div>

        <header class="timeline-header">
          <span class="tag is-medium is-info">2021</span>
        </header>

        <div class="timeline-item is-info">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <p class="heading">January 28, 2021</p>
            <p>Third meeting</p>
          </div>
        </div>

        <div class="timeline-item is-info">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <p class="heading">October 1, 2021</p>
            <p>Fourth meeting</p>
          </div>
        </div>

        <div class="timeline-item is-info">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <p class="heading">November 1, 2021</p>
            <p>
              Fifth meeting
            </p>
          </div>
        </div>

        <header class="timeline-header">
          <span class="tag is-medium is-info">2022</span>
        </header>

        <div class="timeline-item is-info">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <p class="heading">March 23, 2022</p>
            <p>Sixth meeting</p>
          </div>
        </div>

        <header class="timeline-header">
          <span class="tag is-medium is-info">Grad!</span>
        </header>
      </div>
    </section>
  </main>
</template>

<script>
export default {

};
</script>

<style scoped>
</style>