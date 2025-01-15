# Proyecto en Java con Spring Boot

Este proyecto fue creado utilizando Spring Boot y generado con la herramienta **Spring Initializr**. La decisión de usar Spring Boot fue tomada debido a su capacidad para simplificar el desarrollo de aplicaciones robustas y escalables.

## Pasos a seguir para configurar el proyecto:

### 1. Crear el proyecto con Spring Initializr

1. Accede a [Spring Initializr](https://start.spring.io/) desde tu navegador.  
2. Configura las opciones principales:
   - **Project**: Maven (predeterminado).
   - **Language**: Java.
   - **Spring Boot**: Selecciona la versión deseada (recomendado: estable más reciente).
   - **Group**: `com.example`.
   - **Artifact**: `demo` (puedes cambiarlo según tu proyecto).
   - **Dependencies**: Añade las dependencias necesarias como Spring Web, Spring Data JPA, MySQL Driver, Lombok, etc.
3. Haz clic en **Generate** para descargar el archivo ZIP del proyecto.

4. Descomprime el archivo ZIP en tu máquina y navega al directorio del proyecto.

### 2. Clonar el repositorio

1. Si estás trabajando con un repositorio de Git, clona el repositorio en tu máquina usando Git Bash o cualquier terminal:

    ```sh
    git clone <URL-del-repo>
    ```

2. Abre el proyecto en tu IDE preferido (por ejemplo, IntelliJ IDEA o Eclipse).

### 3. Configurar el archivo `application.properties` o `application.yml`

1. Dentro de la carpeta `src/main/resources`, abre el archivo `application.properties` o `application.yml` y configura la conexión a la base de datos (si aplica).  
   Ejemplo para MySQL en `application.properties`:

    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/tu_base_de_datos
    spring.datasource.username=tu_usuario
    spring.datasource.password=tu_contraseña
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    ```

2. Asegúrate de que tu base de datos esté corriendo.

### 4. Ejecutar el proyecto

1. Abre una terminal dentro de la carpeta del proyecto.
2. Ejecuta el siguiente comando para compilar y ejecutar el proyecto:

    ```sh
    ./mvnw spring-boot:run
    ```

3. El proyecto estará disponible en `http://localhost:8080` por defecto.

### 5. Verificar las dependencias

Si tienes problemas, asegúrate de que todas las dependencias están correctamente instaladas y resueltas. En caso de problemas con Maven, puedes forzar la actualización de las dependencias:

```sh
./mvnw clean install
```

---

## Comandos usados en la explicación:

- `git clone`: Clona un repositorio de Git.
- `./mvnw spring-boot:run`: Inicia la aplicación Spring Boot usando Maven Wrapper.
- `./mvnw clean install`: Limpia y compila el proyecto descargando las dependencias necesarias.

**Notas importantes:**
- Mantén el archivo `application.properties` protegido si contiene credenciales sensibles.
- Los archivos de configuración como `.properties` y `.yml` no deben ser subidos al repositorio sin enmascarar información sensible.
