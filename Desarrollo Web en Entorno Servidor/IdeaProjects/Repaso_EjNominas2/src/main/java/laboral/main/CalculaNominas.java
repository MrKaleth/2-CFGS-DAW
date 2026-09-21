package laboral.main;

import laboral.exceptions.DatosNoCorrectosException;
import laboral.models.Empleado;
import laboral.services.EmpleadoService;

import java.util.List;
import java.util.Scanner;

/**
 * Clase principal que gestiona la interfaz de usuario por consola.
 * Permite interactuar con el sistema de control de nóminas a través de un menú.
 * @author Darío Bonilla
 * @version 2.0
 */
public class CalculaNominas {

    private final EmpleadoService servicio = new EmpleadoService();
    private final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        CalculaNominas programa = new CalculaNominas();
        programa.ejecutarMenu();
    }

    /**
     * Lazo principal que mantiene el menú activo en consola.
     */
    public void ejecutarMenu() {
        int opcion = 0;
        do {
            System.out.println("\n=== MENÚ GESTIÓN DE NÓMINAS ===");
            System.out.println("1. Mostrar todos los empleados (BD)");
            System.out.println("2. Mostrar salario por DNI (BD)");
            System.out.println("3. Modificar datos de un empleado (Submenú BD)");
            System.out.println("4. Recalcular y actualizar sueldo de un empleado (BD)");
            System.out.println("5. Recalcular y actualizar TODOS los sueldos (BD)");
            System.out.println("6. Copia de seguridad a ficheros (Backup)");
            System.out.println("7. Alta de empleado individual (BD)");
            System.out.println("8. Alta por lote desde 'empleadosNuevos.txt'");
            System.out.println("9. Salir");
            System.out.print("Seleccione una opción: ");

            try {
                opcion = Integer.parseInt(scanner.nextLine());
                procesarOpcion(opcion);
            } catch (NumberFormatException e) {
                System.out.println("Error: Debe introducir un número entero válido.");
            }
        } while (opcion != 9);
    }

    /**
     * Deriva la ejecución del flujo del programa según la opción seleccionada.
     */
    private void procesarOpcion(int opcion) {
        switch (opcion) {
            case 1:
                menuMostrarTodos();
                break;
            case 2:
                menuMostrarSalario();
                break;
            case 3:
                menuModificarEmpleado();
                break;
            case 4:
                menuRecalcularSueldoIndividual();
                break;
            case 5:
                menuRecalcularTodosLosSueldos();
                break;
            case 6:
                servicio.realizarCopiaSeguridad();
                break;
            case 7:
                menuAltaIndividual();
                break;
            case 8:
                servicio.altaEmpleado(); // Llama a la sobrecarga por lote que busca 'empleadosNuevos.txt'
                break;
            case 9:
                System.out.println("Cerrando la aplicación...");
                break;
            default:
                System.out.println("Opción no válida.");
                break;
        }
    }

    private void menuMostrarTodos() {
        List<Empleado> empleados = servicio.obtenerTodos();
        if (empleados.isEmpty()) {
            System.out.println("La base de datos está vacía.");
        } else {
            System.out.println("\n--- LISTADO DE EMPLEADOS ---");
            for (Empleado emp : empleados) {
                System.out.println(emp.imprime());
            }
        }
    }

    private void menuMostrarSalario() {
        System.out.print("Introduce el DNI del empleado: ");
        String dni = scanner.nextLine();
        int salario = servicio.obtenerSalarioPorDni(dni);
        if (salario == -1) {
            System.out.println("Empleado no encontrado.");
        } else {
            System.out.println("El sueldo actual en BD para el DNI " + dni + " es: " + salario + "$");
        }
    }

    private void menuModificarEmpleado() {
        System.out.print("Introduce el DNI del empleado a modificar: ");
        String dni = scanner.nextLine();
        Empleado emp = servicio.obtenerPorDni(dni);

        if (emp == null) {
            System.out.println("No se encontró ningún empleado con ese DNI.");
            return;
        }

        System.out.println("\n--- SUBMENÚ MODIFICACIÓN ---");
        System.out.println("1. Modificar Nombre");
        System.out.println("2. Modificar Categoría");
        System.out.println("3. Incrementar un año de antigüedad");
        System.out.print("Seleccione una opción: ");

        try {
            int subOpcion = Integer.parseInt(scanner.nextLine());
            switch (subOpcion) {
                case 1:
                    System.out.print("Nuevo nombre: ");
                    emp.nombre = scanner.nextLine();
                    break;
                case 2:
                    System.out.print("Nueva categoría (1-10): ");
                    int nuevaCat = Integer.parseInt(scanner.nextLine());
                    emp.setCategoria(nuevaCat);
                    break;
                case 3:
                    emp.incrAnyo();
                    System.out.println("Antigüedad incrementada en +1 año.");
                    break;
                default:
                    System.out.println("Modificación cancelada.");
                    return;
            }
            servicio.altaEmpleado(emp);
            System.out.println("Empleado actualizado con éxito en el sistema.");
        } catch (NumberFormatException e) {
            System.out.println("Error: Entrada numérica inválida.");
        }
    }

    private void menuRecalcularSueldoIndividual() {
        System.out.print("Introduce el DNI del empleado: ");
        String dni = scanner.nextLine();
        Empleado emp = servicio.obtenerPorDni(dni);
        if (emp == null) {
            System.out.println("Empleado no encontrado.");
        } else {
            servicio.altaEmpleado(emp);
            System.out.println("Sueldo recalculado para el DNI: " + dni);
        }
    }

    private void menuRecalcularTodosLosSueldos() {
        List<Empleado> todos = servicio.obtenerTodos();
        for (Empleado emp : todos) {
            servicio.altaEmpleado(emp);
        }
        System.out.println("Se han recalculado y sincronizado todas las nóminas de la BD.");
    }

    // Método de apoyo para registrar empleados desde la consola (Apartado 3)
    private void menuAltaIndividual() {
        try {
            System.out.print("Nombre completo: ");
            String nombre = scanner.nextLine();
            System.out.print("DNI: ");
            String dni = scanner.nextLine();
            System.out.print("Sexo (M/F): ");
            Character sexo = scanner.nextLine().toUpperCase().charAt(0);
            System.out.print("Categoría (1-10): ");
            int cat = Integer.parseInt(scanner.nextLine());
            System.out.print("Años trabajados: ");
            int anyos = Integer.parseInt(scanner.nextLine());

            Empleado nuevo = new Empleado(sexo, dni, nombre, cat, anyos);
            servicio.altaEmpleado(nuevo);
            System.out.println("Alta individual procesada correctamente.");
        } catch (DatosNoCorrectosException e) {
            System.out.println("Error de negocio: " + e.getMessage());
        } catch (NumberFormatException e) {
            System.out.println("Error: Se esperaba un dato numérico.");
        } catch (Exception e) {
            System.out.println("Error al procesar el alta.");
        }
    }
}
