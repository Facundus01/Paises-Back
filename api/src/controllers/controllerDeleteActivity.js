const { Activity } = require("../db");

const ActivityDelete = async (id) => {
  const activity = await Activity.findOne({ where: { id } });
  if (!activity) {
    throw new Error("The activity doesn't exist");
  } else {
    await Activity.destroy({ where: { id } });
    return "Activity deleted";
  }
};

module.exports = ActivityDelete;


/*Promise:

const ActivityDelete = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const activity = await Activity.findOne({ where: { id } });
      if (!activity) {
        throw new Error("The activity doesn't exist");
      } else {
        await Activity.destroy({ where: { id } });
        resolve("Activity deleted");
      }
    } catch (error) {
      reject(error);
    }
  });
};

*/