import { Router } from 'express';
import {
  login,
  signUp,
  changePassword,
} from "../controller/auth"
import { authorize, protect } from "../middleware/auth"
import {
  validate,
  loginValidation,
  signUpValidation,
  changePasswordValidation,
} from "../validation/index"
import { Role } from '../types';

const router = Router();


router.route('/create-user').post(signUpValidation(), validate, protect, authorize([Role.SYSADMIN,Role.ADMIN]), signUp);
router.route('/login').post(loginValidation(), validate, login);




router
  .route('/change-password')
  .patch(changePasswordValidation(), validate, changePassword);

export { router as authRoutes };
