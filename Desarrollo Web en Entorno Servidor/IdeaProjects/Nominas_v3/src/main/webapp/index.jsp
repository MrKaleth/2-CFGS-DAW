<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!-- ESTA ES LA LÍNEA QUE FALTABA (Importa JSTL en Jakarta EE) -->
<%@ taglib prefix="c" uri="jakarta.tags.core" %>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Gestión de Nóminas</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/styles.css">
</head>
<body>
<div class="container">
    <h1>Sistema de Gestión de Empleados</h1>

    <c:if test="${not empty mensajeInfo}">
        <div class="msg-info">${mensajeInfo}</div>
    </c:if>

    <p>Seleccione una operación del menú:</p>

    <ul class="menu">
        <li><a href="MostrarEmpleados">1. Mostrar todos los empleados</a></li>
        <li><a href="views/form_salario.jsp">2. Mostrar salario de un empleado</a></li>
        <li><a href="views/form_buscar.jsp">3. Buscar / Modificar empleado</a></li>
    </ul>
</div>
</body>
</html>