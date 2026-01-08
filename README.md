# TechCart - E-Commerce Platform

A modern, responsive e-commerce platform for tech products built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- Modern, responsive UI with Tailwind CSS and shadcn/ui components
- Product catalog with search and filtering
- Shopping cart functionality
- Wishlist management
- User authentication (optional - requires Supabase)
- Newsletter subscription

## 🛠️ Technologies

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library
- **React Router** - Routing
- **React Query** - Data fetching and state management
- **Supabase** - Backend (optional)

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm (or bun)

### Setup

```bash
# Clone the repository
git clone https://github.com/adarshalexbalmuchu/TechCart.git

# Navigate to project directory
cd TechCart

# Install dependencies
npm install
# or
bun install

# Start development server
npm run dev
# or
bun run dev
```

The application will be available at `http://localhost:8080`

## 🏗️ Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### GitHub Pages

This project is configured for GitHub Pages deployment.

1. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

2. **Automatic Deployment:**
   - Push to the `main` branch
   - GitHub Actions will automatically build and deploy

### Manual Deployment

```bash
npm run build
# Deploy the contents of the 'dist' folder to your hosting provider
```

## ⚙️ Configuration

### Environment Variables (Optional)

If you want to use Supabase authentication features, create a `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_key
```

**Note:** The app works without Supabase - authentication features will simply be disabled.

## 📁 Project Structure

```
TechCart/
├── src/
│   ├── components/      # React components
│   ├── contexts/        # React contexts (Auth)
│   ├── hooks/          # Custom hooks
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   └── integrations/   # Third-party integrations
├── public/             # Static assets
└── supabase/          # Supabase migrations (optional)
```

## 🎨 Customization

### Styling
- Modify `tailwind.config.ts` for theme customization
- Edit component styles in `src/components/`

### Content
- Update product data in components
- Modify branding in `Header.tsx` and `Footer.tsx`

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Adarsh Alex Balmuchu**
- GitHub: [@adarshalexbalmuchu](https://github.com/adarshalexbalmuchu)

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
