# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Frontend Setup
1. Navigate to the Frontend directory:
```bash
cd Frontend
```

2. Install Node.js dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```
The application will start running on `http://localhost:5173` (or another port if 5173 is occupied)

### Frontend Tech Stack
- React 18
- Vite
- React Router DOM (for routing)
- Tailwind CSS (for styling)

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

### System Requirements
- Node.js 18.x or higher
- npm 9.x or higher

### Notes
- The frontend is built using Vite for faster development and better performance
- Tailwind CSS is used for styling - make sure to check tailwind.config.js for any customizations
- The project uses ESLint for code quality - check eslint.config.js for rules
- Three.js and React Three Fiber are used for 3D graphics in the Scene component
