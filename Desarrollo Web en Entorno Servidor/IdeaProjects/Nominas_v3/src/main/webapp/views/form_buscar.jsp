<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Buscar Empleado</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/styles.css">
</head>
<body>
    <div class="container">
        <h2>Buscar Empleado en la Base de Datos</h2>

        <form action="${pageContext.request.contextPath}/BuscarEmpleado" method="GET">
            <div class="form-group">
                <label for="criterio">Buscar por (DNI, Nombre, etc.):</label><br>
                <input type="text" id="criterio" name="criterio" required placeholder="Término de búsqueda...">
            </div>
            <input type="submit" value="Buscar Empleados">
        </form>

        <a href="${pageContext.request.contextPath}/index.jsp" class="btn-volver">Volver al Menú Principal</a>
    </div>
</body>
</html>