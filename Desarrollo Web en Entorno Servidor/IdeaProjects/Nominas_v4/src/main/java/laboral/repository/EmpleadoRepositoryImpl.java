package laboral.repository;

import laboral.exceptions.DatosNoCorrectosException;
import laboral.models.Empleado;
import laboral.models.Nomina;
import laboral.utils.DBConnection;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class EmpleadoRepositoryImpl implements EmpleadoRepository {

    private static EmpleadoRepositoryImpl instance;
    private final EmpleadoFTXT empleadoFTXT = new EmpleadoFTXT();
    private final EmpleadoFDat empleadoFDat = new EmpleadoFDat();

    private EmpleadoRepositoryImpl() {
    }

    public static synchronized EmpleadoRepositoryImpl getInstance() {
        if (instance == null) {
            instance = new EmpleadoRepositoryImpl();
        }
        return instance;
    }

    @Override
    public void altaEmpleado(Empleado empleado) {
        String sqlEmpleado = "INSERT INTO Empleados (dni, nombre, sexo, categoria, anyos) " +
                "VALUES (?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE nombre=?, sexo=?, categoria=?, anyos=?";
        String sqlNomina = "INSERT INTO Nominas (dni, sueldo) VALUES (?, ?) ON DUPLICATE KEY UPDATE sueldo=?";

        try (Connection conn = DBConnection.getConnection()) {
            conn.setAutoCommit(false);
            try (PreparedStatement psEmp = conn.prepareStatement(sqlEmpleado);
                 PreparedStatement psNom = conn.prepareStatement(sqlNomina)) {

                psEmp.setString(1, empleado.getDni());
                psEmp.setString(2, empleado.getNombre());
                psEmp.setString(3, String.valueOf(empleado.getSexo()));
                psEmp.setInt(4, empleado.getCategoria());
                psEmp.setInt(5, empleado.getAnyosTrabajados());

                psEmp.setString(6, empleado.getNombre());
                psEmp.setString(7, String.valueOf(empleado.getSexo()));
                psEmp.setInt(8, empleado.getCategoria());
                psEmp.setInt(9, empleado.getAnyosTrabajados());
                psEmp.executeUpdate();

                int sueldoCalculado = Nomina.sueldo(empleado);
                psNom.setString(1, empleado.getDni());
                psNom.setInt(2, sueldoCalculado);
                psNom.setInt(3, sueldoCalculado);
                psNom.executeUpdate();
                conn.commit();
            } catch (SQLException e) {
                conn.rollback();
                System.err.println("Error al procesar la transacción del empleado: " + e.getMessage());
            }
        } catch (SQLException e) {
            System.err.println("Error de conexión a la Base de Datos: " + e.getMessage());
        }
    }

    @Override
    public void altaEmpleado(String rutaTXT) {
        List<Empleado> nuevos = empleadoFTXT.leerEmpleados(rutaTXT);
        for (Empleado emp : nuevos) {
            altaEmpleado(emp);
        }
        System.out.println("Lote procesado. Empleados añadidos a la BD: " + nuevos.size());
    }

    @Override
    public List<Empleado> obtenerTodos() {
        List<Empleado> lista = new ArrayList<>();
        String sql = "SELECT * FROM Empleados";

        try (Connection conn = DBConnection.getConnection();
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery(sql)) {
            while (rs.next()) {
                Character sexo = rs.getString("sexo").charAt(0);
                String dni = rs.getString("dni");
                String nombre = rs.getString("nombre");
                int categoria = rs.getInt("categoria");
                int anyos = rs.getInt("anyos");
                try {
                    Empleado emp = new Empleado(sexo, dni, nombre, categoria, anyos);
                    lista.add(emp);
                } catch (DatosNoCorrectosException e) {
                    System.err.println("Datos erróneos ignorados en DNI: " + dni);
                }
            }
        } catch (SQLException e) {
            System.err.println("Error al obtener la lista de empleados: " + e.getMessage());
        }
        return lista;
    }

    @Override
    public Empleado obtenerPorDni(String dni) {
        String sql = "SELECT * FROM Empleados WHERE dni = ?";
        Empleado empleadoEncontrado = null;

        try (Connection conn = DBConnection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, dni);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    Character sexo = rs.getString("sexo").charAt(0);
                    String nombre = rs.getString("nombre");
                    int categoria = rs.getInt("categoria");
                    int anyos = rs.getInt("anyos");
                    empleadoEncontrado = new Empleado(sexo, dni, nombre, categoria, anyos);
                }
            }
        } catch (Exception e) {
            System.err.println("Error al buscar empleado por DNI: " + e.getMessage());
        }
        return empleadoEncontrado;
    }

    @Override
    public int obtenerSalarioPorDni(String dni) {
        String sql = "SELECT sueldo FROM Nominas WHERE dni = ?";
        int salario = -1;

        try (Connection conn = DBConnection.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, dni);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    salario = rs.getInt("sueldo");
                }
            }
        } catch (SQLException e) {
            System.err.println("Error al obtener el salario desde la BD: " + e.getMessage());
        }
        return salario;
    }

    @Override
    public void realizarCopiaSeguridad(String rutaTXT, String rutaDAT) {
        List<Empleado> todosLosEmpleados = obtenerTodos();
        empleadoFTXT.guardarEmpleados(rutaTXT, todosLosEmpleados);
        empleadoFDat.guardarSueldos(rutaDAT, todosLosEmpleados);
    }
}