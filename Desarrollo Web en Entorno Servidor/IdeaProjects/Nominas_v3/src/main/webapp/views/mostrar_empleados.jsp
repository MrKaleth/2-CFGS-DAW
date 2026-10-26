<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!-- Importamos JSTL para poder hacer el bucle forEach -->
<%@ taglib prefix="c" uri="jakarta.tags.core" %>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Listado de Empleados</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/styles.css">
</head>
<body>
    <div class="container">
        <h2>Listado de Todos los Empleados</h2>

        <c:choose>
            <c:when test="${empty empleados}">
                <div class="msg-info">No hay empleados registrados en la base de datos.</div>
            </c:when>
            <c:otherwise>
                <!-- Información tabulada y ordenada (Requisito) -->
                <table>
                    <thead>
                        <tr>
                            <th>DNI</th>
                            <th>Nombre</th>
                            <th>Sexo</th>
                            <th>Categoría</th>
                            <th>Años Trabajados</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- Bucle que recorre la lista que le envió el Servlet -->
                        <c:forEach var="emp" items="${empleados}">
                            <tr>
                                <td>${emp.dni}</td>
                                <td>${emp.nombre}</td>
                                <td>${emp.sexo}</td>
                                <td>${emp.categoria}</td>
                                <td>${emp.anyosTrabajados}</td>
                            </tr>
                        </c:forEach>
                    </tbody>
                </table>
            </c:otherwise>
        </c:choose>

        <br>
        <!-- Botón volver (0,5 puntos) -->
        <a href="${pageContext.request.contextPath}/index.jsp" class="btn-volver">Volver al Menú Principal</a>
    </div>
</body>
</html>