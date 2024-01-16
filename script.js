document.addEventListener("DOMContentLoaded", function () {
  // Definir un objeto con los datos de los países
  var datosPaises = {
    Mexico: {
      nombre: "México",
      capital: "Ciudad de México",
      superficie: "1,964,375 km²",
      poblacion: "128.5 M",
      idiomas: "Español",
      moneda: "Peso Mexicano",
      pib: "11,099 USD",
      miembro: "2001",
    },
    Honduras: {
      nombre: "Honduras",
      capital: "Tegucigalpa",
      superficie: "112,490 km²",
      poblacion: "11 M",
      idiomas: "Español",
      moneda: "Lempira",
      pib: "3,039 USD",
      miembro: "2001",
    },
    Guatemala: {
      nombre: "Guatemala",
      capital: "Ciudad de Guatemala",
      superficie: "108,890 km²",
      poblacion: "18 M",
      idiomas: "Español",
      moneda: "Quetzal",
      pib: "5,360 USD",
      miembro: "2001",
    },
    Nicaragua: {
      nombre: "Nicaragua",
      capital: "Managua",
      superficie: "130,370 km²",
      poblacion: "7 M",
      idiomas: "Español",
      moneda: "Córdoba",
      pib: "2,261 USD",
      miembro: "2001",
    },
    CostaRica: {
      nombre: "Costa Rica",
      capital: "San José",
      superficie: "51,100 km²",
      poblacion: "5 M",
      idiomas: "Español",
      moneda: "Colón",
      pib: "13,603 USD",
      miembro: "2001",
    },
    Panama: {
      nombre: "Panamá",
      capital: "Ciudad de Panamá",
      superficie: "75,320 km²",
      poblacion: "4 M",
      idiomas: "Español",
      moneda: "Balboa",
      pib: "17,358 USD",
      miembro: "2001",
    },
    Colombia: {
      nombre: "Colombia",
      capital: "Bogotá",
      superficie: "1,140,619 km²",
      poblacion: "52 M",
      idiomas: "Español",
      moneda: "Peso Colombiano",
      pib: "6,643 USD",
      miembro: "2009",
    },
    ElSalvador: {
      nombre: "El Salvador",
      capital: "San Salvador",
      superficie: "21,040 km²",
      poblacion: "6 M",
      idiomas: "Español",
      moneda: "Dólar Estadounidense",
      pib: "5,127 USD",
      miembro: "2001",
    },
    RepublicaDominicana: {
      nombre: "República Dominicana",
      capital: "Santo Domingo",
      superficie: "48,198 km²",
      poblacion: "11 M",
      idiomas: "Español",
      moneda: "Peso Dominicano",
      pib: "10,119 USD",
      miembro: "2009",
    },
    Belice: {
      nombre: "Belize",
      capital: "Belmopán",
      superficie: "22,970 km²",
      poblacion: "0.4 M",
      idiomas: "Español",
      moneda: "Dólar Beliceño",
      pib: "7,337 USD",
      miembro: "2001",
    },
  };

  // Obtener el contenedor de información y el mapa
  var contenedorInformacion = document.getElementById("contenedor_informacion");
  var vectorMapa = document.getElementById("vector_mapa");

  // Asociar un evento de clic a cada país en el mapa
  vectorMapa.querySelectorAll(".pais").forEach(function (pais) {
    pais.addEventListener("click", function () {
      // Obtener el ID del país seleccionado
      var idPais = pais.id;

      // Llamar a la función para actualizar la información
      actualizarInformacionPais(idPais);
    });
  });

  // Función para actualizar la información del país seleccionado
  function actualizarInformacionPais(idPais) {
    // Obtener los datos del país según su ID
    var datosPais = datosPaises[idPais];

    // Verificar si se encontraron datos para el país
    if (datosPais) {
      // Actualizar la información en la interfaz
      document.getElementById("nombre_pais").textContent = datosPais.nombre;
      document.getElementById("dato_capital").textContent = datosPais.capital;
      document.getElementById("dato_superficie").textContent = datosPais.superficie;
      document.getElementById("dato_poblacion").textContent = datosPais.poblacion;
      document.getElementById("dato_idiomas").textContent = datosPais.idiomas;
      document.getElementById("dato_moneda").textContent = datosPais.moneda;
      document.getElementById("dato_pib").textContent = datosPais.pib;
      document.getElementById("dato_miembro").textContent = datosPais.miembro;
    } else {
      console.error("No se encontraron datos para el país con ID: " + idPais);
    }
  }
});