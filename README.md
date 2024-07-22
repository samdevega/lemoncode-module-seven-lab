# Módulo 7 Cloud

1. Desplegar en Github Pages de forma manual.
2. Automatizar el despliegue en Github Pages usando Github Actions.

## Opcional

- Desplegar la página en un dyno gratuito de Heroku, usando despliegue por git.
- Desplegar automáticamente usando Docker en Heroku.

## Información del proyecto

**Iniciar el servidor de desarrollo local:**

```bash
npm run dev
```

Abrir [http://localhost:5173](http://localhost:5173) con el navegador para ver el resultado.

**Proyecto desplegado en Github Pages:**

[https://samdevega.github.io/lemoncode-module-seven-lab/](https://samdevega.github.io/lemoncode-module-seven-lab/)

## Ejecutando la aplicación en modo producción con Docker

1. Crear la imagen de docker
```
docker build . -t mk-moves
```
2. Crear y ejecutar un contenedor
```
docker run --rm -it -p 127.0.0.1:80:8081 mk-moves
```
Abrir [http://localhost](http://localhost) con el navegador para ver el resultado.
