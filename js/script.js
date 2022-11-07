function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function registrarse(){
  var r = document.getElementById("formulario");
  if (r.className === "formulario"){
    r.className += " registrarse";
  }
  else{
    r.className = "formulario"
  }
}
