import { Router } from "express";
const router = Router();

import * as authController from '../controllers/auth.controller';
import { verifySignup } from '../middlewares';


router.post('/singup', [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted], authController.singUp)
router.post('/singin', authController.singIn)

export default router;