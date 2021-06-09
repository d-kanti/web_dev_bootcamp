const form = document.querySelector("#form_s");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("submitted");
  const Search_string = form.elements.q.value;
  const config = { params: { q: Search_string }, headers: {} };
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
  imageMaker(res.data);
  form.elements.q.value = "";
});

let imageMaker = (arr) => {
  for (let i of arr) {
    try {
      const img = document.createElement("IMG");
      img.src = i.show.image.medium;
      document.body.append(img);
    } catch {
      console.log("image not found for:", i.show.name);
    }
  }
};
