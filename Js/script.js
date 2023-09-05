
function mostrarDatos() {
     vapellido = document.getElementById("apellido").value;
     vnombre = document.getElementById("nombre").value;
     vdni = document.getElementById("dni").value;
     vfechaNacimiento = document.getElementById("fecha_nacimiento").value;
     vdomicilio = document.getElementById("domicilio").value;
     vlocalidad = document.getElementById("localidad").value;
    // Seleccionando los Range
     vrange1=obtenerNivel(document.getElementById("range1").value);
     vrange2=obtenerNivel(document.getElementById("range2").value);
     vrange3=obtenerNivel(document.getElementById("range3").value);
     vrange4=obtenerNivel(document.getElementById("range4").value);
    // seleccionado los checkbox
    vcheckbox1=document.getElementById("check1").checked ? "SI" : "NO;"
    vcheckbox2=document.getElementById("check2").checked ? "SI" : "NO;"
    vcheckbox3=document.getElementById("check3").checked ? "SI" : "NO;"
    vcheckbox4=document.getElementById("check4").checked ? "SI" : "NO;"
   
    document.write("Apellido: " + vapellido + "<br>");
    document.write("Nombre: " + vnombre + "<br>");
    document.write("DNI: " + vdni + "<br>");
    document.write("Fecha de Nacimiento: " + vfechaNacimiento + "<br>");
    document.write("Domicilio: " + vdomicilio + "<br>");
    document.write("Localidad: " + vlocalidad + "<br>");
    document.write("Su nivel de idiomas es : <br/>")
    document.write("Español "+vcheckbox1+ "  y posee un nivel :"+  vrange1+ "<br/>")
    document.write("Ingles "+vcheckbox2+ " y posee un nivel :"+  vrange2+ "<br/>")
    document.write("Frances "+vcheckbox3+ "  y posee un nivel :"+  vrange3+ "<br/>")
    document.write("Chino "+vcheckbox4+ "  y posee un nivel :"+  vrange4+ "<br/>")

function obtenerNivel(valor){
    if (valor<=25){
    return "Basico";
    } else if(valor<=50){
        return "Intermedio";
    }else if (valor<=75){
        return"Avanzado";
    }else{
        return "Experto";
    }   
  }
}
