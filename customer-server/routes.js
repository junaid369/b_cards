module.exports = function (app, db) {
    require("./apis/customer")(app, db);
    // require("./apis/")(app, db);
  
  };