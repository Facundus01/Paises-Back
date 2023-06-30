const { Country, Activity } = require("../db");

const countriesGet = async () => {
  const allCountries = await Country.findAll({
    include: { model: Activity, through: { attributes: [] } },
  });

  if (!allCountries) {
    throw new Error("There isn't a Country in the DB");
  } else {
    return allCountries;
  }
};

module.exports = countriesGet;
