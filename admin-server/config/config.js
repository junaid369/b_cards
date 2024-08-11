require("dotenv").config();
module.exports = {
  uaeTime: function uaeTime(time) {
    let current = new Date(
      new Date(time).setHours(new Date(time).getHours() + 4)
    );
    return new Date(current.setMinutes(current.getMinutes()));
  },

  dateOnlyInUTC: new Date(
    Date.UTC(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    )
  ),
  //Live  DB
  DATABASE_NAME: process.env.DATABASE_NAME,
  CONNECTION_URL: process.env.CONNECTION_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  
  // PORT: process.env.PORT,
};
