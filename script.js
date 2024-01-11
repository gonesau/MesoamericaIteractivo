document.addEventListener("DOMContentLoaded", function () {
    var selectedPais = null;
    var originalInformacion = {
      tittle_seleccion: "Mesoamerica en Cifras",
      datos_superficie: { display: "block", content: "3,675,372 km²" },
      datos_poblacion: { display: "block", content: "244 M" },
      datos_biodiversidad: { display: "block", content: "10% del planeta" },
      datos_areas: { display: "block", content: "20% de la región" },
      datos_pib: { display: "none", content: "" }
    };
  
    let tittle_seleccion = document.getElementById("title_seleccion");
    let datos_superficie = document.getElementById("datos_superficie");
    let datos_poblacion = document.getElementById("datos_poblacion");
    let datos_biodiversidad = document.getElementById("datos_biodiversidad");
    let datos_areas = document.getElementById("datos_areas");
    let datos_pib = document.getElementById("datos_pib");
  
    // Ocultar inicialmente el bloque de PIB
    datos_pib.style.display = "none";
  
    function toggleSelection(pais) {
      if (selectedPais === pais) {
        // Deseleccionar el país
        selectedPais.classList.remove("selected");
        selectedPais = null;
        resetInformacion();
      } else {
        // Seleccionar el país
        if (selectedPais) {
          selectedPais.classList.remove("selected");
        }
        selectedPais = pais;
        selectedPais.classList.add("selected");
        updateInformacion(selectedPais.id);
      }
    }
  
    function resetInformacion() {
      datos_pib.style.display = "none";
      tittle_seleccion.textContent = originalInformacion.tittle_seleccion;
      datos_superficie.style.display = originalInformacion.datos_superficie.display;
      datos_poblacion.style.display = originalInformacion.datos_poblacion.display;
      datos_biodiversidad.style.display = originalInformacion.datos_biodiversidad.display;
      datos_areas.style.display = originalInformacion.datos_areas.display;
      datos_pib.style.display = "none";
  
      datos_superficie.querySelector("#dato_superficie").textContent = originalInformacion.datos_superficie.content;
      datos_poblacion.querySelector("#dato_poblacion").textContent = originalInformacion.datos_poblacion.content;
      datos_biodiversidad.querySelector("#dato_biodiversidad").textContent = originalInformacion.datos_biodiversidad.content;
      datos_areas.querySelector("#dato_areas").textContent = originalInformacion.datos_areas.content;
      datos_pib.querySelector("#dato_pib").textContent = originalInformacion.datos_pib.content;
  
      // Restaurar estilos CSS
      resetStyles();
    }
  
    function resetStyles() {
      // Restaurar estilos CSS a su valor predeterminado
      let datosItems = document.querySelectorAll(".datos");
      datosItems.forEach(function (item) {
        item.style.display = "flex"; // Hacer que .datos utilice flexbox
        item.style.marginBottom = "10px";
        item.style.marginLeft = "0"; // Ajustar el margen izquierdo a cero
        item.style.textAlign = "left"; // Alinear a la izquierda
        item.style.alignItems = "center";
        datos_pib.style.display = "none";
      });
    }
    function updateInformacion(paisId) {
        
      switch (paisId) {
        case "Guatemala":
          tittle_seleccion.textContent = "Guatemala";
          datos_superficie.style.display = "block";
          datos_poblacion.style.display = "block";
          datos_biodiversidad.style.display = "none";
          datos_areas.style.display = "none";
          datos_pib.style.display = "block";
          datos_superficie.querySelector("#dato_superficie").textContent = "108,890 km²";
          datos_poblacion.querySelector("#dato_poblacion").textContent = "18 M";
          datos_pib.querySelector("#dato_pib").textContent = "USD 5,360";
          break;
        case "Honduras":
          tittle_seleccion.textContent = "Honduras";
          datos_superficie.style.display = "block";
          datos_poblacion.style.display = "block";
          datos_biodiversidad.style.display = "none";
          datos_areas.style.display = "none";
          datos_pib.style.display = "block";
          datos_superficie.querySelector("#dato_superficie").textContent = "112,490 km²";
          datos_poblacion.querySelector("#dato_poblacion").textContent = "11 M";
          datos_pib.querySelector("#dato_pib").textContent = "USD 3,039";
          break;
        case "El Salvador":
            tittle_seleccion.textContent = "El Salvador";
            datos_superficie.style.display = "block";
            datos_poblacion.style.display = "block";
            datos_biodiversidad.style.display = "none";
            datos_areas.style.display = "none";
            datos_pib.style.display = "block";
            datos_superficie.querySelector("#dato_superficie").textContent = "21,040 km²";
            datos_poblacion.querySelector("#dato_poblacion").textContent = "6 M";
            datos_pib.querySelector("#dato_pib").textContent = "USD 5,127";
            break;
        case "Nicaragua":
            tittle_seleccion.textContent = "Nicaragua";
            datos_superficie.style.display = "block";
            datos_poblacion.style.display = "block";
            datos_biodiversidad.style.display = "none";
            datos_areas.style.display = "none";
            datos_pib.style.display = "block";
            datos_superficie.querySelector("#dato_superficie").textContent = "130,370 km²";
            datos_poblacion.querySelector("#dato_poblacion").textContent = "7 M";
            datos_pib.querySelector("#dato_pib").textContent = "USD 2,261";
            break;
        case "Costa Rica":
            tittle_seleccion.textContent = "Costa Rica";
            datos_superficie.style.display = "block";
            datos_poblacion.style.display = "block";
            datos_biodiversidad.style.display = "none";
            datos_areas.style.display = "none";
            datos_pib.style.display = "block";
            datos_superficie.querySelector("#dato_superficie").textContent = "51,100 km²";
            datos_poblacion.querySelector("#dato_poblacion").textContent = "5 M";
            datos_pib.querySelector("#dato_pib").textContent = "USD 13,603";
            break;
        case "Panama":
            tittle_seleccion.textContent = "Panama";
            datos_superficie.style.display = "block";
            datos_poblacion.style.display = "block";
            datos_biodiversidad.style.display = "none";
            datos_areas.style.display = "none";
            datos_pib.style.display = "block";
            datos_superficie.querySelector("#dato_superficie").textContent = "75,320 km²";
            datos_poblacion.querySelector("#dato_poblacion").textContent = "4 M";
            datos_pib.querySelector("#dato_pib").textContent = "USD 17,358";
            break;
        case "Mexico":
            tittle_seleccion.textContent = "Mexico";
            datos_superficie.style.display = "block";
            datos_poblacion.style.display = "block";
            datos_biodiversidad.style.display = "none";
            datos_areas.style.display = "none";
            datos_pib.style.display = "block";
            datos_superficie.querySelector("#dato_superficie").textContent = "1,964,375 km²";
            datos_poblacion.querySelector("#dato_poblacion").textContent = "128.5 M";
            datos_pib.querySelector("#dato_pib").textContent = "USD 11,099";
            break;
        case "Belize":
            tittle_seleccion.textContent = "Belize";
            datos_superficie.style.display = "block";
            datos_poblacion.style.display = "block";
            datos_biodiversidad.style.display = "none";
            datos_areas.style.display = "none";
            datos_pib.style.display = "block";
            datos_superficie.querySelector("#dato_superficie").textContent = "22,970 km²";
            datos_poblacion.querySelector("#dato_poblacion").textContent = "0.4 M";
            datos_pib.querySelector("#dato_pib").textContent = "USD 7,337";
            break;
        case "RepublicaDominicana":
            tittle_seleccion.textContent = "Republica Dominicana";
            datos_superficie.style.display = "block";
            datos_poblacion.style.display = "block";
            datos_biodiversidad.style.display = "none";
            datos_areas.style.display = "none";
            datos_pib.style.display = "block";
            datos_superficie.querySelector("#dato_superficie").textContent = "48,198 km²";
            datos_poblacion.querySelector("#dato_poblacion").textContent = "11 M";
            datos_pib.querySelector("#dato_pib").textContent = "USD 10,119";
            break;
        case "Colombia":
            tittle_seleccion.textContent = "Colombia";
            datos_superficie.style.display = "block";
            datos_poblacion.style.display = "block";
            datos_biodiversidad.style.display = "none";
            datos_areas.style.display = "none";
            datos_pib.style.display = "block";
            datos_superficie.querySelector("#dato_superficie").textContent = "1,140,619 km²";
            datos_poblacion.querySelector("#dato_poblacion").textContent = "52 M";
            datos_pib.querySelector("#dato_pib").textContent = "USD 6,643";
            break;
        default:
          resetInformacion();
      }
    }
  
    var paises = document.querySelectorAll(".pais");

    paises.forEach(function (pais) {
      pais.addEventListener("click", function () {
        toggleSelection(pais);
      });
    });
  });