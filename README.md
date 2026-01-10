# transformed-website-new

> **Warning: Remember, when linking files to the `public` folder, remeber _not_ to include `public` in the link. So if you were to link to `public/brand/facebook/facebook.svg`, remember to instead write, `/brand/facebook/facebook.svg`.**

This is the GitHub repo for the Transformation Place website.

## Getting Started

You can edit the pages by going into the `page.tsx` files in the app router (`src/app/`).<br/>
For example to edit the about page you would edit `src/app/about/page.tsx`.

Then you can run the development server to see your changes.
To run the dev server, use any of the following commands in your terminal depending on your package manager:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies Used

This website utilises Next.js 16 with Tailwind CSS version 4, using framer-motion for more animations and Headless UI to help with components.

## Learn More

To learn more about these technologies, visit the websites below:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS and how to use it.
- [Simple Icons](https://simpleicons.org/) - All of the brand icons needed.  Make sure to copy the svg code and use it as a component in `src/app/components/icons`.
- [motion.dev](https://motion.dev/docs/react) - This is the docs section for react-spring, to learn how to use it.
- [Headless UI Documentation](https://headlessui.com/react/menu) - This is the docs section for Headless UI, to create the components needed.
