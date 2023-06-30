const { Router } = require("express");
//* CREO LA RUTA ACTIVITIES
const routeActivities = Router();
//* TRAIGO LOS HANDLERS
const {
  getActivitiesHandler,
  postActivityHandler,
  deleteActivityHandler,
  putActivityHandler,
} = require("../handlers/handlersActivity");

//* Esta ruta obtiene un arreglo de objetos, donde cada objeto es una actividad turística.

routeActivities.get("/", getActivitiesHandler);

//* Esta ruta recibirá todos los datos necesarios para crear una actividad turística y relacionarla con los países solicitados.
routeActivities.post("/", postActivityHandler);

routeActivities.delete("/:id", deleteActivityHandler);

routeActivities.put("/:id", putActivityHandler);
module.exports = routeActivities;
