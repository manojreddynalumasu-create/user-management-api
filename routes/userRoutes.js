const express = require("express");
const router = express.Router();
const {
  getUsers, getUserById, createUser, updateUser, deleteUser,
} = require("../controllers/userController");
const {
  validateCreateUser, validateUpdateUser, checkValidation,
} = require("../middleware/validate");

router.route("/")
  .get(getUsers)
  .post(validateCreateUser, checkValidation, createUser);

router.route("/:id")
  .get(getUserById)
  .put(validateUpdateUser, checkValidation, updateUser)
  .delete(deleteUser);

module.exports = router;