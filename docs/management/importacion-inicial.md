# Importación inicial y estado del proyecto

- Proyecto: programation-world.
- Fecha: 2026-10-20.
- Repositorio: https://github.com/nagiseishiro123456-creator/programation-world.
- Carga del usuario: [08071eb](https://github.com/nagiseishiro123456-creator/programation-world/commit/08071ebd869dddef62856ec791210ca5d688799f).
- Integración: [1cb3d39](https://github.com/nagiseishiro123456-creator/programation-world/commit/1cb3d39c60a7f07921dfa8cbcd59b7b487003388).
- Estado: contenido integrado en la raíz; verificaciones automatizadas superadas en Linux y Windows.

## Autorización vigente

El Product Owner autorizó al asistente a incorporar avances, documentación e imágenes a GitHub para conservar el proyecto y evitar ZIP en cada entrega. Sustituye la restricción anterior que reservaba los commits y push al desarrollador. Se mantienen el historial, el alcance acordado y la aceptación paso a paso de nuevas decisiones de diseño.

La guía actual está en [local-workflow.md](local-workflow.md).

## Carga e integración

La carga web contenía 93 archivos dentro de programation-world-capas-a-v01/. En la raíz permanecían el README inicial y este registro. Las reglas de Git y las plantillas citadas por la documentación no estaban presentes.

Se integran art/, tools/, docs/, README.md y CONTRIBUTING.md en la raíz. Los 36 archivos binarios de la carga se reutilizan mediante sus mismos objetos Git; las imágenes y el video conservan sus bytes. El README inicial permanece recuperable en el historial.

Se añaden reglas de Git y plantillas nuevas, documentando que no se recuperaron sus bytes del ZIP. También se incorpora un verificador de integridad y automatización para los controles del avatar. Los dos generadores Python pasan a declarar UTF-8 explícitamente para su uso en Windows.

## Referencia del paquete anterior

Los siguientes datos se comprobaron en el entorno local anterior, antes de la carga web:

- Archivo: programation-world-capas-a-v01.zip.
- Archivos: 97.
- Tamaño: 22 234 464 bytes.
- SHA-256: `e2c4e5720db4750b2216ab16a262dbf3648c4480ea88a9fb6113de7c4e3f57b7`.

Esta revisión usa los archivos publicados en GitHub; no repite la lectura del ZIP, porque el entorno local continúa inactivo. El inventario remoto y la reutilización de objetos Git permiten comprobar la integración sin volver a descargar los binarios.

## Estado del producto

| Entregable | Estado |
| --- | --- |
| Dirección de arte, campus, reposo v04 y marcha v01 | Aprobados visualmente. |
| Abrigo verde, azul y terracota | Aprobados visualmente. |
| Original, A y B | Conceptos aprobados. |
| Composición nativa de A | Cabeza y cabello separados; pendiente de revisión visual y navegador real. |
| Verificaciones de esta revisión | Sintaxis, snapshots, 120 composiciones y controlador comprobados en V8. |
| Controles completos en Node y Python | Superados en Linux y Windows; [ejecución 39492489517](https://github.com/nagiseishiro123456-creator/programation-world/actions/runs/39492489517). |
| Capas nativas de B | Pendientes. |
| Cliente Phaser, mapa, formación, cuentas, servidor y chat | Pendientes de implementación. |

Ver [auditoría](../qa/github-import-review-v01.md) y [resultado de la revisión](../qa/github-import-checks-v01.json). Los registros de QA anteriores conservan su contexto; no se presentan como ejecuciones nuevas.

## Próximo paso

Revisar A a tamaño nativo y en marcha. Registrar navegador, resolución, controles y aceptación o ajustes concretos. Después se producirán B y el selector con guardado de cabello. Sprint 0 permanece abierto.

La licencia del proyecto y la procedencia detallada de las referencias iniciales mantienen sus pendientes documentados.
