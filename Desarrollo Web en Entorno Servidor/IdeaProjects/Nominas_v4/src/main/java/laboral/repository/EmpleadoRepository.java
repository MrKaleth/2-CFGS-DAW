package laboral.repository;

import laboral.models.Empleado;

import java.util.List;

/**
 * Interfaz que define los métodos de acceso a datos para la entidad Empleado.
 */
public interface EmpleadoRepository {

    /**
     * Da de alta o actualiza un empleado en el sistema y calcula su sueldo.
     *
     * @param empleado El objeto Empleado a registrar o actualizar.
     */
    void altaEmpleado(Empleado empleado);

    /**
     * Da de alta un lote de empleados a partir de un archivo de texto.
     *
     * @param rutaTXT Ruta del archivo de texto que contiene los datos de los empleados.
     */
    void altaEmpleado(String rutaTXT);

    /**
     * Obtiene una lista con todos los empleados almacenados en el sistema.
     *
     * @return Lista de todos los objetos Empleado.
     */
    List<Empleado> obtenerTodos();

    /**
     * Busca y obtiene un empleado por su número de DNI.
     *
     * @param dni DNI del empleado a buscar.
     * @return El objeto Empleado si se encuentra, o null si no existe.
     */
    Empleado obtenerPorDni(String dni);

    /**
     * Obtiene el salario de un empleado mediante su DNI.
     *
     * @param dni DNI del empleado cuyo salario se desea consultar.
     * @return El salario del empleado, o -1 si no se encuentra.
     */
    int obtenerSalarioPorDni(String dni);

    /**
     * Realiza una copia de seguridad de los datos del sistema en ficheros físicos.
     *
     * @param rutaTXT Ruta del fichero de texto para guardar los datos de los empleados.
     * @param rutaDAT Ruta del fichero binario para guardar los salarios.
     */
    void realizarCopiaSeguridad(String rutaTXT, String rutaDAT);
}