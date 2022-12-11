const sequelize = require("../config/connection");
const { Driver, License } = require("../models");

const driverSeedData = require("./driverSeedData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const drivers = await Driver.bulkCreate(driverSeedData);

  for (const { id } of drivers) {
    const newLicense = await License.create({
      driver_id: id,
    });
  }

  process.exit(0);
};

seedDatabase();
