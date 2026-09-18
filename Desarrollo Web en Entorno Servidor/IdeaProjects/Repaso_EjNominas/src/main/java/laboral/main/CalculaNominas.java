package laboral.main;

import laboral.exceptions.DatosNoCorrectosException;
import laboral.models.Empleado;

import static laboral.models.Nomina.sueldo;

/**
 * Clase principal encargada de ejecutar la simulación.
 * Creación de empleados, modificación de sus datos e impresión de
 * sus retribuciones financieras, controlando errores del sistema.
 * @author Darío Bonilla
 * @version 1.0
 */
public class CalculaNominas {

    /**
     * Punto de entrada de la aplicación.
     * Crea empleados válidos, simula cambios de categoría y antigüedad,
     * intenta forzar un error para demostrar el control de excepciones.
     *
     * @param args Argumentos de la línea de comandos (no utilizados en esta aplicación).
     */
    public static void main(String[] args) {
        CalculaNominas f = new CalculaNominas();

        try {
            Empleado e1 = new Empleado('M', "32000032G", "James Cosling", 4, 7);
            Empleado e2 = new Empleado('F', "32000031R", "Ada Lovelace");

            System.out.println("--- DATOS INICIALES ---");
            f.escribe(e1);
            f.escribe(e2);

            e2.incrAnyo();
            e1.setCategoria(9);

            System.out.println("--- DATOS MODIFICADOS ---");
            f.escribe(e1);
            f.escribe(e2);

            System.out.println("--- EMPLEADO CON ERROR ---");
            Empleado e3 = new Empleado('M', "32000032C", "John Huges", 11, 25);
            f.escribe(e3);

        } catch (DatosNoCorrectosException e) {
            System.out.println("Datos no correctos");
        }
    }

    /**
     * Muestra la información estructurada de un empleado y su sueldo calculado.
     * Utiliza el método de cálculo de la clase Nomina.
     *
     * @param e El objeto {@link Empleado} del cual se desean imprimir los datos y el sueldo.
     */
    private void escribe(Empleado e) {
        System.out.println(e.imprime());
        System.out.println("El sueldo de " + e.nombre + " es: " + sueldo(e) + "$");
    }
}
