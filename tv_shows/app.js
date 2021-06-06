const form = document.querySelector("#form_s");
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("submitted");
    const Search_string = form.elements.q.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${Search_string}`)
    // console.log(res.data[0].show.image.medium);
    await imageMaker(res.data);
    // console.log(res.data);
    // const img = document.createElement('IMG');
    // img.src = res.data[0].show.image.medium;
    // document.body.append(img)
});

let imageMaker = (arr) => {
    count = 0
    for (let i of arr) {

        count += 1;
        try {

            const img = document.createElement('IMG');
            img.src = i.show.image.medium;
            document.body.append(img);
        } catch { 
            count -=1 ;
            console.log('image not found for:', i.show.name) }
        if (count === 9) {
            break;
        }
    }
}