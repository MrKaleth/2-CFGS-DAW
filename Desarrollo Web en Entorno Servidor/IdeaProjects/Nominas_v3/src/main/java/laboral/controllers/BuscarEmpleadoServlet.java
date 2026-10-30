package laboral.controllers;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import laboral.models.Empleado;
import laboral.services.EmpleadoService;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Servlet encargado de buscar empleados en el sistema utilizando un criterio de búsqueda general.
 * Permite filtrar la lista de empleados buscando coincidencias parciales o exactas en cualquiera
 * de sus campos (nombre, DNI, sexo, categoría o años trabajados).
 */
public class BuscarEmpleadoServlet extends HttpServlet {

    /**
     * Servicio para acceder a la lógica de negocio y recuperar los datos de los empleados.
     */
    private final EmpleadoService servicio = new EmpleadoService();

    /**
     * Maneja las peticiones GET.
     * Extrae el parámetro de búsqueda ("criterio") del formulario, recupera todos los empleados
     * y filtra aquellos que contengan dicho criterio en alguno de sus atributos.
     * Finalmente, envía la lista de resultados a la vista correspondiente.
     *
     * @param req  Objeto HttpServletRequest que contiene la petición del cliente (incluye el parámetro 'criterio').
     * @param resp Objeto HttpServletResponse para enviar la respuesta al cliente.
     * @throws ServletException Si ocurre un error específico del Servlet durante el procesamiento.
     * @throws IOException      Si ocurre un error de entrada/salida al redirigir a las vistas.
     */
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String criterio = req.getParameter("criterio");

        try {
            List<Empleado> todos = servicio.obtenerTodos();
            List<Empleado> resultados = new ArrayList<>();

            if (criterio != null && !criterio.trim().isEmpty()) {
                String busqueda = criterio.toLowerCase().trim();

                for (Empleado emp : todos) {
                    if (emp.getDni().toLowerCase().contains(busqueda) ||
                            emp.getNombre().toLowerCase().contains(busqueda) ||
                            String.valueOf(emp.getSexo()).toLowerCase().contains(busqueda) ||
                            String.valueOf(emp.getCategoria()).contains(busqueda) ||
                            String.valueOf(emp.getAnyosTrabajados()).contains(busqueda)) {

                        resultados.add(emp);
                    }
                }
            }

            req.setAttribute("empleados", resultados);
            req.setAttribute("criterio", criterio);
            req.getRequestDispatcher("views/resultado_busqueda.jsp").forward(req, resp);

        } catch (Exception e) {
            req.setAttribute("mensajeError", "Error al realizar la búsqueda: " + e.getMessage());
            req.getRequestDispatcher("views/error.jsp").forward(req, resp);
        }
    }
}