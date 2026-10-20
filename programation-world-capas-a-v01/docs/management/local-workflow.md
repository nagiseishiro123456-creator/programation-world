# Trabajo local, commits y primer push

- Fecha inicial: 2026-10-19. Actualización: 2026-10-20.
- Versión: 0.6.
- Decisión: comenzar en local y conectar GitHub más adelante.
- Etapa: Sprint 0, preproducción.
- Responsabilidad: el desarrollador ejecuta los commits y push; el asistente prepara archivos y documentación.

## 1. Dónde guardar el proyecto

Descargar el ZIP y extraer su contenido dentro de una carpeta llamada programation-world. En Windows se puede usar C:\Proyectos\programation-world; es una ubicación sugerida, no una ruta que ya se haya creado en la computadora del desarrollador.

Abrir esa carpeta completa en el editor. README.md, docs/ y art/ deben quedar directamente dentro de ella. El ZIP de entrega contiene los archivos del proyecto; el historial Git se iniciará en esa computadora.

## 2. Contenido existente

| Ruta | Contenido |
| --- | --- |
| README.md | Estado del proyecto e índice. |
| CONTRIBUTING.md | Forma de trabajo y documentación por tarea. |
| docs/00-project-charter.md | Visión, alcance, backlog inicial y Definition of Done. |
| docs/01-repository-structure.md | Organización prevista durante el desarrollo. |
| docs/design/reference-review.md | Análisis de las referencias y decisiones de uso. |
| docs/management/local-workflow.md | Esta guía. |
| art/references/README.md | Índice con enlaces a las imágenes. |
| art/references/manifest.json | Nombres originales, dimensiones y hashes. |
| art/references/originals/ | 17 imágenes de referencia. |
| .github/ | Plantillas para tareas y pull requests, preparadas para más adelante. |
| .gitignore y .gitattributes | Reglas iniciales para versionar archivos. |

El proyecto incluye herramientas de inspección, una pista de avatar y una primera prueba de color del abrigo. El cliente Phaser y el servidor siguen pendientes; no se han instalado dependencias del proyecto. Las carpetas apps/client/, apps/server/, packages/, content/zones/Z01/, assets/game/ y art/source/ se crearán cuando comience el trabajo correspondiente. art/exports/avatars/ ya contiene el primer atlas nativo y el catálogo provisional; tools/art-preview/ contiene las herramientas locales de inspección.

## 3. Primer commit local

Un commit guarda una versión en el historial local. Un push envía commits a un repositorio remoto. Se puede trabajar y hacer commits sin conectar GitHub.

En PowerShell, situarse en la carpeta elegida. Adaptar la ruta si se extrajo en otro lugar:

```powershell
cd "C:\Proyectos\programation-world"
git --version
git init -b main
git status --short
```

Git debe estar instalado para ejecutar estos comandos. Revisar que los documentos se abran y que el índice permita consultar las 17 imágenes. Después preparar y revisar el primer commit:

```powershell
git add .
git diff --cached --stat
git commit -m "docs: registrar base de preproduccion y referencias"
git status --short
```

Si Git solicita identidad, configurar el nombre y correo que el desarrollador desee asociar a sus commits y repetir el comando de commit. Sustituir los valores del ejemplo por los propios:

```powershell
git config --local user.name "TU_NOMBRE"
git config --local user.email "TU_CORREO_DE_GIT"
```

Esta guía no confirma que el primer commit ya se haya ejecutado en la computadora del desarrollador.

## 4. Cuándo guardar cada avance

Al completar una unidad de trabajo coherente y revisada, actualizar sus documentos y guardar un commit. Una tarea puede necesitar varios commits. Antes de comenzar la siguiente, registrar qué quedó hecho, cómo se comprobó y qué falta.

En cada cierre de tarea, el asistente señalará el resultado y propondrá un mensaje concreto de commit. Al terminar el sprint se documentarán revisión y retrospectiva.

## 5. Cuándo hacer el primer push

El primer push será una copia de la base revisada del proyecto cuando el Product Owner decida activar GitHub. Para ese momento deben existir el primer commit local, los documentos de Sprint 0, el inventario y las imágenes verificadas. No es necesario esperar a terminar el juego, una zona completa o todo el sprint.

Por ahora se trabaja en local. Cuando se active GitHub, se indicarán el repositorio de destino, su visibilidad y el commit que se va a subir. Para un repositorio remoto nuevo y vacío, los comandos serán los siguientes, sustituyendo la URL por la real:

```powershell
git remote add origin "URL_DEL_REPOSITORIO"
git push -u origin main
```

La URL y las credenciales se resolverán en ese momento. Si el repositorio remoto ya contiene archivos, se revisará su historial antes de indicar los comandos de integración.

## 6. Siguiente tarea

La dirección visual, la muestra del campus, el reposo v04 y la marcha v01 están aprobados visualmente. La aceptación de marcha del 2026-10-19 consta en docs/design/avatar-walk-review-v01.md; las pruebas funcionales de navegador siguen pendientes.

Los tres colores del abrigo fueron aprobados visualmente con «si me gustan avanzamos». El visor sigue en tools/art-preview/avatar-customization.html; sus comprobaciones funcionales de navegador permanecen pendientes. Original, A y B ya fueron aceptados como conceptos. Corresponde revisar la primera composición nativa de A en tools/art-preview/avatar-head-lab.html; su registro y pruebas están en docs/design/avatar-head-layers-a-v01.md. Después se producirán las capas de B.

La marcha aceptada ya puede guardarse en un commit local con el mensaje art: agregar primera marcha del avatar en cuatro direcciones, si aún no se ha guardado. Para esta unidad de trabajo, un mensaje que describe su contenido es feat: agregar primera prueba de cabeza y cabello A por capas. En ambos casos, revisar primero los archivos que se preparan para commit. El push sigue reservado para cuando se active GitHub; no se ha realizado ninguna de estas operaciones desde el asistente.
