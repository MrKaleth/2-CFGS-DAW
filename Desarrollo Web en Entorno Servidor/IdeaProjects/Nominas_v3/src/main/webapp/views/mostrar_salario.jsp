<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Salario del Empleado</title>
    <!-- Ruta absoluta para que no falle el estilo -->
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/styles.css">
</head>
<body>
    <div class="container">
        <h2>Resultado de la Búsqueda</h2>

        <!-- Tabulamos la información (Requisito de la práctica) -->
        <table>
            <thead>
                <tr>
                    <th>DNI del Empleado</th>
                    <th>Salario Actual</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${dniBuscado}</td>
                    <!-- Le añadimos el símbolo de moneda para que quede profesional -->
                    <td>${salarioEncontrado} €</td>
                </tr>
            </tbody>
        </table>

        <br>
        <!-- Botón volver (0,5 puntos) -->
        <a href="${pageContext.request.contextPath}/views/form_salario.jsp" class="btn-volver">Buscar otro DNI</a>
        <a href="${pageContext.request.contextPath}/index.jsp" class="btn-volver" style="background-color: #7f8c8d;">Volver al Menú Principal</a>
    </div>
</body>
</html>