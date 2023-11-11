const mongoose = require('mongoose');

const mongoDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.secreturl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = mongoDB;