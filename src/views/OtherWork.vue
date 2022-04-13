<template>
  <!-- This view includes some boxes for providing links to other work,
  such as term papers or group projects. The view uses icons from Font Awesome
  for a nice visual touch. Update the href attributes on the anchor tags
  with links to your work (e.g. in Google Drive).-->
  <main id="main">
    <div class="container">

      <h1 class="title">Other Work</h1>
      <h2 class="subtitle">Additional work samples</h2>

      <div class="tile is-ancestor is-6">
        <div class="tile is-parent is-vertical">
          <div class="tile is-child box">
            <p class="title is-size-6">Course Number and Title</p>
            <p class="subtitle is-size-6 mb-2">Term Paper</p>
            <font-awesome-icon icon="file-pen" size="5x"></font-awesome-icon>
            <p class="mt-2">
              <a class="has-text-dark" href="" rel="noopener noreferrer" target="_blank">View here
              <font-awesome-icon icon="up-right-from-square"></font-awesome-icon>
              </a>
            </p>
          </div>

          <div class="tile is-child box">
            <p class="title is-size-6">Course Number and Title</p>
            <p class="subtitle is-size-6 mb-2">Group Project</p>
            <font-awesome-icon icon="people-group" size="5x"></font-awesome-icon>
            <p class="mt-2">
              <a class="has-text-dark" href="" rel="external noopener noreferrer" target="_blank">View here
              <font-awesome-icon icon="up-right-from-square"></font-awesome-icon>
              </a>
            </p>
          </div>
        </div>

        <div class="tile is-parent is-vertical">
          <div class="tile is-child box">
            <p class="title is-size-6">Course Number and Title</p>
            <p class="subtitle is-size-6 mb-2">Term Paper</p>
            <font-awesome-icon icon="file-pen" size="5x"></font-awesome-icon>
            <p class="mt-2">
              <a class="has-text-dark" href="" rel="noopener noreferrer" target="_blank">View here
              <font-awesome-icon icon="up-right-from-square"></font-awesome-icon>
              </a>
            </p>
          </div>

          <div class="tile is-child box">
            <p class="title is-size-6">Course Number and Title</p>
            <p class="subtitle is-size-6 mb-2">Group Project</p>
            <font-awesome-icon icon="people-group" size="5x"></font-awesome-icon>
            <p class="mt-2">
              <a class="has-text-dark" href="" rel="external noopener noreferrer" target="_blank">View here
              <font-awesome-icon icon="up-right-from-square"></font-awesome-icon>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "OtherWork",
  components: {},
};
</script>

<style scoped>
.tile.is-ancestor {
  margin: auto;
}
.tile.is-child {
  transition: all .2s ease-in-out;
}
.tile.is-child:hover {
  transform: scale(1.1);
}
</style>