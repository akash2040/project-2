const base_url = "https://api.jikan.moe/v4";

function searchAnime(event) {
  event.preventDefault();
  const form = new FormData(this);
  const query = form.get("search");

  fetch(`${base_url}/anime?q=${query}&limit=5`)
    .then((res) => res.json())
    .then((data) => {
      const list = data.data;
      list.map((item) => {
        const wer = item.title;
        const imag = item.images.jpg.image_url;
        console.log(wer);
        const animme = `<img src="${imag}"><h2>${wer}</h2>`;
        document.querySelector(".container").innerHTML += animme;
      });
      console.log(list);
    })

    .catch((err) => console.log(err.message));
}
// searchAnime();
// function updateDom(data) {
//   const searchResults = document.getElementById("search-results");

//   return;
// }

function pageLoaded() {
  const form = document.getElementById("search_form");
  form.addEventListener("submit", searchAnime);
}

window.addEventListener("load", pageLoaded);
