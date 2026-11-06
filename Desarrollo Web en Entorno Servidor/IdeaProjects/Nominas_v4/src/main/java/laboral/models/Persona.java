package laboral.models;

import lombok.Getter;
import lombok.Setter;

/**
 * Representa a una persona dentro del sistema laboral.
 *
 * @author Darío Bonilla
 * @version 1.0
 */
public class Persona {

    /**
     * Nombre de la persona.
     */
    @Setter
    @Getter
    public String nombre;

    /**
     * El Documento Nacional de Identidad (DNI) de la persona.
     */
    @Setter
    @Getter
    public String dni;

    /**
     * Género de la persona.
     */
    @Setter
    @Getter
    public Character sexo;

    /**
     * Constructor completo para inicializar una persona con todos sus atributos.
     *
     * @param sexo   El sexo asignado a la persona.
     * @param dni    El Documento Nacional de Identidad de la persona.
     * @param nombre El nombre completo de la persona.
     */
    public Persona(Character sexo, String dni, String nombre) {
        this.sexo = sexo;
        this.dni = dni;
        this.nombre = nombre;
    }

    /**
     * Constructor alternativo para inicializar una persona sin el DNI.
     * El DNI quedará inicialmente con un valor nulo.
     *
     * @param nombre El nombre completo de la persona.
     * @param sexo   El sexo asignado a la persona.
     */
    public Persona(String nombre, Character sexo) {
        this.nombre = nombre;
        this.sexo = sexo;
    }

    /**
     * Devuelve una representación en formato de texto con los datos clave de la persona.
     * Nota: Es equivalente a la funcionalidad que ofrece el método toString.
     *
     * @return Una cadena de texto con el nombre y el DNI de la persona.
     */
    public String imprime() {
        return "Persona{" +
                "nombre='" + nombre + '\'' +
                ", dni='" + dni + '\'' +
                '}';
    }
}