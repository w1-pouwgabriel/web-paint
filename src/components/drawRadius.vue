<template>
    <div class="drawRadiusHolder">
        <h3 class="drawRadiusHolderTitle">
            Draw radius
        </h3>
        <fieldset>
            <input type="range" min="0" max="50" id="drawRadius" step="1" value="5">
            <output for="drawRadius" id="drawRadius_out">5</output>
        </fieldset>
        <div id="showDrawRadius">

        </div>
    </div>
</template>
    
<script>
  /* eslint-disable */ 
  export default {
    data: () => ({
      name: "drawRadius"
    }),
    mounted() {
        let drawRadius = document.getElementById("drawRadius");
        let drawRadius_out = document.getElementById("drawRadius_out");
        let showDrawRadius = document.getElementById("showDrawRadius");

        drawRadius.addEventListener('change', function() {
            setData();
            drawRadius_out.value = drawRadius.value;
        }, false);

        drawRadius.addEventListener('input', function() {
            setData();
            drawRadius_out.value = drawRadius.value;
        }, false);

        function setData(){
            showDrawRadius.style.height = drawRadius.value + "px";
            showDrawRadius.style.width = drawRadius.value + "px";
        }

        function render(){
            setData();
            requestAnimationFrame(render);
        }
    },
    methods: {

    }
  }
</script>
<style>
    .drawRadiusHolder{
        position: absolute; 
        left: 270px;
        height: 180px;
        background-color: antiquewhite;
        padding: 5px 5px 20px 5px;
    }

    .drawRadiusHolderTitle{
        text-align: center;
    }

    #drawRadius_out{
        display: inline-block;
        padding: 2px 9px;
        border-radius: 100%;
        font-family: 'Roboto', sans-serif;
        color: #000;
        font-size: 1.1em;
    }

    #showDrawRadius{
        width: 5px;
        height: 5px;
        border-radius: 100%;
        background-color: black;
        margin-left: auto;
        margin-right: auto;
    }
</style>