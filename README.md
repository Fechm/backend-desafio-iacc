# Documentación aplicación con NestJS, Postgres y Docker

## Descripción

Este proyecto es una aplicación desarrollada con NestJS, que utiliza PostgreSQL como base de datos y se ejecuta en un entorno de Docker. La aplicación implementa un CRUD básico para gestionar cursos y alumnos.

## Requisitos previos

Asegúrate de tener instalados los siguientes componentes antes de comenzar:

- Node.js (versión 16.0.0)
- Docker (versión 24.0.2)

## Instalación

Sigue estos pasos para instalar y configurar la aplicación:

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/nestjs-app.git
```
2. Navega hasta el directorio del proyecto:
```bash
cd backend-desafio-iacc
```
3. Instala las dependencias del proyecto:
```bash
npm install
```
4. Copia el archivo .env.example y renómbralo como .development.env. Asegúrate de configurar las variables de entorno adecuadas, como las credenciales de la base de datos.
5. Inicia el contenedor de Docker para la base de datos PostgreSQL:
```bash
docker-compose up -d
```

## Configuración Base de Datos

La aplicación utiliza PostgreSQL como base de datos. Asegúrate de tener una instancia de PostgreSQL en ejecución con las siguientes configuraciones:
* HOST = localhost
* PORT = 5432
* USER = felipe
* PASSWORD = iaccpass2023
* NAME = iacc_desafio2023

Se deben configurar todos los datos dentro del archivo .env 

## Ejecución de la aplicación

Una vez que la base de datos está configurada y en ejecución, puedes iniciar la aplicación con el siguiente comando:
```bash
npm run start:dev
```
La aplicación se ejecutará en modo de desarrollo y estará disponible en http://localhost:3000.

## Build

Para generar una versión compilada de la aplicación, puedes utilizar el siguiente comando:
```bash
npm run build
```
Este comando generará una carpeta dist que contiene los archivos compilados de la aplicación.

## Artillery

la ruta del archivo asciiart-load-test.yml es la siguiente
```bash
artillery\asciiart-load-test.yml
```

**Resultado** <br>


# API endpoints

A continuación se detallan los endpoints disponibles en esta API.

## GET
**Estudiantes** <br>
`LISTAR TODOS` [/estudiantes](#get-estudiantes) <br>
`LISTAR POR ID` [/estudiantes/`{id}`](#get-estudiantesid) <br>

**Cursos** <br>
`LISTAR TODOS` [/cursos](#get-cursos) <br>
`LISTAR POR ID` [/cursos/`{id}`](#get-cursosid) <br>
## POST
**Estudiantes** <br>
`CREAR ESTUDIANTE` [/estudiantes](#post-estudiantes) <br>
`ASIGNAR CURSO A ESTUDIANTE` [/estudiantes/`{idEstudiante}`/cursos/`{idCurso}`](#post-estudiantesidestudiantecursosidcurso) <br>

**Cursos** <br>
`CREAR CURSO` [/cursos](#post-cursos) <br>
## PATCH
**Estudiantes** <br>
`ACTUALIZAR` [/estudiantes/`{id}`](#patch-estudiantesid) <br>

**Cursos** <br>
`ACTUALIZAR` [/cursos/`{id}`](#patch-cursosid) <br>

## DELETE
**Estudiantes** <br>
`ELIMINAR` [/estudiantes/`{id}`](#delete-estudiantesid) <br>

**Cursos** <br>
`ELIMINAR` [/cursos/`{id}`](#delete-cursosid) <br>

### GET /estudiantes
Devuelve una lista de todos los estudiantes registrados en el sistema.



**Response**

```
// Todos los estudiantes
[
	{
		"id": "bd60910d-6c9c-420d-bfeb-9400091b5fc6",
		"createdAt": "2023-06-19T12:28:34.684Z",
		"updatedAt": "2023-06-19T12:28:34.684Z",
		"firstname": "Carolina",
		"lastname": "Muñoz",
		"email": "carolinabeatrizmp@gmail.com",
		"age": "27",
		"address": "big mountain"
	},
	{
		"id": "e50d7a76-614a-4763-b1d8-f8f9185d9cfa",
		"createdAt": "2023-06-19T12:29:20.261Z",
		"updatedAt": "2023-06-19T12:29:20.261Z",
		"firstname": "Emilio",
		"lastname": "Montoya",
		"email": "e.montoya@gmail.com",
		"age": "35",
		"address": "san pedro 8728"
	},
	{
		"id": "70426d41-1f75-4653-b264-0a8a30dc21fb",
		"createdAt": "2023-06-19T12:29:57.795Z",
		"updatedAt": "2023-06-19T12:29:57.795Z",
		"firstname": "Sebastian",
		"lastname": "Montoya",
		"email": "s.montoya@gmail.com",
		"age": "37",
		"address": "san pedro 8728"
	},
	{
		"id": "19659de9-8371-4361-a7e7-37a0266a83e9",
		"createdAt": "2023-06-19T12:30:28.649Z",
		"updatedAt": "2023-06-19T12:30:28.649Z",
		"firstname": "Juan",
		"lastname": "Montoya",
		"email": "j.montoya@gmail.com",
		"age": "17",
		"address": "san juan 103"
	},
	{
		"id": "f654f1e9-92ac-4298-870c-868c2f089245",
		"createdAt": "2023-06-19T12:31:07.906Z",
		"updatedAt": "2023-06-19T12:31:07.906Z",
		"firstname": "Felipe",
		"lastname": "Chávez",
		"email": "f.chavez@gmail.com",
		"age": "27",
		"address": "san nicolas 103"
	}
]
```
___

### GET /estudiantes/`{id}`
Devuelve devuelve un estudiante que coincida con el valor entregado por el parámetro `{id}` en la URL.



**Response**

```
// Buscando estudiante con id bd60910d-6c9c-420d-bfeb-9400091b5fc6
{
	"id": "bd60910d-6c9c-420d-bfeb-9400091b5fc6",
	"createdAt": "2023-06-19T12:28:34.684Z",
	"updatedAt": "2023-06-19T12:28:34.684Z",
	"firstname": "Carolina",
	"lastname": "Muñoz",
	"email": "carolinabeatrizmp@gmail.com",
	"age": "27",
	"address": "big mountain"
}
```
___
### GET /cursos
Devuelve una lista de todos los `cursos` registrados en el sistema.


**Response**

```
// Todos los cursos
{
		"id": "8ac10e64-673e-4a30-9d0d-623881ae6083",
		"createdAt": "2023-06-19T16:40:09.071Z",
		"updatedAt": "2023-06-19T16:40:09.071Z",
		"name": "Estructura de Datos",
		"code": "0000001",
		"year": 2023,
		"semester": 1,
		"campus": "Fdo. May"
	},
	{
		"id": "e12da5e0-fcb7-4a54-9e1c-3e4f7cb9f4e8",
		"createdAt": "2023-06-19T16:40:34.739Z",
		"updatedAt": "2023-06-19T16:40:34.739Z",
		"name": "Calculo Diferencial",
		"code": "0000002",
		"year": 2023,
		"semester": 1,
		"campus": "Fdo. May"
	},
	{
		"id": "29174b84-0ece-4b05-bf6b-ae9fa58c62df",
		"createdAt": "2023-06-19T16:40:49.534Z",
		"updatedAt": "2023-06-19T16:40:49.534Z",
		"name": "Inglés",
		"code": "0000003",
		"year": 2023,
		"semester": 1,
		"campus": "Fdo. May"
	},
	{
		"id": "5fab22fc-9351-4c4e-8e97-109d48433908",
		"createdAt": "2023-06-19T16:41:02.488Z",
		"updatedAt": "2023-06-19T16:41:02.488Z",
		"name": "Lenguaje y Comunicación",
		"code": "0000004",
		"year": 2023,
		"semester": 1,
		"campus": "Fdo. May"
	},
	{
		"id": "8b50fb6b-da36-4a3c-8c65-495481050de0",
		"createdAt": "2023-06-19T16:41:19.557Z",
		"updatedAt": "2023-06-19T16:41:19.557Z",
		"name": "Introducción a la programación",
		"code": "0000005",
		"year": 2023,
		"semester": 1,
		"campus": "Fdo. May"
	}
]
```
___

### GET /cursos/`{id}`
Devuelve devuelve un `curso` que coincida con el valor entregado por el parámetro `{id}` en la URL.



**Response**

```
// Buscando curso con id 8b50fb6b-da36-4a3c-8c65-495481050de0
{
	"id": "8b50fb6b-da36-4a3c-8c65-495481050de0",
	"createdAt": "2023-06-19T16:41:19.557Z",
	"updatedAt": "2023-06-19T16:41:19.557Z",
	"name": "Introducción a la programación",
	"code": "0000005",
	"year": 2023,
	"semester": 1,
	"campus": "Fdo. May"
}
```
### POST /estudiantes
Crea un nuevo estudiante en el sistema. Debes enviar un objeto JSON con la siguiente estructura:

**Parámetros**

|          Nombre | Requerido |  Tipo   | Descripción                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `id` | requerido | string  | Identificador único del curso, representado en formato UUID.                                                                     |
|     `firstname` | requerido | string  | Primer nombre del estudiante.                                                                     |
|     `lastname` | requerido | string  | Apellido del estudiante.                                                                     |
|     `email` | requerido | string  | Correo electronico del estudiante.                                                                     |
|     `age` | requerido | string  | Edad del estudiante.                                                                     |
|     `address` | requerido | string  | Dirección del estudiante.                                                                     |
|     `createdAt` | opcional | timestamp  | Fecha en la que es registrado el estudiante en la BD.                                                                     |
|     `updatedAt` | opcional | timestamp  | Fecha en la que ocurre un cambio del registro de un estudiante en la BD.                                                                     |

**Response**

```
//Success output
{
	"firstname": "Felipe",
	"lastname": "Chávez",
	"email": "f.chavez@gmail.com",
	"age": "27",
	"address": "san nicolas 103",
	"id": "f654f1e9-92ac-4298-870c-868c2f089245",
	"createdAt": "2023-06-19T12:31:07.906Z",
	"updatedAt": "2023-06-19T12:31:07.906Z"
}

