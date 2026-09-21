package laboral.services;

import laboral.models.Empleado;
import laboral.repository.EmpleadoRepository;
import laboral.repository.EmpleadoRepositoryImpl;

import java.util.List;

public class EmpleadoService {

    private final EmpleadoRepository repositorio = new EmpleadoRepositoryImpl();

    private static final String RUTA_NUEVOS_TXT = "src/main/resources/data/empleadosNuevos.txt";
    private static final String RUTA_EMPLEADOS_TXT = "src/main/resources/data/empleados.txt";
    private static final String RUTA_SALARIOS_DAT = "src/main/resources/data/salarios.dat";

    public void altaEmpleado(Empleado empleado) {
        repositorio.altaEmpleado(empleado);
    }

    public void altaEmpleado() {
        repositorio.altaEmpleado(RUTA_NUEVOS_TXT);
    }

    public void realizarCopiaSeguridad() {
        repositorio.realizarCopiaSeguridad(RUTA_EMPLEADOS_TXT, RUTA_SALARIOS_DAT);
    }

    public List<Empleado> obtenerTodos() {
        return repositorio.obtenerTodos();
    }

    public Empleado obtenerPorDni(String dni) {
        return repositorio.obtenerPorDni(dni);
    }

    public int obtenerSalarioPorDni(String dni) {
        return repositorio.obtenerSalarioPorDni(dni);
    }
}
