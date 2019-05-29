<template>
  <div id="app">
    <ul class="navagationMenu">
      <li>
        <!-- use router-link component for navigation. -->
        <!-- specify the link by passing the `to` prop. -->
        <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
        <router-link to="/Introduction">Introductie</router-link>
      </li>
      <li>
        <router-link to="/Tekening">Tekening maken</router-link>
      </li>
      <li class="contact">
        <router-link to="/Contact">Contact</router-link>
      </li>
    </ul>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style>
#app {
  position:fixed;
  padding:0;
  margin:0;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navagationMenu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

.navagationMenu li {
  float: left;
}

.navagationMenu a{
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
.navagationMenu a:hover {
  background-color: #111;
}

.contact{
  float: right !important;
}
</style>
