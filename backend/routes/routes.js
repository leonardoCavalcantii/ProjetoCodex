const routes = require('express').Router();
const TaskController = require("../controller/TaskController");

routes.get("/getAllTask",TaskController.getAllTasks);
routes.get("/getById/:id/:method", TaskController.getById);
routes.get("/deleteTask/:id", TaskController.deleteOneTask);
routes.post("/create", TaskController.createTask);
routes.post("/updateTask/:id", TaskController.updateTask);



module.exports = routes;