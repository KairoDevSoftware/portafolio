# David Vega · Portafolio

Portafolio personal de David Vega, desarrollador Full Stack (Java · Spring Boot · React) en Lima, Perú.

Publicado en Cloudflare Pages: https://davidvega.pages.dev

- Bilingüe: español e inglés (botón ES / EN; recuerda el idioma elegido).
- Fondo claro u oscuro (botón en la barra de abajo).
- Animaciones suaves con Framer Motion.
- Sitio estático hecho con Next.js (carpeta `out/`).

## Cambiar textos

Todo el contenido (proyectos, experiencia, formación y contacto) está en `src/data/resume.tsx`, en español (`es`) e inglés (`en`). El diseño no se toca.

## Ver en local

```bash
npm install
npm run dev
# abrir http://localhost:3000
```

## Publicar

Se publica en Cloudflare Pages. Pasos completos la primera vez: [PUBLICAR.md](PUBLICAR.md).
Después, cada `git push` a la rama `main` publica el sitio solo.
Para revisar la versión final en tu computadora: `npm run build` y abrir la carpeta `out/` con un servidor estático.

## Créditos

Basado en la plantilla [Portfolio de Magic UI](https://github.com/magicuidesign/portfolio) de Dillion Verma, con licencia MIT (ver `LICENSE`).
Íconos de tecnologías: [Devicon](https://devicon.dev) (MIT).
