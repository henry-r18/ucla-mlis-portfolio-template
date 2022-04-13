<template>
    <!-- This is the main Vue app with navigational elements and the router outlet.
    The skip-links anchor allows site visitors using screen readers to skip past the navbar 
    so it doesn't repeat every time a new view loads. The nav elements should be tab-navigable,
    and are set up to link to all the required portfolio components, as configured in the router index file.
    The first element in the navbar is a logo placeholder. Update however you like.
    The Bulma navbar-burger class is intended for mobile devices,
    and uses the toggleNav() method to provide a mobile-friendly nav menu.
    The footer contains links to the template's license and to the accessibility statement view.-->
    <ul class="skip-links">
        <li>
            <a href="#main" ref="skipLink">Skip to main content</a>
        </li>
    </ul>

    <section class="hero is-fullheight">

        <header class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <router-link to="/" class="navbar-item">
                            <img src="@/assets/img/logo_placeholder.png" alt="Site logo">
                        </router-link>
                        <span class="navbar-burger burger" data-target="navbarMenu" aria-label="menu" aria-expanded="false" role="button" @click="toggleNav($event)">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </span>
                    </div>
                    <div id="navbarMenu" class="navbar-menu">
                        <div class="navbar-end">
                            <router-link class="navbar-item" to="/">
                                Home
                            </router-link>

                            <router-link class="navbar-item" to="/issue-paper">
                                Issue Paper
                            </router-link>

                            <router-link class="navbar-item" to="/resume">
                                Resume
                            </router-link>

                            <router-link class="navbar-item has-dropdown is-hoverable" href="" aria-label="dropdown menu" role="button" to="">
                                <div class="navbar-link" tabindex="-1">
                                    Coursework & Academics
                                </div>

                                <div class="navbar-dropdown" tabindex="-1">
                                    <router-link class="navbar-item" to="/about">
                                        Professional development statement
                                    </router-link>

                                    <router-link class="navbar-item" to="/major-paper">
                                        Major paper
                                    </router-link>

                                    <router-link class="navbar-item" to="/other-work">
                                        Other work
                                    </router-link>

                                    <hr class="navbar-divider">

                                    <router-link class="navbar-item" to="/courses">
                                        Course list
                                    </router-link>

                                    <router-link class="navbar-item" to="/advising">
                                        Advising history
                                    </router-link>

                                    <hr class="navbar-divider">

                                    <router-link class="navbar-item" to="/accessibility">
                                        Accessibility statement
                                    </router-link>
                                </div>
                            </router-link>

                            
                        </div>
                    </div>
                </div>
            </nav>
        </header>

        <main id="main">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <router-view />
                </div>
            </div>
        </main>

        <footer class="hero-foot">
            <div class="container has-text-centered mb-2">
                Source licensed <a rel="license" href="LICENSE" target="_blank">MIT</a> | <router-link to="/accessibility">Accessibility statement</router-link>
            </div>
        </footer>

    </section>
    
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.skip-links {
  white-space: nowrap;
  margin: 1em auto;
  top: 0;
  position: fixed;
  left: 50%;
  margin-left: -72px;
  opacity: 0;
}

.skip-links:focus {
  opacity: 1;
  background-color: white;
  padding: 0.5em;
  border: 1px solid black;
}
</style>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        toggleNav(event) {
            // Get the target from the "data-target" attribute
            const target = event.target.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            event.target.classList.toggle('is-active');
            $target.classList.toggle('is-active');
        }
    },
    watch: {
    $route() {
      this.$refs.skipLink.focus();
    }
  }
}
</script>