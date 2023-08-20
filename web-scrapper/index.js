import axios from "axios";

// for (let i = 0; i < passport_titles.length; i++) {
//   axios
//   .get(passport_facebook)
//   .then((response) => { 
//     let url = `https://www.passportjs.org/packages/${passport_titles.title}`;
//     const html = response.data;
//     regex = html.match(/.url. href..https...github.com.\w+.\w+-\w+/g);

//     passport_github_repository = `{url:"${regex}"},`;
//   })
//   .catch((error) => {
//     console.error("Error fetching the page:", error)
//   })
//   console.log(passport_titles.);

// }
// for (let i = 0; i < passports.length; i++) {
//   axios
//   .get(`https://www.passportjs.org/packages/passport-${passports.title}`)
//   .then((response) => {
//     const html = response.data
//     matcher =
//       "From This Sentence I have to select this(Yes!!!,You Selected The Right Thing)"
//     preregex = html.match(/.url. href..https...github.com.\w+.\w+-\w+/g)

//     passport_github_repository = `git clone ${preregex}`;
//     console.log(passport_github_repository);
//   })
//   .catch((error) => {
//     console.error("Error fetching the page:", error)
//   })
// }

// passport_titles.map((passport_titles) => {
//   axios
//     .get(
//       `https://www.passportjs.org/packages/${passport_titles.title}`
//     )
//     .then((response) => {
//       const html = response.data
//       matcher =
//         "From This Sentence I have to select this(Yes!!!,You Selected The Right Thing)"
//       preregex = html.match(/.url. href..https...github.com.\w+.\w+-\w+/g)

//       passport_github_repository = `git clone ${preregex}`
//       console.log(passport_github_repository)
//     })
//     .catch((error) => {
//       console.error("Error fetching the page:", error)
//     })
// })
  // axios
  //   .get(
  //     `https://blockspot.io/wallet/`
  //   )
  //   .then((response) => {
  //     const html = response.data
  //   //   matcher =
  //   //     "From This Sentence I have to select this(Yes!!!,You Selected The Right Thing)"
  //   //   preregex = html.match(/.url. href..https...github.com.\w+.\w+-\w+/g)

  //   //   passport_github_repository = `git clone ${preregex}`
  //     console.log(html)
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching the page:", error)
  //   })

