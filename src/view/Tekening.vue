<template>
  <div class="hello">
    <h1>Tekening maken</h1>
    <button id="download">
      Download drawing <i class="fas fa-download"></i>
    </button>
    <colorPicker></colorPicker>
    <drawRadius></drawRadius>
    <div class="drawOptions">
      <p>Draw options &darr;</p>
      <div class="drawOptionsContent">
        <div id="bucket">
          <span>Bucket </span><i class="fas fa-fill"></i>
          <!-- BUCKET IS INACTIVE -->
        </div>
        <div id="pencil">
          <span>Pencil </span><i class="fas fa-pencil-alt"></i>
        </div>
        <div id="eraser">
          <span>Eraser </span><i class="fas fa-eraser"></i>
        </div>
      </div>
    </div>
    <canvas id="canvas" width="1920px" height="1000px"></canvas>
  </div>
</template>

<script>
  import colorPicker from '../components/colorPicker.vue'
  import drawRadius from '../components/drawRadius.vue'
  /* eslint-disable */
  export default {
    data: () => ({
      name: "Tekening"
    }),
    mounted() {
      let c = document.getElementById('canvas');
      let ctx = c.getContext('2d');
      let w = '1920', h = '1000';
      let clickX;
      let clickY;
      let clickDrag = new Array();
      let oldPosition = [];
      let paint = false;
      let drawColor = "#000000";
      let downloadButton = document.getElementById('download');
      let bucket = document.getElementById('bucket');
      let pencil = document.getElementById('pencil');
      let eraser = document.getElementById('eraser');
      let drawRadius = 5;
      let isBucket = false;
      let isPencil = true;
      let isEraser = false;
      ctx.canvas.style.backgroundColor = '#D3D3D3';

      function mousemove(){
        c.addEventListener("mousemove", (event) => {
          drawRadius = document.getElementById('drawRadius_out').value;
          if(isPencil == true){
            drawColor = document.getElementById("hexColorCode").textContent;
          }
          if(paint == true){
            if(oldPosition !== []){
              draw(event.x - c.offsetLeft, event.y - c.offsetTop, true);
            }
            oldPosition = [event.x - c.offsetLeft, event.y - c.offsetTop];
          }
        },false)
      }

      function mousedown(){
        c.addEventListener("mousedown", (event) => {
          let clickX = event.x - c.offsetLeft;
          let clickY = event.y - c.offsetTop;
          paint = true;
        },false)
      }

      function mouseup(){
        c.addEventListener("mouseup", (event) => {
          paint = false;
          oldPosition = [];
        })
      }

      function drawListener(){
        bucket.addEventListener("click", (event) => {
          isBucket = true;
          isPencil = false;
          isEraser = false;
        });
        pencil.addEventListener("click", (event) => {
          isBucket = false;
          isPencil = true;
          isEraser = false;
        });
        eraser.addEventListener("click", (event) =>{
          isBucket = false;
          isPencil = false;
          isEraser = true;
          drawColor = "#D3D3D3";
        });
      }
      
      function draw(X, Y, Dragging){
        ctx.beginPath();
        ctx.lineJoin = "round";
        ctx.lineWidth = drawRadius; //Moet je per lijn kunnen aanpassen
        ctx.moveTo(oldPosition[0], oldPosition[1]); //Last position
        ctx.lineTo(X, Y); //New position
        ctx.strokeStyle = drawColor; //Moet je per lijn kunnen aanpassen
        ctx.stroke();
      }

      // function getBackgroundColor(x, y){
      //   let r = ctx.getImageData(x, y, 1, 1).data[0];
      //   let g = ctx.getImageData(x, y, 1, 1).data[1];
      //   let b = ctx.getImageData(x, y, 1, 1).data[2];
      //   let a = ctx.getImageData(x, y, 1, 1).data[3];
      //   return [r,g,b,a];
      // }

      // function setBackgroundColor(x, y, nieuweKleur){
      //   var imageData = ctx.getImageData(x, y, 1, 1);
      //   imageData.data[0] = nieuweKleur[0];
      //   imageData.data[1] = nieuweKleur[1];
      //   imageData.data[2] = nieuweKleur[2];
      //   imageData.data[3] = nieuweKleur[3];
      //   // console.log("Working on pixel x: " + x + " y: " + y);
      //   ctx.putImageData(imageData, x, y);
      // }

      // https://nl.wikipedia.org/wiki/Floodfill-algoritme
      // Kijk naar deze link voor een emmer idee
      // Zodat je een tekening in 1 keer een bepaalde kleur kan maken
      // function floodfill(x, y){
      //   let r = document.getElementById('r_out').textContent;
      //   let g = document.getElementById('g_out').textContent;
      //   let b = document.getElementById('b_out').textContent;
      //   let nieuweKleur = [r,g,b,255];
      //   let oudeKleur = getBackgroundColor(x, y);
      //   console.log(getBackgroundColor(x, y).toString(), nieuweKleur.toString())
      //   if (getBackgroundColor(x, y).toString() != nieuweKleur.toString()){
      //       setBackgroundColor(x, y, nieuweKleur);
      //       floodfill(x, y + 1);
      //       floodfill(x, y - 1);
      //       floodfill(x + 1, y);
      //       floodfill(x - 1, y);
      //   }
      // }

      function downloadDrawing(){
        download.addEventListener("click", (event)=> {
          var link = document.createElement('a');
          link.download = "Drawing";
          link.href = document.getElementById('canvas').toDataURL("application/octet-stream")
          link.click();
        },false)
      }

      function render(){
        mousedown();
        mousemove();
        mouseup();
        drawListener();
        requestAnimationFrame(render);
      }
      downloadDrawing();
      render();
    },
    methods: {
      
    },
    components: {
      colorPicker,
      drawRadius
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.drawOptions{
  position: absolute;
  display: inline-block;
  background-color: #4542f4;
  color: white;
  padding: 0px 10px 0px 10px; 
  left: 10px;
  top: 463px;
}
.drawOptionsContent{
  display: none;
  position: fixed;
  color: black;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}
.drawOptions:hover .drawOptionsContent{
  display: block;
}
.drawOptions:hover{
  background-color: #1d15f2;
  cursor: pointer;
}
#bucket #pencil{
  padding: 10px;
}
.fas{
  display: inline;
}
#download{
  width: 180px;
  height: 40px;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
  background-color: grey;
  color: white;
  right: 0px;
  position: absolute;
}
#download:hover{
  color: grey;
  background-color: white;
  cursor: pointer;
}
</style>