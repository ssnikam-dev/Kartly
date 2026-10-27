# 🛍️ Kartly

**A modern multi-role e-commerce platform: shop as a customer, sell and fulfil as a seller, and configure the whole marketplace as an admin.**

Kartly is a React single-page app with three experiences in one codebase: a polished storefront for shoppers, an operations console for sellers (inventory, orders, logistics), and an admin panel for marketplace-wide master data. It supports multiple countries and currencies, English/French localization, and light/dark mode.

---

## ✨ Features

### 🧑‍💻 Customer
- Sign up, sign in and manage your profile
- Browse a home page with a hero carousel and products grouped by category
- Product detail page with image gallery, specifications and quantity selector
- Add to cart, remove from cart and view your cart
- Currency-aware pricing based on the country you pick

### 🏪 Seller
- **Inventory:** products, suppliers, warehouses, stock updates, reorder requests, product costs and specifications, ABC analysis, invoices
- **Orders:** received requests, availability checks, order details, invoice generation, customer notifications
- **Logistics:** ongoing and processed shipments, QA inspection, order status changes, feedback and complaints
- **User management** for seller staff, with dashboards per module

### 🛡️ Admin
- Role, menu type, module and sub-module management
- Brand, country and currency masters
- Multi-level location masters (country → level 5)

### 🎨 Experience
- Modern indigo/pink design system with rounded cards, gradient buttons and soft shadows
- Responsive layout from phones to large desktops
- Dark mode toggle, toast notifications and loading states
- Role-based navigation driven by the logged-in user's access

---

## 🧰 Tech Stack

| Area | Tools |
|---|---|
| Framework | React 19, React Router 7, Create React App |
| UI | Bootstrap 5, Material UI, React-Bootstrap, Remix Icon, Font Awesome |
| State & data | Redux Toolkit, Axios |
| Tables & forms | react-data-table-component, react-select, react-tag-input, react-autosuggest |
| UX | react-toastify, SweetAlert2, Framer Motion |
| i18n | i18next, react-i18next (English, French) |
| DevOps | Docker, Nginx, Jenkins, AWS ECS task definition |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm
- A running Kartly backend API

### Install and run

```bash
git clone https://github.com/<your-username>/kartly.git
cd kartly
npm install --legacy-peer-deps
```

Create a `.env` file in the project root:

```env
REACT_APP_API_URL=http://localhost:8080
```

Start the dev server:

```bash
npm start
```

The app opens at `http://localhost:3000/ecommerce`.

### Production build

```bash
npm run build
```

### Docker

```bash
docker build --build-arg REACT_APP_API_URL=https://api.example.com -t kartly .
docker run -p 3000:3000 kartly
```

---

## 📁 Project Structure

```
src/
├── Components/
│   ├── ModuleAndSubmodule/
│   │   ├── Customer/     # storefront: home, cards, cart, product view, auth
│   │   ├── Seller/       # inventory, orders, logistics, user management
│   │   └── Admin/        # roles, brands, currencies, locations
│   ├── Routes/           # role-based route definitions
│   ├── Structure/        # app bar, drawer, footer, loader
│   ├── Session/          # session handling
│   └── utils/            # axios setup, constants, loader service
├── css/                  # styles, including theme.css (global design system)
├── features/             # auth provider
├── locales/              # en.json, fr.json
└── localization/         # i18n setup
```

---

## 🎨 Theming

Global design tokens (colors, radius, shadows, fonts) live in `src/css/theme.css` as CSS variables. Change `--brand-500`, `--brand-600` and `--accent` to re-brand the whole app.

---

## 🔐 Configuration

| Variable | Description |
|---|---|
| `REACT_APP_API_URL` | Base URL of the backend API |

Authentication uses a JWT stored in `localStorage` and sent as a Bearer token with API requests.

---

## 🗺️ Roadmap

- [ ] Checkout and payment flow
- [ ] Order history for customers
- [ ] Product search and filters
- [ ] Wishlist and reviews
- [ ] Unit and end-to-end tests

---

## 🤝 Contributing

Contributions are welcome. Fork the repo, create a feature branch, and open a pull request.

## 📄 License

Add your license here (for example MIT).
