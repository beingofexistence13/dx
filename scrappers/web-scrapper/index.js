// import axios from 'axios';

// axios.get("https://api.unsplash.com/search/photos?page=1&query=cats&client_id=qe5fLlQ2pPL2yOe7TRhizSXadW3h_TWAnyPyzktLbBU")
// .then(res => {
//   const photos = res.data.results;
//   console.log(photos[0].urls.small)
// })
// .catch(err => {
//   console.error(err);
// });




// const Unsplash = require('unsplash-js').default;
// const fetch = require('node-fetch');
// global.fetch = fetch;

// const unsplash = createApi({ accessKey: "_AdFcnEst-tD7ACzxbMpUMzlFiXS4tpD7WQoAeRo8Bk" });

// unsplash.search.photos("dogs", 1, 10)
//   .then(res => res.json())
//   .then(json => {
//     const photos = json.results;
//     const randomIndex = Math.floor(Math.random() * photos.length);
//     const photo = photos[randomIndex];
//     console.log(photo.urls.regular);
//   });



//   const unsplash = createApi({ accessKey: 'MY_ACCESS_KEY' });

// // non-feed example
// unsplash.photos.get({ photoId: 'foo' }).then(result => {
//   if (result.errors) {
//     // handle error here
//     console.log('error occurred: ', result.errors[0]);
//   } else {
//     // handle success here
//     const photo = result.response;
//     console.log(photo);
//   }
// });

// // feed example
// unsplash.users.getPhotos({ username: 'foo' }).then(result => {
//   if (result.errors) {
//     // handle error here
//     console.log('error occurred: ', result.errors[0]);
//   } else {
//     const feed = result.response;

//     // extract total and results array from response
//     const { total, results } = feed;

//     // handle success here
//     console.log(`received ${results.length} photos out of ${total}`);
//     console.log('first photo: ', results[0]);
//   }
// })

// git clone generator
let frontend_frameworks = {
  "Angular": "https://github.com/angular/angular",
  "Astro": "https://github.com/withastro/astro",
  "Blitz.js": "https://github.com/blitz-js/blitz",
  "Brunch": "https://github.com/brunch/brunch",
  "Create-React-App": "https://github.com/facebook/create-react-app",
  "Docusaurus 2": "https://github.com/facebook/docusaurus",
  "Docusaurus": "https://github.com/facebook/docusaurus",
  "Dojo": "https://github.com/dojo/framework",
  "Eleventy": "https://github.com/11ty/eleventy",
  "Ember": "https://github.com/emberjs/ember.js",
  "Gatsby": "https://github.com/gatsbyjs/gatsby",
  "Gridsome": "https://github.com/gridsome/gridsome",
  "Hexo": "https://github.com/hexojs/hexo",
  "Hugo": "https://github.com/gohugoio/hugo",
  "Hydrogen 2": "https://github.com/Shopify/hydrogen",
  "Hydrogen": "https://github.com/hydrogen-music/hydrogen",
  "ionic-angular": "https://github.com/ionic-team/ionic-framework",
  "ionic-react": "https://github.com/ionic-team/ionic-framework",
  "jekyll": "https://github.com/jekyll/jekyll",
  "middleman": "https://github.com/middleman/middleman",
  "nextjs": "https://github.com/vercel/next.js",
  "nuxtjs": "https://github.com/nuxt/nuxt.js",
  "parcel": "https://github.com/parcel-bundler/parcel",
  "polymer": "https://github.com/Polymer/polymer",
  "preact": "https://github.com/preactjs/preact",
  "redwoodjs": "https://github.com/redwoodjs/redwood",
  "remix": "https://github.com/remix-run/remix",
  "saber": "https://github.com/saberland/saber",
  "sanity": "https://github.com/sanity-io/sanity",
  "sapper": "https://github.com/sveltejs/sapper",
  "scully": "https://github.com/scullyio/scully",
  "solidstart": "https://github.com/solidjs/solid-start",
  "stencil": "https://github.com/ionic-team/stencil",
  "storybook": "https://github.com/storybookjs/storybook",
  "svelte": "https://github.com/sveltejs/svelte",
  "sveltekit-1": "https://kit.svelte.dev",
  "sveltekit": "https://kit.svelte.dev",
  "umijs": "https://github.com/umijs/umi",
  "vite": "https://github.com/vitejs/vite",
  "vitepress": "https://vitepress.vuejs.org",
  "vue": "https://github.com/vuejs/vue-next",
  "vuepress": "https://vuepress.vuejs.org",
  "zola": "https://github.com/getzola/zola"
};

// Use a for loop to iterate over the JSON object
for (let key in frontend_frameworks) {
  if (frontend_frameworks.hasOwnProperty(key)) {
      console.log(
        `
        if git clone ${frontend_frameworks[key]} ${key.toLowerCase()} && cd ${key.toLowerCase()} && rm -rf .git && cd ..; then echo "${key.toUpperCase()} Clone Successfull!!!"
        else echo "Error, ${key.toUpperCase()} Github Repository Link Has Some Problems" && git status && echo "Trying, To Clone Next Repo"
        fi
        `);
  }
}