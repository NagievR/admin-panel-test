const connectToDB = () => {
  const mongoose = require('mongoose');

  mongoose.connect(
    "mongodb+srv://nagievr:1234qwer@cluster0.lojxe.mongodb.net/admin-test?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

  const connection = mongoose.connection;
  
  connection.on('error', () => console.error('DB connection error'));
  connection.on('open', () => console.log('successful connected to DB'));
}

module.exports = connectToDB;