//Error output

{
	"statusCode": 400,
	"message": [
		"email should not be empty",
		"email must be a string"
	],
	"error": "Bad Request"
}
```
### POST /cursos
Crea un nuevo `curso` en el sistema. Debes enviar un objeto JSON con la siguiente estructura:

**Parámetros**

|          Nombre | Requerido |  Tipo   | Descripción                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `id` | automático | string  | Identificador único del curso, representado en formato UUID.                                                                     |
|     `name` | requerido | string  | Nombre del curso registrado.                                                                     |
|     `code` | requerido | string  | Codigo del curso registrado.                                                                     |
|     `year` | requerido | number  | Año en el que se imparte el curso registrado.                                                                     |
|     `semester` | requerido | number  | Semestre en el que se imparte el curso registrado.                                                                     |
|     `campus` | requerido | string  | Sede en el que se da a lugar el curso registrado.                                                                     |
|     `createdAt` | automático | timestamp  | Fecha en la que es registrado el estudiante en la BD.                                                                     |
|     `updatedAt` | automático | timestamp  | Fecha en la que ocurre un cambio del registro de un estudiante en la BD.                                                                     |

**Response**

```
//Success output
{
	"name": "Introducción a la programación",
	"code": "0000005",
	"year": 2023,
	"semester": 1,
	"campus": "Fdo. May",
	"id": "8b50fb6b-da36-4a3c-8c65-495481050de0",
	"createdAt": "2023-06-19T16:41:19.557Z",
	"updatedAt": "2023-06-19T16:41:19.557Z"
}

