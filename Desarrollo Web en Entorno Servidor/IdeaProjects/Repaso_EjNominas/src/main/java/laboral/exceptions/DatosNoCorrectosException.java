package laboral.exceptions;

/**
 * Excepción  para gestionar errores relacionados con la validez de los datos introducidos.
 * Se lanza cuando los parámetros de un empleado (como la categoría o los años trabajados)
 * no cumplen con los rangos o reglas de negocio establecidos por el sistema laboral.
 */
public class DatosNoCorrectosException extends Exception {

    /**
     * Construye una excepción con un mensaje que explica la causa del error.
     *
     * @param message El texto descriptivo del error que será almacenado para su posterior lectura.
     */
    public DatosNoCorrectosException(String message) {
        super(message);
    }
}
