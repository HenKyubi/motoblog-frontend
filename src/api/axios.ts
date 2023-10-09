import axios from "axios";
import { toast } from "react-toastify";

// Configurar el interceptor de respuesta exitosa
axios.interceptors.response.use(
  (response) => {
    // Puedes personalizar este bloque según tus necesidades
    if (response.status === 200) {
      toast.success("Operación exitosa");
    }
    return response;
  },
  (error) => {
    // Manejo de errores de respuesta
    if (error.response) {
      // Error de respuesta con estado no 2xx (por ejemplo, 404, 500)
      toast.error("Error en la respuesta del servidor");
    } else if (error.request) {
      // Error de solicitud (sin respuesta del servidor)
      toast.error("Error en la solicitud");
    } else {
      // Otros errores
      toast.error("Ocurrió un error");
    }
    return Promise.reject(error);
  }
);

export default axios;
