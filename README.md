# Ashutosh Portfolio

[cloudflarebutton]

A modern, responsive portfolio website built with React, Tailwind CSS, and shadcn/ui. Powered by Cloudflare Pages for the frontend and Cloudflare Workers for the API backend. Features a sleek design with dark/light theme support, sidebar navigation, and production-ready architecture.

## ✨ Key Features

- **Modern UI/UX**: Built with shadcn/ui components, Tailwind CSS, and custom animations for a polished experience.
- **Theme Support**: Automatic dark/light mode with persistence.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **API Ready**: Hono-based backend routes in `/worker/userRoutes.ts` for custom APIs.
- **State Management**: TanStack Query for data fetching, Zustand/Immer for global state.
- **Performance Optimized**: Vite bundling, lazy loading, and Cloudflare's edge network.
- **Developer Experience**: TypeScript, ESLint, hot reload, and easy deployment.
- **Sidebar Layout**: Collapsible sidebar with search and navigation (customizable in `AppSidebar.tsx`).

## 🛠️ Tech Stack

### Frontend
- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** + **shadcn/ui** + **Headless UI** + **Radix UI**
- **Lucide React** (icons), **Framer Motion** (animations), **Sonner** (toasts)
- **React Router**, **TanStack Query**, **Zustand**

### Backend
- **Cloudflare Workers** + **Hono** (routing)
- **CORS** + **Logging** + **Error Handling**

### Tools
- **Bun** (package manager/scripts)
- **Wrangler** (Cloudflare deployment)
- **ESLint** + **TypeScript**

## 🚀 Quick Start

1. **Prerequisites**:
   - Install [Bun](https://bun.sh/)
   - Install [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/installation/)
   - Cloudflare account (free tier works)

2. **Clone & Install**:
   ```bash
   git clone <your-repo-url>
   cd ashutosh-portfolio-mqbqhwqoe1c5qursqbxa6
   bun install
   ```

3. **Development Server**:
   ```bash
   bun run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or your configured port).

4. **Build for Production**:
   ```bash
   bun run build
   ```

## 💻 Development

- **Add UI Components**: Use shadcn CLI (`npx shadcn@latest add <component>`) or edit existing ones in `src/components/ui/`.
- **Custom API Routes**: Edit `worker/userRoutes.ts` and add routes via `userRoutes(app)`. Example:
  ```ts
  app.get('/api/test', (c) => c.json({ success: true }));
  ```
- **Theme Toggle**: Ready-to-use in `ThemeToggle.tsx`.
- **Sidebar**: Customize `AppSidebar.tsx` and wrap pages in `AppLayout.tsx`.
- **Linting**: `bun run lint`
- **Type Generation**: `bun run cf-typegen` (for Worker types)
- **Preview Build**: `bun run preview`

Update `src/pages/HomePage.tsx` to build your portfolio content. Wrap in `AppLayout` for sidebar:
```tsx
import { AppLayout } from '@/components/layout/AppLayout';
// In your page:
<AppLayout>
  {/* Your content */}
</AppLayout>
```

## ☁️ Deployment

Deploy to Cloudflare Pages + Workers with one command:

```bash
bun run deploy
```

This builds the frontend assets and deploys via Wrangler. Your site will be live on `*.pages.dev` with automatic HTTPS, CDN, and edge functions.

Configure custom domain in Cloudflare Dashboard > Pages > Your Project > Custom Domains.

[cloudflarebutton]

**Pro Tip**: Bind KV/DO/R2 in `wrangler.jsonc` and access via `env` in Worker routes.

## 📁 Project Structure

```
├── src/              # React app (pages, components, hooks, lib)
├── worker/           # Cloudflare Workers backend
├── public/           # Static assets
├── tailwind.config.js # Styling config
├── vite.config.ts    # Vite bundler
└── wrangler.jsonc    # Cloudflare config
```

## 🤝 Contributing

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/amazing-feature`).
3. Commit changes (`git commit -m 'Add amazing feature'`).
4. Push & open PR.

Report issues via GitHub Issues.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙌 Support

Built with ❤️ on Cloudflare. Questions? Open an issue or reach out.

---

*Last updated: April 2025*