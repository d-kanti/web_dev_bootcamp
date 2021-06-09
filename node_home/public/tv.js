const form = document.querySelector("#form_s");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const Search_string = form.elements.q.value;
  console.log("submitted");
  const config = { params: { q: Search_string }, headers: {} };
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
  document.body.append(document.createElement("H1").textContent = Search_string);
  imageMaker(res.data);
  
  
  
  form.elements.q.value = "";
});

let imageMaker = (arr) => {
  

  document.body.append(document.createElement("BR"));
  document.body.append(document.createElement("HR"));
  document.body.append(document.createElement("BR"));

  for (let i of arr) {
    try {
      const img = document.createElement("IMG");
      img.src = i.show.image.medium;
      document.body.append(img);
    } catch {
      console.log("image not found for:", i.show.name);
    }
  }
  document.body.append(document.createElement("BR"));
};
