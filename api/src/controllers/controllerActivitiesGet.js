const { Activity, Country } = require("../db");

const ActivitiesGet = async () => {
  const allActivities = await Activity.findAll({
    include: {
      model: Country,
      attributes: ["id", "name"],
      through: { attributes: [] },
    },
  });
  if (!allActivities) {
    throw new Error("No activity found");
  } else {
    return allActivities;
  }
};

module.exports = ActivitiesGet;
