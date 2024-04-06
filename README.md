# Ignite Shop
Project based on Rocketseat's Ignite studying program.
The goal is to make an app simulate a clothing store, and link it to Stripe so it can look like it's a real store.
You can add as many shirts in your cart and go into the checkout in the Stripe page.

## Technologies

- React
- TailwindCSS
- Axios
- Stripe API
- Lucide Icons
- Keen Slider

## Main Goals

- Practice useContext and useReducer hooks.
- Improve Next.js overall knowledge, with concepts of Static pages and Server Side Rendering.
- Create and link products to the Stripe interface through its API.

## Setup

1. After cloning or downloading the project, use the commands below in the terminal.

```bash
  cd my-project
  npm install my-project
  npm run dev
```

2. Create an account and register products in Stripe website.

3. Configure your environment variables (.env.local) according to your stripe account.

```bash
NEXT_URL=http://localhost:3000
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=
NEXT_PUBLIC_STRIPE_SECRET_KEY=
```

## Author

- [@kunzeleric](https://www.github.com/kunzeleric)
