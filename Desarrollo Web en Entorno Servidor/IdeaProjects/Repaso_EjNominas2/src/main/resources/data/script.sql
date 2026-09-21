-- =============================================================================
-- Script de Creación de la Base de Datos - Gestión de Nóminas (Parte 2)
-- Autor: Darío Bonilla
-- Versión: 2.0
-- =============================================================================

-- 1. Crear la base de datos si no existe y seleccionarla
CREATE DATABASE IF NOT EXISTS gestion_nominas;
USE gestion_nominas;

-- 2. Eliminar tablas previas para asegurar un despliegue limpio (en orden inverso por claves ajenas)
DROP TABLE IF EXISTS Nominas;
DROP TABLE IF EXISTS Empleados;

-- 3. Crear la tabla de Empleados (Almacenamiento Principal)
-- Usa la columna 'anyos' para sincronizarse con el código de persistencia Java
CREATE TABLE Empleados (
    dni VARCHAR(9) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    sexo CHAR(1),
    categoria INT,
    anyos INT,
    CONSTRAINT check_sexo CHECK (sexo IN ('M', 'F')),
    CONSTRAINT check_categoria CHECK (categoria BETWEEN 1 AND 10),
    CONSTRAINT check_anyos CHECK (anyos >= 0)
);

-- 4. Crear la tabla de Nominas (Campos Calculados)
-- Usa la columna 'sueldo' y mantiene la integridad referencial en cascada con Empleados
CREATE TABLE Nominas (
    dni VARCHAR(9) PRIMARY KEY,
    sueldo INT NOT NULL,
    FOREIGN KEY (dni) REFERENCES Empleados(dni)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
