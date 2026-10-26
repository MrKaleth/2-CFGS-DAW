package laboral.controllers;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import laboral.models.Empleado;
import laboral.services.EmpleadoService;

import java.io.IOException;

/**
 * Servlet encargado de gestionar la modificación de los datos de un empleado.
 * Permite cargar los datos actuales del empleado a través de una petición GET,
 * y guardar las modificaciones (actualizando automáticamente el salario) mediante una petición POST.
 */
public class ModificarEmpleadoServlet extends HttpServlet {

    /**
     * Servicio para acceder a la lógica de negocio y base de datos de los empleados.
     */
    private final EmpleadoService servicio = new EmpleadoService();

    /**
     * Maneja las peticiones GET.
     * Se ejecuta al pulsar el botón "Modificar" en la tabla de búsqueda.
     * Recupera el DNI del empleado, busca sus datos en la base de datos y los envía a la vista del formulario.
     *
     * @param req  Objeto HttpServletRequest que contiene la petición del cliente (incluye el parámetro 'dni').
     * @param resp Objeto HttpServletResponse para enviar la respuesta al cliente.
     * @throws ServletException Si ocurre un error específico del Servlet.
     * @throws IOException      Si ocurre un error de entrada/salida durante el manejo de la petición.
     */
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String dni = req.getParameter("dni");
        try {
            Empleado emp = servicio.obtenerPorDni(dni);
            if (emp != null) {
                req.setAttribute("empleado", emp);
                req.getRequestDispatcher("views/form_modificar.jsp").forward(req, resp);
            } else {
                req.setAttribute("mensajeError", "Empleado no encontrado.");
                req.getRequestDispatcher("views/error.jsp").forward(req, resp);
            }
        } catch (Exception e) {
            req.setAttribute("mensajeError", "Error: " + e.getMessage());
            req.getRequestDispatcher("views/error.jsp").forward(req, resp);
        }
    }

    /**
     * Maneja las peticiones POST.
     * Se ejecuta al enviar el formulario con los datos modificados.
     * Recoge los nuevos datos, actualiza el registro en la base de datos (recalculando el sueldo) y redirige a la lista general.
     *
     * @param req  Objeto HttpServletRequest que contiene los datos modificados enviados desde el formulario.
     * @param resp Objeto HttpServletResponse usado para redirigir al usuario tras la actualización.
     * @throws ServletException Si ocurre un error específico del Servlet.
     * @throws IOException      Si ocurre un error de entrada/salida durante la redirección.
     */
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        try {
            String dni = req.getParameter("dni");
            String nombre = req.getParameter("nombre");
            Character sexo = req.getParameter("sexo").charAt(0);
            int categoria = Integer.parseInt(req.getParameter("categoria"));
            int anyos = Integer.parseInt(req.getParameter("anyos"));

            // El constructor lanza DatosNoCorrectosException si la categoría no es 1-10
            Empleado emp = new Empleado(sexo, dni, nombre, categoria, anyos);

            // El método altaEmpleado hace el UPDATE en BD y recalcula el sueldo automáticamente
            servicio.altaEmpleado(emp);

            // Redirigimos a la lista principal para ver los cambios
            resp.sendRedirect(req.getContextPath() + "/MostrarEmpleados");

        } catch (Exception e) {
            req.setAttribute("mensajeError", "Datos incorrectos: " + e.getMessage());
            req.getRequestDispatcher("views/error.jsp").forward(req, resp);
        }
    }
}