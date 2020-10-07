function calculo() {
    var valor=document.getElementById("numero").value;
    var dv=document.getElementById("into");

    //  if(valor>=18){
    //      dv.innerHTML="<p class='pclass'>regresa  a las 12 pero para las 5am </p>";
    //  }
    //  else{
    //      dv.innerHTML="No tienes permiso para salir";
    //  }
    var arreglo=valor.split(" ");
    console.log(arreglo);
  
}

function reload() {
    setTimeout(function () {
        location.href='https://www.google.com.mx/';
    },3000);
}

function addclass() {
    var vd=document.getElementById("change");
    vd.classList.add("dclass");
}
function removeClass() {
    var vd=document.getElementById("change");
    vd.classList.remove("dclass");
}