const axios = require('axios');

const url = 'https://www.passportjs.org/'; // Replace with the URL of the website you want to scrape

axios.get(url)
  .then(response => {
    const html = response.data; // HTML content of the page
    // Now you can parse and extract data from the HTML
    console.log(html);
  })
  .catch(error => {
    console.error('Error fetching the page:', error);
  });

