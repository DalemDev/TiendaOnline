# Proyecto TiendaOnline

### Libreria a usar

1. React Router Dom = para gestionar las rutas de la app
2. React Icons = para usar iconos en la app
3. Ant Design = componentes reusables con diseño customizable
4. React Toastify = para renderizar notificaciones de una forma sencilla

### Arquitectura a usar

Feature-Based Architecture
Esta arquitectura se basa en organizar las carpetas por funcionalidades en lugar de roles lo que nos permitira tener:

- escalabilidad: facilita agregar nuevas funcionalidades sin que el proyecto se vuelva caótico
- reutilización: los componentes y hooks son faciles de encontrar y reutilizar
- separación de responsabilidades: cada parte de la aplicación tiene un lugar claro
- mantenibilidad: al crecer el proyecto, la estructura es fácil de entender

### REGLAS Y CONVENCIONES

* usar nombres de carpetas alusivas a lo que se va a desarrollar (ejemplo: login, checkout, etc)
* usar:
  - camelCase para variables, constantes, funciones, carpetas
  - UpperCamelCase para nombre de archivos (index es una excepcion para UpperCamelCase) y clases
* usar identado de codigo se recomienda usar (prettier) se añadio configuracion de prettier en .prettierrc
* se debe trabajar en una rama creada a partir de master cuando se vayan a implementar nuevas cosas y seguir la siguiente convencion:
  - f-nueva_funcionalidad: se usa esta convencion para nuevas funcionalidades que se agreguen
  - h-correccion: se sigue esta convencion para correccion a bugs o procesos
* una vez se termina el desarrollo o correccion se debe subir la rama y generar un nuevo pull request de la rama subida contra master y se debe esperar que el encargado revise el codigo y acepte el pull request
* evitar codigo duplicado y seguir convenciones y buenas practicas como patrones de diseño y codigo limpio de Robert C. Martin
* agregar commits alusivos a lo que se hizo en dicho commit esto para identificar mas rapido bugs o problemas en el codigo, evitar escribir commits demasiado explicativos, resumir en pocas palabras lo que se hizo
* pueden usar los iconos de antdesign asi mismo como los de react-icons no usar imagenes como iconos
* si se van a agregar imagenes al proyecto estan deben ser optimizadas para la web y su formato debe ser webp

### Levantar proyecto

Para levantar el proyecto deberemos ejecutar los siguientes comandos:

1. docker compose up -d
2. obtenemos el id ejecutando docker ps y veremos un campo llamado container id lo copiamos para el siguiente paso
3. entrar al contenedor docker exec -ti id_del_contenedor bash
4. ejecutar npm i y luego npm run dev
5. la app se levantara en el puerto 5173 (pueden acceder al navegador y colocar en la barra de busqueda: localhost:5173)

### Secciones del proyecto

* Login (modal)
* Header (logo, barra de busqueda, planes, categorias, lista de deseos, carrito, iniciar sesion)
* Home (productos en tendencia, lo mas vendido, nuevos productos)
* socios
* footer
* admin

### Comenzar empezar a trabajar

* clonar el proyecto con "git clone https://github.com/DalemDev/TiendaOnlineFront.git"
* abrir la carpeta en vs code
* abrir la terminal y ejecutar "git checkout -b nombre_rama" esto siguiendo las conveciones antes mencionadas
* empezar a desarrollar lo propuesto una vez terminado ejecutar
   - git add . (para agregar todos los cambios al stage de git)
   - git commit -m "mensaje_commit" (seguir las convenciones antes mencionadas)
   - git push origin nombre_rama (esto pusheara su rama al repositorio)
* dirigirse al repositorio y dar clic en "Pull requests" > "New pull request" > base: su rama > create pull request
* esperar revisión y aprobación
