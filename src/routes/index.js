const tablesRoutes = require("./tables.routes");
const userRouter = require("./user.router");

const ApiRoutes = (app) => {
  app.use("/api/v1", tablesRoutes);
  app.use("/api/v1", userRouter)
};

module.exports = ApiRoutes;
