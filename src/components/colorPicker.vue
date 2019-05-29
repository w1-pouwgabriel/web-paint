<template>
    <div id="drawColorHolder">
        <h3 class="drawColorHolderTitle">
            Color picker
        </h3>
        <fieldset>
            <label for="r">R</label>
            <input type="range" min="0" max="255" id="r" step="1" value="0">
            <output for="r" id="r_out">0</output>
        </fieldset>  

        <fieldset>
            <label for="g">G</label>
            <input type="range" min="0" max="255" id="g" step="1" value="0">
            <output for="g" id="g_out">0</output>
        </fieldset>

        <fieldset>
            <label for="b">B</label>
            <input type="range" min="0" max="255" id="b" step="1" value="0">
            <output for="b" id="b_out">0</output>
        </fieldset>  

        <output id="hexColorCode">#000000</output>
        <output id="hexColor"></output>
    </div>
</template>
    
<script>
  /* eslint-disable */ 
  export default {
    data: () => ({
      name: "colorPicker"
    }),
    mounted() {
        let openCP = document.getElementById("colorPicker");
        let r = document.getElementById('r');
        let g = document.getElementById('g');
        let b = document.getElementById('b');
        let r_out = document.getElementById('r_out');
        let g_out = document.getElementById('g_out');
        let b_out = document.getElementById('b_out');
        let hex_code = document.getElementById('hexColorCode');
        let hex_color = document.getElementById('hexColor');
        hex_color.style.backgroundColor = '#000000';

        r.addEventListener('change', function() {
            setColor();
            r_out.value = r.value;
        }, false);

        r.addEventListener('input', function() {
            setColor();
            r_out.value = r.value;
        }, false);

        g.addEventListener('change', function() {
            setColor();
            g_out.value = g.value;
        }, false);

        g.addEventListener('input', function() {
            setColor();
            g_out.value = g.value;
        }, false);

        b.addEventListener('change', function() {
            setColor();
            b_out.value = b.value;
        }, false);

        b.addEventListener('input', function() {
            setColor();
            b_out.value = b.value;
        }, false);

        function setColor(){
            var r_hex = parseInt(r.value, 10).toString(16),
                g_hex = parseInt(g.value, 10).toString(16),
                b_hex = parseInt(b.value, 10).toString(16),
                hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
            hex_code.textContent = hex;
            hex_color.style.backgroundColor = hex;
            return hex;
        }

        function pad(n){
            return (n.length<2) ? "0"+n : n;
        }

        function render(){
            setColor();
            requestAnimationFrame(render);
        }
    },
    methods: {

    }
  }
</script>
<style>
    @import url(https://fonts.googleapis.com/css?family=Roboto:700);
    fieldset{
    border: none;
    }
    /* Change the link color to #111 (black) on hover */
    .drawOptions a:hover {
    background-color: #111;
    cursor: pointer;
    }
    #drawColorHolder{
    position: absolute; 
    background-color: antiquewhite;
    padding: 5px 5px 20px 5px;
    }
    .drawColorHolderTitle{
    text-align: center;
    }
    output{
    display: inline-block;
    width: 50px;
    }
    label, output{
    padding: 2px 9px;
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;
    color: #000;
    font-size: 1.1em;
    }
    label[for=r], output[for=r]{
    background-color: #f00;
    }
    label[for=g], output[for=g]{
    background-color: #0f0;
    }
    label[for=b], output[for=b]{
    background-color: #00f;
    }
    #hexColorCode{
    display: block;
    min-width: 4.5em;
    font-size: 3em;
    }
    #hexColor{
    display: block;
    height: 40px;
    width: 200px;
    margin-top: 5px;
    margin-left: auto;
    margin-right: auto;
    }
</style>