package laboral.repository;

import laboral.models.Empleado;

import java.util.List;

public interface EmpleadoRepository {
    void altaEmpleado(Empleado empleado);

    void altaEmpleado(String rutaTXT);

    List<Empleado> obtenerTodos();

    Empleado obtenerPorDni(String dni);

    int obtenerSalarioPorDni(String dni);

    void realizarCopiaSeguridad(String rutaTXT, String rutaDAT);
}
