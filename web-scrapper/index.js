import axios from 'axios';

const accessKey = "YOUR_ACCESS_KEY";
const query = "dogs";
const page = 1;
const perPage = 10;

axios.get("https://api.unsplash.com/search/photos?page=1&query=cats&client_id=qe5fLlQ2pPL2yOe7TRhizSXadW3h_TWAnyPyzktLbBU")
.then(res => {
  const photos = res.data.results;
  // const randomIndex = Math.floor(Math.random() * photos.length);
  // const photo = photos[randomIndex];
  // console.log(res.data.results.urls);
  // photos.forEach(element => {
  //   console.log(element.urls.small)
  // });
  console.log(photos[0].urls.small)

})
.catch(err => {
  console.error(err);
});




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