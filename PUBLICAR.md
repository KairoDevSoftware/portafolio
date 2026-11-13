# Cómo publicar el portafolio (GitHub + Cloudflare Pages)

El código vive en GitHub (cuenta **KairoDevSoftware**) y **Cloudflare Pages** lo publica. Cada vez que subes un cambio a GitHub, Cloudflare lo vuelve a publicar solo en 1 o 2 minutos.

## 1. Crear el repositorio en GitHub

1. Entra a https://github.com con la cuenta **KairoDevSoftware**.
2. Arriba a la derecha pulsa **+** → **New repository**.
3. Llena el formulario:
   - **Repository name:** `portafolio`
   - **Visibility:** **Private** (Cloudflare funciona igual y así no se ve la cuenta Kairo).
   - **No marques** "Add a README", ".gitignore" ni "license": el proyecto ya los tiene.
4. Pulsa **Create repository**.

## 2. Subir el código (desde esta carpeta)

```bash
git remote add origin https://github.com/KairoDevSoftware/portafolio.git
git push -u origin main
```

La primera vez se abre una ventana para iniciar sesión en GitHub: entra con **KairoDevSoftware**.

## 3. Conectar Cloudflare Pages

1. Entra a https://dash.cloudflare.com → **Workers & Pages** → **Create** → pestaña **Pages** → **Connect to Git**.
2. Autoriza GitHub con la cuenta **KairoDevSoftware** y elige el repositorio `portafolio`.
3. Configuración de compilación:
   - **Framework preset:** `Next.js (Static HTML Export)`
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Environment variables:** `NODE_VERSION` = `22`
4. Pulsa **Save and Deploy**. En 1 o 2 minutos te da la dirección `https://portafolio-xxx.pages.dev`.

## Después: cambiar algo

1. Edita `src/data/resume.tsx`.
2. Ejecuta `git add . && git commit -m "Actualizo textos" && git push`.
3. Cloudflare publica solo.

## Dominio propio (más adelante)

Si compras un dominio en Cloudflare Registrar, se conecta en **Pages → tu proyecto → Custom domains**.

## Notas

- La demo de FoodSave en Netlify ya no existe (daba 404 el 13/11/2026). Por eso la tarjeta enlaza a su código en GitHub.
- La plantilla es MIT. El archivo `LICENSE` (con el nombre de su autor) debe quedarse: es lo que pide la licencia.
