# Proyak · PMO Ligera

Herramienta de gestión de proyectos pensada para equipos de implantación de software (ERP, ITSM, BPM y similares). Sin instalación, sin licencias, funciona desde el navegador.

**[→ Abrir app](https://jcarricoba.github.io/proyak)**

---

## Qué hace

- **Portfolio de proyectos** con estado semáforo, progreso, jornadas estimadas/consumidas e indicadores económicos.
- **Pipeline de preventa** para seguir oportunidades desde el interés inicial hasta la conversión en proyecto.
- **Histórico** de proyectos cerrados con KPIs de desviación y lecciones aprendidas centralizadas y filtrables.
- **Ficha de proyecto** con pestañas para stakeholders, contexto, documentos, riesgos y comentarios.
- **Gestión de riesgos** por proyecto: probabilidad, impacto, acción prevista y estado (abierto/cerrado). Los riesgos abiertos se muestran como indicador en la fila del portfolio.
- **Comentarios** por proyecto, editables y borrables, visibles como icono de bocadillo junto al nombre.
- **Presupuesto** desglosado por líneas con cálculo de margen.
- **Sync en la nube** opcional via Firebase (login con Google). Los datos persisten en la cuenta entre dispositivos.

## Datos

- Sin backend ni base de datos propia.
- Por defecto los datos se guardan en `localStorage` del navegador.
- Con cuenta de Google activa se sincronizan en Firestore.

## Stack

HTML + JS vanilla. Sin frameworks, sin dependencias de build. Un único archivo `index.html`.

Firebase se usa exclusivamente para autenticación (Google) y almacenamiento de datos de usuario en Firestore.

## Desarrollo local

Basta con abrir `index.html` en el navegador. No hay proceso de build.

```bash
git clone https://github.com/jcarricoba/proyak.git
cd proyak
open index.html
```
