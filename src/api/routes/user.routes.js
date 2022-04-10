const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/login", userController.login);
// Acha um usuário pelo e-mail
router.get("/", userController.findUser);
/*  */
// Rota de atualizar Perfil do usuário
router.patch("/profile", userController.updateProfile);
//Rota de adicionar Skill do usuário
router.post("/skills", userController.addSkill);
// Rota para deletar uma skill do usuário
router.delete("/skills", userController.deleteSkill);

module.exports = router;
