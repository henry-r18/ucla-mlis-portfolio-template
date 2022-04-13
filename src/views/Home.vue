<template>
  <!-- This view is for a home page with pretty pictures and a button to your About page.
  This view will be the default route for your app.
  All the placeholder images are in the public domain from @https://wordpress.org/openverse/
  Replace with images you like. A more modern format than JPEG is preferred, such as WebP.
  Will look nice with images cropped to 4 by 3 aspect ratio.
  Be sure to change alt text for the images.-->
  <div class="columns is-vcentered is-mobile">
    <div class="column is-5">
      <div class="tile is-ancestor">
        <div class="tile is-parent is-vertical">
          <div class="tile is-child">
            <picture class="image m-1 is-4by3">
              <img
                src="@/assets/img/placeholder_1.jpeg"
                alt="Alt text 1."
              />
            </picture>
          </div>
          <div class="tile is-child">
            <picture class="image m-1 is-4by3">
              <img
                src="@/assets/img/placeholder_2.jpeg"
                alt="Alt text 2."
              />
            </picture>
          </div>
        </div>
        <div class="tile is-parent is-vertical">
          <div class="tile is-child">
            <picture class="image m-1 is-4by3">
              <img
                src="@/assets/img/placeholder_3.jpeg"
                alt="Alt text 3."
              />
            </picture>
          </div>
          <div class="tile is-child">
            <picture class="image m-1 is-4by3">
              <img
                src="@/assets/img/placeholder_4.jpeg"
                alt="Alt text 4."
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-6 is-offset-1">
      <h1 class="title is-2">Your Name</h1>
      <h2 class="subtitle is-4">
        UCLA Dept of Information Studies | MLIS Portfolio
      </h2>
      <br />
      <p class="has-text-centered">
        <router-link to="/about" class="button is-large is-info is-outlined" role="button">
          About
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
