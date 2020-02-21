# MindDen-PruebaTecnica

_API para el portal de anuncios._

He decidido simplificar la implementación. Por este motivo, la aplicación se ha dividido simplemente en tres endpoints, uno para cada rol que va a utilizarla: Comprador, Supervisor y Registrador.

La implementación se ha hecho utilizando NodeJS y MongoDB como base de datos (utilizando mLab como proveedor Database-as-a-Service).

_En el [documento de la arquitectura](https://github.com/pedrotarancon23/MindDen-PruebaTecnica/blob/master/docs/DocumentoArquitectura.pdf) se han incluido más detalles sobre la implementación y se propone una arquitectura basada en microservicios para implantar la aplicación en un entorno real._


## Acceso aplicación

La aplicación está desplegada en Heroku y se ha añadido Swagger para la documentación y pruebas del API. Está accesible en este enlace:
https://mindden-pruebatecnica.herokuapp.com/swagger/

**IMPORTANTE**: para probar los endpoints, se debe **seleccionar el servidor** sobre el cual se quiere ejecutar la petición. Para ello, al principio del Swagger, hay un desplegable para seleccionar localhost o Heroku.

_Puede que tarde en cargar porque en el plan gratiuto de Heroku, el servidor de la aplicación se apaga tras 30 minutos de inactividad, por lo que puede que tenga que iniciarse._

Además, en [docs/MindDen-PruebaTecnica.postman_collection.json](https://github.com/pedrotarancon23/MindDen-PruebaTecnica/blob/master/docs/MindDen-PruebaTecnica.postman_collection.json) se ha incluido una colección de Postman para hacer peticiones a los tres endpoins mencionados anteriormente.


### Instalación

Si se quiere desplegar la aplicación en local, se debe descargar el repositorio, instalar las dependencias y ejecutarla:

```
git clone https://github.com/pedrotarancon23/MindDen-PruebaTecnica.git
cd MindDen-PruebaTecnica/
npm install
npm start     # También se puede iniciar con "node server.js"
```

_Es necesario tener instalado NodeJS para poder instalar y ejecutar la aplicación._


## Autor

* **Pedro Rafael Tarancón Baeza**
