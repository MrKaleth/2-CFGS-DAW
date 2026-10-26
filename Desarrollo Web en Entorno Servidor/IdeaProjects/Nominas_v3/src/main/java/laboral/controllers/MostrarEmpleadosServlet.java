package laboral.controllers;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import laboral.models.Empleado;
import laboral.services.EmpleadoService;

import java.io.IOException;
import java.util.List;

/**
 * Servlet encargado de obtener la lista completa de todos los empleados
 * desde la base de datos y enviarla a la vista correspondiente para su visualización tabulada.
 */
public class MostrarEmpleadosServlet extends HttpServlet {

    /**
     * Servicio para acceder a la lógica de negocio y recuperar los registros de los empleados.
     */
    private final EmpleadoService servicio = new EmpleadoService();

    /**
     * Maneja las peticiones GET.
     * Obtiene la lista de todos los empleados mediante el servicio, la almacena en los atributos
     * de la petición y redirige a la vista encargada de renderizar la tabla o a la página de error si falla.
     *
     * @param req  Objeto HttpServletRequest que contiene la petición del cliente.
     * @param resp Objeto HttpServletResponse para enviar la respuesta al cliente.
     * @throws ServletException Si ocurre un error específico del Servlet durante el procesamiento.
     * @throws IOException      Si ocurre un error de entrada/salida al redirigir a las vistas.
     */
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            // 1. Obtenemos los datos usando tu código del año pasado
            List<Empleado> listaEmpleados = servicio.obtenerTodos();
            // 2. Guardamos la lista en la "request" para que la página web pueda leerla
            req.setAttribute("empleados", listaEmpleados);
            // 3. Redirigimos a la página JSP que dibujará la tabla
            req.getRequestDispatcher("views/mostrar_empleados.jsp").forward(req, resp);
        } catch (Exception e) {
            // Requisito: Mensajes de información y error (0,5 puntos)
            req.setAttribute("mensajeError", "Error al cargar los empleados: " + e.getMessage());
            req.getRequestDispatcher("views/error.jsp").forward(req, resp);
        }
    }
}