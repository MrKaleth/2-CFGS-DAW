package laboral.controllers;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import laboral.services.EmpleadoService;

import java.io.IOException;

/**
 * Servlet encargado de procesar la consulta del salario de un empleado.
 * Recibe un DNI a través de un formulario, conecta con la base de datos para
 * recuperar el sueldo correspondiente y envía los datos a la vista para su visualización.
 */
public class ConsultarSalarioServlet extends HttpServlet {

    /**
     * Servicio para acceder a la lógica de negocio y realizar consultas en la base de datos.
     */
    private final EmpleadoService servicio = new EmpleadoService();

    /**
     * Maneja las peticiones POST.
     * Extrae el DNI enviado desde el formulario, utiliza el servicio para obtener el salario
     * y redirige a la vista de resultados si el empleado existe, o a la página de error en caso contrario.
     *
     * @param req  Objeto HttpServletRequest que contiene la petición del cliente (incluye el parámetro 'dni').
     * @param resp Objeto HttpServletResponse para enviar la respuesta al cliente.
     * @throws ServletException Si ocurre un error específico del Servlet durante el procesamiento.
     * @throws IOException      Si ocurre un error de entrada/salida al redirigir a las vistas.
     */
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String dni = req.getParameter("dni");

        try {
            int salario = servicio.obtenerSalarioPorDni(dni);

            if (salario == -1) {
                req.setAttribute("mensajeError", "No se ha encontrado ningún empleado con el DNI: " + dni);
                req.getRequestDispatcher("views/error.jsp").forward(req, resp);
            } else {
                req.setAttribute("dniBuscado", dni);
                req.setAttribute("salarioEncontrado", salario);
                req.getRequestDispatcher("views/mostrar_salario.jsp").forward(req, resp);
            }

        } catch (Exception e) {
            req.setAttribute("mensajeError", "Error al consultar la base de datos: " + e.getMessage());
            req.getRequestDispatcher("views/error.jsp").forward(req, resp);
        }
    }
}