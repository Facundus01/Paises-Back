const { Activity, Country } = require("../db");

const ActivityPost = async ({
  name,
  difficulty,
  duration,
  season,
  countries,
}) => {
  if (!countries) throw new Error("You must send a Country");
  const arrayCountries = Array.isArray(countries) ? countries : [countries];
  //* Uso el metodo Promise.All para consultar en la DB si existen paises con los ID enviados
  const countriesFind = await Promise.all(
    arrayCountries.map((id) => Country.findByPk(id.toUpperCase()))
  );
  //* Valido si no se encontro ningun pais en la DB
  if (countriesFind.includes(undefined)) {
    throw new Error("No valid countries found");
  }

  const newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });

  await newActivity.addCountries(countriesFind.filter((country) => !!country));

  return;
};

module.exports = ActivityPost;
