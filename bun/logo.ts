// import { Bun } from '@bun/runtime';
// import path from 'path';

// interface NavItem {
//   title: string;
//   logo?: string;
//   href?: string;
//   description?: string;
//   github_repo?: string;
//   website_url?: string;
// }

// const mainNav: NavItem[] = [
//         {
//           title: "Documentation",
//           href: "/docs",
//           description: "Not Provided(coming soon)",
//           website_url: "https://dx-emon-sumon-shohan.vercel.app/",
//           github_repo: "https://github.com/beingofexistence",
//         },
//         {
//           title: "Components",
//           href: "/docs/ui/accordion",
//           description: "Not Provided(coming soon)",
//           website_url: "https://dx-emon-sumon-shohan.vercel.app/",
//           github_repo: "https://github.com/beingofexistence",
//         },
//         {
//           title: "Examples",
//           href: "/examples",
//           description: "Not Provided(coming soon)",
//           website_url: "https://dx-emon-sumon-shohan.vercel.app/",
//           github_repo: "https://github.com/beingofexistence",
//         },
//         {
//           title: "Figma",
//           href: "/docs/figma",
//           description: "Not Provided(coming soon)",
//           website_url: "https://dx-emon-sumon-shohan.vercel.app/",
//           github_repo: "https://github.com/beingofexistence",
//         },
//         {
//           title: "GitHub",
//           href: "https://github.com/beingofexistence/dx",
//           description: "Not Provided(coming soon)",
//           website_url: "https://dx-emon-sumon-shohan.vercel.app/",
//           github_repo: "https://github.com/beingofexistence",
//           external: true,
//         },
//         {
//           title: "Twitter",
//           href: "https://twitter.com/beingofexistence",
//           external: true,
//           description: "Not Provided(coming soon)",
//           website_url: "https://dx-emon-sumon-shohan.vercel.app/",
//           github_repo: "https://github.com/beingofexistence",
//         },
// ];

// const download = async (url: string, filePath: string): Promise<void> => {
//   const dir = path.dirname(filePath);
//   const dirFile = Bun.file(dir);
//   if (!dirFile.exists()) {
//     await dirFile.mkdir({ recursive: true });
//   }
//   const response = await Bun.fetch(url);
//   await Bun.write(filePath, response);
// };

// mainNav.forEach((item) => {
//   if (item.logo) {
//     const filePath = `${item.title.replace(/\s/g, '').toLowerCase()}.jpg`;
//     download(item.logo, filePath)
//       .then(() => console.log(`${item.title} logo is downloadeded!!!`))
//       .catch(console.error);
//   }
});
