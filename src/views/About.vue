<template>
  <!-- Use this view as an About page to include your Professional Development Statement
  and any other information you want to include about yourself and your portfolio.
  Replace the placeholder image with a portrait of yourself or some other image. -->
  <main id="main">
    <div class="columns is-desktop">
      <div class="column is-3">
        <picture class="image m-1">
          <img
            class="is-rounded"
            src="@/assets/img/portrait_placeholder.jpeg"
            alt=""
          />
        </picture>
      </div>

      <div class="column is-9">
        <article class="box content is-medium">
          <h1>Professional Development Statement</h1>
          <hr />
          <div class="scrollable" id="about-content">
            <h2>Subheading One</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur libero id faucibus nisl tincidunt eget nullam non. Non sodales neque sodales ut. Viverra tellus in hac habitasse platea dictumst vestibulum. Sapien faucibus et molestie ac feugiat sed. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Consequat mauris nunc congue nisi vitae. Dignissim suspendisse in est ante in nibh mauris cursus mattis. In mollis nunc sed id semper risus in. Eu ultrices vitae auctor eu augue ut lectus arcu. Imperdiet sed euismod nisi porta lorem mollis aliquam ut. Mauris rhoncus aenean vel elit scelerisque mauris. Enim tortor at auctor urna nunc id.
            </p>

            <h2>Subheading Two</h2>
            <p>
              Lorem donec massa sapien faucibus et molestie ac feugiat. Quis lectus nulla at volutpat. Feugiat nisl pretium fusce id. Blandit volutpat maecenas volutpat blandit aliquam etiam erat. A condimentum vitae sapien pellentesque habitant. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Sagittis purus sit amet volutpat consequat mauris nunc. Volutpat ac tincidunt vitae semper quis lectus nulla. Viverra nam libero justo laoreet sit amet cursus sit. Lectus arcu bibendum at varius vel pharetra vel turpis. Enim nec dui nunc mattis enim ut tellus. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Vivamus at augue eget arcu dictum. Sed sed risus pretium quam.
            </p>

            <h2>Subheading Three</h2>
            <p>
              Quam quisque id diam vel quam elementum pulvinar etiam non. In ante metus dictum at tempor commodo. Quis commodo odio aenean sed adipiscing diam donec adipiscing. Et netus et malesuada fames ac turpis. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. At augue eget arcu dictum varius duis at consectetur. Dolor morbi non arcu risus quis varius quam quisque id. Integer feugiat scelerisque varius morbi. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.
            </p>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>

<style scoped>
.scrollable {
  height: 75vh;
  overflow: auto;
  text-align: left;
  border: 1px lightgray;
}
h1 {
  text-align: left;
}
@media screen and (max-width: 768px) {
  img {
    margin: auto;
    max-width: 66%;
  }
}
</style>
