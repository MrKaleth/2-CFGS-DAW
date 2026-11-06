<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Error del Sistema</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/styles.css">
</head>
<body>
    <div class="container">
        <h2>¡Vaya! Se ha producido un problema</h2>

        <div class="msg-error">
            <p><strong>Detalle:</strong> ${mensajeError}</p>
        </div>

        <a href="${pageContext.request.contextPath}/index.jsp" class="btn-volver">Volver al Menú Principal</a>
    </div>
</body>
</html>