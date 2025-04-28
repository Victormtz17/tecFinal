
import { Router } from 'express';
import { LoginHandler } from '../handler/LoginHandler';
import { LoginController } from '../controller/LoginController';
import { empleados } from '../db/empleados';

const router = Router();

const loginController = new LoginController(empleados);
const loginHandler = new LoginHandler(loginController);

router.post('/login', (req, res) => loginHandler.login(req, res));

export default router;


