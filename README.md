# Human web (legal + landing)

Sitio público de **Human** para Google Play y App Store:

| Ruta | Uso |
|------|-----|
| `/` | Landing con capturas, features y FAQ |
| `/about` | Quiénes somos |
| `/privacy` | Política de privacidad (URL para las stores) |
| `/terms` | Términos y condiciones |
| `/delete-account` | Cómo solicitar eliminación de cuenta |
| `/contact` | Contacto |

Stack: Next.js (App Router) + TypeScript + Tailwind v4. Sin backend.

## Requisitos

- Node.js 20+
- Cuenta en [Vercel](https://vercel.com) para el deploy

## Desarrollo local

```bash
cd human-web
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Cambiar el email de contacto

El contacto actual es `appfit02@gmail.com`.

Editá un solo archivo:

[`src/lib/site.ts`](src/lib/site.ts)

```ts
export const CONTACT_EMAIL = "appfit02@gmail.com";
```

Ese valor se usa en privacidad, términos, eliminar cuenta, contacto, FAQ y el footer.

## Deploy en Vercel

1. Creá un repo en GitHub/GitLab con el contenido de esta carpeta (`human-web`).
2. En Vercel: **Add New Project** → Importá el repo.
3. Framework preset: **Next.js** (autodetectado). Build: `next build`.
4. Deploy. Anotá la URL, por ejemplo:
   - `https://human-web.vercel.app`
   - `https://human-web.vercel.app/privacy`
   - `https://human-web.vercel.app/delete-account`

### URLs para las stores

Cuando publiques:

- **Google Play / App Store – Privacy policy:** `https://TU-DOMINIO.vercel.app/privacy`
- **Account deletion (Apple):** `https://TU-DOMINIO.vercel.app/delete-account`

Más adelante, con dominio propio (ej. `humanapp.com`), configurá el dominio en Vercel y actualizá las mismas URLs en las consolas.

## Checklist post-deploy

- [ ] `/privacy` abre sin login
- [ ] `/delete-account` abre sin login
- [ ] El email de contacto es el que querés mostrar
- [ ] Pegaste la URL de privacidad en Play Console y App Store Connect

## Nota legal

Los textos son operativos para cumplir requisitos de las tiendas y reflejar el uso real de Firebase en Human. No sustituyen asesoramiento legal profesional.
