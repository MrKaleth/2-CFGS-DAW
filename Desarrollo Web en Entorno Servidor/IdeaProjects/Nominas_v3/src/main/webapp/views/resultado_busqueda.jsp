<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Resultados de la Búsqueda</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/styles.css">
</head>
<body>
    <div class="container">
        <h2>Resultados para: "${criterio}"</h2>

        <c:choose>
            <c:when test="${empty empleados}">
                <div class="msg-info">No se ha encontrado ningún empleado con ese criterio.</div>
            </c:when>
            <c:otherwise>
                <table>
                    <thead>
                        <tr>
                            <th>DNI</th>
                            <th>Nombre</th>
                            <th>Sexo</th>
                            <th>Categoría</th>
                            <th>Años Trabajados</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <c:forEach var="emp" items="${empleados}">
                            <tr>
                                <td>${emp.dni}</td>
                                <td>${emp.nombre}</td>
                                <td>${emp.sexo}</td>
                                <td>${emp.categoria}</td>
                                <td>${emp.anyosTrabajados}</td>
                                <td>
                                    <!-- Enlace funcional para modificar el empleado -->
                                    <a href="${pageContext.request.contextPath}/ModificarEmpleado?dni=${emp.dni}"
                                       style="background:#f39c12; color:white; padding:5px 10px; text-decoration:none; border-radius:3px; display:inline-block;">
                                       Modificar
                                    </a>
                                </td>
                            </tr>
                        </c:forEach>
                    </tbody>
                </table>
            </c:otherwise>
        </c:choose>

        <br>
        <a href="${pageContext.request.contextPath}/views/form_buscar.jsp" class="btn-volver">Nueva Búsqueda</a>
        <a href="${pageContext.request.contextPath}/index.jsp" class="btn-volver" style="background-color: #7f8c8d;">Menú Principal</a>
    </div>
</body>
</html>