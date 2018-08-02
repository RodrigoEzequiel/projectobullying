(function() {
  'use strict';

  window.addEventListener('load', function() {

    cargarBarrios();

    var formulario = document.querySelector('.needs-validation');
    
    formulario.addEventListener('submit',
      function(event) {
        event.preventDefault();
        event.stopPropagation();
        if (formularioEsValido(formulario)) {
          enviarDenuncia();
        }
      }, false);
    }, false);
  
  function cargarBarrios () {
    const barrios = [
      "Agronomía"
      ,"Almagro"
      ,"Balvanera"
      ,"Barracas"
      ,"Belgrano"
      ,"Boedo"
      ,"Caballito"
      ,"Chacarita"
      ,"Coghlan"
      ,"Colegiales"
      ,"Constitución"
      ,"Flores"
      ,"Floresta"
      ,"La Boca"
      ,"La Paternal"
      ,"Liniers"
      ,"Mataderos"
      ,"Monte Castro"
      ,"Monserrat"
      ,"Nueva Pompeya"
      ,"Núñez"
      ,"Palermo"
      ,"Parque Avellaneda"
      ,"Parque Chacabuco"
      ,"Parque Chas"
      ,"Parque Patricios"
      ,"Puerto Madero"
      ,"Recoleta"
      ,"Retiro"
      ,"Saavedra"
      ,"San Cristóbal"
      ,"San Nicolás"
      ,"San Telmo"
      ,"Vélez Sársfield"
      ,"Versalles"
      ,"Villa Crespo"
      ,"Villa del Parque"
      ,"Villa Devoto"
      ,"Villa General Mitre"
      ,"Villa Lugano"
      ,"Villa Luro"
      ,"Villa Ortúzar"
      ,"Villa Pueyrredón"
      ,"Villa Real"
      ,"Villa Riachuelo"
      ,"Villa Santa Rita"
      ,"Villa Soldati"
      ,"Villa Urquiza"
    ];

    barrios.sort();

    let select = document.querySelector("#barrios");

    for (let barrio of barrios) {
      let option = document.createElement("option");
      option.text = barrio;
      option.value = barrio;
      select.appendChild(option);
    }
  }
  
})();

formulario.classList.add('was-validated');


function formularioEsValido(formulario) {
  let esValido ;
  let Formulario = false;
    if(Formulario == true) {
    esValido = true;
  }else {
   esValido = false ; 
  }
}

//formularioEsValido();


//let esValido ;
//let Formulario = false;
//  if(Formulario == true) {
//    esValido = true;
//  }else {
//    esValido = false ; 
//  }
//console.log(esValido);
//console.log(Formulario);


//let obtenerCampos 
//let nombre = "rodrigo ezequiel" 
//  console.log("nombres:" + " " +nombre);
//let apellido = "delascio"  
//  console.log("apellido:" + " " +apellido);


//clase 
//let resultado = esValido || Formulario;

//esValido = false;
//Formulario = false;
//resultado = esValido || Formulario


  // mostrar por consola el valor de los campos:
  // Nombre, Apellido, Contacto y Mensaje
