# Prácticas DOM - Eventos

## 📜 Introducción

Se incluyen en este repositorio:
- Un archivo .html con la estructura de una página donde hay:
  - un formulario.
  - un contenedor con el id "wall" ("pared").
- Un archivo .css para posicionar todo correctamente y aplicar estilos generales a la maqueta.
- Un archivo main.js vacío.

Todos los recursos ya se encuentran debidamente relacionados a nivel código.

De esta forma sólo se necesita editar el archivo main.js para cumplir con la tarea.

---

## 🎯 Tarea

En el archivo main.js definir las funciones, variables y métodos para que el proyecto terminado cumpla con estos requisitos:

1. Que al hacer submit en el form se genere un div con clase "mensaje" y se anexe dentro de #wall

1. 1. Si no existe, agregar un input de tipo texto al form y modificar el script para que ese texto se incluya en un párrafo adentro de cada nuevo .mensaje
   1. Evitar que el input quede vacío.

1. Si no existe, agregar un input de tipo color al form y modificar el script para que el texto del nuevo .mensaje sea del color seleccionado

1. Agregar una X dentro de un span con clase "close" en cada .graffiti nuevo para agregar la funcionalidad de eliminar ese graffiti

1. Agregar un input de tipo checkbox al form y modificar el script para que el .mensaje tenga la clase .poster en lugar de .graffiti

1. BONUS- Al hacer submit, los inputs del formulario deben volver a los valores iniciales


---

## 🔮 Aclaración

Si algún punto ya está resuelto mediante el código HTML o CSS provisto, desestimarlo de la lista de tareas.

---

## 🔗 Links
- https://www.w3schools.com/js/js_events.asp
- https://www.w3schools.com/jsref/dom_obj_event.asp
- https://developer.mozilla.org/es/docs/Web/Events