const { Router } = require("express");
//**  IMPORTO LOS HANDLERS **/
const {
  getCountries,
  getCountry,
  getCountryName,
} = require("../handlers/handlersCountries");
//* CREO LA RUTA COUNTRIES
const routeCountries = Router();

//*******************RUTAS***************************/

//! RUTA QUE HACE EL GET DE TODOS LOS PAISES
routeCountries.get("/", getCountries);

//! RUTA QUE HACE EL GET DE LOS PAISES QUE CONTENGAN LO ENVIADO EN SU NAME
routeCountries.get("/name", getCountryName);

//! RUTA QUE TRAE EL PAIS QUE SU ID COINCIDA CON LO ENVIADO POR PARAMS
routeCountries.get("/:idPais", getCountry);

module.exports = routeCountries;
