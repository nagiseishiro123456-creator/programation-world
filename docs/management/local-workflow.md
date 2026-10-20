# Trabajo local y sincronización con GitHub

- Versión: 0.7.
- Actualización: 2026-10-20.
- Etapa: Sprint 0, preproducción.
- Repositorio: https://github.com/nagiseishiro123456-creator/programation-world.

## Decisión vigente

GitHub conserva el proyecto y su historial. El Product Owner autorizó al asistente a incorporar los avances acordados para evitar entregas repetidas mediante ZIP. Esta decisión sustituye la restricción anterior que reservaba todos los commits y push al desarrollador.

La aprobación del alcance y del aspecto visual sigue correspondiendo al Product Owner. No se asumen nuevas mecánicas, instituciones, tecnologías pendientes ni fechas de lanzamiento.

## Obtener una copia local

Con Git instalado, elegir una carpeta de trabajo en la computadora. Por ejemplo, en PowerShell:

```powershell
cd "C:\Proyectos"
git clone https://github.com/nagiseishiro123456-creator/programation-world.git
cd programation-world
git status --short
```

C:\Proyectos es una ubicación sugerida; no se afirma que exista. Si ya hay una copia con cambios locales, revisar su estado antes de sincronizarla. No reiniciar Git ni sobrescribir trabajo sin guardar.

README.md, docs/, art/, tools/ y .github/ quedan directamente en la raíz del repositorio. La carpeta de entrega programation-world-capas-a-v01 se retiró al normalizar la carga.

## Antes de una tarea

En una copia sin cambios pendientes:

```powershell
git switch main
git pull --ff-only origin main
git switch -c tarea/descripcion-breve
```

Definir el objetivo y aceptación. Mantener el backlog del Charter y la documentación afectada. La incorporación mediante ramas y pull requests facilita revisar el cambio antes de integrarlo.

## Comprobar y guardar

El [README](../../README.md) contiene los comandos actuales. Revisar los visores y los resultados de GitHub Actions según el cambio. Después:

```powershell
git status --short
git add RUTA_DEL_CAMBIO RUTA_DE_SU_DOCUMENTACION
git diff --cached
git commit -m "tipo: describir resultado concreto"
git push -u origin tarea/descripcion-breve
```

Sustituir las rutas y el nombre de rama por los de la tarea. La identidad y autenticación pertenecen a cada colaborador; no se guardan tokens en archivos del proyecto. No usar force push para resolver diferencias.

## Estado y siguiente paso

El campus, el reposo v04, la marcha v01, los tres colores y los conceptos original/A/B están aprobados visualmente. A tiene capas nativas y un laboratorio de comparación. La [revisión frontal v02](../design/avatar-front-review-v02.md) está preparada para comprobar el detalle solicitado; B permanece pendiente de producción.

Abrir [avatar-head-lab.html](../../tools/art-preview/avatar-head-lab.html) desde la copia local para revisar A, registrando navegador, versión, resolución y observaciones. La aprobación del concepto no sustituye la revisión de esta composición nativa.

Consultar el [registro de importación](importacion-inicial.md) y la [auditoría](../qa/github-import-review-v01.md). La migración a GitHub no cierra Sprint 0 ni implementa el mundo compartido.
