const but = document.getElementById('cbi');
const liss = document.getElementById('jokes');


const getJoke = async () => {
    const header = {headers: { Accept : 'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com',header);
    return (res.data.joke);


}


but.addEventListener('click',async ()=>{
    let joke = await getJoke();
    const newLI = document.createElement('LI');
    newLI.append(joke);
    jokes.append(newLI);
}) 





