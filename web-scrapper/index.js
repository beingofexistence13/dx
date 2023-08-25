const Unsplash = require('unsplash-js').default;
const fetch = require('node-fetch');
global.fetch = fetch;

const unsplash = new Unsplash({ accessKey: "_AdFcnEst-tD7ACzxbMpUMzlFiXS4tpD7WQoAeRo8Bk" });

unsplash.search.photos("dogs", 1, 10)
  .then(res => res.json())
  .then(json => {
    const photos = json.results;
    const randomIndex = Math.floor(Math.random() * photos.length);
    const photo = photos[randomIndex];
    console.log(photo.urls.regular);
  });
c