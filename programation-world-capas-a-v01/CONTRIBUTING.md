# Forma de trabajo

## Alcance y decisiones

El Product Owner define y revisa el alcance. Se mantienen las decisiones del [Project Charter](docs/00-project-charter.md) y de la [revisión de referencias](docs/design/reference-review.md). Las propuestas se identificarán como pendientes hasta su revisión.

## Secuencia de una tarea

1. Definir el objetivo, los criterios de aceptación y el documento afectado.
2. Registrar la tarea y su aceptación en la documentación local; usar GitHub Issues cuando se conecte el repositorio.
3. Trabajar en una rama breve vinculada a la tarea.
4. Implementar o redactar el cambio y actualizar su documentación en la misma rama.
5. Realizar las verificaciones pertinentes y guardar las evidencias útiles.
6. Guardar commits locales con propósito y resultado claros. Cuando se conecte GitHub, abrir un pull request para los cambios de una tarea.
7. Revisar el resultado y aplicar la Definition of Done del Charter antes de cerrar la tarea.

## Arte y referencias

Las imágenes de art/references/originals/ conservan los bytes de los archivos recibidos. Las versiones editadas se guardarán por separado con trazabilidad a su referencia. Los recursos preparados para el juego se incorporarán a assets/game/ cuando existan.

Cada recurso tendrá procedencia, condiciones conocidas de uso y estado de revisión. Las capturas de evidencias no incluirán datos personales de participantes.

## Documentación y versiones

La carpeta local será el lugar de trabajo inicial. Git guardará su historial mediante commits. GitHub recibirá ese historial mediante push cuando se conecte el repositorio. Los ZIP servirán como copias de entrega. Cada tarea incluirá su actualización documental; al terminar un sprint se registrarán revisión y retrospectiva.

La guía de [trabajo local](docs/management/local-workflow.md) indica cómo iniciar el repositorio en la computadora del desarrollador y cuándo hacer el primer push.

Las tareas documentales se verifican por coherencia, integridad y enlaces. Las tareas de software se verificarán según el comportamiento y riesgo del cambio. No se considerará una imagen de concepto como una función implementada.
