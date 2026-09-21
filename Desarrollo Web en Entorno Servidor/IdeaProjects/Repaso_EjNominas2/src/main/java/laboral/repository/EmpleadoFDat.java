package laboral.repository;

import laboral.models.Empleado;
import laboral.models.Nomina;

import java.io.DataOutputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

public class EmpleadoFDat {
    public void guardarSueldos(String rutaArchivo, List<Empleado> empleados) {
        try (DataOutputStream dos = new DataOutputStream(Files.newOutputStream(Paths.get(rutaArchivo)))) {
            for (Empleado e : empleados) {
                dos.writeUTF(e.dni);
                dos.writeInt(Nomina.sueldo(e));
            }
        } catch (IOException e) {
            System.err.println("Error al escribir el archivo binario: " + e.getMessage());
        }
    }


}
