import { Request, Response } from "express";
import { LoginController } from "../controller/LoginController";

export class LoginHandler {
  private controller: LoginController;

  constructor(controller: LoginController) {
    this.controller = controller;
  }

  login(req: Request, res: Response) {
    try {
      const { usuario, contraseña } = req.body;
      const result = this.controller.verificarEmpleado(usuario, contraseña);
      res.status(result.status).json(result.data);
    } catch (error) {
      res.status(500).json({ error: "Error al iniciar sesión" });
    }
  }
}
