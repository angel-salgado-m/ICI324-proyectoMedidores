# Documentación API REST de proyecto de medidores de gas

# Introducción

Esta API proporciona consultas y datos generales de la base de datos a ser utilizada para la aplicación web de medidores de gas, para ser usado por sus trabajadores.
Contiene distintos tipos de consultas a las tablas disponibles y tambien actualizaciones a distintas tablas.


### Versiones
- [v1]: [Primera iteración de la API, queries CRUD basicas]

## Endpoints

### **[cliente]**
Obtener todos los clientes:
- **Método HTTP**: [GET]
- **Ruta**: [/cliente/allClientes]
- **Descripción**: [Este endpoint devuelve todos los clientes disponibles en la base de datos.]
- **Parámetros de entrada**:
  - No tiene parametros de entrada
- **Respuestas esperadas**:
  - Código de estado 200: [Cuando se devuelve el JSON de la tabla clientes correctamente.]
  - Código de estado 500: [Cuando el back-end no encuentra la tabla de clientes o no se conecta a la base de datos]

### **[Trabajador]**
Obtener todos los trabajadores
- **Método HTTP**: [GET]
- **Ruta**: [/trabajador/allTrabajadores]
- **Descripción**: [Este endpoint permite obtener una lista de todos los trabajadores registrados en el sistema.]
- **Parámetros de entrada**:
  - No tiene parametros de entrada.
- **Respuestas esperadas**:
  - Código de estado 200: [Se devuelve el JSON de la tabla trabajador correctamente]
  - Código de estado 500: [Cuando el back-end no encuentra la tabla de trabajadores o no se conecta a la base de datos]

Obtener trabajador por cargo
- **Método HTTP**: [GET]
- **Ruta**: [/trabajador/:cargo]
- **Descripción**: [Este endpoint permite obtener una lista de todos los trabajadores registrados en el sistema segun su cargo.]
- **Parámetros de entrada**:
  - `cargo` (obligatorio): El cargo de los trabajadores que se quieren ver (Puede ser "Lector" o "Inspector")
- **Respuestas esperadas**:
  - Código de estado 200: [Se devuelve el JSON de la consulta correctamente]
  - Código de estado 400: [Cuando el cargo que se busca no es valido]
  - Código de estado 500: [Cuando el back-end no ejecuta bien la consulta o no se conecta a la base de datos]

Actualizar nombre del trabajador
- **Método HTTP**: [PUT]
- **Ruta**: [/trabajador/:rut]
- **Descripción**: [Este endpoint permite cambiar el nombre a un trabajador segun su RUT]
- **Parámetros de entrada**:
  - `rut` (obligatorio): El rut del trabajador al que se le cambiara el nombre.
- **Respuestas esperadas**:
  - Código de estado 200: [Se devuelve un JSON con el codigo y la cantidad de filas afectadas.]
  - Código de estado 500: [Cuando el back-end no ejecuta bien la consulta o no se conecta a la base de datos]

### **[Consultas]**
Obtener resultados de consultas por ID
- **Método HTTP**: [GET]
- **Ruta**: [/consulta/:id]
- **Descripción**: [Este endpoint permite ejecutar una consulta específica en la base de datos y recuperar sus resultados.]
- **Parámetros de entrada**:
  - `id` (obligatorio): El ID de la consulta que se ejecutará.
- **Respuestas esperadas**:
  - Código de estado 200: [La solicitud se completó con éxito y se devuelven los resultados de la consulta.]
  - Código de estado 400: [La consulta especificada no se encontró o no es válida.]
  - Código de estado 500: [Cuando existe un error interno en el servidor]

**Consultas SELECT disponibles**
1. Mostrar a todos los trabajadores y sus sectores.
2. Mostrar todas las direcciones y los nombres de los clientes correspondientes.
3. Seleccionar todos los trabajadores y sus respectivos sectores y rutas.
4. Obtener todas las direcciones de una sucursal específica.
5. Listar todos los registros que son del tipo 'Novedad'.

## Autenticación y Autorización
Detalles sobre cómo los clientes deben autenticarse y posiblemente autorizarse para acceder a ciertos recursos.

- **Autenticación**:
  - [Descripción de métodos de autenticación]
- **Autorización**:
  - [Descripción de métodos de autorización]

## Errores
Descripción de posibles códigos de error y su significado.

- Código de estado 400: [Descripción]
- Código de estado 401: [Descripción]
- Código de estado 403: [Descripción]
- Código de estado 404: [Descripción]

(Repita esta sección para describir todos los códigos de error relevantes)

## Ejemplos
Ejemplos de solicitudes y respuestas para cada endpoint.

### [Nombre del Endpoint 1]
#### Solicitud de Ejemplo