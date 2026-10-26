<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Modificar Empleado</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/styles.css">
</head>
<body>
    <div class="container">
        <h2>Modificar Datos de: ${empleado.nombre}</h2>

        <form action="${pageContext.request.contextPath}/ModificarEmpleado" method="POST">
            <!-- El DNI se envía pero no se puede modificar (readonly) -->
            <div class="form-group">
                <label>DNI:</label><br>
                <input type="text" name="dni" value="${empleado.dni}" readonly style="background-color: #eee;">
            </div>

            <div class="form-group">
                <label>Nombre:</label><br>
                <input type="text" name="nombre" value="${empleado.nombre}" required>
            </div>

            <div class="form-group">
                <label>Sexo (M/F):</label><br>
                <input type="text" name="sexo" value="${empleado.sexo}" maxlength="1" required>
            </div>

            <div class="form-group">
                <label>Categoría (1-10):</label><br>
                <input type="number" name="categoria" value="${empleado.categoria}" min="1" max="10" required>
            </div>

            <div class="form-group">
                <label>Años Trabajados:</label><br>
                <input type="number" name="anyos" value="${empleado.anyosTrabajados}" min="0" required>
            </div>

            <input type="submit" value="Guardar Cambios y Recalcular Sueldo">
        </form>

        <a href="${pageContext.request.contextPath}/index.jsp" class="btn-volver">Cancelar y Volver</a>
    </div>
</body>
</html>