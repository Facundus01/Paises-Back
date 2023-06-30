const { Country, Activity } = require("../db");

const countryFind = async (id) => {
  id = id.toUpperCase();

  const country = await Country.findOne({
    where: { id },
    include: { model: Activity, through: { attributes: [] } },
  });

  if (!country) {
    throw new Error("Country Not Found");
  } else {
    return country
  }
};

module.exports = countryFind;
