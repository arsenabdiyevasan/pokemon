const data=`https://pokeapi.co/api/v2`
const getData=(url,num,cb)=>{
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `${url}${num}`);
    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.response);
        cb(response)
    });

    xhr.send();
}
const test=document.querySelector('.test')

getData(`${data}/pokemon`,'?offset=0&limit=24',res=>{
    res.results.forEach(item => {
        pokemons(item.url)
    });
})
const pokemons=(url)=>{
    
    getData(url,'',res=>{
        
        return test.innerHTML+=`
        <div class="card">
        <h3 class="cHed">${res.name}</h3>
        <div class="Cbody"><img src="${res.sprites.other.dream_world.front_default}" alt=""></div>.
        <div class="cFooter">
            <div class="stats">
                <p>hp:${res.stats[0].base_stat}</p>
                <p>attack:${res.stats[1].base_stat}</p>
            </div>
            <div class="typse">
                <p class="tp ${res.types[0].type.name}">${res.types[0].type.name}</p>
                <p class="tp  ${res.types[1].type.name?null:res.types[1].type.name}"> ${res.types[1].type.name ?  null:res.types[1].type.name}</р>
            </div>
        </div>
        <button class="btn">more</button>
    </div>`;
    }) 
        
}
