package laboral.utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * Clase utilitaria para gestionar la conexión a la Base de Datos MariaDB.
 * Centraliza las credenciales y el acceso mediante el patrón Singleton.
 */
public class DBConnection {

    private static final String URL = "jdbc:mariadb://localhost:3306/gestion_nominas";
    private static final String USER = "root";
    private static final String PASSWORD = "123456";

    private DBConnection() {
    }

    /**
     * Establece y devuelve una conexión activa con la base de datos MariaDB.
     *
     * @return Objeto Connection activo.
     * @throws SQLException Si ocurre algún error al conectar.
     */
    public static Connection getConnection() throws SQLException {
        try {
            Class.forName("org.mariadb.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            System.err.println("Driver de MariaDB no encontrado en el classpath: " + e.getMessage());
        }

        return DriverManager.getConnection(URL, USER, PASSWORD);
    }
}