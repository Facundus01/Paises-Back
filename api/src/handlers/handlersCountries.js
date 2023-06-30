const countriesGet = require("../controllers/controllerCountriesGet");
const countryFind = require("../controllers/controllerCountryId");
const countriesName = require("../controllers/controllerCountryName");

const getCountries = async (req, res) => {
  try {
    const allCountries = await countriesGet();
    res.status(200).json({ allCountries });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCountry = async (req, res) => {
const { idPais } = req.params;
  try {
    const {
      id,
      name,
      flag,
      continent,
      capital,
      subregion,
      area,
      population,
      Activities,
    } = await countryFind(idPais);
    res.status(200).json({
      id,
      name,
      flag,
      continent,
      capital,
      subregion,
      area,
      population,
      Activities,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCountryName = async (req, res) => {
const name = req.query;
  try {
    const countriesFind = await countriesName(name);

    res.status(200).json({ countriesFind });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getCountries, getCountry, getCountryName };
