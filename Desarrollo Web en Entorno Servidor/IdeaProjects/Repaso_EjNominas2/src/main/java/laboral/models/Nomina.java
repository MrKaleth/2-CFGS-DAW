package laboral.models;

/**
 * Clase encargada de gestionar el cálculo de las retribuciones económicas de los empleados.
 * Ofrece métodos estáticos para procesar las nóminas según las reglas de negocio del sistema laboral.
 * @author Darío Bonilla
 * @version 1.0
 */
public class Nomina {

    /**
     * Tabla de sueldos base.
     * La posición 0 corresponde a la categoría 1, la posición 1 a la categoría 2, y así sucesivamente.
     */
    private static final int SUELDO_BASE[] = {50000, 70000, 90000, 110000, 130000, 150000, 170000, 190000, 210000, 230000};

    /**
     * Calcula el sueldo total que le corresponde a un empleado.
     * El cálculo se realiza sumando el sueldo base asociado a su categoría profesional
     * más un complemento de 500$ por cada año trabajado.
     *
     * @param empleado El objeto {@link Empleado} del cual se quiere calcular el sueldo.
     * @return El sueldo total calculado como un número entero.
     */
    public static int sueldo(Empleado empleado) {
        int sueldoBase = SUELDO_BASE[empleado.getCategoria() - 1];
        return sueldoBase + (5000 * empleado.anyosTrabajados);
    }
}

