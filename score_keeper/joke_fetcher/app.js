const but = document.getElementById('cbi');
const liss = document.getElementById('jokes');


const getJoke = async () => {
    const header = {headers: { Accept : 'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com',header);
    console.log(res.data.joke);
}


but.addEventListener('click',()=>{
    alert('hi');
})