//Error output

{
	"statusCode": 400,
	"message": [
		"name should not be empty",
		"name must be a string",
		"code should not be empty",
		"code must be a string",
		"year should not be empty",
		"year must be a number conforming to the specified constraints",
		"semester should not be empty",
		"semester must be a number conforming to the specified constraints",
		"campus should not be empty",
		"campus must be a string"
	],
	"error": "Bad Request"
}
```
### POST /estudiantes/`{idEstudiante}`/cursos/`{idCurso}`
Crea una relación entre estudiante y curso en el sistema. Debes enviar por URL en `{idEstudiante}` el id del estudiante que quieres crear la relación y en `{idCurso}` el id del curso donde quieres registrar al estudiante.

**Response**

```
//Success output
//idEstudiante: e12da5e0-fcb7-4a54-9e1c-3e4f7cb9f4e8
//idCurso: f654f1e9-92ac-4298-870c-868c2f089245
{
	"course": {
		"id": "e12da5e0-fcb7-4a54-9e1c-3e4f7cb9f4e8",
		"createdAt": "2023-06-19T16:40:34.739Z",
		"updatedAt": "2023-06-19T16:40:34.739Z",
		"name": "Calculo Diferencial",
		"code": "0000002",
		"year": 2023,
		"semester": 1,
		"campus": "Fdo. May"
	},
	"student": {
		"id": "f654f1e9-92ac-4298-870c-868c2f089245",
		"createdAt": "2023-06-19T12:31:07.906Z",
		"updatedAt": "2023-06-19T12:31:07.906Z",
		"firstname": "Felipe",
		"lastname": "Chávez",
		"email": "f.chavez@gmail.com",
		"age": "27",
		"address": "san nicolas 103"
	},
	"id": "bad42d2b-4258-4260-b6f7-9aa7de66650a",
	"createdAt": "2023-06-19T16:42:59.072Z",
	"updatedAt": "2023-06-19T16:42:59.072Z"
}

//Error output

