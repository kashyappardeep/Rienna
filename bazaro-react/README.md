# Bazaro React

This project is a React.js conversion of the Bazaro fashion eCommerce HTML template.

## Project structure

- `public/` contains the original `css`, `fonts`, `images`, and `js` template assets.
- `src/` contains React components that render the original template sections using raw HTML injection.
- `src/components/TemplateScripts.jsx` loads the original template JavaScript files in the correct order.

## Run locally

```bash
cd /Users/manishkumarjha/Downloads/bazaro-react
npm install
npm run dev
```

Then open the local URL reported by Vite, such as:

```bash
http://localhost:5174/
```

## Build for production

```bash
npm run build
```

## Notes

- The original Bazaro template styling is preserved using the CSS files under `public/css`.
- The rendered page uses `dangerouslySetInnerHTML` to preserve exact template markup while running inside React.
