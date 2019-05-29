<template>
  <div class="hello">
    <div class="bgText">
      <h1>Introductie</h1>
      <p>On this website you can create you're own drawing</p>
      <p>After drawing a amazing image you can download the image via the download button</p><br>
      <p>Please not hack :D</p>
    </div>
    <div class="bgImage"></div>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body, html {
  height: 100%;
  overflow-y: hidden;
}

* {
  box-sizing: border-box;
}

.bgImage{
  background-image: url("../photos/introductionPage.jpeg");

  /* Add the blur effect */
  filter: blur(8px);
  -webkit-filter: blur(8px);

  /* Full height */
  height: 100vh; 

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* Position text in the middle of the page/image */
.bgText{
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 80%;
  padding: 20px;
  text-align: center;
}
</style>
