package laboral.services;

import laboral.models.Empleado;
import laboral.repository.EmpleadoRepository;
import laboral.repository.EmpleadoRepositoryImpl;

import java.util.List;

/**
 * Servicio que actúa como intermediario entre la capa de presentación (consola)
 * y la capa de acceso a datos (repositorio) para las operaciones de Empleado.
 */
public class EmpleadoService {

    private final EmpleadoRepository repositorio = new EmpleadoRepositoryImpl();

    private static final String RUTA_NUEVOS_TXT = "src/main/resources/data/empleadosNuevos.txt";
    private static final String RUTA_EMPLEADOS_TXT = "src/main/resources/data/empleados.txt";
    private static final String RUTA_SALARIOS_DAT = "src/main/resources/data/salarios.dat";

    /**
     * Da de alta o actualiza un empleado individual en el repositorio.
     *
     * @param empleado El objeto Empleado a dar de alta.
     */
    public void altaEmpleado(Empleado empleado) {
        repositorio.altaEmpleado(empleado);
    }

    /**
     * Da de alta un lote de empleados utilizando un archivo de texto predefinido
     * ("empleadosNuevos.txt").
     */
    public void altaEmpleado() {
        repositorio.altaEmpleado(RUTA_NUEVOS_TXT);
    }

    /**
     * Realiza una copia de seguridad en las rutas físicas predefinidas para
     * datos de texto y binarios.
     */
    public void realizarCopiaSeguridad() {
        repositorio.realizarCopiaSeguridad(RUTA_EMPLEADOS_TXT, RUTA_SALARIOS_DAT);
    }

    /**
     * Obtiene la lista completa de empleados desde el repositorio.
     *
     * @return Lista de objetos Empleado.
     */
    public List<Empleado> obtenerTodos() {
        return repositorio.obtenerTodos();
    }

    /**
     * Obtiene los datos de un empleado utilizando su DNI.
     *
     * @param dni El DNI del empleado.
     * @return El objeto Empleado correspondiente, o null si no se encuentra.
     */
    public Empleado obtenerPorDni(String dni) {
        return repositorio.obtenerPorDni(dni);
    }

    /**
     * Consulta el salario de un empleado registrado mediante su DNI.
     *
     * @param dni El DNI del empleado.
     * @return El salario almacenado, o -1 si el empleado no se encuentra.
     */
    public int obtenerSalarioPorDni(String dni) {
        return repositorio.obtenerSalarioPorDni(dni);
    }
}