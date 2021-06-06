const form = document.querySelector("#form_s");
form.addEventListener('submit',async (e)=>{
    e.preventDefault();
    console.log("submitted");
    const Search_string = form.elements.q.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${Search_string}`)
    console.log(res.data[0].show.image.medium);
    const img = document.createElement('IMG');
    img.src = res.data[0].show.image.medium;
    document.body.append(img)
} );