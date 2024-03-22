const express = require('express');
const todo = require('../api/todo/todoService');

module.exports = function(server){
    //Api routes
    const router = express.Router();

    server.use("/api", router);

    //todo routes
    const todoService = todo
    todoService.register(router, '/todos');
}