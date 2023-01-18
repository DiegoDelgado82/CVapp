var originalImage = null;
var grayImage = null;
var redImage = null;
var windowImage=null;
var canvas = document.getElementById("miCanvas");
var imagenPrueba=document.getElementById("imagenPrueba")

function generarPDF(){

    var elemento = document.querySelector('#principal');
    
    var str1 = "Curriculum Vitae-";
    var res = str1.concat(document.getElementById("nombre").value); 
    


  var opt = {
  margin:       1,
  filename:     res,
  image:        { type: 'jpeg', quality: 0.98 },
  html2canvas:  { scale: 2 },
  jsPDF:        { unit: 'cm', format: 'letter', orientation: 'portrait' }
};



html2pdf().set(opt).from(elemento).save();

  
}


function loadImage() {
    alert (document.getElementById("x").value)
    var file = document.getElementById("x");
    originalImage = new SimpleImage(file);
    grayImage = new SimpleImage(file);
    redImage = new SimpleImage(file);
    windowImage= new SimpleImage(file);
    originalImage.drawTo(canvas);  
    imagenPrueba.src=file
    
  }
  



function cargarDatos(element1, element2)
{
  document.getElementById(element1).textContent=document.getElementById(element2).value
  
}























