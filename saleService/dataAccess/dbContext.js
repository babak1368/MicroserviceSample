const mongoose = require('mongoose');
const config = require('../config');

const dbContext = async function () {
  const connectionString = `${config.cloudDataBase.protocol}://${config.cloudDataBase.userName}:${config.cloudDataBase.password}@${config.cloudDataBase.server}/${config.cloudDataBase.dataBaseName}?retryWrites=true&w=majority`;

  await mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    retryWrites: false,
  });
  return mongoose;
};

module.exports = { dbContext };
