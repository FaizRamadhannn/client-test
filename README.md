# Astro Business Template

`MASTER TEMPLATE V1 = READY`

This repository is a reusable static Astro landing-page template for Indonesian small businesses. Client-specific content belongs in `src/data/business.ts` and must come from verified Business JSON. Review the validation record in [docs/master-template-validation.md](docs/master-template-validation.md).

Before deploying a client site, replace the placeholder business data and configure the production site URL in `astro.config.mjs` and `public/robots.txt`.

## Documentation

- [Gemini Business Research Prompt](docs/gemini-business-research-prompt.md)
- [AI Customization Prompt](docs/ai-customization-prompt.md)
- [AI Code Review Prompt](docs/ai-code-review-prompt.md)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
# client-test
