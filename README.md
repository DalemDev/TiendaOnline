# Proyecto TiendaOnline

### Libreria a usar

1. React Router Dom = para gestionar las rutas de la app
2. React Icons = para usar iconos en la app
3. Ant Design = componentes reusables con diseño customizable

### Arquitectura a usar

Feature-Based Architecture
Esta arquitectura se basa en organizar las carpetas por funcionalidades en lugar de roles lo que nos permitira tener:

- escalabilidad: facilita agregar nuevas funcionalidades sin que el proyecto se vuelva caótico
- reutilización: los componentes y hooks son faciles de encontrar y reutilizar
- separación de responsabilidades: cada parte de la aplicación tiene un lugar claro
- mantenibilidad: al crecer el proyecto, la estructura es fácil de entender

### Levantar proyecto

Para levantar el proyecto deberemos ejecutar los siguientes comandos:

1. docker compose up -d
2. obtenemos el id ejecutando docker ps y veremos un campo llamado container id lo copiamos para el siguiente paso
3. entrar al contenedor docker exec -ti id_del_contenedor bash
4. ejecutar npm run dev
5. la app se levantara en el puerto 5173 (pueden acceder al navegador y colocar en la barra de busqueda: localhost:5173)
