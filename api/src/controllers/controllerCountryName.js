const { Country, Activity } = require("../db");

const { Op } = require("sequelize");

const countriesName = async (data) => {
  const { name } = data;

  if (!name) {
    throw new Error("Please put something");
  }

  const matchCountries = await Country.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: { model: Activity, through: { attributes: [] } },
  });

  if (matchCountries.length === 0) {
    throw new Error(`There isn't a Country whith the name: ${name}`);
  } else {
    return matchCountries;
  }
};

module.exports = countriesName;
