const { Router } = require("express");
const router = Router();
//* IMPORTO LAS RUTAS
const routeActivities = require("./routeActivities");
const routeCountries = require("./routeCountries");

//******************RUTAS**************************//

//! Ruta Countries

router.use("/countries", routeCountries);

//! Ruta Activities
router.use("/activities", routeActivities);

module.exports = router;
