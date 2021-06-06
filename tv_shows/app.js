const form = document.querySelector("#form_s");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("submitted");
    console.log("submitted value is:",form.elements.q.value);
});