package laboral.models;

import laboral.exceptions.DatosNoCorrectosException;

/**
 * Representa a un empleado dentro del sistema laboral, heredando los datos básicos de una persona.
 * Añade información específica del entorno de trabajo como la categoría profesional y la antigüedad.
 *
 * @author Darío Bonilla
 * @version 1.0
 */
public class Empleado extends Persona {

    /**
     * La categoría profesional del empleado (debe estar comprendida entre 1 y 10).
     */
    private int categoria;

    /**
     * Los años de experiencia o antigüedad que el empleado lleva trabajados en la empresa.
     */
    public int anyosTrabajados;

    /**
     * Constructor básico que inicializa un empleado con valores por defecto para su puesto.
     * La categoría se establece inicialmente en 1 y los años trabajados en 0.
     *
     * @param sexo   El sexo asignado al empleado.
     * @param dni    El Documento Nacional de Identidad del empleado.
     * @param nombre El nombre completo del empleado.
     */
    public Empleado(Character sexo, String dni, String nombre) {
        super(sexo, dni, nombre);
        this.categoria = 1;
        this.anyosTrabajados = 0;
    }

    /**
     * Constructor completo que permite definir la posición y experiencia previa del empleado.
     * Delega la validación de los datos numéricos en el método {@link #validaEmpleado(int, int)}.
     *
     * @param sexo            El sexo asignado al empleado.
     * @param dni             El Documento Nacional de Identidad del empleado.
     * @param nombre          El nombre completo del empleado.
     * @param categoria       La categoría profesional a asignar.
     * @param anyosTrabajados Los años trabajados a asignar.
     * @throws DatosNoCorrectosException Si la validación de datos falla a través del método de verificación.
     */
    public Empleado(Character sexo, String dni, String nombre, int categoria, int anyosTrabajados) throws DatosNoCorrectosException {
        super(sexo, dni, nombre);
        validaEmpleado(categoria, anyosTrabajados);
        this.categoria = categoria;
        this.anyosTrabajados = anyosTrabajados;
    }

    /**
     * Obtiene la categoría profesional del empleado.
     *
     * @return Un número entero que representa la categoría.
     */
    public int getCategoria() {
        return categoria;
    }

    /**
     * Modifica la categoría profesional del empleado.
     *
     * @param categoria La nueva categoría que se desea asignar.
     */
    public void setCategoria(int categoria) {
        this.categoria = categoria;
    }

    /**
     * Incrementa en uno el número de años trabajados por el empleado.
     */
    public void incrAnyo() {
        this.anyosTrabajados++;
    }

    /**
     * Devuelve en formato de texto todos los datos detallados del empleado,
     * incluyendo los campos heredados de la clase Persona.
     * Nota: Es equivalente a la funcionalidad que ofrece el método toString.
     *
     * @return La información completa del empleado.
     */
    @Override
    public String imprime() {
        return ("Empleado{" +
                "categoria=" + categoria +
                ", anyosTrabajados=" + anyosTrabajados +
                ", nombre='" + nombre + '\'' +
                ", dni='" + dni + '\'' +
                ", sexo=" + sexo +
                '}');
    }

    /**
     * Valida la corrección de los datos numéricos aportados para el empleado.
     * Comprueba que la categoría se encuentre en el rango permitido y que los años no sean negativos.
     *
     * @param categoria       La categoría profesional a verificar.
     * @param anyosTrabajados Los años trabajados a verificar.
     * @throws DatosNoCorrectosException Si la categoría no está entre 1 y 10, o si los años trabajados son negativos.
     */
    private void validaEmpleado(int categoria, int anyosTrabajados) throws DatosNoCorrectosException {
        if (categoria < 1 || categoria > 10 || anyosTrabajados < 0) {
            throw new DatosNoCorrectosException("Datos de empleado no válidos");
        }
    }

}

