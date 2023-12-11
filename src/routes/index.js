const AuthRoutes = require("./auth");
const TasksRoutes = require("./tasks")

const routes = function (app) {
    TasksRoutes(app)
    AuthRoutes(app)
}

module.exports = routes;