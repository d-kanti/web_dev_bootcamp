const but = document.getElementById('cbi');
const liss = document.getElementById('jokes');


const getJoke = async () => {
    try{
        const header = {headers: { Accept : 'application/json'}};
        const res = await axios.get('https://icanhazdadjoke.com',header);
        return (res.data.joke);
    } catch {
        return "something went wrong, please try again please..."
    }


}


but.addEventListener('click',async ()=>{
    let joke = await getJoke();
    const newLI = document.createElement('LI');
    newLI.append(joke);
    jokes.append(newLI);
    let lis = document.querySelectorAll('li')
    lis[lis.length-1].style.padding = '10px';

}) 





