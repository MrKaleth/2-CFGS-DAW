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

public class EmpleadoController extends HttpServlet {

    private final EmpleadoService servicio = EmpleadoService.getInstance();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String action = req.getParameter("action");
        if (action == null) {
            action = "mostrar";
        }

        try {
            switch (action) {
                case "mostrar":
                    mostrarEmpleados(req, resp);
                    break;
                case "buscar":
                    buscarEmpleado(req, resp);
                    break;
                case "editar":
                    mostrarFormularioEdicion(req, resp);
                    break;
                default:
                    mostrarEmpleados(req, resp);
                    break;
            }
        } catch (Exception e) {
            manejarError(req, resp, "Error procesando la petición GET: " + e.getMessage());
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String action = req.getParameter("action");

        try {
            switch (action) {
                case "modificar":
                    modificarEmpleado(req, resp);
                    break;
                case "consultarSalario":
                    consultarSalario(req, resp);
                    break;
                default:
                    manejarError(req, resp, "Acción POST no reconocida.");
                    break;
            }
        } catch (Exception e) {
            manejarError(req, resp, "Error procesando la petición POST: " + e.getMessage());
        }
    }

    private void mostrarEmpleados(HttpServletRequest req, HttpServletResponse resp) throws Exception {
        List<Empleado> listaEmpleados = servicio.obtenerTodos();
        req.setAttribute("empleados", listaEmpleados);
        req.getRequestDispatcher("views/mostrar_empleados.jsp").forward(req, resp);
    }

    private void buscarEmpleado(HttpServletRequest req, HttpServletResponse resp) throws Exception {
        String criterio = req.getParameter("criterio");
        List<Empleado> todos = servicio.obtenerTodos();
        List<Empleado> resultados = new ArrayList<>();

        if (criterio != null && !criterio.trim().isEmpty()) {
            String busqueda = criterio.toLowerCase().trim();
            for (Empleado emp : todos) {
                if (emp.getDni().toLowerCase().contains(busqueda) || emp.getNombre().toLowerCase().contains(busqueda) || String.valueOf(emp.getSexo()).toLowerCase().contains(busqueda) || String.valueOf(emp.getCategoria()).contains(busqueda) || String.valueOf(emp.getAnyosTrabajados()).contains(busqueda)) {
                    resultados.add(emp);
                }
            }
        }
        req.setAttribute("empleados", resultados);
        req.setAttribute("criterio", criterio);
        req.getRequestDispatcher("views/resultado_busqueda.jsp").forward(req, resp);
    }

    private void mostrarFormularioEdicion(HttpServletRequest req, HttpServletResponse resp) throws Exception {
        String dni = req.getParameter("dni");
        Empleado emp = servicio.obtenerPorDni(dni);
        if (emp != null) {
            req.setAttribute("empleado", emp);
            req.getRequestDispatcher("views/form_modificar.jsp").forward(req, resp);
        } else {
            manejarError(req, resp, "Empleado no encontrado.");
        }
    }

    private void modificarEmpleado(HttpServletRequest req, HttpServletResponse resp) throws Exception {
        String dni = req.getParameter("dni");
        String nombre = req.getParameter("nombre");
        Character sexo = req.getParameter("sexo").charAt(0);
        int categoria = Integer.parseInt(req.getParameter("categoria"));
        int anyos = Integer.parseInt(req.getParameter("anyos"));

        Empleado emp = new Empleado(sexo, dni, nombre, categoria, anyos);
        servicio.altaEmpleado(emp);

        resp.sendRedirect(req.getContextPath() + "/empleados?action=mostrar");
    }

    private void consultarSalario(HttpServletRequest req, HttpServletResponse resp) throws Exception {
        String dni = req.getParameter("dni");
        int salario = servicio.obtenerSalarioPorDni(dni);

        if (salario == -1) {
            manejarError(req, resp, "No se ha encontrado ningún empleado con el DNI: " + dni);
        } else {
            req.setAttribute("dniBuscado", dni);
            req.setAttribute("salarioEncontrado", salario);
            req.getRequestDispatcher("views/mostrar_salario.jsp").forward(req, resp);
        }
    }

    private void manejarError(HttpServletRequest req, HttpServletResponse resp, String mensaje) throws ServletException, IOException {
        req.setAttribute("mensajeError", mensaje);
        req.getRequestDispatcher("views/error.jsp").forward(req, resp);
    }
}