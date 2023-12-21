const express = require('express');
const userController = require('../Controller/user');
const validation=require("../Validator/AppValidation")

const router = express.Router();

router.post('/', validation.CreateUserValidator, userController.createUser);
router.get('/', userController.getAllUsers);
router.delete("/:id",userController.deleteUser)

module.exports = router;
