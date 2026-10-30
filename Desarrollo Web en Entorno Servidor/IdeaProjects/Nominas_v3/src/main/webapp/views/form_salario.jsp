<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Consultar Salario</title>

    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/styles.css">
</head>
<body>
    <div class="container">
        <h2>Consultar Salario de Empleado</h2>

        <form action="${pageContext.request.contextPath}/ConsultarSalario" method="POST">
            <div class="form-group">
                <label for="dni">Introduzca el DNI del empleado:</label><br>
                <input type="text" id="dni" name="dni" required placeholder="Ej: 12345678A">
            </div>
            <input type="submit" value="Buscar Salario">
        </form>

        <a href="${pageContext.request.contextPath}/index.jsp" class="btn-volver">Volver al Menú Principal</a>
    </div>
</body>
</html>