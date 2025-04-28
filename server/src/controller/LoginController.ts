export class LoginController {
    private empleados: { usuario: string; contraseña: string; nombre: string; correo: string }[];
  
    constructor(empleados: { usuario: string; contraseña: string; nombre: string; correo: string }[]) {
      this.empleados = empleados;
    }
  
    verificarEmpleado(usuario: string, contraseña: string) {
      const empleado = this.empleados.find(emp => emp.usuario === usuario && emp.contraseña === contraseña);
  
      if (empleado) {
        return {
          status: 200,
          data: {
            mensaje: `¡Hola, ${empleado.nombre}! Bienvenido al portal de SkyTech.`,
            correo: empleado.correo
          }
        };
      } else {
        return {
          status: 401,
          data: { error: 'Nombre de usuario o contraseña incorrectos.' }
        };
      }
    }
  }
  