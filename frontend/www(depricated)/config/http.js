const corsProxy = 'https://cors-anywhere.herokuapp.com/'; // Replace with the CORS proxy URL
const targetUrl = 'https://example.com'; // Replace with the target URL

const requestUrl = corsProxy + targetUrl;

fetch(requestUrl)
  .then(response => response.text())
  .then(html => {
    console.log(html);
  })
  .catch(error => {
    console.error('Error fetching the page:', error);
  });
