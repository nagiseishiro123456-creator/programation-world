# Forma de trabajo

## Alcance

El Product Owner define y revisa el alcance conforme al [Charter](docs/00-project-charter.md). Desde el 2026-10-20 autoriza al asistente a preparar e incorporar commits dentro de las tareas acordadas. Las nuevas decisiones de diseño y la aceptación visual se mantienen paso a paso.

El repositorio es [programation-world](https://github.com/nagiseishiro123456-creator/programation-world). La carga inicial se ordenó conservando el historial; el [registro de importación](docs/management/importacion-inicial.md) conserva su trazabilidad.

## Secuencia de una tarea

1. Definir objetivo, criterios de aceptación, dependencias y documento afectado.
2. Registrar la tarea en el backlog o en una issue, indicando lo aprobado y lo pendiente.
3. Usar una rama breve para cambios de implementación; describir el resultado en el pull request.
4. Actualizar código, documentación y evidencias en la misma unidad de trabajo.
5. Ejecutar las verificaciones pertinentes y revisar sus resultados.
6. Incorporar el cambio al repositorio y comunicar el commit y sus límites.
7. Aplicar la Definition of Done antes de cerrar la tarea. La aceptación visual corresponde al Product Owner.

La normalización de la importación es un cambio de integración sobre main. Los siguientes cambios de implementación seguirán el flujo de rama y revisión. No se modifica el historial mediante force push.

## Arte

Conservar las fuentes y los originales; las modificaciones y exportaciones se guardan por separado con procedencia. Cada recurso debe indicar sus condiciones conocidas de uso y revisión. No se atribuye una licencia que aún no se haya decidido.

Una imagen conceptual no equivale a una función implementada. Una prueba de píxeles o de un adaptador DOM no equivale a ejecutar el navegador.

## Verificaciones y documentación

El [README](README.md) enumera los controles actuales y los visores. GitHub Actions conserva los resultados asociados a cada revisión de código. Los registros históricos en docs/qa/ mantienen su contexto; no se reutilizan como prueba de una ejecución nueva.

Cada tarea incluye qué cambió, por qué, cómo se comprobó y qué falta. Al cerrar un sprint se documentan revisión y retrospectiva. La [guía de GitHub](docs/management/local-workflow.md) explica la sincronización de la copia local.

Los documentos se revisan por coherencia y enlaces. Los cambios de software se comprueban según su comportamiento y riesgo. No subir credenciales, datos personales de participantes, dependencias descargadas ni archivos de entorno.
