# transformed-website-new

>**Warning: Remember, when linking files to the `public` folder, remeber _not_ to include `public` in the link.**
>**So if you were to link to `public/brand/facebook/facebook.svg`, remember to instead write, `/brand/facebook/facebook.svg`.**

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

This website utilises Next.js 16 with Tailwind CSS version 4. It also uses Lucide Icons for small things like menus, and react-spring for more animations.

## Learn More

To learn more about these technologies, visit the websites below:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about Tailwind CSS and how to use it.
- [Lucide Icons](https://lucide.dev/icons) - All of the icons in the library.
- [Simple Icons](https://simpleicons.org/) - All of the icons need for brand icons, which are not supported in Lucide Icons. Make sure to copy the svg code and use it as a component in `src/app/components/icons`.
- [react-spring Docs](https://react-spring.dev/docs) - This is the docs section for react-spring, to learn how to use it.
- [react-spring Visualiser](https://react-spring-visualizer.com/) - This is a visualiser for react-spring, helpful for settings in your animation.
