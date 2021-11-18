import {Router} from "express";
import * as authCtrl from '../controllers/auth.controller.js';
import { checkDup } from "../middlewares/index.js";

const router = Router();

router.post('/signup',checkDup.checkDuplicateUsernameorEmail, authCtrl.signup);
router.post('/signin', authCtrl.signin);

export default router;