const { createUser } = require("./userController")
const router = require("express").Router();

router.post("/users", createUser);

module.exports = router;