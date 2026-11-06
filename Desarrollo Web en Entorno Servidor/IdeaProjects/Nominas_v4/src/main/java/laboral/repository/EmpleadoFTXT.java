package laboral.repository;

import laboral.exceptions.DatosNoCorrectosException;
import laboral.models.Empleado;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Clase encargada de gestionar la lectura y escritura de objetos Empleado
 * utilizando ficheros de texto.
 */
public class EmpleadoFTXT {

    /**
     * Lee la información de los empleados desde un archivo de texto.
     *
     * @param rutaArchivo Ruta del archivo de texto a leer.
     * @return Una lista de objetos Empleado leídos del archivo.
     */
    public List<Empleado> leerEmpleados(String rutaArchivo) {
        List<Empleado> lista = new ArrayList<>();

        try (BufferedReader br = new BufferedReader(new FileReader(rutaArchivo))) {
            String linea;
            while ((linea = br.readLine()) != null) {
                if (linea.trim().isEmpty()) continue;

                String[] datos = linea.split(";");

                Character sexo = datos[0].charAt(0);
                String dni = datos[1];
                String nombre = datos[2];
                int categoria = Integer.parseInt(datos[3]);
                int anyos = Integer.parseInt(datos[4]);

                try {
                    Empleado emp = new Empleado(sexo, dni, nombre, categoria, anyos);
                    lista.add(emp);
                } catch (DatosNoCorrectosException e) {
                    System.err.println("Línea ignorada por datos inválidos: " + linea);
                }
            }
        } catch (IOException e) {
            System.err.println("Error al leer el archivo de texto: " + e.getMessage());
        }
        return lista;
    }

    /**
     * Guarda la información de una lista de empleados en un archivo de texto.
     *
     * @param rutaArchivo Ruta del archivo de texto donde se guardarán los datos.
     * @param empleados   Lista de objetos Empleado a guardar.
     */
    public void guardarEmpleados(String rutaArchivo, List<Empleado> empleados) {
        try (PrintWriter pw = new PrintWriter(new FileWriter(rutaArchivo))) {
            for (Empleado e : empleados) {
                pw.println(e.sexo + ";" + e.dni + ";" + e.nombre + ";" + e.getCategoria() + ";" + e.anyosTrabajados);
            }
        } catch (IOException e) {
            System.err.println("Error al guardar en el archivo de texto: " + e.getMessage());
        }
    }
}