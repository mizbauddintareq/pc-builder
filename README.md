## Live Link [https://pc-builder-frontend-tau.vercel.app/]

## Main Points for the PC Builder Website:

1. Next.js Implementation: Build the PC Builder website using Next.js, a React framework for server-side rendering and static site generation.

2. Navbar Setup: Create a clean and straightforward Navbar with a "PC Builder" button that redirects users to the PC Builder page. Include a "Categories" dropdown with routes for different PC component categories.

3. Home Page (SSG): Implement the home page with at least 6 random Featured Products, each displaying essential details like image, product name, category, price, stock status, and rating. Clicking on a product should take the user to the product detail page.

4. Featured Categories (SSG): Showcase 6 Featured Categories on the home page. Each category should be clickable and redirect the user to a separate page displaying at least 3 products from that category.

5. Product Detail Page (SSG): Create a detailed product page that shows essential information about each PC component, including image, product name, category, stock status, price, description, key features, individual rating, average rating, and reviews.

6. PC Builder Page (SSR): Design the PC Builder page using server-side rendering. Include category sections for CPU, motherboard, RAM, PSU, storage, and monitor. Each section should have a "Choose/Select" button, which leads to another page showing at least 3 components of the specific category.

7. Add To Builder Functionality: Enable the "Add To Builder" button on each component card in the category pages. Clicking this button should redirect the user to the PC Builder page, updating the state with the selected component below. Use Redux/Context API to manage the central store for this feature.

8. Complete Build Button: Implement a "Complete Build" button on the PC Builder page. This button should be disabled until the user adds at least 5-6 components (CPU, RAM, PSU, storage, motherboard, casing). Once enabled, the user can finalize their PC build.

9. Bonus: User Authentication (NextAuth): Make the PC Builder page a protected route, accessible only to logged-in users. Enable user authentication using at least one social login provider (Google/Github) with NextAuth.

10. Bonus: Responsive Design: Ensure the entire application is responsive for both mobile and desktop devices.
