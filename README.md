# Kodigo Music (React + TS + Vite)

SPA inspirada en Spotify/Deezer/Apple Music. Incluye:
- **React Router** con 3 rutas (`/`, `/browse`, `/library`) + `/auth` con **react-hook-form**
- **Formulario validado** (email, password, términos)
- **Reproductor de audio** simple con estado global (Context)
- **Diseño responsive** moderno con **TailwindCSS**
- Código limpio, componentes reutilizables y tipados

## Requisitos
- Node 18+
- PNPM/NPM/Yarn

## Desarrollo
```bash
npm install
npm run dev
# abre http://localhost:5173
```

## Build
```bash
npm run build
npm run preview
```

## Despliegue (Vercel)
1. Sube el repo a GitHub.
2. Entra a https://vercel.com/new, importa el repo y acepta la configuración de Vite.
3. Vercel detectará `npm run build` y publicará tu SPA.

## Despliegue (Netlify)
1. Sube el repo a GitHub.
2. Entra a https://app.netlify.com/start, importa el repo.
3. Setea Build Command: `npm run build` y Publish Directory: `dist/`.

## Puntos de la rúbrica
- **Diseño:** Tailwind + tarjetas, gradientes y responsividad.
- **Librerías:** `react-router-dom` y `react-hook-form` implementadas correctamente.
- **Calidad:** Tipos TS, componentes claros, hooks, Context.
- **Producción:** listo para Vercel/Netlify, carga rápida.

---
> Demo stack: Vite + React 18 + TS + Tailwind + react-router-dom + react-hook-form