{
	"message": "invalid input syntax for type uuid: \"e12da5e0-fcb7-4a54-9e1c-3e4f7cbsd4e8\""
}
```
### PATCH /estudiantes/`{id}`
Modifica uno o multipes campos de un `estudiante` previamente registrado en la BD. Debes enviar un objeto JSON con la siguiente estructura:

**Parámetros**

|          Nombre | Requerido |  Tipo   | Descripción                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `firstname` | opcional | string  | Primer nombre del estudiante.                                                                     |
|     `lastname` | opcional | string  | Apellido del estudiante.                                                                     |
|     `email` | opcional | string  | Correo electronico del estudiante.                                                                     |
|     `age` | opcional | string  | Edad del estudiante.                                                                     |
|     `address` | opcional | string  | Dirección del estudiante.                                                                     |

**Response**

```

//id: bd60910d-6c9c-420d-bfeb-9400091b5fc6
//Body JSON
{
	"age":"80"
}
//Success output
{
	"generatedMaps": [],
	"raw": [],
	"affected": 1
}

//Error output

{
	"statusCode": 400,
	"message": "BAD_REQUEST :: No se pudo actualizar"
}
```
### PATCH /cursos/`{id}`
Modifica uno o multipes campos de un `curso` previamente registrado en la BD. Debes enviar un objeto JSON con la siguiente estructura:

**Parámetros**

|          Nombre | Requerido |  Tipo   | Descripción                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `name` | opcional | string  | Nombre del curso registrado.                                                                     |
|     `code` | opcional | string  | Codigo del curso registrado.                                                                     |
|     `year` | opcional | number  | Año en el que se imparte el curso registrado.                                                                     |
|     `semester` | opcional | number  | Semestre en el que se imparte el curso registrado.                                                                     |
|     `campus` | opcional | string  | Sede en el que se da a lugar el curso registrado.                                                                     |

**Response**

```

//id: 8ac10e64-673e-4a30-9d0d-623881ae6083
//Body JSON
{
	"name":"Física"
}
//Success output
{
	"generatedMaps": [],
	"raw": [],
	"affected": 1
}

//Error output

{
	"statusCode": 400,
	"message": "BAD_REQUEST :: No se pudo actualizar"
}
```
### DELETE /estudiantes/`{id}`
Elimina un estudiante del sistema. Debes enviar por URL en `{id}` el id del estudiante que quieres eliminar.

**Response**

```
//Success output
//id: c8e85173-5709-467f-aba9-f3f3bab5dd3a
{
	"raw": [],
	"affected": 1
}
```

### DELETE /cursos/`{id}`
Elimina un curso del sistema. Debes enviar por URL en `{id}` el id del curso que quieres eliminar.

**Response**

```
//Success output
//id: 29174b84-0ece-4b05-bf6b-ae9fa58c62df
{
	"raw": [],
	"affected": 1
}
```

# Comandos Curl

A continuación se detallan los comandos curl utilizados para testear los endpoints disponibles en esta API.

**GET Estudiantes**
```bash
curl -X GET http://localhost:3000/estudiantes -H 'Content-Type: application/json'

curl -X GET http://localhost:3000/estudiantes/bd60910d-6c9c-420d-bfeb-9400091b5fc6 -H 'Content-Type: application/json'
```

**GET Cursos**
```bash
curl -X GET http://localhost:3000/cursos -H 'Content-Type: application/json'

curl -X GET http://localhost:3000/cursos/5fab22fc-9351-4c4e-8e97-109d48433908 -H 'Content-Type: application/json'
```

**POST Estudiantes**
```bash
curl -X POST http://localhost:3000/estudiantes -H 'Content-Type: application/json' -d '{"firstname":"Juan","lastname":"Martinez","email":"mail@mail.com","age":"20","address":"los volcanes 4"}'
```
**POST Asignación Estudiante a curso**
```bash
curl -X POST http://localhost:3000/estudiantes/e50d7a76-614a-4763-b1d8-f8f9185d9cfa/cursos/5fab22fc-9351-4c4e-8e97-109d48433908 -H 'Content-Type: application/json'
```
**POST Crear Curso**
```bash
curl -X POST http://localhost:3000/cursos -H 'Content-Type: application/json' -d '{"name":"Computación","code":"0000006","year":2023,"semester":1,"campus":"Fdo. May"}'
```

**UPDATE Estudiante**
```bash
curl -X PATCH http://localhost:3000/estudiantes/70426d41-1f75-4653-b264-0a8a30dc21fb -H 'Content-Type: application/json' -d '{"firstname":"Marcelo"}'
```

**UPDATE Curso**
```bash
curl -X PATCH http://localhost:3000/cursos/308d4c81-7912-477a-8df7-59fe02f43ef8 -H 'Content-Type: application/json' -d '{"name":"Computación I"}'
```