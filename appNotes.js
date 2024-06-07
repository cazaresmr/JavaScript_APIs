"use strict";

// Program State
const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "nWSj2vNkNh8IVk4jZKsslHHq52TH3DD2";

// Select the elements
let feedbackEle = document.querySelector("#feedback");
// if (!feedbackEle) {
//   feedbackEle = document.createElement("p");
//   feedbackEle.id = "feedback";
//   document.body.appendChild(feedbackEle);
// }
let searchInput = document.querySelector("#searchWord");
let searchBtn = document.querySelector("#submitSearch");
let gifEle = document.querySelector("#imageContainer > img");
// console.log(feedbackEle, searchInput, searchBtn, gifEle); // test that the elements are selected

// Event Handlers
// searchBtn.addEventListener("click", (event) => {
//   fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchInput.value}`)
//     // .then((res) => console.log(res))
//     .then((res) => res.json())
//     // .then((body) => console.log(body))
//     .then((body) => {
//       if (body.meta.status === 200) {
//         // show the git on the dom
//         gifEle.src = body.data.images.original.url;
//         searchInput.value = "";
//         feedbackEle.textContent = "";
//       } else {
//         feedbackEle.textContent = body.meta.msg;
//       }
//     })
//     .catch((err) => {
//       console.error(err); // show the error message on the dom
//       feedbackEle.textContent = err.message;
//     });
// });

searchBtn.addEventListener("click", (event) => {
  getGif(searchInput.value);
});

// function getGif(searchTerm) {
//   fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchTerm}`)
//     // .then((res) => console.log(res))
//     .then((res) => res.json())
//     // .then((body) => console.log(body))
//     .then((body) => {
//       if (body.meta.status === 200) {
//         // show the gif on the dom
//         gifEle.src = body.data.images.original.url;
//         searchInput.value = "";
//         feedbackEle.textContent = "";
//       } else {
//         feedbackEle.textContent = body.meta.msg;
//       }
//     })
//     .catch((err) => {
//       console.error(err); // show the error message on the dom
//       feedbackEle.textContent = err.message;
//     });
// }

async function getGif(searchTerm) {
  fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchTerm}`);
  try {
    let res = await fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchTerm}`);
    let body = await res.json();
    // show the gif on the dom
    if (body.meta.status === 200) {
      gifEle.src = body.data.images.original.url;
      searchInput.value = "";
      feedbackEle.textContent = "";
    } else {
      feedbackEle.textContent = body.meta.msg;
    }
  } catch (err) {
    console.error(err);
    // show the error message on the dom
    feedbackEle.textContent = err.message;
  }
}

// fetch(url, {
//     method: 'GET',
//     credentials: 'same-origin', // ensures cookies are sent only if they are first-party
//   })
//   .then((response) => response.json())
//   .then((data) => {
//     // Handle your data
//   })
//   .catch((error) => {
//     console.error("Error: ", error);
//     feedbackEle.textContent = "An error occurred. Please try again.";
//   });
