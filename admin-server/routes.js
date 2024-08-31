module.exports = function (app, db) {
    require("./apis/admin")(app, db);
    require("./apis/customer")(app, db);
    require("./apis/dashbaord")(app, db);
    require("./apis/plan")(app, db);
    require("./apis/bcards")(app, db);
  
  };