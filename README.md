# Nexus Ecommerce 🚀

Nexus Ecommerce is a modern, high-performance web application designed to provide a seamless online shopping experience. Built with React, TypeScript, and Vite, it leverages the FakeStoreAPI to showcase a wide range of products across various categories with a focus on speed and user experience.

## 🎯 Objectives
- Provide a clean and intuitive interface for browsing products.
- Implement a functional shopping cart and favorites system.
- Ensure a responsive design that works flawlessly across all devices.
- Demonstrate modern React patterns using `react-router` and `framer-motion` for smooth transitions.

## ✨ Features
- **Product Catalog**: Browse a wide variety of products fetched from an external API.
- **Category Filtering**: Easily find products by their respective categories.
- **Product Details**: Detailed view for each product including description, price, and category.
- **Shopping Cart**: Add, remove, and manage items in your cart.
- **Favorites System**: Save products you love for later.
- **Authentication**: Secure user access integrated with Clerk.
- **Responsive UI**: Optimized for mobile, tablet, and desktop views.
- **Smooth Animations**: Enhanced user experience with `framer-motion`.

## 🎨 Figma Prototype
You can find the basic wireframe and prototype for this application at the following link:
[Link to Figma Prototype](https://www.figma.com/...) *(Please replace with your actual link)*

## 🛠️ Technologies Used
- **Frontend Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router 7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Authentication**: [Clerk](https://clerk.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Notifications**: [Sonner](https://sonner.steventey.com/)
- **API**: [FakeStoreAPI](https://fakestoreapi.com/)

## ⚙️ Installation Instructions

To get a local copy up and running, follow these simple steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ignacio200625/NexusEcommerce.git
   cd NexusEcommerce
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file in the root directory and add your Clerk publishable key:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key_here
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📖 Usage Guide
- **Home**: Discover trending products and top categories.
- **Products**: View all available items or filter them by category.
- **Search/Filter**: Use the navigation to find specific types of products.
- **Cart**: Add items to your cart and manage quantities before "checkout".
- **Account**: Sign in/up using the Clerk integration to manage your profile.

## 🔌 API Documentation
The application uses the **FakeStoreAPI** for all product data:
- **Base URL**: `https://fakestoreapi.com`
- **Endpoints used**:
  - `GET /products`: Fetches all products.
  - `GET /products/:id`: Fetches a single product details.
  - `GET /products/categories`: Fetches all category names.

## 📝 Implementation Notes

### Components
- **Navbar**: Main navigation with search and user controls.
- **Hero**: Engaging landing section for the homepage.
- **CardProduct**: Individual product display used in catalogs.
- **Cart/Favorites**: Specialized components for managing lists.

### Routes
- `/`: Home Page.
- `/Categories`: Category browsing page.
- `/Products`: Full product catalog.
- `/Products/:id`: Product details view.
- `/cart`: Shopping cart summary.
- `/Favorites`: User's wishlist.

### Layouts
- **RootLayout**: The main wrapper providing the Navbar and Footer across all pages.

## 🌐 Deployed Application
The live version of the project is available here:
[Link to Live Application](https://nexus-ecommerce.vercel.app/...) *(Please replace with your actual link)*

---
Developed by Ignacio - 2026.
